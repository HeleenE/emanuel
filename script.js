// Pause the light installation while the page is out of view.
document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('is-hidden', document.hidden);
});
