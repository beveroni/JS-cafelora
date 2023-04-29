export const Header = () => {
  const element = document.createElement('header');
  element.innerHTML = `<div class="header__content container" id="home">
  <div class="site-logo"></div>
  <div class="navigation">
    <button class="nav-btn"></button>
    <nav class="rollout-nav nav-closed">
      <a href="#home" id="navHome">Domů</a>
      <a href="#menu" id="navMenu">Menu</a>
      <a href="#gallery" id="navGallery">Galerie</a>
      <a href="#contact" id= "navContact">Kontakt</a>
    </nav>
  </div>
</div>`;

  element.querySelector('.nav-btn').addEventListener('click', () => {
    element.querySelector('.rollout-nav').classList.toggle('nav-closed');
  });

  element.querySelector('.rollout-nav').addEventListener('click', () => {
    element.querySelector('nav').classList.add('nav-closed');
  });

  return element;
};
