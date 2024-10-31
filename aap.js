console.log ("Image Flipper");


const image = document.querySelector ("#image");

const off_Bulb = "./assets/bulb-off.jpg";
const onn_Bulb = "./assets/bulb-onn.jpg";


image.addEventListener ("mouseover" , () => {
    image.src = onn_Bulb;
});

image.addEventListener ("mouseout" , () => {
    image.src = off_Bulb;
})