const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click',(e) => {
    // cek apakah di klik apakah thumb
    if ( e.target.className == 'thumb' ) {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);
        thumbs.forEach(e => {
            // if(e.classList.contains('active')){
            //     e.classList.remove('active');
            // }
            e.className = 'thumb';

        });
        e.target.classList.add('active');
    }
});