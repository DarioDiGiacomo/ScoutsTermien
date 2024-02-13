document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const backdrop = document.querySelector('.backdrop');
  
    menuToggle.addEventListener('click', function() {
      document.body.classList.toggle('no-scroll');
      menuToggle.classList.toggle('open'); // Toggle de klasse 'open' om de navigatie te openen of te sluiten
      menu.classList.toggle('open'); // Toggle de klasse 'open' om de navigatie te openen of te sluiten
      backdrop.classList.toggle('open'); // Toggle de klasse 'open' om de achtergrond weer te geven of te verbergen
    });
  
    backdrop.addEventListener('click', function() {
      document.body.classList.remove('no-scroll');
      menuToggle.classList.remove('open'); // Sluit de navigatie wanneer er op de achtergrond wordt geklikt
      menu.classList.remove('open'); // Sluit de navigatie wanneer er op de achtergrond wordt geklikt
      backdrop.classList.remove('open'); // Verberg de achtergrond
    });
  });