/* =========================================================================
   app.js — Verso Blog: global behaviors shared by every page
   Handles: mobile nav, toasts, scroll-to-top, lazy images, animated
   counters, newsletter popup, reading progress bar, keyboard shortcuts,
   card actions (like / share / bookmark), and footer year.
   ========================================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initScrollTop();
    initLazyImages();
    initAnimatedCounters();
    initNewsletterPopup();
    initReadingProgress();
    initKeyboardShortcuts();
    initCardActions();
    initFooterYear();
    initSkeletons();
    initSmoothAnchors();
  });

  /* ---------------------------------------------------------------------
     Toast notifications — tiny queue-based system, no dependencies.
     --------------------------------------------------------------------- */
  function toast(message, type = "default") {
    let host = document.querySelector(".toast-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "toast-host";
      host.setAttribute("aria-live", "polite");
      document.body.appendChild(host);
    }
    const el = document.createElement("div");
    el.className = `toast toast--${type}`;
    el.textContent = message;
    host.appendChild(el);
    requestAnimationFrame(() => el.classList.add("is-visible"));
    setTimeout(() => {
      el.classList.remove("is-visible");
      setTimeout(() => el.remove(), 300);
    }, 2800);
  }
  window.VersoToast = toast; // exposed for other modules

  /* ---------------------------------------------------------------------
     Mobile menu + sticky header shrink
     --------------------------------------------------------------------- */
  function initMobileMenu() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    const header = document.querySelector(".site-header");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("no-scroll", isOpen);
      });
      // close menu when a link is tapped (mobile)
      menu.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          document.body.classList.remove("no-scroll");
        })
      );
    }
    if (header) {
      window.addEventListener(
        "scroll",
        throttle(() => {
          header.classList.toggle("is-scrolled", window.scrollY > 12);
        }, 100)
      );
    }
  }

  /* ---------------------------------------------------------------------
     Scroll-to-top button
     --------------------------------------------------------------------- */
  function initScrollTop() {
    const btn = document.querySelector(".scroll-top-btn");
    if (!btn) return;
    window.addEventListener(
      "scroll",
      throttle(() => {
        btn.classList.toggle("is-visible", window.scrollY > 500);
      }, 150)
    );
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------------
     Lazy image loading via IntersectionObserver (data-src -> src)
     --------------------------------------------------------------------- */
  function initLazyImages() {
    const images = document.querySelectorAll("img[data-src]");
    if (!images.length) return;
    if (!("IntersectionObserver" in window)) {
      images.forEach((img) => (img.src = img.dataset.src));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("is-loaded");
            obs.unobserve(img);
          }
        });
      },
      { rootMargin: "150px" }
    );
    images.forEach((img) => observer.observe(img));
  }
  // Re-run lazy loading after dynamic content is injected elsewhere.
  window.VersoLazyLoad = initLazyImages;

  /* ---------------------------------------------------------------------
     Animated counters — any element with [data-counter="1234"]
     --------------------------------------------------------------------- */
  function initAnimatedCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;
    const animate = (el) => {
      const target = parseInt(el.dataset.counter, 10) || 0;
      const duration = 1400;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
  }

  /* ---------------------------------------------------------------------
     Newsletter popup — shows once per session after a short delay
     --------------------------------------------------------------------- */
  function initNewsletterPopup() {
    const popup = document.querySelector(".newsletter-popup");
    if (!popup) return;
    const dismissed = sessionStorage.getItem("verso_popup_dismissed");
    const subscribed = localStorage.getItem("verso_subscribed");
    if (dismissed || subscribed) return;

    const timer = setTimeout(() => {
      popup.classList.add("is-visible");
      document.body.classList.add("no-scroll");
    }, 12000);

    popup.querySelectorAll("[data-close-popup]").forEach((btn) =>
      btn.addEventListener("click", () => {
        popup.classList.remove("is-visible");
        document.body.classList.remove("no-scroll");
        sessionStorage.setItem("verso_popup_dismissed", "1");
        clearTimeout(timer);
      })
    );

    const form = popup.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector("input[type='email']");
        if (input && input.checkValidity()) {
          localStorage.setItem("verso_subscribed", "1");
          popup.classList.remove("is-visible");
          document.body.classList.remove("no-scroll");
          toast("You're subscribed. Welcome aboard!", "success");
        } else {
          input.classList.add("is-invalid");
        }
      });
    }
  }

  /* ---------------------------------------------------------------------
     Reading progress bar (post.html) — fills as the article is read
     --------------------------------------------------------------------- */
  function initReadingProgress() {
    const bar = document.querySelector(".reading-progress__fill");
    const article = document.querySelector(".post-content");
    if (!bar || !article) return;
    window.addEventListener(
      "scroll",
      throttle(() => {
        const rect = article.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const pct = total > 0 ? (scrolled / total) * 100 : 0;
        bar.style.width = `${pct}%`;
      }, 50)
    );
  }

  /* ---------------------------------------------------------------------
     Keyboard shortcuts: "/" focuses search, "t" toggles theme, "Esc" closes
     --------------------------------------------------------------------- */
  function initKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      const typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;

      if (e.key === "/" && !typing) {
        e.preventDefault();
        const search = document.querySelector(".search-input");
        if (search) search.focus();
      }
      if ((e.key === "t" || e.key === "T") && !typing) {
        document.querySelector(".theme-toggle")?.click();
      }
      if (e.key === "Escape") {
        document.querySelector(".nav-menu")?.classList.remove("is-open");
        document.querySelector(".search-panel")?.classList.remove("is-open");
        const popup = document.querySelector(".newsletter-popup.is-visible");
        if (popup) {
          popup.classList.remove("is-visible");
          document.body.classList.remove("no-scroll");
        }
      }
    });
  }

  /* ---------------------------------------------------------------------
     Card actions: like / share / bookmark — event delegation so it works
     for cards rendered dynamically after this script runs.
     --------------------------------------------------------------------- */
  function initCardActions() {
    document.addEventListener("click", (e) => {
      const likeBtn = e.target.closest("[data-action='like']");
      const shareBtn = e.target.closest("[data-action='share']");
      const bookmarkBtn = e.target.closest("[data-action='bookmark']");
      const copyBtn = e.target.closest("[data-action='copy-link']");

      if (likeBtn) {
        const post = VERSO.posts.find((p) => p.id === Number(likeBtn.dataset.id));
        if (!post) return;
        const { liked, count } = VERSO.toggleLike(post);
        likeBtn.setAttribute("aria-pressed", String(liked));
        likeBtn.classList.toggle("is-active", liked);
        const countEl = likeBtn.querySelector(".like-count");
        if (countEl) countEl.textContent = count.toLocaleString();
        toast(liked ? "Added to your likes" : "Removed from your likes");
      }

      if (bookmarkBtn) {
        const id = Number(bookmarkBtn.dataset.id);
        const isSaved = VERSO.toggleBookmark(id);
        bookmarkBtn.setAttribute("aria-pressed", String(isSaved));
        bookmarkBtn.classList.toggle("is-active", isSaved);
        toast(isSaved ? "Saved to your bookmarks" : "Removed from bookmarks");
      }

      if (shareBtn) {
        const url = `${location.origin}${location.pathname.replace(/[^/]+$/, "")}post.html?slug=${shareBtn.dataset.slug}`;
        shareContent(shareBtn.dataset.title || document.title, url);
      }

      if (copyBtn) {
        copyToClipboard(location.href);
        toast("Link copied to clipboard", "success");
      }
    });
  }

  function shareContent(title, url) {
    if (navigator.share) {
      navigator.share({ title, url }).catch(() => {});
    } else {
      copyToClipboard(url);
      toast("Link copied — paste it anywhere to share", "success");
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* no-op */ }
    ta.remove();
  }

  /* ---------------------------------------------------------------------
     Skeleton loading — briefly show skeleton cards, then reveal real ones.
     Simulates a network fetch so the loading state is visible & tested.
     --------------------------------------------------------------------- */
  function initSkeletons() {
    document.querySelectorAll("[data-skeleton-target]").forEach((container) => {
      const skeletonCount = Number(container.dataset.skeletonCount || 6);
      const skeletons = document.createElement("div");
      skeletons.className = "card-grid skeleton-grid";
      skeletons.innerHTML = Array.from({ length: skeletonCount })
        .map(
          () => `
        <div class="card skeleton-card">
          <div class="skeleton skeleton--image"></div>
          <div class="skeleton skeleton--line" style="width:70%"></div>
          <div class="skeleton skeleton--line" style="width:95%"></div>
          <div class="skeleton skeleton--line" style="width:40%"></div>
        </div>`
        )
        .join("");
      container.after(skeletons);
      container.style.display = "none";
      setTimeout(() => {
        skeletons.remove();
        container.style.display = "";
        container.classList.add("is-revealed");
      }, 500);
    });
  }

  /* ---------------------------------------------------------------------
     Footer year + smooth-scroll for on-page anchors (e.g. table of contents)
     --------------------------------------------------------------------- */
  function initFooterYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href").slice(1);
        const target = id && document.getElementById(id);
        if (target) {
          e.preventDefault();
          const headerOffset = 90;
          const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });
  }

  /* ---------------------------------------------------------------------
     Small utility: throttle
     --------------------------------------------------------------------- */
  function throttle(fn, wait) {
    let last = 0;
    return (...args) => {
      const now = Date.now();
      if (now - last >= wait) {
        last = now;
        fn(...args);
      }
    };
  }

  window.VersoUtils = { throttle, shareContent, copyToClipboard };
})();
