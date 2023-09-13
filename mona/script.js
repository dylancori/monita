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

            particlesJS('fireworks', {
                "particles": {
                    "number": {
                        "value": 100, // Número de partículas de fuegos artificiales
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ff0000" // Color de las partículas de fuegos artificiales (rojo)
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 4,
                            "size_min": 0.3,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "top-right",
                        "random": true,
                        "straight": true,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
            
            // Cargar los fuegos artificiales
            particlesJS.load('hearts', 'fireworks.js', function() {
                console.log('Fuegos artificiales cargados');
            });
        }
    });

    
    // Elimina el corazón después de un tiempo
    setTimeout(() => {
        heart.remove();
    }, 1000); // Cambia este valor para ajustar la duración de los corazones en pantalla
}

// Crea corazones en el fondo continuamente
heartGenerationInterval = setInterval(createHeart, 1000);
