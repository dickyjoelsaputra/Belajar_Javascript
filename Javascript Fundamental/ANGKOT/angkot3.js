var angkot = 1;
var angkotBeroperasi = 8;
var jmlhAngkot = 10;
var angkotTidakBeroperasi = jmlhAngkot - angkotBeroperasi;

for (var i = angkot ; i <= jmlhAngkot; i++) {
    if (i < 7 && i !== 5) {
    console.log("Angkot No. " + i + " sedang beroperasi.");
  } else if ( i === 8 || i === 10 || i === 5) {
    console.log("Angkot No. " + i + " sedang lembur.");
  } else {
    console.log("Angkot No. " + i + " sedang tidak beroperasi.");
  }
};
