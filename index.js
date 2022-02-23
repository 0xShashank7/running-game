const hero = document.querySelector(".hero")
const heroBoy = document.querySelector(".hero-boy")
const villain = document.querySelector(".villain")

function jump(){
    if(hero.classList != "animate"){
        hero.classList.add("animate")
        villain.style.animation = "move 1s infinite linear";
    }
    setTimeout(function(){
        hero.classList.remove("animate")
    },300)
}

document.addEventListener("keydown",function(e){
    if(e.key == "f"){
        jump();
    }
  });

  let isAlive = setInterval(function(){
      let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"))

      let villainLeft = parseInt(window.getComputedStyle(villain).getPropertyValue("left"))


    if(villainLeft < 80 && villainLeft >40 && heroTop >=130){
        villain.style.animation = "none"
        alert("Game Over! Press F to play again mowa")
    }
  },10)