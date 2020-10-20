var zombie = new Zombie;
var player = new Player;
var playerScore = document.getElementById('player-score');
var backgroundVideo = document.getElementById('background-video');
var screamNoise = document.getElementById('horror-scream');

startGame = () => {
  document.addEventListener('keyup', function(event){
    event.key == 'r' ? player.reload() : console.log(event)
  })
  document.addEventListener('click', function(event){
    player.shoot()
  })
  document.addEventListener('on', function(event){
    event.key == 'r' ? player.reload() : console.log(event)
  })
  zombieSpawner = new ZombieSpawner()
  zombieSpawner.spawnZombie();
  attackInterval = setInterval(() => {zombie.doDamageToPlayer()}, 100)
  checkHPInterval = setInterval(() => {checkHP()}, 10);
}

killZombie = function(){
  if(player.state.ammunition > 0){
    clearInterval(attackInterval)
    zombie.die();
    player.state.score +=1
    playerScore.innerHTML = "Score: " + player.state.score
    setTimeout(() => {
      zombieSpawner.spawnZombie()
    }, 200);
    setTimeout(() => {
      attackInterval = setInterval(() => {zombie.doDamageToPlayer()}, 100)
    }, 600);
  }
}

checkHP = () => {
  if(player.state.hp < 1){
    backgroundVideo.currentTime = 32;
    backgroundVideo.pause();
    clearInterval(attackInterval)
    clearInterval(checkHPInterval)
    document.getElementById('zombie').remove()
    screamNoise.play()
    newTag = document.createElement('a')
    newTag.setAttribute('href', 'game.html')
    newTag.innerHTML = "Play Again"
    playerScore.append(newTag)
    playerScore.setAttribute('style', 'font-size: 5vw;')
  }
}

class ZombieSpawner{
  spawnZombie = () => {
    zombie = new Zombie;
    zombie.spawn();
  }
}

window.onload = setTimeout(() => {
  startGame();
}, 1500);
