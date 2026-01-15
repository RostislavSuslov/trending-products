import 'reset-css/reset.css';
import './main.scss'
import './style.css'

const productBadges = document.querySelectorAll('.product__badge-item')
const products = document.querySelectorAll('.product')
const selectionPanelButtons = document.querySelectorAll('.selection-panel__button')
const modalTriger = document.querySelectorAll('[data-triger-modal]')
const buttonCloseModal = document.querySelector('.modal__button-close')
const body = document.body;

productBadges.forEach(badge => {
    badge.textContent === 'Sale' || badge.textContent === 'sale' ? badge.classList.add('product__badge-item--sale') : null
});

const removeActiveClasses = (selectors, activeClass) => {
    selectors.forEach(item => item.classList.remove(activeClass))
}

if (selectionPanelButtons.length > 0 && products.length > 0) {
    selectionPanelButtons[0].classList.add('selection-panel__button--active');
    products[0].classList.add('product--visible');
}

selectionPanelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActiveClasses(selectionPanelButtons, 'selection-panel__button--active')
        removeActiveClasses(products, 'product--visible')
        btn.classList.add('selection-panel__button--active')
        const productId = btn.getAttribute('data-target')
        const productVisible = document.getElementById(productId)
        productVisible.classList.add('product--visible')
    })
})



modalTriger.forEach(triger => {
    const productTitle = triger.closest('.product').querySelector('.product__title').innerText

    triger.addEventListener('click', () => {
        const modalId = triger.getAttribute('data-triger-modal')
        const modal = document.getElementById(modalId)
        const modalTitle = modal.querySelector('.modal__title')

        modalTitle.innerHTML = `${productTitle} has been added to the your cart`
        body.classList.add('overflow-hidden')
        modal.classList.add('modal--show')

        buttonCloseModal.addEventListener('click', () => {
            modal.classList.remove('modal--show')
            body.classList.remove('overflow-hidden')
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('modal--show')
                body.classList.remove('overflow-hidden')
            }
        })
    })
})


