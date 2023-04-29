import './style.css';
import { Drink } from './components/Drink/drink.js';

export const Menu = (props) => {
  const { drinks } = props;

  const element = document.createElement('section');
  element.classList.add('menu');

  element.innerHTML = `
    <div class="container" id="menu">
        <h2>Naše nabídka</h2>
        <p class="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div class="drinks-list"></div>
        <div class="order-detail">
            <a href="/objednavka">Detail objednávky</a>
        </div>
    </div>
`;

  if (drinks === 'loading') {
    fetch(`https://cafelora.kodim.app/api/me/drinks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        element.replaceWith(
          Menu({
            drinks: data.result,
          }),
        );
      });
  } else {
    element
      .querySelector('.drinks-list')
      .append(...drinks.map((drink) => Drink(drink)));
  }
  return element;
};
