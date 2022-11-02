const lincChange = document.querySelector('#linc');

lincChange.addEventListener('click', () => {
    event.preventDefault();
    lincChange.textContent = prompt('Введите текст');
});
