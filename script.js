const starContainer = document.getElementById('stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starContainer.appendChild(star);
}

for (let i = 0; i < 200; i++) {
    createStar();
}
