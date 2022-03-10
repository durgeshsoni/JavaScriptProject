

var slideShowArr = [
    { img: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587408/cover/1170x658withlogo71955679613c44e6833eed379d64ef35.jpg" },
    { img: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587408/cover/1170x658withlogo71955679613c44e6833eed379d64ef35.jpg" },
    { img: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-35021/cover/1170x658withlog1496685441.jpg" },
    { img: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z562203/cover/1170x658withlogo7beb7d81450d4c53854e651f0490b55770932fbc139c487e8d44dbf5a3dbd104.jpg" },
    { img: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-101-10z5105526/cover/1170x658withlogo920e07df57324c4dbbb32e1a2603903c.jpg" }

];

localStorage.setItem("slideShowImg", JSON.stringify(slideShowArr));

var getImg = JSON.parse(localStorage.getItem("slideShowImg"));

let i = 1;

var div = document.createElement("div");
var img = document.createElement("img");
img.src = getImg[0].img;
div.append(img)
document.querySelector("#slideshow").append(div);
setInterval(function () {
    
    if(i == getImg.length){
        i = 0;
    }
    document.querySelector("#slideshow").innerHTML =null;
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = getImg[i].img;
    div.append(img)
    document.querySelector("#slideshow").append(div);
    i++;


}, 2000);


// ----------------slide show start ------------

var getMovies = JSON.parse(localStorage.getItem("movies"));
console.log(getMovies);

function displayMovies(getMovies) {
    document.querySelector("#movies").innerHTML = "";

    getMovies.map(function (elem) {
        
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = elem.img_url;

        var h3 = document.createElement("h3");
        h3.innerHTML = elem.name;

        var cat = document.createElement("p");
        cat.innerHTML = elem.cat;

        div.append(img, h3, cat);

        document.querySelector("#movies").append(div);

})
}
displayMovies(getMovies);





function sortfunc(){
    var sort = document.querySelector('#sort').value;
        
    filterData = getMovies.filter(function (elem) {
        return elem.cat == sort;
    })
    displayMovies(filterData)
}