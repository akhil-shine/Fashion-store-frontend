const hero = document.querySelector('.hero');
const heroText = document.getElementById('heroText');

const images = [
    { url: 'http://localhost:5502/assets/img/nb2.jpg', text: 'Fing the Right Style!' },
    { url: 'http://localhost:5502/assets/img/nb3.jpg', text: 'Flat 50% Off! for Selected Products' },
    { url: 'http://localhost:5502/assets/img/ba1.jpg', text: 'Welcome to our store!' },
];

let currentIndex = 0;

function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = `url('${images[currentIndex].url}')`;
    heroText.textContent = images[currentIndex].text; // Update text
}

setInterval(changeBackgroundImage, 5000);
