$(document).ready(function() {
  const sliderBox = $('.slider ul');
  const width = $('.slider ul li').first().children('img').width();
  const imageCount = $('.slider ul').children('li').length;
  sliderBox.css('width', width * imageCount);
  $('.nav button').on('click', function() {
    const whichButton = $(this).data('nav');
    console.log(whichButton);
  });
});