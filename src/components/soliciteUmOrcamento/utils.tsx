
function copyEmail() {
    const texto: string = "contato.adamn@gmail.com";
    let inputTest: HTMLInputElement = document.createElement("input");
    inputTest.value = texto;
    document.body.appendChild(inputTest);
    inputTest.select();
    document.execCommand('copy');
    document.body.removeChild(inputTest);

    const spanEmail: HTMLButtonElement | null = document.querySelector('.copy-email')
    spanEmail?.classList.add('btn-active')
    setTimeout(() => {
        spanEmail?.classList.remove('btn-active')
    }, 2000)
}

export { copyEmail }