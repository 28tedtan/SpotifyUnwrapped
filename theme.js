// Theme functionality
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  const body = document.body;
  const checkbox = document.getElementById('checkbox');
  
  // Set initial theme based on localStorage on computer, kinda volatile if it is closed and reopened after 1 day
  if (localStorage.getItem('theme') === 'light') {
    body.classList.replace('theme-dark', 'theme-light');
    if (checkbox) checkbox.checked = true;
  }

  // Theme toggle functionality
  if (checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        body.classList.replace('theme-dark', 'theme-light');
        localStorage.setItem('theme', 'light');
      } else {
        body.classList.replace('theme-light', 'theme-dark');
        localStorage.setItem('theme', 'dark');
      }
      
      // Show toast if it exists
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = 'Theme updated';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
      }
    });
  }

  // Set active nav item when page is loaded.
  const currentPage = window.location.pathname.split('/').pop() || 'HomePage.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
