function mostraMSG() {
    if (document.getElementById("msg-botao").innerText === "") {
        document.getElementById("msg-botao").innerText="Bingo! Pena que to sem ideia pra mensagens motivadoras!";
    } else {
        document.getElementById("msg-botao").innerText="";
    }
}
