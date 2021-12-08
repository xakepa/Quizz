function quizz() {
  function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter.toUpperCase()} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      output.push(
        `<div class="slide">
        <div class="picture">
          <img src="${currentQuestion.image}"></img>
          </div>
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer == currentQuestion.correct) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lime";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} от ${questions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
      resetButton.style.display = "block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
      resetButton.style.display = "none";
    }
  }

  function showNextSlide() {
    const picture = document.querySelector(".active-slide").firstElementChild;
    showSlide(currentSlide + 1);
    help.style.display = "block";
    picture.style.display = "none";
  }

  function showPreviousSlide() {
    const picture = document.querySelector(".active-slide").firstElementChild;
    console.log(picture);
    showSlide(currentSlide - 1);
    help.style.display = "block";
    picture.style.display = "none";
  }

  function showHelp() {
    const picture = document.querySelector(".active-slide").firstElementChild;
    picture.style.display = "block";
    help.style.display = "none";
  }

  function resetQuizz() {
    resultsContainer.innerHTML = "";
    quizz();
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const resetButton = document.getElementById("reset");
  const questions = [
    {
      question: "Коя е най-скъпата книга продавана в света?",
      image: "images/codex.jpg",
      answers: {
        а: "География космография",
        b: "Кодекс Лестър",
        c: "Речник на хазарите",
        d: "Първата книга на Уризен",
      },
      correct: "b",
    },
    {
      question:
        "Какви живи същества са използвали учените през 19 век за измерване на температурата на въздуха?",
      image: "images/shturec.jpg",
      answers: {
        a: "Котки",
        b: "Бикове",
        c: "Щурци",
        d: "Лъвове",
      },
      correct: "c",
    },
    {
      question: "Столица на коя държава е Рейкявик?",
      image: "images/iceland.jpg",
      answers: {
        a: "Швеция",
        b: "Норвегия",
        c: "Исландия",
        d: "Дания",
      },
      correct: "c",
    },
    {
      question: "Какво се използва за отопление в Рейкявик през зимата?",
      image: "images/reykjavik.jpg",
      answers: {
        a: "Вятърна енергия",
        b: "Геотермално отопление",
        c: "Слънчева енергия",
        d: "Климатици",
      },
      correct: "b",
    },
    {
      question:
        "Какво означава 60 чифта обувки на брега на р. Дунав в Будапеща?",
      image: "images/shoes.jpg",
      answers: {
        a: "Паметник, посветен на унгарската мода",
        b: "Паметник, посветен на обущарите",
        c: "Паметник на модата",
        d: "Мемориал на холокоста",
      },
      correct: "d",
    },
    {
      question:
        "Защо статуята на Христос Спасител в Рио де Жанейро няма няколко пръста на дясната си ръка?",
      image: "images/rio.jpg",
      answers: {
        a: "Повреден е при катерене",
        b: "Загубени по време на инсталацията",
        c: "Счупени от туристи",
        d: "Статуята е ударена от мълния",
      },
      correct: "d",
    },
    {
      question:
        "За какво служи малката дупчица в долната част на прозореца на самолета?",
      image: "images/window.jpg",
      answers: {
        a: "Балансира налягането на въздуха",
        b: "Намалява температурата в кабината",
        c: "Блокира звуци от двигателя",
        d: "За да влиза въздух в кабината",
      },
      correct: "a",
    },
    {
      question: "Какво причинява жълтеница?",
      image: "images/formula.png",
      answers: {
        a: "Прекалено много пот",
        b: "Прекалено много коса",
        c: "Прекалено много кръв",
        d: "Прекалено много билирубин",
      },
      correct: "d",
    },
    {
      question:
        "Колко време кучето Хачико е чакало господаря си на гара Шибуя?",
      image: "images/hachi.jpg",
      answers: {
        a: "9 години",
        b: "3 години",
        c: "1 години",
        d: "7 години",
      },
      correct: "a",
    },
    {
      question: "Какво първоначално обменя Pepsi Co със СССР за техният сироп?",
      image: "images/ruski-standart.jpg",
      answers: {
        a: "Стомана",
        b: "Злато",
        c: "Водка",
        d: "Суров нефт",
      },
      correct: "c",
    },
  ];
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  resetButton.addEventListener("click", resetQuizz);
  help.addEventListener("click", showHelp);
}
quizz();
