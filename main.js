const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
        answer: "Blue Whale"
    },
    {
        question: "Who was captain of CSK ?",
        options: ["MSD", "Rohit Sharma", "Virat Kholi", "SKYÍ"],
        answer: "William Shakespeare"
    }
]
    let currentQuestionIndex = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const a_label = document.getElementById("a_label");
    const b_label = document.getElementById("b_label");
    const c_label = document.getElementById("c_label");
    const d_label = document.getElementById("d_label");
    const submitButton = document.getElementById("submit");
    const feedbackEl = document.getElementById("feedback");

    function loadQuestion() {
        // Clear previous selection
        document.querySelectorAll(".answer").forEach(input => input.checked = false);
        feedbackEl.innerText = "";

        // Load current question and options
        const currentQuestion = quizData[currentQuestionIndex];
        questionEl.innerText = currentQuestion.question;
        a_label.innerText = currentQuestion.options[0];
        b_label.innerText = currentQuestion.options[1];
        c_label.innerText = currentQuestion.options[2];
        d_label.innerText = currentQuestion.options[3];
    }

    function getSelectedAnswer() {
        const selectedInput = document.querySelector("input[name='answer']:checked");
        if (selectedInput) {
            return document.querySelector(`label[for=${selectedInput.id}]`).innerText;
        }
        return null;
    }

    submitButton.addEventListener("click", () => {
        const selectedAnswer = getSelectedAnswer();

        if (selectedAnswer) {
            if (selectedAnswer === quizData[currentQuestionIndex].answer) {
                score++;
                feedbackEl.innerText = "Correct!";
            } else {
                feedbackEl.innerText = "Incorrect!";
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < quizData.length) {
                setTimeout(loadQuestion, 1000); // Load the next question after a short delay
            } else {
                feedbackEl.innerText = `Quiz completed! Your score is ${score} out of ${quizData.length}`;
                submitButton.disabled = true;
            }
        } else {
            feedbackEl.innerText = "Please select an answer!";
        }
    });

    // Load the first question initially
    loadQuestion();