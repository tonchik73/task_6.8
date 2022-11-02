const consoleLog = document.querySelector('#consoleLog');
const alertConst = document.querySelector('#alert');
const promptConst = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Выводит информацию в консоль');
});


alertConst.addEventListener('click', () => {
    alert('Выводит информацию в диалоговое окно');
});

promptConst.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста.');
});