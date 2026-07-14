<img width="1522" height="727" alt="image" src="https://github.com/user-attachments/assets/99fd687f-4a02-4a02-9db6-8cc0750833ea" />

# 🔮 Gerador de Conselhos do Dia

Um projeto simples, moderno e responsivo desenvolvido para praticar conceitos essenciais de desenvolvimento web front-end (**HTML5**, **CSS3** e **JavaScript ES6**). O projeto se conecta a uma API externa para buscar conselhos de forma assíncrona e traduz as respostas automaticamente para o português brasileiro utilizando um serviço de tradução gratuito.

---

## 🚀 Funcionalidades

* **Busca Assíncrona:** Conexão direta com a *Advice Slip API* para obter conselhos aleatórios.
* **Tradução em Tempo Real:** Integração automática com a API *MyMemory* para converter o conteúdo em inglês para português brasileiro instantaneamente.
* **Feedback Visual:** Indica visualmente o estado de carregamento ("Buscando sabedoria...") enquanto os dados são processados.
* **Visual Moderno (Glassmorphic):** Layout minimalista com efeito de vidro reflexivo (*backdrop-filter*), cantos arredondados e cores sóbrias no estilo escuro.
* **Totalmente Responsivo:** Ajusta-se perfeitamente a dispositivos móveis, tablets e computadores.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Estilização com variáveis, degradê linear, efeitos de transição/hover, sombras suaves e responsividade.
* **JavaScript (ES6):** Manipulação de DOM, escuta de eventos, funções assíncronas (`async/await`) e consumo de APIs externas com `fetch`.

---

## 📁 Estrutura de Arquivos

O projeto está organizado na pasta `/app` da seguinte forma:

```text
GERADOR-CONSELHO/
└── app/
    ├── index.html   # Estrutura e marcação da página
    ├── style.css    # Design, cores e layout (Glassmorphism)
    └── script.js    # Lógica de integração e tradução das APIs
```

---

## 💻 Como Rodar o Projeto Localmente

1. **Clonar ou baixar os arquivos:**
   Garantir que a pasta `app` contém os três arquivos fundamentais listados acima.

2. **Abrir com o VS Code:**
   Abra a pasta raiz no seu editor de código.

3. **Utilizar o Live Preview (Recomendado):**
   * Certifique-se de ter a extensão oficial **Live Preview** (da Microsoft) instalada no VS Code.
   * Abra o arquivo `index.html`.
   * Clique com o botão direito sobre o código e selecione **Show Preview** para ver a aplicação funcionando em tempo real.

4. **Navegador Padrão:**
   Se preferir, basta dar um clique duplo no arquivo `index.html` para executá-lo diretamente no navegador de sua preferência.

---

## 🔌 APIs Consumidas

1. **[Advice Slip JSON API](https://api.adviceslip.com/)**: Fornece um banco de dados gigantesco com conselhos práticos e motivacionais de forma aleatória.
2. **[MyMemory Translation API](https://mymemory.translated.net/)**: Serviço de tradução pública e gratuita utilizado para traduzir o texto original de inglês para português brasileiro (`en|pt-br`).

---

Desenvolvido para fins didáticos e consolidação de estudos front-end! 💻✨
