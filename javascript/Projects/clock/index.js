function updateDate(){
    const date=new Date();
    let hour=date.getHours();
    let ampm= hour>=12? "PM": "AM";
    hour=hour%12||12;
    hour=hour.toString().padStart(2,"0")
    let minute=date.getMinutes().toString().padStart(2,"0");
    let seconds=date.getSeconds().toString().padStart(2,"0");
    let dateformat= `${hour}:${minute}:${seconds} ${ampm}`
    document.getElementById("clockcontainer").textContent=dateformat;
}

updateDate();
setInterval(updateDate,1000);