
document.getElementById("submit").addEventListener("click", function () {


    
    let time = Math.random()*3000
    setTimeout(function () {
        alert(`Your order is accepted `)
    }, time)
    
    setTimeout(function () {
        alert(`Your order is being cooked`)
    }, time)
    setTimeout(function () {
        alert("Your order is ready")
    }, time)
    setTimeout(function () {
        alert("Order out for delivery")
    }, time)
    setTimeout(function () {
        alert("Order delivered")
},time)


    
    // document.getElementById("order-form").reset();
})