const button = document.getElementById("button")
const canvas = document.getElementById("canvas")
let color = ["#DE4839", "#0D0D0D", "#00D84A", "#120E43", "#50DBB4", "#758283", "#5A20CB"];

button.addEventListener("click",function(){
  const  randomcolor = color[Math.floor(Math.random()*color.length)] 
  canvas.style.backgroundColor = randomcolor
  console.log(randomcolor)
})