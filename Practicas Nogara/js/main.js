const qr = document.querySelector('.jOptVacuna');
qr.addEventListener('click', () => {
    const select = document.querySelector('.popup-container');
    select.style.display = 'block';
});
const close = document.querySelector('.popup-close');
close.addEventListener('click', () => {
    const select2 = document.querySelector('.popup-container');
    select2.style.display = 'none';
})

