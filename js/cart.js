// objProduct stores the product info as object
var objProduct=[
    {
        pid:"p000",
        pname: "Tiger Detergent Powder",
        pprice: 45
      
    },
    {
      pid:"p001",
      pname: "Tide Detergent Powder",
      pprice: 45
    },
    {
        pid:"p002",
        pname: "Fortune Rice BranOil ",
        pprice: 345
    },
    {
        pid:"p003",
        pname: "Kachi Ghani MustardOil",
        pprice: 142
    },
    {
        pid:"p004",
        pname: "new Paras Desi Ghee",
        pprice: 245
    }, 
    {
        pid:"p005",
        pname: "new Rajdhani Besan",
        pprice: 741
    },
    {
        pid:"p006",
        pname: "Organic Sonamasuri Rice",
        pprice: 347
    },
    {
        pid:"p007",
        pname: "Organic India CowGhee",
        pprice: 645
    },
    {
        pid:"p008",
        pname: "Choice Pumpkin Seeds",
        pprice: 195
    },
    {
        pid:"p009",
        pname: "Nutrela Soya Chunks",
        pprice: 55
    }
];

//implementing the showInfo() function for display the product info
/*first will iterate through the objProduct object if the proId matches the pid of the product then store information
as array and treverse the array to put data into cart.js*/

function showInfo(){
    var proId= document.getElementById("proId").value;
    var proUnit= document.getElementById("pUnit").value;
    var temp=0;
    for(i=0 ;i<objProduct.length;i++){
      if(proId == objProduct[i].pid){

        //alert("Product "+objProduct[i].pname+", price "+objProduct[i].pprice+", total units "+proUnit +", total price "+proUnit*objProduct[i].pprice);
        //alert("New product added")

        var arr = [ objProduct[i].pname , objProduct[i].pid , proUnit , objProduct[i].pprice , proUnit*objProduct[i].pprice];
        var cont = document.getElementById('container-cart-main');
  
        // create ul element and set the attributes.
        var ul = document.createElement('ul');
        ul.setAttribute('style', 'padding: 5px; margin: 0; position:relative; top:10px; left:180px;');
        ul.setAttribute('id', 'theList');
  
        for (i = 0; i <= arr.length - 1; i++) {
          var li = document.createElement('li');  // create li element.
          li.innerHTML = arr[i];     
          li.setAttribute('style', 'display: inline; margin-right: 180px;');   
  
          ul.appendChild(li); // append li to ul.
        }
  
        cont.appendChild(ul); // add list to the container.

        temp=1;

         allData( objProduct[i].pname , objProduct[i].pid , proUnit , objProduct[i].pprice , proUnit*objProduct[i].pprice);
       
      } 
    }
    if(temp==0){
        alert("WRONG PRODUCT"); 
    }
    
}

//implement completeShop() function for complete the shopping and redirect to the price.html page
function completeShop(){
    var myWindow = window.open("price.html", "", "width=1000,height=1000");
}

//implement newInfo() To get Bil number and time into the page

function newInfo(){
    document.getElementById("demo").innerHTML = Math.floor((Math.random()*100 + 1)*51226);
    document.getElementById("demo1").innerHTML = new Date();
    allData(); 
}
window.onload = newInfo;







function allData(a,b,c,d,e){

    // var proName = document.getElementById("pName").value;
    // var proId = document.getElementById("proId").value;
    // var proUnit = document.getElementById("pUnit").value;
    // var proPrice = document.getElementById("pPrice").value;
    // var proTotal = document.getElementById("pTotal").value;

    
    var proName = a;
    var proId =b;
    var proUnit =c; 
    var proPrice = d;
    var proTotal = e;

    var arr = [ proName , proId , proUnit , proPrice , proTotal];
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
       
