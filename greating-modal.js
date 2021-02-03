let playerName = document.querySelector('.enter_name'),
currentName = document.querySelector('.player_name'),
currentPlayScreenName = document.querySelector('.current_player_name');

export function currentScreenName() {

}
export function getName() {
    if (!localStorage.getItem('name')) {
       playerName.textContent = '[ENTER YOU NAME PLEASE]';
    } else {
       playerName.textContent = localStorage.getItem('name');
       return localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
     
      if (e.which === 13 || e.keyCode === 13) {
        if (e.target.textContent === '') {
          e.target.textContent = localStorage.getItem('name');
        }
        localStorage.setItem('name', e.target.innerText);
       playerName.blur();
      }
      currentPlayScreenName.innerText = e.target.innerText;
    } else if (e.target.textContent === '') {
        playerName.textContent = '[ENTER YOU NAME PLEASE]';
        
        e.target.textContent = '[ENTER YOU NAME PLEASE]';
    } else {
      localStorage.setItem('name', e.target.innerText);
      currentPlayScreenName.innerText = e.target.innerText;
    }
  }


function clearName() {
      if (playerName.innerText) {
        //   localStorage.setItem("playerName", playerName.innerText);
          playerName.innerText = "";

        }
    
  }
export function addEventsName() {
    playerName.addEventListener('keypress', setName);
    playerName.addEventListener('blur', setName);
    playerName.addEventListener("click", clearName);
}