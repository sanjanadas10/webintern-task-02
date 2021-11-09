const slider1 = document.getElementById("glide_1");
if (slider1) {
  new Glide(slider1, {
    startAt: 0,
    autoplay: 2500,
    hoverpause: false,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();
}
let btnBack = document.querySelector('button');
btnBack.addEventListener('click',() =>{
	window.history.back();
});