// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.inserBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

// DOM MANIPULATION

//buat elemen baru
const pBaru = document.createElement('p'); 
const testBaru = document.createTextNode('Titid Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(testBaru);

// simpan p baru di akhir section a
// const sectionA = document.getElementById('a');
const sectionA = document.querySelector('section#a');
sectionA.appendChild(pBaru);

const listBaru = document.createTextNode('Titid Baru Titid Titids');
const liBaru = document.createElement('li'); 
liBaru.appendChild(listBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// const li2 = ul.querySelectorAll('li');

ul.insertBefore(liBaru,li2);
// ul.insertBefore(liBaru,li2[1]);


// remove child dan replace child
const link = sectionA.querySelector('a');

sectionA.removeChild(link);

const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2'); 
const sectionbJudulBaru = document.createTextNode('Dicky Ganteng');
h2Baru.appendChild(sectionbJudulBaru);

sectionB.replaceChild(h2Baru,p4);