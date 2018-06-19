$(document).ready(function(){
  $('#youtubeModal').on('hidden.bs.modal', function (e) {
  $('.active').find('iframe').attr('src',  $(".active").find('iframe').attr("src"));

  });
});
