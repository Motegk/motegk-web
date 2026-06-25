document.querySelectorAll('[data-year]').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const dialog = document.querySelector('[data-contact-dialog]');
const dialogOpeners = document.querySelectorAll('[data-contact-open]');
const dialogCloser = document.querySelector('[data-contact-close]');

dialogOpeners.forEach((opener) => {
  opener.addEventListener('click', () => dialog.showModal());
});

dialogCloser?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const menuButton = document.querySelector('[data-menu]');
const mobileNav = document.querySelector('[data-mobile-nav]');

menuButton?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});
