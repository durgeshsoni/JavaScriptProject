
const getData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return data.meals;    
    } catch (error) {
        console.log(error);
    }
}

const append = (data, parent) => {
    parent.innerHTML = '';
    data.forEach(el => {
        
        let div = document.createElement('div');

        let name = document.createElement('h3');
        name.innerHTML = el.strMeal;

        let img = document.createElement('img');
        img.src = el.strMealThumb;



        div.append( img,name);
        parent.append(div);
    });
} 

export {getData, append};