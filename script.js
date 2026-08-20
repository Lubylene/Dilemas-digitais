// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
});


// ===============================
// QUIZ
// ===============================

const questions = [
    {
        question: "Qual é um dos principais problemas relacionados à privacidade digital?",
        options: [
            "Coleta e utilização de dados pessoais",
            "Aumento da velocidade da internet",
            "Criação de novos aplicativos",
            "Uso de computadores mais modernos"
        ],
        answer: 0
    },

    {
        question: "Qual atitude ajuda a combater a desinformação?",
        options: [
            "Compartilhar rapidamente todas as notícias",
            "Confiar apenas no título da notícia",
            "Verificar a fonte e comparar informações",
            "Compartilhar apenas notícias populares"
        ],
        answer: 2
    },

    {
        question: "Qual é uma forma de melhorar a segurança digital?",
        options: [
            "Usar a mesma senha em todos os sites",
            "Compartilhar senhas com amigos",
            "Clicar em qualquer link recebido",
            "Usar senhas fortes e autenticação em dois fatores"
        ],
        answer: 3
    },

    {
        question: "Qual pode ser uma consequência do uso excessivo das redes sociais?",
        options: [
            "Maior privacidade automaticamente",
            "Problemas de concentração e uso excessivo do tempo",
            "Eliminação de todas as notícias falsas",
            "Aumento automático da segurança digital"
        ],
        answer: 1
    },

    {
        question: "Qual é uma atitude responsável ao utilizar inteligência artificial?",
        options: [
            "Aceitar qualquer resposta sem verificar",
            "Usar a IA como substituta completa do pensamento crítico",
            "Verificar informações e utilizar a tecnologia de forma ética",
            "Compartilhar dados pessoais para obter respostas melhores"
        ],
        answer: 2
    }
];

const quizContainer = document.getElementById("quiz-container");
const finishButton = document.getElementById("finish-quiz");
const result = document.getElementById("result");


// Cria as perguntas
function createQuiz() {

    questions.forEach((item, questionIndex) => {

        const questionElement = document.createElement("div");

        questionElement.classList.add("question");

        questionElement.innerHTML = `
            <h3>
                ${questionIndex + 1}. ${item.question}
            </h3>

            ${item.options.map((option, optionIndex) => `
                <label class="option">
                    <input
                        type="radio"
                        name="question${questionIndex}"
                        value="${optionIndex}"
                    >
                    ${option}
                </label>
            `).join("")}
        `;

        quizContainer.appendChild(questionElement);
    });
}


// Calcula o resultado
finishButton.addEventListener("click", () => {

    let score = 0;

    questions.forEach((question, index) => {

        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (selected) {

            const answer = Number(selected.value);

            if (answer === question.answer) {
                score++;
            }
        }
    });

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    let message;

    if (percentage === 100) {
        message = "Excelente! Você demonstrou ótimo conhecimento sobre os dilemas digitais.";
    } else if (percentage >= 60) {
        message = "Muito bem! Você conhece vários dos principais desafios do mundo digital.";
    } else {
        message = "Continue estudando! Conhecer os riscos digitais ajuda a utilizar a tecnologia com mais segurança.";
    }

    result.innerHTML = `
        Você acertou ${score} de ${questions.length} questões (${percentage}%).
        <br><br>
        ${message}
    `;

    result.style.display = "block";

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});


// Inicia o quiz
createQuiz();
