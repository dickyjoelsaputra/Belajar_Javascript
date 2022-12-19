// Tagged Templates

// const nama = 'Dicky Joel Saputra';
// const umur = 23;

// function coba(strings , ...args) {
//     // let result = '';

//     // strings.forEach((e , i)=> {
//     //     result += `${e}${args[i] || ''}`;
//     // });

//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
// }

// const str = coba`Halo , nama saya ${nama}, saya ${umur} tahun.`
// console.log(str);

// Highlight

 
const nama = 'Dicky Joel Saputra';
const umur = 23;

function highLight(strings , ...args) {
    return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
}

const str = highLight`Halo , nama saya ${nama}, saya ${umur} tahun.`
console.log(str);