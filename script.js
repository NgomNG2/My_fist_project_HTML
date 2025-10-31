    // Dark/Light mode toggle
const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  btn.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Contact form demo handler
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting me! (Demo: no actual email sent)');
    this.reset();
  });
}