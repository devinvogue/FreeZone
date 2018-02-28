function register() {
   var userAge = prompt("Enter your age");

  if(userAge >= 18){
    window.location.href="register.html";
  }else{
  	alert('You are not eligible to register');
  }
}