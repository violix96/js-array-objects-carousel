// reset js 
'use strict'

// controllo collegamento 

console.log('ciao mondo');

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

// itero attraverso ogni elemento nell'array images
const divItems = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// creo una variabile che tiene traccia dell'indice dell'immagine attualmente visualizzata
let currentImg = 0;

// itero attraverso ogni elemento nell'array images e creo gli elementi html per le immagini i titoli e i testi
images.forEach((element, index) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    // imposto il percorso dell'immagine
    img.src = element.image;

    // imposto il testo del titolo
    h1.textContent = element.title;

    // imposto il testo del paragrafo
    p.textContent = element.text;

    //  aggiungo la classe itim al div 
    div.classList.add('item');

    //  aggiungo la classe active al primo elemento 
    if (index === currentImg) {
        div.classList.add('active');
    }


    // aggiungo gli elementi html al div 
    div.append(img, h1, p);

    // aggiungo il div al container del carosello 
    divItems.appendChild(div);
});


