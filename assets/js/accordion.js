const accordionBtn = document.querySelectorAll('.accordion__btn')

accordionBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        const pai = this.parentElement;
        pai.classList.toggle('active')
    })
})