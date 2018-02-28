function register() {

   var userAge = prompt("Enter your age");

  if(userAge >= 18){
    window.location.href="index.html";
  }else{
    document.write('You are not eligible to register');
  }
}