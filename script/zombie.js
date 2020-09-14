
var gameContainer = document.getElementsByClassName('game-container')[0];
var zombieNoise = document.getElementById('zombie-noise')
var playerHPNode = document.getElementById('player-hp')


class Zombie {
  constructor(){
    this.upsideDown = false
  }

  spawn = () => {
    let possiblePositions = ['zombie animated-from-left', 'zombie animated-from-right', 'zombie upside-down animated-from-left', 'zombie upside-down animated-from-right']
    let randomPosition = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    let plainImage = document.createElement('img');
    
    if(randomPosition == 'zombie upside-down animated-from-left'){
      plainImage.setAttribute('src', '../assets/images/upsidedownbilo.gif');
      this.upsideDown = true

    } else if(randomPosition == 'zombie upside-down animated-from-right'){
      plainImage.setAttribute('src', '../assets/images/upsidedownbilo.gif');
      this.upsideDown = true

    } else if(randomPosition == 'zombie animated-from-right'){
      plainImage.setAttribute('src', '../assets/images/bilo.gif');
    }
    else {
      plainImage.setAttribute('src', '../assets/images/bilo.gif');
    }

    plainImage.setAttribute('onclick', 'killZombie()');
    plainImage.setAttribute('id', 'zombie');
    plainImage.setAttribute('class', randomPosition);
    gameContainer.appendChild(plainImage)
    zombieNoise.play()

  }
  removeBody = () => {
    let zombie = document.getElementsByClassName('zombie')[0];
    zombie.remove()
  }
  die = () => {
    let zombie = document.getElementsByClassName('zombie')[0];
    this.upsideDown ? zombie.setAttribute('src', '../assets/images/deadupsidedownbilo.png') :  zombie.setAttribute('src', '../assets/images/deadbilo.gif')


    setTimeout(() => {
      this.removeBody()
    }, 100);
  }
  doDamageToPlayer = () => {
    player.state.hp -=1
    playerHPNode.innerHTML = "HP: " + player.state.hp
  }
}
