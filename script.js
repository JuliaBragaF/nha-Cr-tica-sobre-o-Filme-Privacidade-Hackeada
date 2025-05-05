document.getElementById('formInscricao').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const serie = document.getElementById('serie').value;
    const modalidade = document.getElementById('modalidade').value;
    const termos = document.getElementById('termos').checked;
    if (!nomeCompleto || !idade || !serie || !modalidade || !termos) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; 
    }
    if (idade < 12) {
        alert("Desculpe, você deve ter pelo menos 12 anos para se inscrever.");
        return; 
    }
    alert("Inscrição realizada com sucesso! Boa sorte no campeonato!");
});

function atualizarContador() {
    const hoje = new Date();
    const dataCampeonato = new Date(2025, 5, 1);
    const diffTime = dataCampeonato - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const contadorElemento = document.getElementById('contador');
    if(diffDays > 0) {
        contadorElemento.textContent = `Faltam ${diffDays} dia${diffDays > 1 ? 's' : ''} para o campeonato começar!`;
    } else if (diffDays === 0) {
        contadorElemento.textContent = "O campeonato começa hoje! Boa sorte a todos!";
    } else {
        contadorElemento.textContent = "O campeonato já começou ou passou. Acompanhe os resultados!";
    }
}
window.addEventListener('load', atualizarContador);
