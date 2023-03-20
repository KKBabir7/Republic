//accordion invest
var acc = document.getElementsByClassName("course-accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].onmouseover = function() {
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("course-panel");
		var courseAccordion = document.getElementsByClassName("course-accordion");
		var courseAccordionActive = document.getElementsByClassName("course-accordion active");

		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
			this.classList.remove("active");
		} else {
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}
			for (var iii = 0; iii < coursePanel.length; iii++) {
			  this.classList.remove("active");
			  coursePanel[iii].style.maxHeight = null;
			}
		  panel.style.maxHeight = panel.scrollHeight + "px";
		  this.classList.add("active");
		} 
	  }
	}
	

//accordion invest FAQ
var accf = document.getElementsByClassName("faq");
	var p;

	for (p = 0; p < accf.length; p++) {
	  accf[p].onclick = function() {
		var panelf = this.nextElementSibling;
		var coursePanelf = document.getElementsByClassName("faq-p");
		var courseAccordionf = document.getElementsByClassName("faq");
		var courseAccordionActivef = document.getElementsByClassName("faq activef");

		if (panelf.style.maxHeight){
			panelf.style.maxHeight = null;
			this.classList.remove("activef");
		} else {
			for (var pp = 0; pp< courseAccordionActivef.length; pp++) {
				courseAccordionActivef[pp].classList.remove("activef");
			}
			for (var ppp = 0; ppp < coursePanelf.length; ppp++) {
			  this.classList.remove("activef");
			  coursePanelf[ppp].style.maxHeight = null;
			}
		  panelf.style.maxHeight = panelf.scrollHeight + "px";
		  this.classList.add("activef");
		} 
	  }
	}
	


//navbar scroll


function disableinvest(ayz) {
			  if (ayz.matches) { 
	window.onscroll = function() {myFunction()};

var navbar1 = document.getElementById("navbar1");
var savebtn = document.getElementById("savebtn");
var tbtn = document.getElementById("tbtn");
var hh = document.getElementById("hh");
var sticky = navbar1.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar1.classList.add("sticky");
    savebtn.classList.add("animatinbutton");

	savebtn.style.display="none";
	
	tbtn.style.display="block";
	
	
  } else {
    navbar1.classList.remove("sticky");
	savebtn.style.display="block";
	tbtn.style.display="block";
	
  }
}
const scrollToTopButton = document.getElementById('js-top');
			window.addEventListener('scroll', () => {
			  let ye = window.scrollY;
			  if (ye > 100) {
				scrollToTopButton.style.bottom = '150px'
			  } else {
				scrollToTopButton.style.bottom = '-300px'
			  }
			})


}
else{
		window.onscroll = function() {myFunction()};

var navbar1 = document.getElementById("navbar1");
var savebtn = document.getElementById("savebtn");
var tbtn = document.getElementById("tbtn");
var hh = document.getElementById("hh");
var sticky = navbar1.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar1.classList.add("sticky");
    savebtn.classList.add("animatinbutton");

	savebtn.style.display="block";
	
	tbtn.style.display="none";
	
	
  } else {
    navbar1.classList.remove("sticky");
	savebtn.style.display="none";
	tbtn.style.display="block";
	
  }
}
	
const scrollToTopButton = document.getElementById('js-top');
			window.addEventListener('scroll', () => {
			  let ye = window.scrollY;
			  if (ye > 100) {
				scrollToTopButton.style.bottom = '70px'
			  } else {
				scrollToTopButton.style.bottom = '-200px'
			  }
			})	
	
}
}

			var ayz = window.matchMedia("(max-width: 768px)")
			disableinvest(ayz)
		
			






//reade more
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "...Read more") {
    $(this).text("")
  } else {
    $(this).text("Read more")
  }
});



//mobile menubar
function mobilemeny(){
	var mn=document.getElementById("mshow");
	if(mn.style.display==="none"){
		mn.style.display="block";
		mm.classList.add("sloww");
	}
	else{
		mn.style.display="none";
		mm.classList.add("sloww");
	}
}