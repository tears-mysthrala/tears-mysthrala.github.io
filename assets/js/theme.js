// Apply the preference before styles load so the page opens in the chosen theme.
(() => {
  const preference = window.matchMedia('(prefers-color-scheme: light)');
  let saved;
  try { saved = localStorage.getItem('mysthrala-theme'); } catch { /* Storage may be disabled. */ }
  let selected = saved === 'light' || saved === 'dark' ? saved : null;
  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'light' ? '#edf2f5' : '#191923';
    const button = document.querySelector('.theme-toggle');
    if (button) {
      const next = theme === 'light' ? 'oscuro' : 'claro';
      button.textContent = `Tema ${next}`;
      button.setAttribute('aria-label', `Cambiar a tema ${next}`);
      button.hidden = false;
    }
  }
  apply(selected ?? (preference.matches ? 'light' : 'dark'));
  preference.addEventListener('change', () => {
    if (!selected) apply(preference.matches ? 'light' : 'dark');
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'mysthrala-theme' && event.key !== null) return;
    selected = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
    apply(selected ?? (preference.matches ? 'light' : 'dark'));
  });
  function initializeToggle() {
    apply(document.documentElement.dataset.theme);
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    button.addEventListener('click', () => {
      selected = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      apply(selected);
      try { localStorage.setItem('mysthrala-theme', selected); } catch { /* The choice still works for this page. */ }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeToggle);
  else initializeToggle();
})();
