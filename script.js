lucide.createIcons();

const navbar = document.querySelector('.navbar');

navbar.style.backgroundColor = 'transparent';

document.addEventListener('scroll', () => {
  if (scrollY > 20) {
    navbar.style.backgroundColor = 'rgba(47, 47, 47, .4)';
    navbar.style.backdropFilter = 'blur(5px)';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.backdropFilter = 'none';
  }
});
