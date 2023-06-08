var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
var container = document.getElementById("gallery");
for (let i = 0; i < 10; i++) {
  for (var image of images) {
    var img = document.createElement("img");
    img.src = image;
    container.appendChild(img);
  }
}
