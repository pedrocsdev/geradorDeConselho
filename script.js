const adviceText = document.getElementById('advice-text');
const adviceBtn = document.getElementById('advice-btn');

async function getAdvice() {
    adviceText.innerText = 'Buscando sabedoria...';

    try {
        // 1. Busca o conselho em inglês
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const adviceEnglish = data.slip.advice; // Nome corrigido aqui

        // 2. Traduz o conselho (Usando a variável correta: adviceEnglish)
        const translationResponse = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(adviceEnglish)}&langpair=en|pt-br`);
        const translationData = await translationResponse.json();
        const adviceInPortuguese = translationData.responseData.translatedText;

        // 3. Exibe na tela (Adicionado o sinal de "=" que faltava)
        adviceText.innerText = `"${adviceInPortuguese}"`;

    } catch (error) {
        adviceText.innerText = "Ops! Não consegui buscar um conselho agora. Tente novamente.";
        console.error("Erro na busca do conselho:", error);
    }
}

adviceBtn.addEventListener('click', getAdvice);