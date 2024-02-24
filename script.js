// Script File

// Home Section Script Starts
var typingText = document.querySelector('.text2');
var myArray = 
["Web Developer"];
var arrayIndex = 1;

function textReplace(){
	setInterval(timer, 5000);
	function timer(){
		if(arrayIndex < myArray.length){
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
		else{
			arrayIndex = 0;
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
	}
}
textReplace();

var menuBtn = document.querySelector('.navbar .menu-btn');
var menuList = document.querySelector('.navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', addActiveClass);

function addActiveClass(){
	menuList.classList.toggle('active');
}

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuList.classList.remove('active');
}


var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 80){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}



function submitForm(event) {
	event.preventDefault();
  
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
  
	// You can use an AJAX request to send the form data to the server
	// and handle the email sending process on the server side.
  
	// For demonstration purposes, we'll just display a response on the page.
	var responseElement = document.getElementById('response');
	responseElement.innerHTML = `Thank you, ${name}! Your message has been received.`;
  }
  
// get in touch

function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "sendEmail.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            // Optionally, you can clear the form fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
    };
    xhr.send("name=" + name + "&email=" + email + "&message=" + message);
}



// php 

