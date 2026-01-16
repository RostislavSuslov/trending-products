import 'reset-css/reset.css';
import './main.scss'
import './style.css'

const selectionPanel = document.querySelector('.selection-panel')

const productBadges = document.querySelectorAll('.product__badge-item')
const modalTrigger = document.querySelectorAll('[data-trigger-modal]')
const buttonCloseModal = document.querySelector('.modal__close')
const body = document.body;

const removeActiveClasses = (selectors, activeClass) => {
    selectors.forEach(item => item.classList.remove(activeClass))
}

const initBadges = () => productBadges.forEach(badge => {
    badge.textContent === 'Sale' || badge.textContent === 'sale' ? badge.classList.add('product__badge-item--sale') : null
});

const initSelectionPanel = () => {
    const panelButtons = selectionPanel.querySelectorAll('.selection-panel__button')
    const products = document.querySelectorAll('.product')
    
    selectionPanel.addEventListener('click', (event) => {
        const panelButton = event.target.closest('.selection-panel__button')
        if (!panelButton) return
         
        removeActiveClasses(panelButtons, 'selection-panel__button--active')
        removeActiveClasses(products, 'product--visible')
        
        panelButton.classList.add('selection-panel__button--active')
        document.getElementById(panelButton.dataset.target)?.classList.add('product--visible')
    })
}
 
const initModal = () => {
    const modal = document.getElementById('product-modal')
    const modalTitle = modal.querySelector('.modal__title')
    const closeButton = modal.querySelector('.modal__close')
 
    closeButton?.addEventListener('click', () => {
        modal.classList.remove('modal--show')
        body.classList.remove('overflow-hidden')
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('modal--show')
            body.classList.remove('overflow-hidden')
        }
    })

    document.body.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-trigger-modal]')
        if (!trigger) return

        const productEl = trigger.closest('.product')
        const productTitle = productEl?.querySelector('.product__title')?.innerText
        if (!productTitle) return console.warn('No product title found for modal trigger', trigger)

        modalTitle.textContent = `${productTitle} has been added to your cart`
        modal.classList.add('modal--show')
        body.classList.add('overflow-hidden')
    })
}


initBadges()
initSelectionPanel()
initModal()