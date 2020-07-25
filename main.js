//Selecionado todas as teclas
const keys = document.querySelectorAll('.key');
//Tocar notas
function playNote(event) {
  //Pegar o keyCode
  let audioKeyCode = getKeyCode(event);
  //Pegar a tecla pressionada
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  //if tecla está mapeada
  const cantFoundAnyKey = !key;
  if (cantFoundAnyKey) {
    return;
  }
  addPlayingClass(key);
  //tocar audio
  playAudio(audioKeyCode);
}

//criando efeito de pressionado
function addPlayingClass(key) {
  key.classList.add('playing');
}

//Tocando o audio
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

//Monitorando eventos do teclado/moura

function getKeyCode(event) {
  let keyCode;

  //Pegando o o tipo do evento
  const isKeyboard = event.type === 'keydown';
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}

function removePlayingClass(event) {
  event.target.classList.remove('playing');
}

//Eventos com o mouse
//Monitoramento de todas a teclas
keys.forEach(function (key) {
  //Quando uma das teclas for clicada com o mouse
  key.addEventListener('click', playNote);
  //Depois de tocar a teclado
  key.addEventListener('transitionend', removePlayingClass);
});
// eventos do teclados
window.addEventListener('keydown', playNote);
