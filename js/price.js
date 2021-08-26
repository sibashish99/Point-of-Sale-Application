//implement newInfo() To get Bil number and time into the page
function newInfo(){
    document.getElementById("demo").innerHTML = Math.floor((Math.random()*100 + 1)*51226);
    document.getElementById("demo1").innerHTML = new Date();
    allData();
}
window.onload = newInfo;

function completeShop(){

var x = localStorage.getItem("id");
var y = localStorage.getItem("price");
var z = localStorage.getItem("unit");
var w = localStorage.getItem("total");

var arr = [ x , y , z , w ];
var cont = document.getElementById('container-cart-main-price');
var ul = document.createElement('ul');
ul.setAttribute('style', 'padding: 5px; margin: 0; position:relative; top:130px; left:100px;');
ul.setAttribute('id', 'theList');

for (i = 0; i <= arr.length; i++) {
    var li = document.createElement('li');  // create li element.
    li.innerHTML = arr[i];     
    li.setAttribute('style', 'display: inline; margin-right: 180px;');   

    ul.appendChild(li); // append li to ul.
}

cont.appendChild(ul); // add list to the container.
}