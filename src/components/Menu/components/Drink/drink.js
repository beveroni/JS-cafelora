import './style.css';
import { Layer } from '../Layer/layer.js';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  const element = document.createElement('div');
  element.classList.add('drink');

  element.innerHTML = `
    <div class="drink__product">
        <div class="drink__cup"><img src=${image}></div>
        <div class="drink__info"><h3>${name}</h3>
                <div class="layer">
                </div>
            </div>
        </div>
        <div class="drink__controls">
        <button class="order-btn">Objednat</button>
    </div> 
    `;

  element
    .querySelector('.layer')
    .append(Layer({ color: '#feeeca', label: 'mléčná pěna' }));

  return element;
};
