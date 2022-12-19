// // event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function() {
//         close[i].parentElement.style.display = 'none';
//     });
// }

close.forEach(e => {
    close[i].addEventListener('click', function() {
        close[i].parentElement.style.display = 'none';
    });
});



// preventDefault();
// stopPropagation();