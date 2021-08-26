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
as array and traverse the array to put data into cart.html*/
function showInfo(){
    
    var proId= document.getElementById("proId").value;
    var proUnit= document.getElementById("pUnit").value;
    
    for(i=0 ;i<objProduct.length;i++){
      if(proId == objProduct[i].pid){

        
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
        cont.appendChild(ul); // add list to the containe
        
       
        temp=1;
       
        localStorage.setItem('id',arr[1]);
        localStorage.setItem('price', arr[3]);
        localStorage.setItem('unit', arr[2]);   
        localStorage.setItem('total', arr[4]);
      } 
    }
    if(temp==0){
        alert("WRONG PRODUCT"); 
    }
    
}

//implement completeShop() function for complete the shopping and redirect to the price.html page
function completeShop(){
  window.open("price.html", "", "width=1000,height=1000");
}











    
   

       
