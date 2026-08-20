// Menu mobile
const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Fecha o menu ao clicar em um link
const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});

// Mostra/esconde as respostas dos dilemas
const questionButtons = document.querySelectorAll(".question-btn");

questionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        answer.classList.toggle("show");

        if (answer.classList.contains("show")) {
            button.textContent = "Ocultar dilema";
        } else {
            button.textContent = "Ver dilema";
        }
    });
});

// Reflexões aleatórias
const reflections = [
    "Será que estamos usando a tecnologia para facilitar nossa vida ou permitindo que ela controle nossa rotina?",

    "Quanto da nossa privacidade estamos dispostos a abrir mão em troca de praticidade?",

    "A inteligência artificial deve apenas nos ajudar ou também pode tomar decisões importantes por nós?",

    "Ter acesso à informação não significa necessariamente saber diferenciar informação verdadeira de desinformação.",

    "Talvez o maior desafio digital não seja aprender a usar novas tecnologias, mas aprender quando não usá-las."
];

const reflectionButton = document.getElementById("reflection-btn");
const reflectionText = document.getElementById("reflection-text");

reflectionButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * reflections.length);

    reflectionText.textContent = reflections[randomIndex];
    reflectionText.classList.add("show");

    reflectionButton.textContent = "Nova reflexão";
});
