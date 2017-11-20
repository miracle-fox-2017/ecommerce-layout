$('.ui.dropdown')
  .dropdown();

$(document).ready(function(){
  $('.slider').bxSlider();
});

$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600
});

$('#login-modal').click(function() {
  $('.tiny.modal')
  .modal('show')
  ;
})
