document.querySelectorAll('[data-year]').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const dialog = document.querySelector('[data-contact-dialog]');
const dialogOpeners = document.querySelectorAll('[data-contact-open]');
const dialogCloser = document.querySelector('[data-contact-close]');

dialogOpeners.forEach((opener) => {
  opener.addEventListener('click', () => {
    if (dialog?.showModal) dialog.showModal();
  });
});

dialogCloser?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const menuButton = document.querySelector('[data-menu]');
const mobileNav = document.querySelector('[data-mobile-nav]');

const closeMenu = () => {
  mobileNav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};

menuButton?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

mobileNav?.querySelectorAll('a, button').forEach((item) => {
  item.addEventListener('click', closeMenu);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
