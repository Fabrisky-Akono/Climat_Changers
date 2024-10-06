
const questions = [
    {
        question: "What event marked the beginning of Earth Day celebrations? 🌎",
        options: ["The first climate conference", "The first Earth Day in 1970 🎉", "The discovery of the greenhouse effect"],
        answer: 1
    },
    {
        question: "When was the IPCC established? 📅",
        options: ["1985", "1988 🏛️", "1992"],
        answer: 1
    },
    {
        question: "What are the main causes of climate change mentioned? 🔥",
        options: ["Human activities 🧑‍🤝‍🧑", "Volcanoes 🌋", "Earth's orbital changes"],
        answer: 0
    },
    {
        question: "Which movement inspired millions worldwide to act on climate issues? 🌟",
        options: ["Youth climate movement 👩‍🌾", "Paris Agreement", "Peace protests ✌️"],
        answer: 0
    },
    {
        question: "What greenhouse gases are primarily associated with human activity? 💨",
        options: ["Oxygen", "CO₂ and CH₄ 🌬️", "Helium"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    $("#question").text(currentQuestion.question);
    $("#options").empty();
    currentQuestion.options.forEach((option, index) => {
        $("#options").append(`<button class="option bg-gray-200 text-left p-2 mb-2 rounded hover:bg-blue-300" data-index="${index}">${option}</button>`);
    });
    $("#next-button").hide();
    $("#question-number").text(currentQuestionIndex + 1);
    $("#total-questions").text(questions.length);
}

$(document).on("click", ".option", function() {
    const selectedIndex = $(this).data("index");
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
        $(this).append(' ✅'); // Correct answer
    } else {
        $(this).append(' ❌'); // Incorrect answer
    }
    $(".option").prop("disabled", true);
    $("#next-button").show();
});

$("#next-button").click(function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        $("#quiz-container").hide();
        $("#result").show();
        $("#score").text(`${score} / ${questions.length}`);
    }
});

$("#restart-button").click(function() {
    currentQuestionIndex = 0;
    score = 0;
    $("#result").hide();
    $("#quiz-container").show();
    loadQuestion();
});

// Initial load
loadQuestion();
