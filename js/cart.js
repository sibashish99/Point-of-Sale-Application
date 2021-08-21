//product details
var objProduct=[
    {
      pid:"p001",
      pname: "Tide Plus Double Power Lemon & Mint Detergent Powder",
      pprice: 45
     
    },
    {
        pid:"p002",
        pname: "Fortune (Cooking Oil For Healthier Heart) Rice Bran Oil (Jar)",
        pprice: 345
    },
    {
        pid:"p003",
        pname: "Mother's Choice Kachi Ghani Mustard Oil (Bottle)",
        pprice: 142
    },
    {
        pid:"p004",
        pname: "Paras Desi Ghee (Carton)",
        pprice: 245
    }, 
    {
        pid:"p005",
        pname: "Rajdhani Besan",
        pprice: 741
    },
    {
        pid:"p006",
        pname: "24 Mantra Organic Sonamasuri Rice",
        pprice: 347
    },
    {
        pid:"p007",
        pname: "Organic India Cow Ghee",
        pprice: 645
    },
    {
        pid:"p008",
        pname: "Mother's Choice Pumpkin Seeds",
        pprice: 195
    },{
        pid:"p009",
        pname: "Nutrela Mini Soya Chunks",
        pprice: 55
    },{
        pid:"p010",
        pname: "Mother's Choice American Almonds",
        pprice: 199
    },

  ]
  function showInfo(){
    var proId= document.getElementById("proId").value;
    
    for(i=0 ;i<objProduct.length;i++){
      if(proId == objProduct[i].pid){
        //alert("Product "+objProduct[i].pname+", price "+objProduct[i].pprice);
      } 
    }
  
}
