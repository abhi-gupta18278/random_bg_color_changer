let hex = '01234567890ABCDEF'
function colorchange(){
    color ='#'
    for(i=1;i<=6;i++){
        color=color+hex[Math.floor(Math.random()*16)] //here we got random color
}
return color;
}

let intervalId;
let isRunning= false;
//background color change 
const start = document.getElementById('start')
const stop = document.getElementById('stop')
//start event

start.addEventListener('click',()=>{
    if(isRunning){//if again we click to start then it does not start 
        return;
    }
    intervalId = setInterval(()=>{
            colorchange();
            document.body.style.backgroundColor = `${color}`
            console.log(color)
            isRunning=true;

    },1000)
})

//stop event
stop.addEventListener('click',function(){
    clearInterval(intervalId)
    intervalId = 'null'
    isRunning = false
})