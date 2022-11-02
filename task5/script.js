document.querySelector('#input').addEventListener('keyup', (event) => {

    let output = ('#duplicateField');

    document.querySelector(output).textContent = (input.value);
});

document.querySelector('#inputForm').addEventListener('submit', (event) => {

    event.preventDefault();

    console.log(input.value);

    document.querySelector('#input').value = ('')

    let output = ('#duplicateField');

    document.querySelector(output).textContent = ("");
})