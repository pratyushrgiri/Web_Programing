const stopwatch = {
    timer:null,
    startTime:0,
    elapsedTime:0,
    isRunning:false,

    start:function(){
        if(!this.isRunning){
            this.startTime = Date.now() - this.elapsedTime;
            this.isRunning = true;
            this.timer = setInterval(() => {
                this.elapsedTime = Date.now() - this.startTime;
                this.updateDisplay();
            }, 100);
        }
    },

    stop:function(){
        if(this.isRunning){
            clearInterval(this.timer);
            this.isRunning = false;
        }
    },

    reset:function(){
        clearInterval(this.timer);
        this.elapsedTime = 0;
        this.isRunning = false;
        this.updateDisplay();
    },

    updateDisplay:function(){
        const hours = (Math.floor(this.elapsedTime / 3600000)).toString().padStart(2, '0');
        const minutes = (Math.floor((this.elapsedTime % 3600000) / 60000)).toString().padStart(2, '0');
        const seconds = (Math.floor((this.elapsedTime % 60000) / 1000) ).toString().padStart(2, '0');
        const milliseconds = (Math.floor((this.elapsedTime % 1000) / 10)).toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
        document.getElementById("milliseconds").textContent = milliseconds;
    }
}

const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");

stopwatch.updateDisplay();

start.addEventListener("click",()=>{
    stopwatch.start();
});

stop.addEventListener("click",()=>{
    stopwatch.stop();
});

reset.addEventListener("click",()=>{
    stopwatch.reset();
});