let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src = "images/visible.png";
    }
    else{
        password.type = "password";  
        eyeIcon.src = "images/eyeclose.png";

    }
}