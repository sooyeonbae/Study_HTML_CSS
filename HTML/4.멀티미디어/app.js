const $btn = document.querySelector('#change');
const $pet = document.querySelector('#my-pet');

$btn.addEventListener('click', e => {
    $pet.textContent = '닌자 거북이! !!! !!! !';
});