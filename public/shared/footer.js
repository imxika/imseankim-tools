/* ============================================
   Shared Footer — Auto-injected into all pages
   ============================================ */
(function() {
  const path = window.location.pathname;
  const currentSlug = path.replace(/^\//, '').replace(/\/.*/, '') || path.split('/tools/')[1]?.replace(/\/.*/, '') || '';
  const tools = window.__TOOLS__ || [];

  // In-content ad (ad #2 — between tool content and related tools)
  if (currentSlug) {
    const inlineAd = document.createElement('div');
    inlineAd.className = 'ad-inline';
    inlineAd.innerHTML = '<div class="ad-placeholder">Advertisement</div>';
    document.body.appendChild(inlineAd);
  }

  // Related tools section
  if (currentSlug && tools.length) {
    const allItems = tools.flatMap(c => c.items);
    const currentCat = tools.find(c => c.items.some(t => t.slug === currentSlug));
    let related = currentCat ? currentCat.items.filter(t => t.slug !== currentSlug) : [];
    // If less than 4, add from other categories
    if (related.length < 4) {
      const others = allItems.filter(t => t.slug !== currentSlug && !related.includes(t));
      related = related.concat(others.slice(0, 4 - related.length));
    }
    related = related.slice(0, 4);

    const section = document.createElement('section');
    section.className = 'related-tools';
    section.innerHTML = `
      <h3>Related Tools</h3>
      <div class="related-grid">
        ${related.map(t => `
          <a href="/${t.slug}" class="related-card">
            <span class="rc-icon">${t.icon}</span>
            <span class="rc-name">${t.name}</span>
          </a>
        `).join('')}
      </div>
    `;
    document.body.appendChild(section);
  }

  // Bottom ad — Google AdSense
  // After AdSense approval, replace the placeholder below with your actual AdSense ad unit code.
  // Example: <ins class="adsbygoogle" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" ...></ins>
  const ad = document.createElement('div');
  ad.className = 'ad-banner bottom';
  ad.innerHTML = `
    <div class="ad-placeholder">
      <!-- Google AdSense Ad Unit -->
      <!-- Paste your AdSense ad unit code here after approval -->
      <!-- e.g. <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" data-full-width-responsive="true"></ins> -->
      <!-- <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> -->
      Advertisement
    </div>
  `;
  document.body.appendChild(ad);

  // Footer
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-links">
      <a href="/">All Tools</a>
      <a href="https://imseankim.com">Main Site</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="mailto:seankim.ny@gmail.com">Contact</a>
    </div>
    <p class="copyright">&copy; ${new Date().getFullYear()} imseankim.com — Free Online Tools</p>
  `;
  document.body.appendChild(footer);
})();
