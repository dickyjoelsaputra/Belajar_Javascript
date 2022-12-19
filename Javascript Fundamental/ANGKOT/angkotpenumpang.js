var penumpang = [];

// Penumpang Naik
function tambahPenumpang(namaPenumpang,penumpang){
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + " nama penumpang sudah ada");
                return penumpang;
            } else if (i == penumpang.length - 1){
                penumpang.push(namaPenumpang);
                return penumpang
            }
        }
    }
}


// Penumpang Turun
function kurangPenumpang(namaPenumpang,penumpang){
    if (penumpang.length == 0) {
        console.log("Penumpang Kosong")
        
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] == undefined;
    
            // } else if(i - penumpang.length -1){
                // console.log("nama penumpang tidak ditemukan");
            }
        }
        
    }
    return penumpang;
}