(async () => {
  const loadInto = async (selector, path) => {
    if (!path) {
      return;
    }
    const target = document.querySelector(selector);
    if (!target) {
      return;
    }
    const res = await fetch(path);
    if (!res.ok) {
      throw new Error("Failed to load: " + path);
    }
    target.innerHTML = await res.text();
  };

  try {
    const body = document.body;
    await loadInto("#site-header", body.dataset.headerPath);
    await loadInto("#site-content", body.dataset.contentPath);
    await loadInto("#site-subcontent", body.dataset.subcontentPath);
    await loadInto("#site-footer", body.dataset.footerPath);

    const year = document.getElementById("year");
    if (year) {
      year.textContent = String(new Date().getFullYear());
    }
  } catch (err) {
    console.error(err);
  }
})();
