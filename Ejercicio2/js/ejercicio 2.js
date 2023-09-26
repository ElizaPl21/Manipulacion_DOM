const createCard=() =>{
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;

}

const inputName = document.getElementById('name');
const userName = document.getElementById('username');

const inputEdad = document.getElementById('edad');
const age = document.getElementById('age');

const inputDescribir = document.getElementById('describir');
const describir = document.getElementById('descripcion');


const profileBtn = document.getElementById('ProfileBtn');

profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
    age.textContent = inputEdad.value;
    describir.textContent = inputDescribir.value;


})

