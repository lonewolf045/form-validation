const form  = document.getElementsByTagName('form')[0];
const emailValidator = () => {
    const email = document.getElementById('email');
    const emailError = document.querySelector('#email + div.error');
    console.log(email);
    console.log(emailError);
    console.log(form);


    email.addEventListener('input', function (event) {

        if (email.validity.valid) {
            emailError.innerHTML = '';
            emailError.className = 'error';
        } else {
            showErrorEmail();
        }
    });

    form.addEventListener('submit', function (event) {
        if(!email.validity.valid) {
            showErrorEmail();
            event.preventDefault();
        }
    });

    function showErrorEmail() {
        if(email.validity.valueMissing) {
            emailError.textContent = 'You need to enter an e-mail address.';
        } else if(email.validity.typeMismatch) {
            emailError.textContent = 'Entered value needs to be an e-mail address.';
        } else if(email.validity.tooShort) {
            emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
        }

        emailError.className = 'error active';
    }
}

const countryValidator = () => {
    const country = document.getElementById('country');
    const countryError = document.querySelector('#country + div.error');

    function showErrorCountry() {
        if(country.validity.valueMissing) {
            countryError.textContent = 'You need to enter a country';
        } else if(country.validity.patternMismatch) {
            countryError.textContent = 'Entered value needs to be valid';
        }

        countryError.className = 'error active';
    }

    country.addEventListener('input', function (event) {

        if (country.validity.valid) {
            countryError.innerHTML = '';
            countryError.className = 'error';
        } else {
            showErrorCountry();
        }
    });

    form.addEventListener('submit', function (event) {
        if(!country.validity.valid) {
            showErrorCountry();
            event.preventDefault();
        }
    });
}

const zipcodeValidator = () => {
    const zipcode = document.getElementById('zipcode');
    const zipcodeError = document.querySelector('#zipcode + div.error');

    function showErrorZipCode() {
        if(zipcode.validity.valueMissing) {
            zipcodeError.textContent = 'You need to enter a zipcode';
        } else if(zipcode.validity.typeMismatch) {
            zipcodeError.textContent = 'Entered value needs to be a number';
        } else if(zipcode.validity.rangeUnderflow) {
            zipcodeError.textContent = `Zipcode is less than ${zipcode.min}`;
        } else if(zipcode.validity.rangeOverflow) {
            zipcodeError.textContent = `Zipcode is more than ${zipcode.max}`;
        }

        zipcodeError.className = 'error active';
    }

    zipcode.addEventListener('input', function (event) {

        if (zipcode.validity.valid) {
            zipcodeError.innerHTML = '';
            zipcodeError.className = 'error';
        } else {
            showErrorZipCode();
        }
    });

    form.addEventListener('submit', function (event) {
        if(!zipcode.validity.valid) {
            showErrorZipCode();
            event.preventDefault();
        }
    });

}

const passwordValidator = () => {
    const password = document.getElementById('password');
    const passwordError = document.querySelector('#password + div.error');
    const passwordConf = document.getElementById('password-conf');
    const passwordConfError = document.querySelector('#password-conf + div.error');
    // console.log(password);
    // console.log(passwordError);

    function showErrorPassword() {
        if(password.validity.valueMissing) {
            passwordError.textContent = 'You need to enter a valid password';
        } else if(password.validity.patternMismatch) {
            passwordError.textContent = 'Entered value needs to be valid. Must contain at least one number and one uppercase and lowercase letter, password should also contain atleast one of these, (@,#,$,_ ), and at least 8 or more characters';
        }
        passwordError.className = 'error active';
    }

    function showErrorConfirm() {
        if(password.validity.valueMissing) {
            showErrorPassword();
            passwordConfError.textContent = `Enter password first then confirm`;
        } else if(passwordConf.value !== password.value) {
            passwordConfError.textContent = `Passwords does not match.`;
        }
        passwordConfError.className = 'error active';
    }

    password.addEventListener('input', function (event) {
        passwordConfError.innerHTML = '';
        passwordConfError.className = 'error';
        passwordConf.value = '';
        if (password.validity.valid) {
            passwordError.innerHTML = '';
            passwordError.className = 'error';
        } else {
            showErrorPassword();
        }
    });


    passwordConf.addEventListener('input' , (event) => {
        if(passwordConf.value === password.value) {
            passwordConfError.innerHTML = '';
            passwordConfError.className = 'error';
        } else {
            showErrorConfirm();
        }
    })

    form.addEventListener('submit', function (event) {
        if(!password.validity.valid) {
            showErrorPassword();
            event.preventDefault();
        }

        if(passwordConf.value !== password.value) {
            showErrorConfirm();
            event.preventDefault();
        } 
    });
}


emailValidator();
countryValidator();
zipcodeValidator();
passwordValidator();
