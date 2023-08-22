$(document).ready(function(){
  $('.start').on('click', function () {
    $(this).prop('disabled', true);
    $('.stop,.reset').prop('disabled', false);
    timer = setInterval("countUp()", 100);
  });
  
  $('.stop').on('click', function () {
    $(this).prop('disabled', true);
    $('.start,.reset').prop('disabled', false);
    clearInterval(timer);
  });
  
  $('.reset').on('click', function () {
    $(this).prop('disabled', true);
    $('.start').prop('disabled', false);
    $('.stop').prop('disabled', true);
    clearInterval(timer);
    $('.stopwatch').html('0:0:0:0');
  });
});

msec = 0;
sec = 0;
min = 0;
hour = 0;

function countUp()
{
  msec += 1;
  
  if (msec>9) {
    msec = 0;
    sec += 1;
  }
  
  if (sec>59) {
   sec = 0;
   min += 1;
  }
  
  if (min>59) {
   min = 0;
   hour += 1;
  }
   
  $('.stopwatch').html(hour + ':' + min + ':' + sec + ':' + msec);

}