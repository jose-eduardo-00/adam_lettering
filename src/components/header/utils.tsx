
function menuAnimation() {
    const navigationMenu: HTMLElement | null = document.querySelector('.menu-social-media')
        navigationMenu?.classList.add('menu-active')
        setTimeout(() => {
            navigationMenu?.classList.remove('menu-active')
        }, 800)

        document.querySelector('.navigation-social-media')?.classList.toggle('showMenu')
}

export { menuAnimation }