// Set current year in the footer
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle (simple: toggles a light class on <html>)
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('site-theme');
  if(stored === 'light') root.classList.add('light');

  if(toggle){
    toggle.addEventListener('click', function(){
      const isLight = root.classList.toggle('light');
      localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
      toggle.setAttribute('aria-pressed', String(isLight));
    });
  }

  // Contact form: show a local status message (placeholder)
  const form = document.getElementById('contact-form');
  const status = document.querySelector('.form-status');
  if(form && status){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      status.textContent = 'Sending (demo)…';
      // Simulate async send
      setTimeout(function(){
        status.textContent = 'Thanks — message handled locally in this demo.';
        form.reset();
      }, 900);
    });
  }
});
