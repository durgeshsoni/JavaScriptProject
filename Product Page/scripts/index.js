//store the products array in localstorage as "products"

document.querySelector("#product_form").addEventListener("submit", submitFun);
var productArr = JSON.parse(localStorage.getItem("products")) || [];
function submitFun(e) {

    e.preventDefault();

    
   let  name = document.querySelector("#name").value;
    let  price = document.querySelector("#price").value;
    let type = document.querySelector("#type").value;
    let image = document.querySelector("#image").value
    
    function product(name, price, type, image) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.image = image;
    }
    let product1 = new product(name, price, type, image);

    productArr.push(product1);

    localStorage.setItem("products", JSON.stringify(productArr));
    document.querySelector("#product_form").reset();
}