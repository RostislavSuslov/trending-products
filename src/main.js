import 'reset-css/reset.css';
import './main.scss'
import './style.css'

const productBadges = document.querySelectorAll('.product__badge-item')

productBadges.forEach(badge => {
   badge.textContent === 'Sale' || badge.textContent === 'sale' ? badge.classList.add('product__badge-item--sale') : null
});