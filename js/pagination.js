/* =========================================================================
   pagination.js — Verso Blog: reusable pagination
   Exposes VersoPagination.paginate(items, page, perPage) and
   VersoPagination.renderControls(container, current, totalPages, onChange)
   so any listing page can page through a filtered array of posts.
   ========================================================================= */

(function () {
  "use strict";

  /** Slice `items` down to just the requested page. */
  function paginate(items, page, perPage) {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
  }

  /** Render numbered pagination controls with prev/next arrows. */
  function renderControls(container, current, totalPages, onChange) {
    if (!container) return;
    if (totalPages <= 1) {
      container.innerHTML = "";
      return;
    }

    const pages = buildPageList(current, totalPages);

    container.innerHTML = `
      <button class="page-btn page-btn--arrow" data-page="${current - 1}" ${current === 1 ? "disabled" : ""} aria-label="Previous page">‹</button>
      ${pages
        .map((p) =>
          p === "..."
            ? `<span class="page-ellipsis">…</span>`
            : `<button class="page-btn ${p === current ? "is-active" : ""}" data-page="${p}" aria-current="${p === current ? "page" : "false"}">${p}</button>`
        )
        .join("")}
      <button class="page-btn page-btn--arrow" data-page="${current + 1}" ${current === totalPages ? "disabled" : ""} aria-label="Next page">›</button>
    `;

    container.querySelectorAll("[data-page]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const page = Number(btn.dataset.page);
        if (page >= 1 && page <= totalPages && page !== current) {
          onChange(page);
        }
      });
    });
  }

  /** Build a compact page list like [1, "...", 4, 5, 6, "...", 12] */
  function buildPageList(current, total) {
    const delta = 1;
    const range = [];
    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i);
    }
    const result = [1];
    if (range[0] > 2) result.push("...");
    result.push(...range);
    if (range[range.length - 1] < total - 1) result.push("...");
    if (total > 1) result.push(total);
    return result;
  }

  window.VersoPagination = { paginate, renderControls };
})();
