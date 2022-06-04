const modal = document.querySelector('.modal');
//const hideIcon = document.querySelector('.modal #hideIcon');
const hideButton = document.querySelector('.modal #hideButton');
const showButton = document.querySelector('#showButton');

hideIcon.addEventListener('click', hideModal);
hideButton.addEventListener('click', hideModal);
showButton.addEventListener('click', showModal);

function hideModal() {
    modal.id = 'hide';
}

function showModal() {
    modal.id = 'show';
}
