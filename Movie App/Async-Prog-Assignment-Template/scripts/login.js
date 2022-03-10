var userdata = JSON.parse(localStorage.getItem("userDetails"))
// console.log(userdata)


btn.addEventListener("click" , function(event){
    event.preventDefault();
    var email= document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;

    // console.log(user,pass)

    var flag =false;
    for(var i =0;i<userdata.length;i++){
        if(userdata[i].email==email && userdata[i].pass == pass){
            flag= true
        }else{
            flag =false;
        }
    }

    if (flag == true) {
        alert("Login Successful")
        window.location.href="./index.html"
    }else{
        alert("Invalid Detials")
    }
    
})