$(window).scroll(function(event) {
  let scroll = window.scrollY;
  let viewportSize = $(window).width();

  if (viewportSize < 1600 && viewportSize >= 769) {
    $('.top-hr').css("transform", "translateX(" + (scroll - 1300) * 1.5 + "px)");
    $('.bottom-hr').css("transform", "translateX(" + (-scroll + 1300) * 1.5 + "px)");

    $('.top-hr-skills').css("transform", "translateX(" + (-scroll + 5300) * 1.5 + "px)");
    $('.bottom-hr-skills').css("transform", "translateX(" + (scroll - 5300) * 1.5 + "px)");
  }

});

//------------------------------------- FRONT END -----------------------------------
$('.1').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("React JS");
});

$('.2').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("HTML 5");
});

$('.3').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("CSS 3");
});

$('.4').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Bootstrap 4 / 5");
});

$('.5').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("JavaScript ES6");
});

$('.6').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("jQuery");
});

$('.7').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Document Object Model");
});

$('.8').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("SEO");
});

$('.9').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Google Analytics");
});

$('.10').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("UI Design / UX Design");
});

//------------------------------------- BACK END -----------------------------------

$('.11').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Node JS");
});

$('.12').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'> </i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Express JS");
});

$('.13').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("MongoDB");
});

$('.14').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'>");
}, function() {
  $(this).text("Mongoose");
});

$('.15').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'>");
}, function() {
  $(this).text("Command Shell");
});

$('.16').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Version Control (Git)");
});

$('.17').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("EJS Templating");
});

$('.18').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Authentication (Passport JS)");
});

$('.19').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Object Oriented Programming");
});

$('.20').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("RESTful API");
});

$('.21').hover(function() {
  $(this).html("<i class='fas fa-star'></i> <i class='fas fa-star'></i>");
}, function() {
  $(this).text("Java 8 SE");
});

// ------------------------------------ TALK TO ME BUTTON --------------------------------------------

$('.contact-btn').hover(function() {
  $(this).html("<i class='fas fa-paper-plane'></i>");
}, function() {
  $(this).text("Talk To Me");
});

// ---------------------------------- SCROLL TO TOP BUTTON ---------------------------------------------

mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$("#scrollToTop").click(function() {
  topFunction();
});
