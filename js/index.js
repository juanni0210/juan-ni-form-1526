let btn = document.getElementById("submit-button");
let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let msg = document.getElementById("message");
let form = document.querySelector("form");
let emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function formHandle() {
    console.clear();
    let data = {};
    let errors = [];

    //full  name validation
    if (fullName.value) {
        data.fullname = fullName.value;
    } else {
        let errMsg = "Full name is missing";
        errors.push(errMsg);
    }


    // //email validation
    if (email.value) {
        if (emailFormat.test(email.value)) {
            data.email = email.value;
        } else {
            let errMsg = "Email is invalid";
            errors.push(errMsg);
        }
    } else {
        let errMsg = "Email is missing";
        errors.push(errMsg);
    }

    
    // message validation
    if (msg.value) {
        data.message = msg.value;
    } else {
        let errMsg = "Message is missing";
        errors.push(errMsg);
    }

    
    // print data or errors
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(data);
        form.reset();
    }
}


btn.addEventListener("click", formHandle);
