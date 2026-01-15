import 'reset-css/reset.css';
import './main.scss'
import './style.css'

const productBadges = document.querySelectorAll('.product__badge-item')

productBadges.forEach(item => {
    item.textContent == 'Sale' || 'sale' ? item.classList.add('product__badge-item--sale') : null
})