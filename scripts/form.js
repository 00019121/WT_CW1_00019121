const contact_form = document.querySelector("#contact_form");
const name_input = document.querySelector("#user_name");
const surname_input = document.querySelector("#user_surname");
const email_input = document.querySelector("#user_email");
const text_input = document.querySelector("#user_text");

const name_regex = /^[a-zA-Z\s]+$/;
const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//Validating the form for length, emptiness and case-matching
function validate_form(name, surname, email, text){
    if(name.trim() === "" || surname.trim() === "" || email.trim() === "" || text.trim() === ""){
        alert("Fields cannot be empty");
        return false;
    }
    else if(!name_regex.test(name) || !(name[0] === name[0].toUpperCase()) || name.length < 2){
        alert("Invalid name");
    }
    else if(!name_regex.test(surname) || !(surname[0] === surname[0].toUpperCase()) || surname.length < 2){
        alert("Invalid surname");
    }
    else if(!email_regex.test(email)){
        alert("Invalid email");
    }
    else{
        alert("Form submitted successfully");
        return true;
    }
}


contact_form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate_form(name_input.value, surname_input.value, email_input.value, text_input.value)
})

