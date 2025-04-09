// Fragen des Quizzes
const questions = [
    { question: "Was ist die Hauptstadt von Deutschland?", answer: "Berlin" },
    { question: "Wie viele Kontinente gibt es auf der Erde?", answer: "7" },
    { question: "Was ist der längste Fluss der Welt?", answer: "Amazonas" },
    { question: "Wie viele Planeten gibt es in unserem Sonnensystem?", answer: "8" },
    { question: "In welchem Jahr landeten die ersten Menschen auf dem Mond?", answer: "1969" },
    { question: "Wer malte das Bild 'Die Mona Lisa'?", answer: "Leonardo da Vinci" },
    { question: "Welches Element hat das chemische Symbol 'O'?", answer: "Sauerstoff" },
    { question: "Was ist der höchste Berg der Welt?", answer: "Mount Everest" },
    { question: "Welches Land hat die größte Bevölkerung?", answer: "China" },
    { question: "Wie viele Farben hat der Regenbogen?", answer: "7" }
];

let currentQuestionIndex = 0;
let score = 0;

// Lade die Frage
function loadQuestion(index) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    const label = document.createElement("label");
    label.textContent = `${index + 1}. ${questions[index].question}`;
    questionElement.appendChild(label);

    const input = document.createElement("input");
    input.type = "text";
    input.id = `q${index}`;
    input.name = `q${index}`;
    questionElement.appendChild(input);

    const form = document.getElementById("quizForm");
    form.innerHTML = ""; // Form zurücksetzen
    form.appendChild(questionElement);

    const nextButton = document.getElementById("nextButton");
    nextButton.style.display = "inline-block"; // Zeige den Button
    nextButton.textContent = "Antwort bestätigen";
    nextButton.disabled = false; // Button aktivieren
}

// Überprüfe die Antwort und gehe zur nächsten Frage
function nextQuestion() {
    const userAnswer = document.getElementById(`q${currentQuestionIndex}`).value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    const resultDiv = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        score++;
        resultDiv.innerHTML = "Richtig!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = `Falsch! Die richtige Antwort war: ${correctAnswer}`;
        resultDiv.style.color = "red";
    }

    // Button deaktivieren und erst nach 1 Sekunde die nächste Frage laden
    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = true;

    // Warte 1 Sekunde und lade die nächste Frage oder zeige die Ergebnisse
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
            resultDiv.innerHTML = ""; // Lösche das Ergebnis
        } else {
            showResults(); // Alle Fragen wurden beantwortet
        }
    }, 1000);
}

// Zeige die Ergebnisse und das Video
function showResults() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Du hast ${score} von ${questions.length} Fragen richtig beantwortet!`;

    // Zeige das Video
    showVideo();
}

// Zeige das Video nach dem Quiz
function showVideo() {
    const quizSection = document.getElementById("quizSection");
    quizSection.style.display = "none"; // Verstecke das Quiz

    const videoSection = document.getElementById("videoSection");
    videoSection.style.display = "block"; // Zeige das Video
}

// Initialisiere das Quiz
document.addEventListener("DOMContentLoaded", function() {
    loadQuestion(currentQuestionIndex); // Lade die erste Frage
});
