// All stories remain readable when JavaScript is unavailable.
const atlas = document.querySelector('.myth-atlas');
if (atlas) {
  const choices = [...atlas.querySelectorAll('.myth-choice')];
  const panels = [...atlas.querySelectorAll('.myth-panel')];
  function selectMyth(choice) {
    atlas.dataset.myth = choice.dataset.myth;
    for (const button of choices) button.setAttribute('aria-expanded', String(button === choice));
    for (const panel of panels) panel.hidden = panel.id !== choice.getAttribute('aria-controls');
  }
  for (const choice of choices) choice.addEventListener('click', () => selectMyth(choice));
  atlas.classList.add('atlas-ready');
  selectMyth(choices[0]);
}
const navigation = document.querySelectorAll('.site-header nav a[href^="#"]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigation) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-10% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
