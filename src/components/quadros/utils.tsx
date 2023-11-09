
function imgQuadroSelect() {
    const divImgList: NodeListOf<HTMLDivElement> = document.querySelectorAll('.div-img')
    const imgList: NodeListOf<HTMLImageElement> = document.querySelectorAll('.img')
    const btnList: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn-comprar')

    divImgList.forEach((divImg, index) => {
        divImg.addEventListener('mouseover', () => {
            imgList[index].classList.add('img-active')
            btnList[index].classList.add('btn-active')
        })

        divImg.addEventListener('mouseout', () => {
            imgList[index].classList.remove('img-active')
            btnList[index].classList.remove('btn-active')
        })
    })
}

export { imgQuadroSelect }