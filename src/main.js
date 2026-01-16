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
 
const initModal = () => modalTrigger.forEach(trigger => {
    const productTitle = trigger.closest('.product').querySelector('.product__title').innerText

    trigger.addEventListener('click', () => {
        console.log(trigger);

        const modalId = trigger.getAttribute('data-trigger-modal')
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


initBadges()
initSelectionPanel()
initModal()