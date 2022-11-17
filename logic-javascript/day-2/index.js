function app() {
  let name = prompt("Qual o seu nome?");
  let age = prompt("Quantos anos você tem?");
  let language = prompt("Qual linguegem de programação você está estudando?");

  alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}.`);

  let extraQuestion = Number(
    prompt(
      `Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`
    )
  );

  if (extraQuestion === 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  }

  if (extraQuestion === 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  }
}

app();
