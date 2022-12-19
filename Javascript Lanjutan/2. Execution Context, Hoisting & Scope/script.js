// Execution Context, Hoisting & Scope

// Execution Context ada 2 fase

// creation phase pada global context
// console.log(nama);
// var nama = 'dicky';

// window = global object
// this = window

// console.log(sayHello());

// var nama = 'Dicky';
// var umur = 33;

// function sayHello() {
//     return `Halo nama saya ${nama}, saya berumur ${umur} tahun.`;
// }


// var nama = 'dicky joel';
// var username = '@dickyjoel';

// function cetakURL(username) {
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();


function satu() {
    var nama = 'dicky';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);

// local > argumen > global