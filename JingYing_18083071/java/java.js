
//-----Menu animation-----//
let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    }
//----faq drop down animation----//
    document.addEventListener('DOMContentLoaded', function () {
        const faqItems = document.querySelectorAll('.faq-item');
    
        faqItems.forEach(item => {
            item.addEventListener('click', function () {
            
                this.classList.toggle('active');
            });
        });
    });


//----popup alert function----//
function signIn() {
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const passwordInput = document.getElementById('password');
    
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = passwordInput.value.trim();
    
        if (usernameValue === '' || emailValue === '' || passwordValue === '') {
            alert('Please fill in all fields.');
            return false;
        } else {
            alert('You have successfully logged in.');
            window.location.href ='../html/home.html';
        }
    }
    
function register(){
    
const username = document.getElementById('username');
const email = document.getElementById('email');
const passwordInput = document.getElementById('password');
    
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = passwordInput.value.trim();
    
        if (usernameValue === '' || emailValue === '' || passwordValue === '') {
            alert('Please fill in all fields.');
            return false;
        } else {
            alert('You have successfully registered.');
            window.location.href ='../html/home.html';
        }
    }

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('msg');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        validateInputs();
    });
    
const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }
    
const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };
    
const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
const validateInputs = () => {
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const msgValue = msg.value.trim();
       
    
        if(usernameValue === '') {
            setError(username, 'Name is required');
        } else {
            setSuccess(username);
        }

        if (msgValue == ''){
            setError(msg, 'Please Enter Your Message');
        } else{
            setSuccess(msg);
            
        }
    
        if(emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
            alert(`Thank you for contacting us, ${usernameValue}! We will respond to your inquiries as soon as possible.`);
        }   

    
    };
      
