const galleryImages = document.querySelectorAll('.gallery-image img');
  const verhuurImages = document.querySelectorAll('.verhuur-imggrid-container-img img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeButton = document.getElementById('close');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex2 = 0;

  const images = [...galleryImages, ...verhuurImages]; // Combineer beide lijsten van afbeeldingen

  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentIndex2 = index;
      openLightbox(image.src);
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (event) {
    if (event.target === this) {
      closeLightbox();
    }
  });
  prevButton.addEventListener('click', () => navigate(-1));
  nextButton.addEventListener('click', () => navigate(1));

  function openLightbox(imgSrc) {
    lightbox.style.display = 'flex';
    lightboxImg.src = imgSrc;
    document.body.classList.add('no-scroll');
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }

  function navigate(direction) {
    currentIndex2 = (currentIndex2 + direction + images.length) % images.length;
    lightboxImg.src = images[currentIndex2].src;
  }