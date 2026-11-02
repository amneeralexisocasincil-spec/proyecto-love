
document.addEventListener("DOMContentLoaded", function () {

    const stars = document.getElementById("stars");
    const particles = document.getElementById("particles");
    const hearts = document.getElementById("hearts");

    const letterButton = document.getElementById("letterButton");
    const letter = document.getElementById("letter");

    const surpriseButton = document.getElementById("surpriseButton");
    const surprise = document.getElementById("surprise");

    // COMPROBAR QUE LOS ELEMENTOS EXISTAN
    if (!letterButton || !letter || !surpriseButton || !surprise) {
        console.error("Error: No se encontraron los botones o sus secciones.");
        return;
    }

    // CREAR ESTRELLAS
    if (stars) {
        for (let i = 0; i < 120; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.animationDuration = (Math.random() * 2 + 1) + "s";
            stars.appendChild(star);
        }
    }

    // CREAR PARTÍCULAS
    function createParticle() {
        if (!particles) return;

        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = (Math.random() * 100 + 50) + "%";
        particle.style.animationDuration = (Math.random() * 3 + 3) + "s";

        particles.appendChild(particle);

        setTimeout(function () {
            particle.remove();
        }, 6000);
    }

    if (particles) {
        setInterval(createParticle, 250);
    }

    // CREAR CORAZONES
    function createHeart() {
        if (!hearts) return;

        const heart = document.createElement("div");
        heart.classList.add("heart");

        const heartTypes = ["💗", "💖", "💕", "❤️", "💘"];

        heart.textContent =
            heartTypes[Math.floor(Math.random() * heartTypes.length)];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (Math.random() * 25 + 15) + "px";
        heart.style.animationDuration = (Math.random() * 4 + 4) + "s";

        hearts.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 8500);
    }

    if (hearts) {
        setInterval(createHeart, 350);
    }

    // LLUVIA DE CORAZONES
    function heartRain() {
        for (let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 80);
        }
    }

    setTimeout(heartRain, 1000);

    // ABRIR Y CERRAR LA CARTA
    letterButton.addEventListener("click", function () {

        letter.classList.toggle("hidden");

        if (letter.classList.contains("hidden")) {
            letterButton.innerHTML = "💌 Abrir mi carta";
        } else {
            letterButton.innerHTML = "💗 Cerrar mi carta";

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            heartRain();
        }
    });

    // MOSTRAR Y OCULTAR LA SORPRESA
    surpriseButton.addEventListener("click", function () {

        surprise.classList.toggle("hidden");

        if (surprise.classList.contains("hidden")) {
            surpriseButton.innerHTML = "¡Quiero verlo! ✨";
        } else {
            surpriseButton.innerHTML = "Ocultar sorpresa ❤️";

            surprise.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            heartRain();

            for (let i = 0; i < 30; i++) {
                setTimeout(createParticle, i * 100);
            }
        }
    });

    console.log("❤️ Página de ANGIE cargada correctamente ❤️");

});
