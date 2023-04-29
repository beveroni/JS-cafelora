import './style.css';
import { Header } from './components/Header/header';
import { Banner } from './components/Banner/banner';
import { Menu } from './components/Menu/menu';
import { Gallery } from './components/Gallery/gallery';
import { Contact } from './components/Contact/contact';
import { Footer } from './components/Footer/footer';

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);
