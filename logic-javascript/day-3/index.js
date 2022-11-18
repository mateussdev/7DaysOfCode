const way = document.querySelector("#way");

const divChoice = document.querySelector("#divChoice");
divChoice.style.display = "none";

const choice = document.querySelector("#choice");

const question = document.querySelector("#question");

const divAdvanceOnTheWay = document.querySelector("#divAdvanceOnTheWay");
divAdvanceOnTheWay.style.display = "none";

const advanceText = document.querySelector("#advanceText");
const res = document.querySelector("#res");

const moreQuestions = document.querySelector("#moreQuestions");
moreQuestions.style.display = "none";

const language = "";

function setWay() {
  if (
    way.value == "front-end" ||
    way.value == "Front-End" ||
    way.value == "frontend"
  ) {
    divChoice.style.display = "block";
    question.textContent = "Você quer aprender React ou Vue?";
    language = choice.value;
  } else if (
    way.value == "back-end" ||
    way.value == "Back-End" ||
    way.value == "backend"
  ) {
    divChoice.style.display = "block";
    question.textContent = "Você quer aprender C# ou Java?";
    language = choice.value;
  } else {
    alert("Escolha inválida!!!");
  }
}

function advanceOnTheWay() {
  advanceText.textContent = `Você quer seguir se especializando em ${language} ou se desenvolver para se tornar Fullstack? Digite 1 para Especializar ou 2 para Fullstack.`;
  divAdvanceOnTheWay.style.display = "block";
}

function setChoice() {
  const advance = document.querySelector("#advance");

  if (Number(advance.value) === 1) {
    res.textContent = `Muito bem, continue se esforçando e estudando ${String(language)}, e você será um ótimo desenvolvedor ${way.value}.`;
  } else if (Number(advance.value) === 2) {
    res.textContent = `Muito bem, continue se esforçando e estudando ${String(language)}, e você será um ótimo desenvolvedor Fullstack.`;
  } else {
    alert("Escolha inválida!!!");
  }

  moreQuestions.style.display = "block";
}

function languages() {
  let msg = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' caso você queira adicionar uma linguagem."
  );
  while (msg === "ok" || msg === "OK") {
    let newTech = prompt("Qual?");
    alert(`${newTech} é realmente uma tecnologia muito legal!`);
    msg = prompt(
      "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' caso queira adicionar mais uma."
    );
  }
}
