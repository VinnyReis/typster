var keySound = new Audio('./src/sounds/keySound.mp3');
var errorSound = new Audio('./src/sounds/errorSound.mp3');
var correctWordSound = new Audio('./src/sounds/correctWordSound.mp3');

var current_word_div = document.getElementById('word');
var next_words_div = document.getElementById('next_words');

document.addEventListener('keypress', handleKeyPress);
document.addEventListener('keydown', handleBackspace);

var wordCounter = 0;
var correctCounter = 0;
var errorCounter = 0;

var wordList = [
  'esteganografia',
  'vinicius',
  'poesia',
  'alucinação',
  'tripophobia',
  'manikeismo',
  'hiperventilação',
  'musician',
  'facility',
  'human'
];

var current_word = wordList[wordCounter];
var typed_word = '';

getNextWord();
updateNextWords();

function handleKeyPress(e){
  if(current_word[typed_word.length] === e.key){
    updateLetter(String(typed_word.length), 'correct');
    playSound(keySound);
    correctCounter += 1;
    typed_word += e.key;

    if(current_word.length === typed_word.length){
      playSound(correctWordSound);
      getNextWord();
      updateNextWords();
    };
  } else {
    errorCounter += 1;
    updateLetter(String(typed_word.length), 'wrong');
    playSound(errorSound);
  };
};

function handleBackspace(e){
  if(e.key === 'Backspace'){
    updateLetter(String(typed_word.length), 'wrong');
    typed_word = typed_word.slice(0, -1);
  }
};

function updateLetter(id, status){
  let current_letter = document.getElementById(id);

  if(status === 'correct')
    current_letter.style.color = '#4caf50';
  else if( status === 'wrong')
    current_letter.style.color = '#f44336';
};

function getNextWord(){
  current_word = wordList[wordCounter];
  wordCounter += 1;
  typed_word = '';

  current_word_div.innerHTML = [...current_word].map((letter, i) => {
    return `<span id='${i}'>` + letter + '</span>'
  }).join('');
};

function updateNextWords(){
  next_words_div.innerHTML = '<li style="color: #b1afaf"><h1>' + wordList[wordCounter] + '<h1></li>';
};

function playSound(sound){
  sound.pause();
  sound.currentTime = 0;
  sound.play();
};