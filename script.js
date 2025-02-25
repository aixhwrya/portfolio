// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
  }

  // You can add more complex validation here if needed

  // Simulate form submission (you can replace this with actual form submission logic)
  alert('Thank you for your message, ' + name + '! I will get back to you soon.');

  // Clear the form fields
  document.getElementById('contactForm').reset();
});