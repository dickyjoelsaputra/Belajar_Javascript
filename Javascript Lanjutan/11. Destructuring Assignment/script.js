// Desrtructuring Variable / Assignment

// Destructuring Array

// const perkenalan = ['Halo','nama','saya','Dicky'];

// const [salam , satu , dua , tiga] = perkenalan;
// console.log(dua);

// swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function

// function coba() {
//     return [1,2];
// }

// // const a = coba();
// const [a,b] = coba();
// console.log(a);

// Rest Parameter
// const [a , ...values] = [1,2,2,3,4,5];
// console.log(a);
// console.log(values);


// Distructering Object

// mhs = {
//     nama: 'Dicky',
//     umur: '23'
// }

// const {nama,umur} = mhs ; 
// console.log(nama);


// Assigment tanpa deklarasi object

// ({ nama, umur } = 
//     {
//     nama: 'Dicky',
//     umur: '23'
//     });
 
// console.log(nama);


// Assignt ke variable baru

// mhs = {
//     nama: 'Dicky',
//     umur: '23'
// }

// const {nama: n, umur: u} = mhs ; 
// console.log(u);



// Default Value
// mhs = {
//     nama: 'Dicky',
//     umur: '23'
// }

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs ; 
// console.log(e);


// Rest Parameter

// mhs = {
//     nama: 'Dicky',
//     umur: '23',
//     email: 'jarwo@gmal.com'
// }

// const {...values} = mhs ; 
// console.log(values);


// Mengambil field pada object , setelah parameter dari object
mhs = {
    id: 123,
    nama: 'Dicky',
    umur: '23',
    email: 'jarwo@gmal.com'
}

function getIdMhs({id}){
    return id;
}

console.log(getIdMhs(mhs));