// Tipe data pada Javascript

// Number
// + , - , * , / , % , ()

// String
// Boolean
// Object
// function
// undefined


// deklarasi variable javascript
// var
// let
// const

// pengulangan

var angkot = 1;
var angkotBeroperasi = 8;
var jmlhAngkot = 10;
var angkotTidakBeroperasi = jmlhAngkot - angkotBeroperasi;

while ( angkot <= angkotBeroperasi) {
    console.log("Angkot No. " + angkot + " beroperasi dengan baik.");
    angkot++;
  };

for (var i = angkotBeroperasi ; i <= jmlhAngkot; i++) {
  console.log("Angkot No. " + i + " sedang tidak beroperasi.");
};

