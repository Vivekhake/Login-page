const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm= document.querySelector(".register-form");

loginBtn.addEventListener('click',() =>{
    loginBtn.style.background =" black";
    registerBtn.style.backgroundColor ="rgba(255,255,255,0.2)";

    loginForm.style.left="0%";
    registerForm.style.left="-100%";

    loginForm.style.opacity= 1;
    registerForm.style.opacity=0;

    document.querySelector(".col-1").style.borderRadius ="0 30% 20% 0";
    
})

registerBtn.addEventListener('click',() =>{
    loginBtn.style.background ="rgba(255,255,255,0.2)";
    registerBtn.style.backgroundColor ="black";
    loginForm.style.left="-100%";
    registerForm.style.left="0%";

    loginForm.style.opacity= 0;
    registerForm.style.opacity=1;

    document.querySelector(".col-1").style.borderRadius ="0 20% 30% 0";
})