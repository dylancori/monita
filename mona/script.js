let clickCount = 0;
const maxClicks = 8;
const totalClicksNeeded = 8;
const popup = document.getElementById('popup');
const message = document.getElementById('message');

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    return { x, y };
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const position = getRandomPosition();
    heart.style.top = position.y + 'px';
    heart.style.left = position.x + 'px';
    document.body.appendChild(heart);

    heart.addEventListener('click', () => {
        heart.remove();
        clickCount++;
        const clicksRemaining = totalClicksNeeded - clickCount;
        if (clicksRemaining > 0) {
            message.innerText = `Toca el corazón ${clicksRemaining} veces más para una sorpresa`;
        } else if (clicksRemaining === 0) {
            document.body.style.backgroundColor = 'pink';
            popup.style.display = 'flex';
            message.innerText = ''
            clearInterval(heartGenerationInterval);

        }
    });

    
    // Elimina el corazón después de un tiempo
    setTimeout(() => {
        heart.remove();
    }, 1000); // Cambia este valor para ajustar la duración de los corazones en pantalla
}

// Crea corazones en el fondo continuamente
heartGenerationInterval = setInterval(createHeart, 1000);
