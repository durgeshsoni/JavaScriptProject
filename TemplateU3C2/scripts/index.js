
let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
async function showData() {

    try {
        let res = await fetch("https://masai-food-api.herokuapp.com/api/meals/india")
        let data = await res.json()
        display(data)
       
    } catch (error) {
        console.log(error)
    }

}

function display(data) {
    data.forEach(function (e,i) {
        for (let i = 0; i < e.meals.length; i++){
            // console.log(e.meals[i])

            appendData(e.meals[i])
        
            
        }

       
    })
}
showData()
let count =0
function appendData(data) {
    
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = data.strMealThumb
    
    let h2 = document.createElement("h2")
    h2.innerText = data.strMeal

    let p = document.createElement("p")
    p.innerText = data.price

    let btn = document.createElement("button")
    btn.innerText = "Add to cart"
    btn.setAttribute("id", "addtocart")
    btn.addEventListener("click", function (e) {
        
        
        e.preventDefault();

        cartArr.push(data);
       
        localStorage.setItem("cart", JSON.stringify(cartArr))
        // localStorage.clear()
        document.getElementById("count").innerHTML = cartArr.length;
    })
    

    div.append(img, h2, p, btn)

    document.getElementById("menu").append(div)

}




