
//tooltip
$(function() {  
$( "#tooltip-3,#tooltip-4,#tooltip-5,#tooltip-6,#tooltip-7,#tooltip-8,#tooltip-9,#tooltip-10" ).tooltip({  
position: {  
my: "center bottom",  
at: "center top-10",  
collision: "none"  
}  
});  
});  

//top slide
$('#basicSlider').multislider({
					continuous: true,
					duration: 2000
				});
				$('#mixedSlider').multislider({
					duration: 750,
					interval: 3000
				});


//top-popup
function disabledmodal(xyz) {
			  if (xyz.matches) { 
				var firstModal = document.getElementById("firstModal");
				var btn1 = document.getElementById("firstBtn");
				var span1 = document.getElementsByClassName("close")[0];
				btn1.onclick = function() {
				firstModal.style.display = "none";
				}
				span1.onclick = function() {
				firstModal.style.display = "none";
				}
				window.onclick = function(event) {
					if (event.target == firstModal) {
					firstModal.style.display = "none";
						}
					}
				} 
			 else {
				var firstModal = document.getElementById("firstModal");
				var btn1 = document.getElementById("firstBtn");
				var span1 = document.getElementsByClassName("close")[0];
				btn1.onclick = function() {
					firstModal.style.display = "block";
				}
				span1.onclick = function() {
				firstModal.style.display = "none";
				}
				window.onclick = function(event) {
					if (event.target == firstModal) {
						firstModal.style.display = "none";
						}
					}
				}
			}

			var xyz = window.matchMedia("(max-width: 768px)")
			disabledmodal(xyz)
			xyz.addListener(disabledmodal)
			

//navbar dropdown
function navbarShow(){
				var show=document.getElementById("navshow");
					
					 if (show.style.display === "none") {
							show.style.display = "block";
							
						} 
					else{
					show.style.display = "none";
					
					}
			}

function invest(){
				var show1=document.getElementById("invest");
				var arrow=document.getElementById("arrow");
					 if (show1.style.display === "none") {
							show1.style.display = "block";
							
							arrow.style.transform="rotate(180deg)"
						} 
					else{
					show1.style.display = "none";
					 arrow.style.transform="rotate(0deg)"
					}
				
				  
			}
			function learn(){
				var show2=document.getElementById("learn");
				var arrow1=document.getElementById("arrow1");
					 if (show2.style.display === "none") {
							show2.style.display = "block";
							arrow1.style.transform="rotate(180deg)"
						} 
					else{
					show2.style.display = "none";
					 arrow1.style.transform="rotate(0deg)"
					}  
			}
			function blog(){
				var show3=document.getElementById("blog");
				var arrow4=document.getElementById("arrow4");
					 if (show3.style.display === "none") {
							show3.style.display = "block";
							arrow4.style.transform="rotate(180deg)"
						} 
					else{
						show3.style.display = "none";
						arrow4.style.transform="rotate(0deg)"
					}  
			}
			function raise(){
				var show4=document.getElementById("raise");
				var arrow3=document.getElementById("arrow3");
				
					 if (show4.style.display === "none") {
							show4.style.display = "block";
							arrow3.style.transform="rotate(180deg)"
						} 
					else{
						show4.style.display = "none";
						arrow3.style.transform="rotate(0deg)"
					}  
			}
//animated icon navbar
$(document).ready(function () {
			  $('.first-button').on('click', function () {

				$('.animated-icon1').toggleClass('open');
				
			  });
			  
			});
//top slide name modal
function name1(){
			    var nameModal = document.getElementById("nameModal");
			
				var span2 = document.getElementsByClassName("close")[1];
				
				nameModal.style.display = "block";
				
				span2.onclick = function() {
				nameModal.style.display = "none";
				}
				window.onclick = function(event) {
					if (event.target == nameModal) {
					nameModal.style.display = "none";
						}
					}
			}
//pic name modal
function name2(){
			    var nameModal2 = document.getElementById("nameModal2");
			
				var span3 = document.getElementsByClassName("close")[2];
				
				nameModal2.style.display = "block";
				
				span3.onclick = function() {
				nameModal2.style.display = "none";
				}
				window.onclick = function(event) {
					if (event.target == nameModal) {
					nameModal2.style.display = "none";
						}
					}
			}
//input popup or modal
function inputp(){
		    var tot=document.getElementById("tot");
			if(tot.style.opacity==="0" && tot.styly.visibility==="hidden" ){
			    tot.style.opacity="1";
			    tot.style.visibility="visible";
			}
		  else{
		        tot.style.opacity="1";
			    tot.style.visibility="visible";
		  }
		  
		 }
		 
		
function inputpp1(){
		    var tott=document.getElementById("tott");
			if(tott.style.opacity==="0" && tott.style.visibility==="hidden" ){
			    tott.style.opacity="1";
			    tott.style.visibility="visible";
			}
		  else{
		        tott.style.opacity="1";
			    tott.style.visibility="visible";
				
		  
}
}


//emoji topup
 function emoji(){
		        var emji= document.getElementById("emoShow");
				if(emji.style.visibility==="hidden"){
				  emji.style.visibility="visible";
				}
				else{
				emji.style.visibility="hidden";
				}
		   
		   }
//message modal
function message(){
		        var message= document.getElementById("message");
		        var one= document.getElementById("one");
		        var tow= document.getElementById("tow");
				if(message.style.visibility==="hidden" && message.style.opacity==="0"){
				  message.style.visibility="visible";
				  message.style.opacity="1"
				  one.style.display="block";
				  tow.style.display="none";
				
				}
				
				else{
				message.style.visibility="hidden";
				message.style.opacity="0"
				one.style.display="none";  
				tow.style.display="block";
				}
		   
		   }