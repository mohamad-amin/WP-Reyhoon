import $ from 'jquery'

const LOGIN_HEADER_SELECTOR = ".authentication-login";
const REGISTER_HEADER_SELECTOR = '.authentication-register';

const LOGIN_SPECIFIC_CLASS = '.login-specific';
const REGISTER_SPECIFIC_CLASS = '.register-specific';

const CLASS_SELECTED = 'selected-header';
const FADE_DURATION = 250;

function executeOnReady() {
    $(document).ready(function() {
        handleLogin();
        handleRegister();
        if (isLoggingIn()) {
            $(REGISTER_SPECIFIC_CLASS).hide()
        } else {
            $(LOGIN_SPECIFIC_CLASS).hide()
        }
    });
}

function handleLogin() {
    $(LOGIN_HEADER_SELECTOR)[0].onclick = function () {
        if(isLoggingIn()) {
            return;
        }
        $(LOGIN_HEADER_SELECTOR).addClass(CLASS_SELECTED);
        $(REGISTER_HEADER_SELECTOR).removeClass(CLASS_SELECTED);
        $(REGISTER_SPECIFIC_CLASS).fadeOut(FADE_DURATION, function(){
            $(LOGIN_SPECIFIC_CLASS).fadeIn(FADE_DURATION);
        });
    };
}

function handleRegister() {
    $(REGISTER_HEADER_SELECTOR)[0].onclick = function () {
        if(!isLoggingIn()) {
            return;
        }
        $(REGISTER_HEADER_SELECTOR).addClass(CLASS_SELECTED);
        $(LOGIN_HEADER_SELECTOR).removeClass(CLASS_SELECTED);
        $(LOGIN_SPECIFIC_CLASS).fadeOut(FADE_DURATION, function(){
            $(REGISTER_SPECIFIC_CLASS).fadeIn(FADE_DURATION);
        });
    };
}

function isLoggingIn() {
    return $(LOGIN_HEADER_SELECTOR)[0].classList.contains(CLASS_SELECTED);
}

export default executeOnReady