//implement newInfo() To get Bil number and time into the page
function newInfo(){
    document.getElementById("demo").innerHTML = Math.floor((Math.random()*100 + 1)*51226);
    document.getElementById("demo1").innerHTML = new Date();
    allData();
}
window.onload = newInfo;

function completeShop(){


narr[0] = localStorage.getItem("id");
narr[1] = localStorage.getItem("price");
narr[2] = localStorage.getItem("unit");
narr[3] = localStorage.getItem("total");


var cont = document.getElementById('container-cart-main-price');
var ul = document.createElement('ul');
ul.setAttribute('style', 'padding: 5px; margin: 0; position:relative; top:130px; left:100px;');
ul.setAttribute('id', 'theList');

for (i = 0; i <= narr.length; i++) {
    var li = document.createElement('li');  // create li element.
    li.innerHTML = narr[i];     
    li.setAttribute('style', 'display: inline; margin-right: 180px;');   

    ul.appendChild(li); // append li to ul.
}

cont.appendChild(ul); // add list to the container.
}
