function getTime(){
    var date = new Date();
    var hour= date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();

   
    hour=(hour<10) ? "0" + hour: hour;
    minute=(minute<10) ? "0" + minute: minute;
    second=(second<10) ? "0" + second: second;

    document.getElementById("hour").innerText=hour;
    document.getElementById("minute").innerText=minute;
    document.getElementById("second").innerText=second;

    
}
setInterval(function(){
    getTime();
},1000)