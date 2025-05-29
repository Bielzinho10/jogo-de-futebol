function jogar() {
    const times = ["Brasil", "Argentina", "França", "Alemanha"];
    const timeJogador = document.getElementById("timeJogador").value;

    // Escolher time adversário diferente do jogador
    let timeComputador = timeJogador;
    while (timeComputador === timeJogador) {
        timeComputador = times[Math.floor(Math.random() * times.length)];
    }

    // Simulação de gols (6 rodadas representando 15 minutos cada)
    let golsJogador = 0;
    let golsComputador = 0;

    for (let i = 0; i < 6; i++) {
        if (Math.random() < 0.5) golsJogador += Math.floor(Math.random() * 2);
        if (Math.random() < 0.5) golsComputador += Math.floor(Math.random() * 2);
    }

    // Definir o resultado
    let resultadoTexto = "";
    if (golsJogador > golsComputador) {
        resultadoTexto = "🏆 Você venceu!";
    } else if (golsJogador < golsComputador) {
        resultadoTexto = "💔 Você perdeu.";
    } else {
        resultadoTexto = "🤝 Empate.";
    }

    // Exibir o resultado na tela
    document.getElementById("resultado").innerHTML = `
        <h2>🔥 ${timeJogador} 🆚 ${timeComputador} 🔥</h2>
        <p><strong>${timeJogador}</strong> ${golsJogador} x ${golsComputador} <strong>${timeComputador}</strong></p>
        <h3>${resultadoTexto}</h3>
    `;
}
