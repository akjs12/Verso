/* =========================================================================
   search.js — Verso Blog: header search panel
   Provides a slide-down search panel available on every page, with live
   suggestions drawn from VERSO.posts. Submitting navigates to blog.html
   with a ?search= query string that blog.js picks up.
   ========================================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".search-toggle");
    const panel = document.querySelector(".search-panel");
    const closeBtn = panel?.querySelector(".search-panel__close");
    const input = panel?.querySelector(".search-input");
    const results = panel?.querySelector(".search-suggestions");
    const form = panel?.querySelector("form");

    if (!panel) return;

    openBtn?.addEventListener("click", () => {
      panel.classList.add("is-open");
      document.body.classList.add("no-scroll");
      setTimeout(() => input?.focus(), 200);
    });

    closeBtn?.addEventListener("click", closePanel);
    panel.addEventListener("click", (e) => {
      if (e.target === panel) closePanel();
    });

    function closePanel() {
      panel.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    }

    input?.addEventListener(
      "input",
      VersoUtils.throttle(() => renderSuggestions(input.value), 120)
    );

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = input.value.trim();
      window.location.href = `blog.html?search=${encodeURIComponent(q)}`;
    });

    function renderSuggestions(query) {
      if (!results) return;
      const q = query.trim().toLowerCase();
      if (q.length < 2) {
        results.innerHTML = `<p class="search-suggestions__hint">Type at least two characters to search titles, tags, and categories.</p>`;
        return;
      }
      const matches = VERSO.posts
        .filter((p) => {
          const haystack = `${p.title} ${p.excerpt} ${p.tags.join(" ")} ${VERSO.getCategory(p.category).name}`.toLowerCase();
          return haystack.includes(q);
        })
        .slice(0, 6);

      if (!matches.length) {
        results.innerHTML = `<p class="search-suggestions__hint">No articles found for "${VERSO.escapeHtml(query)}".</p>`;
        return;
      }

      results.innerHTML = matches
        .map(
          (p) => `
        <a class="search-suggestion" href="post.html?slug=${p.slug}">
          <img src="${p.image}" alt="" width="48" height="48" loading="lazy">
          <span>
            <span class="search-suggestion__title">${VERSO.escapeHtml(p.title)}</span>
            <span class="search-suggestion__meta">${VERSO.getCategory(p.category).name} · ${p.readTime} min read</span>
          </span>
        </a>`
        )
        .join("");
    }
  });
})();
