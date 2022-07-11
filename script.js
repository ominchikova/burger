const slider = document.querySelector('.slider')
const sliderLine = document.querySelector('.slider__line')
const images = document.querySelectorAll('.slide img')
const prevBtn = document.querySelector('.slider__prevBtn')
const nextBtn = document.querySelector('.slider__nextBtn')


let orderImg = 0;
let width 


function initWidthLine(params) {
   width = slider.offsetWidth
   sliderLine.style.width = width * images.length +'px'
   images.forEach((images) =>{
       images.style.width = width +'px'
       images.style.height = 'auto'
   })

   scrollSlider()
  
    
}
window.addEventListener('resize',initWidthLine)

initWidthLine()


nextBtn.addEventListener ('click', function (params) {
    orderImg++
    if(orderImg >= images.length){
        orderImg = 0
    }
    scrollSlider()
} )
prevBtn.addEventListener("click", function (params) {
  orderImg--;
  if (orderImg < 0) {
    orderImg = images.length -1
  }
  scrollSlider();
});

function scrollSlider(params) {
    sliderLine.style.transform = 'translate(-' + orderImg * width + 'px)';
    
}
