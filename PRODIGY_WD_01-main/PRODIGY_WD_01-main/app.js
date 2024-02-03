// Sample JavaScript code for interactive features on the space website

// Function to handle virtual tours with VR integration
function startVirtualTour(location) {
    // Your virtual tour implementation goes here
    console.log(`Starting virtual tour at ${location}`);
}

// Function to load and display quizzes
function loadQuiz(quizData) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous content

    quizData.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `Question ${index + 1}: ${question.question}`;
        questionDiv.appendChild(questionText);

        question.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionLabel.appendChild(optionInput);
            optionLabel.innerHTML += ` ${option}<br>`;
            questionDiv.appendChild(optionLabel);
        });

        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    submitButton.addEventListener('click', calculateScore);
    quizContainer.appendChild(submitButton);
}

// Function to calculate and display the quiz score
function calculateScore() {
    // Your quiz scoring logic goes here
    console.log('Calculating quiz score...');
}

// Function to handle user contributions (submitting content)
function submitUserContent(content) {
    // Your user content submission logic goes here
    console.log('Submitting user content:', content);
}

// Function to toggle the visibility of the feedback form
function toggleFeedbackForm() {
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.style.display = feedbackForm.style.display === 'none' ? 'block' : 'none';
}

// Your additional JavaScript code for other interactive features can be added here

// Example usage
const sampleQuizData = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest moon in our solar system?",
        options: ["Titan", "Ganymede", "Io", "Europa"],
        correctAnswer: "Ganymede"
    },
    // Add more questions as needed
];

document.addEventListener('DOMContentLoaded', function () {
    // Load quiz on page load
    loadQuiz(sampleQuizData);
});
