const p3 = document.querySelector('section#a .p3');
const p2 = document.querySelector('section#a .p2');

function ubahWarna(){
    p2.style.backgroundColor = 'lightblue';
}

p2.onclick = ubahWarna;


// membuat li baru di section b
const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru ditambahkan');

    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});


// gunakan eventlist jangan eventhandle

