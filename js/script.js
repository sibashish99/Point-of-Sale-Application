// objAdmin stores the admin info as object
var objAdmin=[
  {
    username: "admin001",
    password: "pass001"
  },
  {
    username: "admin002",
    password: "pass002"
  },
  {
    username: "admin003",
    password: "pass003"
  },
  {
    username: "admin004",
    password: "pass004"
  }, 
  {
    username: "admin005",
    password: "pass005"
  }
]

// implement getInfo() to loged in to asmin page
 function getInfo(){
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;

   for(i=0 ;i<objAdmin.length;i++){
    if(username == objAdmin[i].username && password == objAdmin[i].password){
      alert("Welcome, "+username);
      return location.replace("cart.html");
    } 
  }
  alert("Wrong username or password");
}

