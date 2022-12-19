// Iterable Object
// String
// Array 
// Arguments / NodeList
// TypedArray
// Map
// Set
// User-Defined Iterables


// Spread Operator
// Memecah iterable menjadi single element

let mahasiswa = ["dicky","joel","saputra"]

// console.log(...mahasiswa)
// console.log(...mahasiswa[0])

// mengggabungkan dua array

let dosen = ["janis","oro","meme"]
let orang = [...mahasiswa,...dosen]

// let orang = mahasiswa.concat(dosen)

console.log(orang)



// mengcopy array

// cara seperti ini tidak benar2 mengcopy element mahasiswa
// const mhs = mahasiswa
// console.log(mhs)

// untuk mengcopy maka dilakukan dengan spread operator

const mh1 = [...mahasiswa]

mh1[0] = `dickhead`
console.log(mh1)
console.log(mahasiswa)


var liMhs = document.querySelectorAll('li')
// console.log(liMhs[0].textContent)

// error
// var mahas = liMhs.map(e => e.textContent)

// dari nodelist di spread ke array
var mahas = [...liMhs].map(e => e.textContent)
console.log(mahas)
