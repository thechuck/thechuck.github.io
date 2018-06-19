function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');

	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 25;
  var delay = $('h1').text().length * speed + speed;
  var delay2 = delay + ($('h3').text().length * speed + (speed * 3));
  typeEffect($('h1'), speed);
  setTimeout(function(){
    $('h3').css('display', 'inline-block');
    typeEffect($('h3'), speed);
  }, delay);
  setTimeout(function(){
    $("#p1").css('display', 'inline-block');
    $("#p2").css('display', 'inline-block');

  }, delay2);


});
