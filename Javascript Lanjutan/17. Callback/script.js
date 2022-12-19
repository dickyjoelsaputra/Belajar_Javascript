// Callback
// Synhcronus Callback

function hallo(nama) {
    alert(`hallo , ${nama}`)
}

function tampilkanPesan(callback) {
    const nama = prompt(`masukan nama user`)
    callback(nama)
}

// tampilkanPesan(hallo)
tampilkanPesan(nama => {
    alert(`hallo , ${nama}`)
})


// Asynhcronus Callback

