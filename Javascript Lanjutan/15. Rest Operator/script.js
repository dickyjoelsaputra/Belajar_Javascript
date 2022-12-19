// Rest Parameter

// rest parameter hanya untuk akhir parameter

function myFunc(a,b,...myArgs) {
    
    return `nilai a adalah ${a} , nilai b adalah ${b} , dan sisanya ${myArgs.join(" ")}`
}

// menggunakan argumen
function myFuncs() {
    // return Array.from(arguments)
    // atau
    return [...arguments]
}

console.log(myFunc(1,2,3,4,5))
console.log(myFuncs(1,2,3,4,5))


function jumlahAngka(...angka) {
    let total = 0

    for (const iterator of angka) {
        total += iterator
    }

    return total
}

console.log(jumlahAngka(1,2,3,4,5,6,2,31,23))


// reduce

function jumAngka(...angka){
    return angka.reduce((a,v) => a + v)
}

console.log(jumAngka(1,2,3,4,5,6,2,31,23,90))

// Array Destructuring

const kelompok1 = ["john","we","joko","ron","sleep"]
const [ketua,wakil,...anggota] = kelompok1
console.log(ketua)
// john


// object destructturing

const team = {
    pm : "dicky",
    fe1 : "joel",
    fe2 : "john",
    be: "bandar",
    ex: "hendra",
    devops: "ferry"
}

let {pm , ...myTeam} = team
console.log(pm)
// dicky



// filtering 
function filterBy(type,...values){
    return values.filter((v) => typeof v === type)
}

console.log(filterBy('string',true,"dicky",1,2,"ayam",false,15))