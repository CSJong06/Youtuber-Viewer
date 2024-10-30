let subBtn = document.getElementById("subBtn");
let uName = document.getElementById("uName");
let email = document.getElementById("email");
let pWord = document.getElementById("pWord");
let nameError = document.getElementById("nameError");
let returnBtn = document.getElementById("returnBtn");


function save(){

    //if the length of the username is less than 4, it will display the error messesage
    if (uName.value.length < 4){ 
        nameError.style.display = "block";
    }

    // once all the conditions are met, the error message will hide, info will be saved, and allow you to return.
    else {
        nameError.style.display = "none";
        localStorage.setItem('name', uName.value);
        returnBtn.style.display = "block";

        localStorage.setItem('email', email.value);
        localStorage.setItem('password', pWord.value);
    }


}
