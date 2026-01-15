import 'reset-css/reset.css';
import './main.scss'
import './style.css'

const productBadges = document.querySelectorAll('.product__badge-item')
const products = document.querySelectorAll('.product')
const selectionPanelButton = document.querySelectorAll('.selection-panel__button')

productBadges.forEach(badge => {
    badge.textContent === 'Sale' || badge.textContent === 'sale' ? badge.classList.add('product__badge-item--sale') : null
});

const removeActiveClasses = (selectors, activeClass) => {
    selectors.forEach(item => item.classList.remove(activeClass))
}

selectionPanelButton.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActiveClasses(selectionPanelButton, 'selection-panel__button--active')
        removeActiveClasses(products, 'product--visible')

        btn.classList.add('selection-panel__button--active')

        const productId = btn.getAttribute('data-target')
        const productVisible = document.getElementById(productId)

        productVisible.classList.add('product--visible')
        
    })
})