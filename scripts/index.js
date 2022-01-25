let poopupCloseButton = document.querySelector('.poopup__close');
let poopup = document.querySelector('.poopup');
function poopupClosed() {
    poopup.classList.remove('poopup_opened');
}
poopupCloseButton.addEventListener('click',poopupClosed);

let formElement = document.querySelector('.poopup__container');
let nameInput = document.querySelector('.poopup__name');
let jobInput = document.querySelector('.poopup__job');


function formSubmitHandler (evt) {
    evt.preventDefault();
let name = nameInput.value;
let job = jobInput.value;
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');


profileName.textContent = name;
profileJob.textContent = job;
poopupClosed();
nameInput.value = profileName.textContent;
profileJob.value = profileJob.textContent;
}

formElement.addEventListener('submit', formSubmitHandler);

// кнопка редактировать
let profileEditButton = document.querySelector('.profile__editButton');
function profileEddit() {
    poopup.classList.add('poopup_opened');
}
profileEditButton.addEventListener('click',profileEddit);