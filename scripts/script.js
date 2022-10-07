/*const test = "Coucou Fabio";
console.log(test);
console.log('Syntaxe des + ' + test);
console.log(`Syntaxe des backticks ${test}`);
*/
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops the funciton from running
    audio.currentTime = 0; //goes to beginning of audio clip
    audio.play();
    key.classList.add('playing');
};
function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
};
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition)); // skip it if it's not a transform
window.addEventListener('keydown', playSound);
  