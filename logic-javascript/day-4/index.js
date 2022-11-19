function game() {
  const number = Math.floor(Math.random() * (10 - 0 + 1) + 0);

  const guess = prompt(
    "Pensei em um número entre 0 e 10. Dê o seu palpite de que número é esse!"
  );

  if (guess == number) {
    alert("Parabéns!!! Você acertou!");
  } else {
    alert(
      "Que pena, você errou!!! Você só tem mais duas tentativas, use com sabedoria!"
    );

    let i = 1;
    while (i < 3) {
      const guessExtra = prompt("Tente outra vez...");
      if (guessExtra == number) {
        alert("Parabéns, você acertou!!!");
        i = 4;
      }
      i++;
      if (guessExtra != number && i >= 3) {
        alert(`Infelizmente você não acertou, o númera era ${number}`);
        i = 4;
      }
    }
  }
}

game();
