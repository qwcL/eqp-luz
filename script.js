let currentIndex = 0;

const images = {
  titan: ["images/titan1.jpg", "images/titan2.jpg", "images/titan3.jpg", "images/titan4.jpg"],
  fan: ["images/fan1.jpg", "images/fan2.jpg","images/fan3.jpg", "images/fan4.jpg"],
  start: ["images/start1.jpg", "images/start2.jpg", "images/start3.jpg", "images/start4.jpg"],
};

let currentModel = "titan";

function changeModel(model) {
  currentModel = model;
  currentIndex = 0;
  document.getElementById("modelImage").src = images[model][0];

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  event.target.classList.add("active");
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images[currentModel].length) {
    currentIndex = 0;
  }
  document.getElementById("modelImage").src = images[currentModel][currentIndex];
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images[currentModel].length - 1;
  }
  document.getElementById("modelImage").src = images[currentModel][currentIndex];
}
