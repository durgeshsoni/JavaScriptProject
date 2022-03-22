let cartData = JSON.parse(localStorage.getItem("cart"));



function appendData(cartData) {

    cartData.map(function (e,index) {
        let div = document.createElement("div")
        

        let img = document.createElement("img")
        img.src = e.strMealThumb
        
        let h2 = document.createElement("h2")
        h2.innerText = e.strMeal
    
        let p = document.createElement("p")
        p.innerText = e.price
    
        let btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.setAttribute("id" , "remove")
        btn.addEventListener("click", function () {
            // remove 
            // console.log("remove")
            cartData.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartData));
            div.remove();
            window.location.reload();
        })
    
        div.append(img, h2, p, btn)
    
        document.getElementById("cart").append(div)
    })
   
}

appendData(cartData)


function total() {
    let totalPrice = cartData.reduce(function (acc, el) {
        return acc+el.price
    }, 0)
    document.querySelector("#total-price").innerHTML = totalPrice
}
total()


document.getElementById("checkout").addEventListener("click", function () {
    window.location.href = "checkout.html"
})