function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if (element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if ($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({
			scrollTop: scroll_to
		}, 1000);
	}
}

$(document).ready(function(){
	$(".alert").show();
	$(".alert").animate({
		width: "100%",
		opacity: 1,
		left: "50px",
		speed:"slow"
	  }, 4000);
	$('.alert').delay(5000).fadeOut(500);
})
jQuery(document).ready(function () {

	/*
	    Sidebar
	*/
	$('.dismiss, .overlay').on('click', function () {
		$('.sidebar').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$('.open-menu').on('click', function (e) {
		e.preventDefault();
		$('.sidebar').addClass('active');
		$('.overlay').addClass('active');
		// close opened sub-menus
		$('.collapse.show').toggleClass('show');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
	/* change sidebar style */
	$('a.btn-customized-dark').on('click', function (e) {
		e.preventDefault();
		$('.sidebar').removeClass('light');
	});
	$('a.btn-customized-light').on('click', function (e) {
		e.preventDefault();
		$('.sidebar').addClass('light');
	});
	/* replace the default browser scrollbar in the sidebar, in case the sidebar menu has a height that is bigger than the viewport */
	$('.sidebar').mCustomScrollbar({
		theme: "minimal-dark"
	});

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function (e) {
		e.preventDefault();
		scroll_to($(this), 0);
	});

	$('.to-top a').on('click', function (e) {
		e.preventDefault();
		if ($(window).scrollTop() != 0) {
			$('html, body').stop().animate({
				scrollTop: 0
			}, 1000);
		}
	});
	/* make the active menu item change color as the page scrolls up and down */
	/* we add 2 waypoints for each direction "up/down" with different offsets, because the "up" direction doesn't work with only one waypoint */
	$('.section-container').waypoint(function (direction) {
		if (direction === 'down') {
			$('.menu-elements li').removeClass('active');
			$('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
			//console.log(this.element.id + ' hit, direction ' + direction);
		}
	}, {
		offset: '0'
	});
	$('.section-container').waypoint(function (direction) {
		if (direction === 'up') {
			$('.menu-elements li').removeClass('active');
			$('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
			//console.log(this.element.id + ' hit, direction ' + direction);
		}
	}, {
		offset: '-5'
	});

	/*
	    Background slideshow
	*/
	$('.top-content').backstretch("assets/img/backgrounds/4.jpg");
	$('.section-4-container').backstretch("assets/img/backgrounds/2.jpg");
	$('.section-6-container').backstretch("assets/img/backgrounds/1.jpg");

	/*
	    Wow
	*/
	new WOW().init();

});

$(document).ready(function () {
	$(".animate").mouseenter(function (event) {
		event.preventDefault();
		$("#chain").animate({
			width: "100%"
		}).animate({
			fontSize: "46px"
		}).animate({
			borderWidth: 30
		});
	});
	$(".animate").mouseout(function (t) {
		t.preventDefault();
		$("#chain").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#first_cards").hover(function (event) {
		event.preventDefault();
		$("#arrow").toggle(500);
		$("#One").css("color", "#004E7C");
	});
	$("#first_cards").mouseout(function (event) {
		event.preventDefault();
		$("#One").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#cards2").hover(function (event) {
		event.preventDefault();
		$("#arrow2").toggle(500);
		$("#Two").css("color", "#004E7C")
	});
	$("#cards2").mouseout(function (event) {
		event.preventDefault();
		$("#Two").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#cards3").hover(function (event) {
		event.preventDefault();
		$("#arrow3").toggle(500);
		$("#Three").css("color", "#004E7C")
	});
	$("#cards3").mouseout(function (event) {
		event.preventDefault();
		$("#Three").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#cards4").hover(function (event) {
		event.preventDefault();
		$("#arrow4").toggle(500);
		$("#Four").css("color", "#004E7C")
	});
	$("#cards4").mouseout(function (event) {
		event.preventDefault();
		$("#Four").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#cards5").hover(function (event) {
		event.preventDefault();
		$("#arrow5").toggle(500);
		$("#Four").css("color", "#004E7C")
	});
	$("#cards5").mouseout(function (event) {
		event.preventDefault();
		$("#Four").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#cards6").hover(function (event) {
		event.preventDefault();
		$("#arrow6").toggle(500);
		$("#Four").css("color", "#004E7C")
	});
	$("#cards6").mouseout(function (event) {
		event.preventDefault();
		$("#Four").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#cards7").hover(function (event) {
		event.preventDefault();
		$("#arrow7").toggle(500);
		$("#Four").css("color", "#004E7C")
	});
	$("#cards7").mouseout(function (event) {
		event.preventDefault();
		$("#Four").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#cards8").hover(function (event) {
		event.preventDefault();
		$("#arrow8").toggle(500);
		$("#Four").css("color", "#004E7C")
	});
	$("#cards8").mouseout(function (event) {
		event.preventDefault();
		$("#Four").removeAttr("style");
	});
});
$(document).ready(function () {
	$("#about").mouseenter(function (event) {
		event.preventDefault();
		$('.counter').counterUp({
			delay: 10,
			time: 2000
		});
	})
});
$('#recipeCarousel').carousel({
	interval: 10000
})

$('.carousel .carousel-item').each(function () {
	var minPerSlide = 6;
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < minPerSlide; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
$(document).ready(function () {
	$("#callBtn").click(function () {
		alert("Thank you for taking time to request a call with us. A member of our team shall be sent to you shortly.")
	});
});
$(document).ready(function () {
	$("#tops").click(function () {
		$("form#myValid").toggle(500);
	});
});
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});
//Contact form
$(document).ready(function () {
    $("#news-t").click(function (event) {
        event.preventDefault();
        $("#jumbs").toggle();
    });
});
$(document).ready(function () {
    $("#news-tc").click(function (event) {
        event.preventDefault();
        $("#jumbs").hide(1000);
    });
});
//testimonial
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"fade",
        autoPlay:true
    });
});

(function() {
    emailjs.init("PuaDPaAxGYtiZl8x3"); // Replace with your EmailJS user ID
  })();

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_cmskk2t', 'template_3odat9o', this)
      .then(function(response) {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send the message. Please try again.');
        console.error(error);
      });
  });

// Toggle Fields Based on Selected Entity Type
document.addEventListener('DOMContentLoaded', function () {
    const societeRadio = document.getElementById('societe');
    const personneRadio = document.getElementById('personne');
    const societeFields = document.getElementById('societeFields');
    const personneFields = document.getElementById('personneFields');

    societeRadio.addEventListener('change', function () {
      if (societeRadio.checked) {
        societeFields.style.display = 'block';
        personneFields.style.display = 'none';
      }
    });

    personneRadio.addEventListener('change', function () {
      if (personneRadio.checked) {
        personneFields.style.display = 'block';
        societeFields.style.display = 'none';
      }
    });
  });