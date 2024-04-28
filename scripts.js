var current_word_div = document.getElementById('word');

document.addEventListener('keypress', handleKeyPress);
document.addEventListener('keydown', handleBackspace);

var current_word = 'word';
var typed_word = '';

current_word_div.innerHTML = [...current_word].map((letter, i) => {
  return `<span id='${i}'>` + letter + '</span>'
}).join('');

function handleKeyPress(e){
  if(current_word[typed_word.length] === e.key){
    updateLetter(String(typed_word.length), 'correct');
    typed_word += e.key;
  } else {
    updateLetter(String(typed_word.length), 'wrong');
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