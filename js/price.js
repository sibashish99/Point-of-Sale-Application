//implement newInfo() To get Bil number and time into the page

function newInfo(){
    document.getElementById("demo").innerHTML = Math.floor((Math.random()*100 + 1)*51226);
    document.getElementById("demo1").innerHTML = new Date();
}
window.onload = newInfo;

