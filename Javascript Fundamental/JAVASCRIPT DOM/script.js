// Method atau Fungsi untuk DOM Selection 

// getElementById() === element
// getElementsByTagName() === htmlCollection
// getElementsByClassName() === htmlCollection
// querySelector() === element
// querySelectorAll() === nodeList


const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'blue';
judul.innerHTML = 'DIcky jOel';

const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'blue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini dirubah oleh javascript';