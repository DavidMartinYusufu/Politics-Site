document.addEventListener("DOMContentLoaded", () => {
  const lgas = Array.isArray(window.BAUCHI_LGAS) ? window.BAUCHI_LGAS : [];
  const districtTargets = {
    "Bauchi South": "bauchi-south-lgas",
    "Bauchi Central": "bauchi-central-lgas",
    "Bauchi North": "bauchi-north-lgas"
  };

  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  const cardTemplate = (lga, index) => `
    <article class="lga-card lga-detail-card">
      <details class="lga-details">
        <summary class="lga-summary">
          <span class="lga-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="lga-summary-copy">
            <strong>${escapeHTML(lga.name)}</strong>
            <small>HQ: ${escapeHTML(lga.headquarters)} · ${lga.wardCount} wards</small>
          </span>
          <span class="lga-expand-label"><span class="expand-text">View full details</span><span class="collapse-text">Close details</span><span class="lga-chevron" aria-hidden="true">⌄</span></span>
        </summary>
        <div class="lga-detail-content">
          <div class="lga-facts">
            <div class="lga-fact"><span>Headquarters</span><strong>${escapeHTML(lga.headquarters)}</strong></div>
            <div class="lga-fact"><span>Senatorial district</span><strong>${escapeHTML(lga.district)}</strong></div>
            <div class="lga-fact"><span>Number of wards</span><strong>${lga.wardCount}</strong></div>
            <div class="lga-fact lga-population-fact"><span>Estimated Christian population</span><strong>${escapeHTML(lga.estimatedChristianPopulation)}</strong></div>
          </div>
          <section class="lga-detail-section">
            <h4>Brief history</h4>
            <p>${escapeHTML(lga.history)}</p>
          </section>
          <section class="lga-detail-section">
            <h4>Wards in ${escapeHTML(lga.name)} <span>${lga.wards.length} wards</span></h4>
            <ul class="lga-ward-list">${lga.wards.map(ward => `<li>${escapeHTML(ward)}</li>`).join("")}</ul>
          </section>
          <p class="lga-welcome-line">“${escapeHTML(lga.welcome)}”</p>
          <p class="lga-estimate-note">Population figures are estimates from the supplied chapter information and should not be treated as verified census or membership figures.</p>
        </div>
      </details>
    </article>`;

  Object.entries(districtTargets).forEach(([district, targetId]) => {
    const group = document.getElementById(targetId);
    const grid = group?.querySelector(".lga-grid");
    if (!grid) return;
    const districtLGAs = lgas.filter(lga => lga.district === district);
    const startingIndex = lgas.indexOf(districtLGAs[0]);
    grid.innerHTML = districtLGAs.map((lga, index) => cardTemplate(lga, startingIndex + index)).join("");
  });
});
