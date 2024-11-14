// haetaan viittaus ekaan h1 elementtiin domissa ja sijoitetaan muuttujaan
const h1Element = document.querySelector('h1');

console.log('viittaus ekaan h1 elementtiin domissa', h1Element);

// haetaan viittaus ensimmäiseen .text luokan sisältävään elementtiin
document.querySelector('.text').innerText = 'Päivitetty teksti';

// haetaan viittaus kaikkiin .text luokan sisältäviin elementteihin
const textElements = document.querySelectorAll('.text');
console.log('.text elementit', textElements);

// päivitetään toista esiintymää
textElements[1].innerText = 'Päivitetty JS:n kautta';

// haetaan viittaus jo olemassa olevan dom-viittauksen avulla
console.log(h1Element.parentElement.querySelector('p'));

// lisätään uusi tekstikappale bodyyn
const pElement = document.createElement('p');
pElement.textContent = 'Uusi kappale.'
h1Element.parentElement.append(pElement);

// BOM (window-objekti tarjoaa rajapinnan selaimen toiminnallisuuksiin)
window.alert("Aloita paikannus?"); // toimii myös alert()
// esim. window.document
const pLocation = document.createElement('p');
pLocation.textContent = 'paikannetaan...';
document.querySelector('body').append(pLocation);
// geolocation api
navigator.geolocation.getCurrentPosition(function (location) {
    console.log('paikannettu: ', location);
    pLocation.textContent = `Sijaintisi: ${location.coords.latitude},
        ${location.coords.longitude}, tarkkuus: ${location.coords.accuracy}`;
});

// sijainti (selaimen url)
console.log(location.href)

console.log("ohjelman loppu");
