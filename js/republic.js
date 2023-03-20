 //scroll-navbar
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.second-navbar').addClass('navbar-fixed-top');
        document.getElementById("myHeader").style.background="white";
        document.getElementById("myHeader").style.transition="0.5s";
        document.getElementById("myHeader").style.borderBottom="1px solid rgba(0,0,0,0.1)";
		
    }
   else { 
        $('nav').removeClass('navbar-fixed-top');
		document.getElementById("myHeader").style.borderBottom="0px solid rgba(0,0,0,0)";
		document.getElementById("myHeader").style.top="0px";
      
    }
});
//accordion
var acc = document.getElementsByClassName("course-accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].onclick = function() {
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
	
//back to top
const scrollToTopButton = document.getElementById('js-top');
			window.addEventListener('scroll', () => {
			  let ye = window.scrollY;
			  if (ye > 100) {
				scrollToTopButton.style.bottom = '70px'
			  } else {
				scrollToTopButton.style.bottom = '-200px'
			  }
			})