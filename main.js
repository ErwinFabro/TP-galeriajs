var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg'];
var container = document.getElementById("gallery");
for (let i = 0; i < 5; i++) {
  for (var image of images) {
    var img = document.createElement("img");
    img.src = image;
    container.appendChild(img);
  }
}
