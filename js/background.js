const images = [
    "Garden_at_Arles.jpg",
    "Houses_at_Auvers.jpg",
    "Starry_Night.jpg",
    "Starry_Night_Over_the_Rhone,.jpg",
    "The_Bedroom.jpg",
    "The_Night_Cafe.jpg",
    "Wheat_Field_with_Cypresses.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/${chosenImage})`;