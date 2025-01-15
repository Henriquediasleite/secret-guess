window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', (event) => {
    console.log(event.results[0][0].transcript)
})