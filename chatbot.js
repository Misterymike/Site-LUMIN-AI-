
function sendMessage() {
    let inputField = document.getElementById("chatbot-input");
    let message = inputField.value.trim();
    if (message === "") return;

    let chatbox = document.getElementById("chatbot-messages");
    chatbox.innerHTML += "<p><strong>Tu:</strong> " + message + "</p>";
    inputField.value = "";

    let response = getResponse(message);
    chatbox.innerHTML += "<p><strong>LUMIN AI:</strong> " + response + "</p>";

    textToSpeech(response);
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function getResponse(userInput) {
    let responses = {
        "olá": "Olá! Como posso ajudar-te hoje?",
        "o que é a lumin ai": "A LUMIN AI é uma assistente virtual para ajudar-te a aprender sobre Inteligência Artificial!",
        "como posso comprar o ebook": "Podes comprar o eBook na página de compra do site.",
        "adeus": "Até breve! Sempre que precisares, estarei aqui."
    };

    let defaultResponse = "Desculpa, não entendi. Podes reformular a pergunta?";

    return responses[userInput.toLowerCase()] || defaultResponse;
}

function textToSpeech(text) {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "pt-PT";
    window.speechSynthesis.speak(speech);
}
