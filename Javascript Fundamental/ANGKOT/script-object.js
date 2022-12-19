// // membuat object

// // object literal
// var mhs = {
//     nama : "dicky",
//     umur : 23,
//     ips : [3.00,2.50,3.20],
//     alamat : {
//         jalan : "jalan kesejahteraan no.11A",
//         kelurahan : "keagungan",
//         kecamatan : "tamansari",
//         kota : "jakarta"
//     }
// };

// var mhs2 = {
//     nama : "daniel",
//     umur : 23,
//     ips : [4.00,3.50,2.20],
//     alamat : {
//         jalan : "jalan jambu no.11A",
//         kelurahan : "tulungagung",
//         kecamatan : "tambora",
//         kota : "jakarta"
//     }
// };

// // function declaration

// function buatObjectMahasiswa(nama,umur,nip,jurusan,email) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.umur = umur;
//     mhs.nip = nip;
//     mhs.jurusan = jurusan;
//     mhs.email = email;

//     return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Joko',20,1234,'elektro','joko@gmail.com')
// var mhs4 = buatObjectMahasiswa('Juju',21,1235,'motor','jaka@gmail.com');

// // constructor

// function Mahasiswa(nama,umur,nip,jurusan,email){
//     this.nama = nama;
//     this.umur = umur;
//     this.nip = nip;
//     this.jurusan = jurusan;
//     this.email = email;
// }

// var mhs5 = new Mahasiswa('Eric',26,2022,'mobil','eric@gmail.com');




// cara 1 - function declaration

// function halo() {
//     console.log(this);
//     console.log('halo');
// }

// halo();
// cara pertama mengembalikan secara global


// cara 2 - object literal
// var obj = {};
// obj.halo = function() {
//     console.log(this);
//     console.log("halo");
// }
// obj.halo();
// mengembalikan object yang bersangkutan


// // cara 3 - costructor
function Halo() {
    console.log(this);
    console.log("halo");
}

var obj1 = new Halo();

//this mengambalikan object yang terinstasi







// // this

// var a = 10;
// console.log(this.a);