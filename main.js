




// script.js
let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '12.jpg', '13.jpg', '14.jpg',
  '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg','20.jpg'];

  let container = document.getElementById("gallery");
for (let i = 0; i <3; i++) {
  for (let image of images) {

    let img = document.createElement("img");
    img.src = image;
    container.appendChild(img);

    let imageName = document.createElement("p");
    imageName.textContent = image;
    container.appendChild(imageName);

  }
}
