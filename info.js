const form = document.getElementById('form');
const uname = document.getElementById('uname');
const ulastname = document.getElementById('ulastname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');
const age = document.getElementById("age");
const graduated1 = document.getElementById("graduated1");
const graduated2 = document.getElementById("graduated2");
// const current_enroll = document.getElementById("cd")

const pv = document.getElementById("pv");
const validate = document.getElementById("validate");

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
var show_array_of_success=[]
var count=0
function shSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    // show_array_of_success.push(count)
    // count++
    
}
console.log(count)

//check email is valid
function chEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        shSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}


//chRequired fields
function chRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getName(input)} is required`)
        }else {
            shSucces(input);
        }
    });
}


//check input Length
function chLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getName(input)} must be les than ${max} characters`);
    }else {
        shSucces(input);
    }
}
function chLengthAge(input, min ,max) {
    if(input.value > min) {
        showError(input, `${getName(input)} must be at ${min} and less ${max} `);
    }else if(input.value < max) {
        showError(input, `${getName(input)} must be at ${min} and less ${max} `);
    }else {
        shSucces(input);
    }
}

//get FieldName
function getName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passs match
function checkMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'passs do not match');
    }
}


//Event Listeners
form.addEvent('submit',function(e) {
    e.preventDefault();

    chRequired([uname, email, pass, pass2,age,graduated1,graduated2]);
    chLength(uname,3,15);
    chLength(pass,6,25);
    chLength(ulastname,3,15);
    chEmail(email);
    chLengthAge(age,18,60);
   
    checkMatch(pass, pass2);
    if(pass.value === pass2.value && pass.value !="" && pass2.value !="" && age.value>=18 ){
        alert1.style.display="block" 
    }

 
    
});


validate.addEvent("click",{
    
})