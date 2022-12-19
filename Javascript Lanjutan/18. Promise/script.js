// fetch

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ecb3b726')
// .then(response => response.json())
// .then(response => console.log(response))

// Promose = Janji
// Object yang merepresentasikan keberhasilan atau kegaalan sebuah event yang asycronus, yang akan terjadi di masa yang akan datang
// janji ( terpenuhi / ingkar janji)
// states ( fulfilled / rejected / pending )
// callback (resolve / reject / finally)
// aksi ( then / catch / )

// contoh 1
// let ditepati = false
// let janji1 = new Promise((resolve, reject) => {
//     if (ditepati){
//         resolve('janji telah ditepati')
//     }else{
//         reject('ingkar janji')
//     }
// })

// janji1
// .then(response => console.log("OKE : " + response))
// .catch(response => console.log("NOT OKE : " + response))


// contoh 2
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati){
//         setTimeout(()=>{
//             resolve('ditepati setelah beberapa waktu')
//         },5000)
//     }else{
//         setTimeout(()=>{
//             reject('tidak ditepati setelah beberapa waktu')
//         },5000)
//     }
// })

// console.log("mulai")
// // melihat proses dari mulai , menunggu 5 detik
// // console.log(janji2.then(()=> console.log(janji2)))

// janji2
// .then(response => console.log("OKE : " + response))
// .catch(response => console.log("NOT OKE : " + response))
// .finally(() => console.log("selesai menunggu"))


// console.log("selesai")


// Promise.all

const film = new Promise((resolve) => {
    setTimeout(()=>{
     resolve([{
        judul: 'Avanger',
        sutradara: 'Mario Teguh',
        pemeran: 'dody , erik'
     }])   
    },2000)
})

const cuaca = new Promise((resolve) => {
    setTimeout(()=>{
        resolve([{
           kota: 'jakarta',
           temp: 26,
           kondisi: 'cerah berawan'
        }])   
       },1000)
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([film,cuaca])
// .then(response => console.log(response))
.then(response => {
    // spread operator
    const [film,cuaca] = response
    console.log(film)
    console.log(cuaca)  
})