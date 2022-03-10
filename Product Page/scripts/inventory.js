
var getData = JSON.parse(localStorage.getItem("products"));

getData.map(function (elem,index) {
    
    var card = document.createElement("div");
    card.classList.add("card");

   
    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h3")
    name.innerHTML = elem.name;

    var price = document.createElement("p")
    price.innerHTML = "Rs."+ elem.price;

    var type = document.createElement("p")
    type.innerHTML = elem.type;

    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    // remove particullar element           
    btn.addEventListener("click", function () {
        getData.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(getData));
        card.remove();
    
   })

    card.append(img,name, price, type, btn);
    
    document.querySelector("#products_data").append(card);

})


