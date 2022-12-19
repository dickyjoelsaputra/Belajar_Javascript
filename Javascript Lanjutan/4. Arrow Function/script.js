// Function Declaration

// function tampilPesan(nama) {
//     alert(`Halo` + nama);
// }

// tampilPesan('Dicky');



// Function Expression

// let tampilPesan = function (nama) {
//     alert(`Halo ` + nama);
// }

// tampilPesan('Dicky');




// Arrow Function

// let tampilPesan = (nama) => {
//     alert(`Halo` + nama);
// }

// tampilPesan('Dicky');




// Function Expression

// let tampilPesan = function (nama) {
//     return `Halo ${nama}`;
// }

// console.log(tampilPesan('Dicky'));




// let tampilPesan = (nama) => {
//     return `Halo ${nama}`;
// }

// console.log(tampilPesan('Dicky'));



// implisit return

// let tampilPesan = nama => `Halo ${nama}`;

// console.log(tampilPesan('Dicky'));


// let mahasiswa = ['Dicky' , 'Daniel' , 'Erik'];

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });

// let jumlahHuruf = mahasiswa.map( nama => nama.length );


// let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama,jmlhHuruf: nama.length}) );

// console.table(jumlahHuruf);


// KONSEP THIS PADA ARROW FUNCTION

// Constructor Function

// const Mahasiswa = function() {
//     this.nama = 'Dicky',
//     this.umur = 22,
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama} , umur saya ${this.umur} tahun.`);
//     }
// }

// const joel = new Mahasiswa;



// Arrow Function


const Mahasiswa = function() {
    this.nama = 'Dicky',
    this.umur = 22,
    this.sayHello = function () {
        console.log(`Halo nama saya ${this.nama} , umur saya ${this.umur} tahun.`);
    }
}

const joel = new Mahasiswa


// KONSEP THIS PADA FUNCTION DECLARATON   , AKAN KE GLOBAL , TETAPI JIKA ARROW FUNCTION TIDAK KE GLOBAL , JUGA TERBALIK DENGAN FUNCTION EXPRESSION



