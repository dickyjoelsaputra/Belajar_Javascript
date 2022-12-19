// Destructuring

// function penjumlahanPerkalian(a,b) {
//     return [a + b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah , kali] = penjumlahanPerkalian(4,3);
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a,b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const[tambah,kurang,kali,bagi] = kalkulasi(2,3);
// console.log(bagi);


// function kalkulasi(a,b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b,
//     }
// }

// const {bagi,kali,kurang,tambah} = kalkulasi(4,2);

// console.log(tambah);


// Destructions function arguments
const mhs1 = {
    nama: 'dicky',
    umur: 23,
    email: 'dickyj@gmail.com',
    nilai: {
        tugas: 10,
        uts: 5,
        uas: 75
    }
}

// function cetakMahasiswa(mhs) {
//     return `Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`
// }

// console.log(cetakMahasiswa(mhs1));



function cetakMahasiswa({nama,umur,nilai: {tugas,uts,uas}}) {
    return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai UAS saya adalah ${uas}.`;
}

console.log(cetakMahasiswa(mhs1));