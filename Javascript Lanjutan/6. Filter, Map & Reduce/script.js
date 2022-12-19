const angka = [-1,2,4,23,1,57,6,-2,4,-5,-9];


// filter angka >= 3


// for

// const newAngka = [];

// for (let i = 0; i < angka.length; i++) {
//     if ( angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


// filter

// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kali semua angka dengan 2

// const newAngka = angka.map((a) => a + 2);
// console.log(newAngka);


// reduce
// jumlahkan seluruh elemen pada array

// const newAngka = angka.reduce((accumulator,currentValue) => accumulator + currentValue);
// console.log(newAngka);


// Method Chaining
// Cari angka yang lebih besar > 5 , lalu dikali 3 , lalu dijumlahkan

const hasil = angka.filter((a) => a > 5) // 23 , 57 , 6
            .map((a) => a * 3) // 69 , 171 , 18
            .reduce((acc,cur) => acc + cur,0); //

console.log(hasil);