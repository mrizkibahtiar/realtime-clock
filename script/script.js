function addzero(time){
    if (time < 10) {
        return "0"+time;
    } else {
        return time;
    }
}
function clocks() {
    // clock
    var date = new Date();
    let hour = addzero(date.getHours()) ;
    let minute = addzero(date.getMinutes());
    let second = addzero(date.getSeconds());
    let session = "AM";
    if(hour > 12) {
        session= "PM";
        hour - 12;
    }
    // day
    var day = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let days = day[date.getDay()];
    let dates = date.getDate();
    let months = month[date.getMonth()];
    let years = date.getFullYear();
    
    const today = document.querySelector(".today");
    const clock = document.querySelector(".clock");
    clock.textContent = (hour) + " : " + minute + " : " + second + " " + session;

    today.textContent = days + ", " + dates + " " + months + " " + years;

    setInterval(clocks, 1000);
}

clocks();