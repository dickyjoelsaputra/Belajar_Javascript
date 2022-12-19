// cara membuat object pada javascript
// 1. object literal

// let mahasiswa = {
//     nama: 'Dicky',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Jarwo',
//     energi: 11,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }
// }


// 2. function declaration

// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     },

//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain!`);
//     },

//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }


//  2.1 baru
// function Mahasiswa(nama, energi){
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // let mahasiswa = {};
//     // mengacu pada parent object nya
//     // let this = Object.create(Mahasiswa.prototype);

//     this.nama = nama;
//     this.energi = energi;

//     // return mahasiswa;
//     // return this;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let dicky = new Mahasiswa('Dicky',10);

// let dicky = Mahasiswa('Dicky' , 10);
// let dody = Mahasiswa('Dody' , 12);

// 3. constructor function

// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
    
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain!`);
//     }
// }

// let dicky = new Mahasiswa('Dicky',10);



// 4. object.create



//  VERSI CLASS

class Mahasiswa {
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main (jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }

    tidur (jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let dicky = new Mahasiswa('Dicky', 10);