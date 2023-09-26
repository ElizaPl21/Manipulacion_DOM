/*const createCard=() =>{
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
*/
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

    const user = {
        user_name: inputName.value,
        age:inputEdad.value,
        description: inputDescribir.value,
    }
    console.log(user);
    const card = createCard();
    const userElements = createDescription();

    const elementsWithData = populateElements(user, userElements);
    renderElements(card, elementsWithData);
    CARD_SECTION.append(card);

})

const CARD_SECTION = document.getElementById('profiles');

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}


const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
    }
    return userElements;
}

const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;
    
    }

const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description,);
console.log(card);
}