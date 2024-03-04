const slidesContainers = document.getElementsByClassName("slides-container");

for (let i = 0; i < slidesContainers.length; i++) {
  const element = slidesContainers.item(i);
  console.log(element);
  var slide = element.querySelector(".slide");
  console.log(slide);
  var prevButton = element.parentNode.querySelector("#slide-arrow-prev");
  console.log(prevButton);
  var nextButton = element.parentNode.querySelector("#slide-arrow-next");
  console.log(nextButton);


  nextButton.addEventListener("click", () => {
    var slideWidth = slide.clientWidth;
    element.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    var slideWidth = slide.clientWidth;
    element.scrollLeft -= slideWidth;
  });
}