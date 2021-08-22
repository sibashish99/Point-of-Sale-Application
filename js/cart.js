
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
function showInfo(){
    var proId= document.getElementById("proId").value;
    var proUnit= document.getElementById("pUnit").value;
    var temp=0;
    for(i=0 ;i<objProduct.length;i++){
      if(proId == objProduct[i].pid){

        //alert("Product "+objProduct[i].pname+", price "+objProduct[i].pprice+", total units "+proUnit +", total price "+proUnit*objProduct[i].pprice);
        //alert("New product added")
        // var a= document.getElementById("tpname");
        // a.innerHTML = objProduct[i].pname;
    
        // var b= document.getElementById("tpid");
        // b.innerHTML = objProduct[i].pid;

        // var e= document.getElementById("tunit")
        // e.innerHTML = proUnit;
    
        // var c= document.getElementById("tpprice");
        // c.innerHTML = objProduct[i].pprice;
    
        
        // var d= document.getElementById("tptotal");
        // d.innerHTML = proUnit*objProduct[i].pprice;
        
        // var f= document.getElementById("totalPrice");
        // f.innerHTML = proUnit*objProduct[i].pprice;


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
      } 
    }
    if(temp==0){
        alert("WRONG PRODUCT"); 
    }
}


function completeShop(){
 
    var myWindow = window.open("price.html", "", "width=500,height=500");
}
