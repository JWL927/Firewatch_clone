const $images = document.querySelectorAll(".images_layer");

window.addEventListener("scroll", () => {
  const top = this.pageYOffset;

  const layers = document.getElementsByClassName("images_layer");
  var layer, speed, yPos;
  for (var i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute("data-speed");
    var yPos = -((top * speed) / 100);
    layer.setAttribute(
      "style",
      "transform: translate3d(0px, " + yPos + "px, 0px)"
    );
  }
});
