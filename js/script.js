$(document).ready(function() {
  const sliderBox = $('.slider ul'),
        width = $('.slider ul li').first().children('img').width(),
        imageCount = $('.slider ul').children('li').length;
  let currentImage = 1;

  sliderBox.css('width', width * imageCount);
  $('.nav button').on('click', function() {
    const whichButton = $(this).data('nav');
    if (whichButton === 'next') {
      if (currentImage === imageCount) {
        currentImage = 1;
        sliderTransition(currentImage, width);
      } else {
        currentImage++;
        sliderTransition(currentImage, width);
      }
    } else if (whichButton === 'prev') {
      if (currentImage === 1) {
        currentImage = imageCount;
        sliderTransition(currentImage, width);
      } else {
        currentImage--;
        sliderTransition(currentImage, width);
      }
    }
  });

  function sliderTransition(currentImageInput, widthInput) {
    const pxValue = -(currentImageInput - 1) * widthInput;
    sliderBox.animate({
      'left': pxValue
    });
  }

});