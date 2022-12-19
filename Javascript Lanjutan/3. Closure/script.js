// LEXICAL SCOPE

// function init() {
//     let nama = 'Sandhika'; 
//     // local variable
//     function tampilNama() {
//         // inner function
//         console.log(nama);
//         // akses ke parent variable
//     }
//     tampilNama();
// }
// init();




// function init() {
//     // let nama = 'Sandhika'; 
//     // local variable
//     function tampilNama(nama) {
//         // inner function
//         console.log(nama);
//         // akses ke parent variable
//     }
//     return tampilNama;
// }

// let panggilNama = init();
// panggilNama('Dicky');





// function init() {
//     // let nama = 'Sandhika'; 
//     // local variable
//     return function(nama) {
//         // inner function
//         console.log(nama);
//         // akses ke parent variable
//     }
// }

// let panggilNama = init();

// panggilNama('Daniel');
// panggilNama('Ayam');



// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama} , selamat ${waktu} , semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Dicky');


// let add = function () {
//     let counter = 0;
//     return function(){
//         return ++counter;
//     }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());





let add = (function () {
    let counter = 0;
    return function(){
        return ++counter;
    }
})();


console.log(add());
console.log(add());
console.log(add());