function slidesImgToggle() {
    const slideList: NodeListOf<HTMLImageElement> = document.querySelectorAll('.slide')
    const btnList: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn')
    let currentItem: number = 0
    
    setInterval(() => {
            document.querySelector('.active')?.classList.remove('active')
            document.querySelector('.btn-active')?.classList.remove('btn-active')
            
            if (currentItem == 0) {
                slideList[currentItem].classList.add('active')
                btnList[currentItem].classList.add('btn-active')
                currentItem = 1
            } else if (currentItem == 1) {
                slideList[currentItem].classList.add('active')
                btnList[currentItem].classList.add('btn-active')
                currentItem = 2
            } else if (currentItem == 2) {
                slideList[currentItem].classList.add('active')
                btnList[currentItem].classList.add('btn-active')
                currentItem = 0
            }
    }, 5000)

    btnList.forEach((botao, bIndex) => {
        botao.addEventListener('click', () => {
            currentItem = bIndex
            document.querySelector('.btn-active')?.classList.remove('btn-active')
            botao.classList.add('btn-active')
            document.querySelector('.active')?.classList.remove('active')
            slideList[bIndex].classList.add('active')
        })
    })
}

export { slidesImgToggle }