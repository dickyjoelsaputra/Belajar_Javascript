// for...of
// Iterable Object
// String
// Array 
// Arguments / NodeList
// TypedArray
// Map
// Set
// User-Defined Iterables

//Array
// const mhs = ['Dicky', 'Jonny', 'Erik'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(element => {
//     console.log(element);
// });

// for( const m of mhs){
//     console.log(m);
// }

//String
// const nama = 'dicky joel';
// for (const iterator of nama) {
//     console.log(iterator);
// }

// const mhs = ['Dicky', 'Jonny', 'Erik'];
// mhs.forEach((element,index) => {
//     console.log(`${element} adalah mahasiswa ke ${index + 1}`);
// });

// Node List

// const liNama = document.querySelectorAll('.nama');
// for (const i of liNama) {
//     console.log(i.innerHTML);
// }

// Arguments

function jumlahkanAngka() {
    // arguments.reduce((a,i) => a + i );

    let jumlah = 0;
    for (const iterator of arguments) {
        jumlah += iterator;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1,2,3,4,5));
;



// for...in
const mhs = {
    nama: "dicky",
    age: 20,
    email: "yoyooy@gmail.com"
}

for ( m in mhs){
    console.log(m , mhs[m])
}
