var btn = document.querySelector("#btn");
var signArr = JSON.parse(localStorage.getItem("userDetails")) || [];

btn.addEventListener("click" , function(event){
   event.preventDefault();
   var signObj = { 
       email: document.querySelector("#email").value,
       user: document.querySelector("#username").value,
       number: document.querySelector("#number").value,
       pass: document.querySelector("#password").value,
   }
   if (signObj.email == "" || signObj.user =="" || signObj.number == "" || signObj.pass == "") {
      alert("Please fill all the fields");
   } else {
      //    console.log(signObj)
      signArr.push(signObj)
      localStorage.setItem("userDetails", JSON.stringify(signArr))
      alert("Signup Successful")
      window.location.href = "login.html"

      var form = document.querySelector("form")
      form.reset();
   }
})