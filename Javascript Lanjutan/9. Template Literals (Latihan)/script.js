// 1. HTML FRAGMENTS

// const mhs = {
//     nama: 'dicky',
//     umur: 23,
//     nrp: '12321312312',
//     email: 'dickyjoelsaputra@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// document.body.innerHTML = el;

// 2. LOOPING

// const mhs = [
//     {
//         nama: 'Dicky Joel Saputra',
//         email: 'dickyjoelsapura@gmail.com'
//     },
//     {
//         nama: 'Daniel',
//         email: 'danieldamien@gmail.com'
//     },
//     {
//         nama: 'Dorry',
//         email: 'dorrydomms@gmail.com'
//     }
// ];

// const el = `
//     <div class="mahasiswa">
//         ${mhs.map(m => `<ul>
//             <li>${m.nama}</li>
//             <li>${m.email}</li>
//         </ul>`).join('')}
//     </div>
// `;


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap didalam Jiwa',
//     penyanyi: 'Ariel',
//     feat: 'Bondan'
// }

// const el = `
//     <div class="lagu">
//         <ul>
//             <li>${lagu.penyanyi}</li>
//             <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}
//             </li>
//         </ul>
//     </div>
// `;


// 4. Nested
// HTML FRAGMENT BERSARANG

const mhs = {
    nama: 'dicky',
    semester: 8,
    matakuliah: [
        'Interaksi Mobil',
        'Busi Motor',
        'Karbu Injektor',
        'Palu Gadang']
};

function cetakMataKuliah(matakuliah) {
    return `
        <ol>
            ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}


const el = `<div class="mahasiswa">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.matakuliah)}
</div>`;
document.body.innerHTML = el;

