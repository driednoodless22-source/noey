function showLove(){

document.getElementById("loveText").innerText =
"ตั้งแต่วันที่เธอเข้ามาในชีวิต ทุกวันของฉันก็พิเศษขึ้น รักเธอมากนะ ❤️"

}


/* หัวใจลอย */

function createHeart(){

let heart = document.createElement("div")

heart.innerHTML="💗"

heart.className="heart"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(Math.random()*20+20)+"px"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},5000)

}

setInterval(createHeart,400)
/* นับวันครบรอบ */

let startDate = new Date("2024-12-30")

let today = new Date()

let diff = today - startDate

let days = Math.floor(diff / (1000*60*60*24))

document.getElementById("days").innerText = days + " วัน"
function playMusic(){

document.getElementById("music").play()

}