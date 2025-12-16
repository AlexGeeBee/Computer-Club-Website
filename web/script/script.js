let questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        let answer = question.lastElementChild;

        if (answer.style.maxHeight) {
            document.querySelectorAll(".answer").forEach((el) => el.style.maxHeight = null);
            answer.style.marginTop = null;
            answer.previousElementSibling.style.transform = null;
        }
        else {
            document.querySelectorAll(".answer").forEach((el) => {
                el.style.maxHeight = null;
                el.style.marginTop = null;
            });
            document.querySelectorAll(".question__open").forEach((el) => el.style.transform = null);
            
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.marginTop = "30px";
            answer.previousElementSibling.style.transform = "rotate(45deg)";
        }

    });
})

document.querySelector(".burger-checkbox").addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.style.overflow = 'hidden';
        document.querySelector('main').style.opacity = 0.3;
    }
    else {
        document.body.style.overflow = null;
        document.querySelector('main').style.opacity = 1;
    }
});


// AUTH AND REGISTER

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[action="account.html"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const nameInput = document.querySelector('input[name="name"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="password_repeat"]');
    
    function validatePhone(phone) {
        const cleanedPhone = phone.replace(/\D/g, '');
        const phoneRegex = /^[\d\s\-\+\(\)]{4,20}$/;
        
        if (!phoneRegex.test(phone)) {
            return false;
        }
        
        return cleanedPhone.length >= 4 && cleanedPhone.length <= 20;
    }
    
    function validatePassword(password) {
        return password.length >= 7 && password.length <= 20;
    }
    
    function validateName(name) {
        const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s\-]{3,20}$/;
        return nameRegex.test(name);
    }

    function validatePasswordMatch(password, confirmPassword) {
        return password === confirmPassword;
    }

    function updateInputStyle(inputElement, isValid) {
        if (isValid) {
            inputElement.style.border = '4px solid #4CAF50';
        } 
        else {
            inputElement.style.border = '4px solid #E82525';
        }
    }
    
    function resetInputStyle(inputElement) {
        inputElement.style.border = '';
        inputElement.style.borderRadius = '';
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                resetInputStyle(this);
            } else {
                const isValid = validatePhone(this.value);
                updateInputStyle(this, isValid);
            }
        });
        
        phoneInput.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                const isValid = validatePhone(this.value);
                updateInputStyle(this, isValid);
            }
        });
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                resetInputStyle(this);
                if (confirmPasswordInput) {
                    resetInputStyle(confirmPasswordInput);
                }
            } else {
                const isValid = validatePassword(this.value);
                updateInputStyle(this, isValid);
                
                if (confirmPasswordInput && confirmPasswordInput.value.trim() !== '') {
                    const isMatch = validatePasswordMatch(this.value, confirmPasswordInput.value);
                    updateInputStyle(confirmPasswordInput, isMatch);
                }
            }
        });
        
        passwordInput.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                const isValid = validatePassword(this.value);
                updateInputStyle(this, isValid);
            }
        });
    }
    
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                resetInputStyle(this);
            } else {
                const isValid = validateName(this.value);
                updateInputStyle(this, isValid);
            }
        });
        
        nameInput.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                const isValid = validateName(this.value);
                updateInputStyle(this, isValid);
            }
        });
    }
    
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                resetInputStyle(this);
            } else {
                const isMatch = validatePasswordMatch(passwordInput.value, this.value);
                updateInputStyle(this, isMatch);
            }
        });
        
        confirmPasswordInput.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                const isMatch = validatePasswordMatch(passwordInput.value, this.value);
                updateInputStyle(this, isMatch);
            }
        });
    }
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValidForm = true;
            
            if (phoneInput) {
                if (phoneInput.value.trim() === '') {
                    updateInputStyle(phoneInput, false);
                    isValidForm = false;
                } else {
                    const isPhoneValid = validatePhone(phoneInput.value);
                    updateInputStyle(phoneInput, isPhoneValid);
                    if (!isPhoneValid) {
                        isValidForm = false;
                    }
                }
            }
            
            if (nameInput) {
                if (nameInput.value.trim() === '') {
                    updateInputStyle(nameInput, false);
                    isValidForm = false;
                } else {
                    const isNameValid = validateName(nameInput.value);
                    updateInputStyle(nameInput, isNameValid);
                    if (!isNameValid) {
                        isValidForm = false;
                    }
                }
            }
            
            if (passwordInput) {
                if (passwordInput.value.trim() === '') {
                    updateInputStyle(passwordInput, false);
                    isValidForm = false;
                } else {
                    const isPasswordValid = validatePassword(passwordInput.value);
                    updateInputStyle(passwordInput, isPasswordValid);
                    if (!isPasswordValid) {
                        isValidForm = false;
                    }
                }
            }
            
            if (confirmPasswordInput) {
                if (confirmPasswordInput.value.trim() === '') {
                    updateInputStyle(confirmPasswordInput, false);
                    isValidForm = false;
                } else {
                    const isMatch = validatePasswordMatch(passwordInput.value, confirmPasswordInput.value);
                    updateInputStyle(confirmPasswordInput, isMatch);
                    if (!isMatch) {
                        isValidForm = false;
                    }
                }
            }
            
            if (isValidForm) {
                window.location.href = 'account.html';
            }
        });
    }
});