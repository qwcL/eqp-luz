function changeModel(model) {

  const image = document.getElementById("modelImage");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => tab.classList.remove("active"));
  event.target.classList.add("active");

  if(model === "titan") {
    image.src = "images/titan.jpg";
  }

  if(model === "fan") {
    image.src = "images/fan.jpg";
  }

  if(model === "start") {
    image.src = "images/start.jpg";
  }

}
