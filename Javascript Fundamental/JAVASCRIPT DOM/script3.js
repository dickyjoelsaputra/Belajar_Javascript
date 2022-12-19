

// // inner HTML
// const judul = doccument.getElementById('judul');
// judul.innerHTML = '<em> Dicky Joel </em>';

// const sectionA = document.querySelector('section#a a');
// sectionA.innerHTML = 'hello World!';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


// // atribut
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name','sandika');

// get atribut
console.log(document.querySelector('a').getAttribute('href'));

//remove attribue
console.log(document.querySelector('a').removeAttribute('href'));

// menambah isi atribut
const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');
// element.classList.add()
// element.classList.remove()
// element.classList.toggle()
// element.classList.item() //mengecek kelas ke berapa menggunakan array
// element.classList.contains() //mengecek kelas apakah ada , return boolean
// element.classList.replace()
p2.classList.add('label','p');
// p2.classList.remove('label');
p2.classList.toggle('label');