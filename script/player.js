var shotgunNoise = document.getElementById('shotgun-noise');
var reloadNoise = document.getElementById('shotgun-reload');
var emptyClipNoise = document.getElementById('empty-clip');
var playerStatus  = document.getElementById('player-status');
var playerHitPoints = document.getElementById('player-hp')

class Player{
  constructor(){
    this.state = {
      hp: 100,
      lives: 3,
      ammunition: 5,
      score: 0
    }
  }

  returnPlayerStatusToDefault = () => {
    playerStatus.innerHTML = ""
  }
  makePlayerStatusReloading = () => {
    playerStatus.innerHTML = "Reloading"
  }

  reload = () => {
    if(this.state.ammunition < 5){
      this.makePlayerStatusReloading()
      this.state.ammunition = 5
      reloadNoise.play()

      setTimeout(() => {
        this.returnPlayerStatusToDefault();
      }, 700);
    }
  }
  shoot = () => {
    if(this.state.ammunition < 1){
      this.reload()
    } else{
      this.state.ammunition -= 1
      shotgunNoise.play();
    }
    
  }
}
