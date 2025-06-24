const questions = [
    {
      question: "Which language runs in a web browser?",
      answers: ["Java", "C", "Python", "JavaScript"],
      correct: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      answers: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
      correct: "Cascading Style Sheets"
    },
    {
      question: "What does HTML stand for?",
      answers: ["HyperText Markup Language", "HyperText Markdown Language", "HyperLoop Machine Language", "None of the above"],
      correct: "HyperText Markup Language"
    },
    {
      question: "What year was JavaScript launched?",
      answers: ["1996", "1995", "1994", "none of the above"],
      correct: "1995"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".option-btn");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result");
  const quizContainer = document.getElementById("quiz");
  const scoreText = document.getElementById("score");
  
  function showQuestion() {
    resetState();
    let q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionButtons.forEach((btn, index) => {
      btn.textContent = q.answers[index];
      btn.classList.remove("correct", "wrong");
      btn.disabled = false;
    });
  }
  
  function selectAnswer(button) {
    let selected = button.textContent;
    let correct = questions[currentQuestion].correct;
    if (selected === correct) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
      optionButtons.forEach(btn => {
        if (btn.textContent === correct) btn.classList.add("correct");
      });
    }
    optionButtons.forEach(btn => btn.disabled = true);
    nextButton.style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function resetState() {
    nextButton.style.display = "none";
  }
  
  function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreText.textContent = `${score} / ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    showQuestion();
  }
  
  showQuestion();
  