let music = document.getElementById("music")
let cover = document.getElementById("cover")

function toggleMusic(){

if(music.paused){

music.play()

cover.classList.add("rotate")

startHearts()

}else{

music.pause()

cover.classList.remove("rotate")

}

}

/* หัวใจลอย */

function startHearts(){

setInterval(createHeart,600)

}

function createHeart(){

let heart = document.createElement("div")

heart.className="heart"

heart.innerHTML="💗"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(Math.random()*20+20)+"px"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},5000)

}