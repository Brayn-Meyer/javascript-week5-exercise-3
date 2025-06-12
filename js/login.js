const modal = document.querySelector('.modal')
const modal_text = document.querySelector('p')
const log_in_btn = document.querySelectorAll('.btn')[0]
const try_again_btn = document.querySelectorAll('.btn')[1]
const username = document.querySelector('#uname')
const password = document.querySelector('#pwd')

display_modal(false)
function display_modal(display){
    //Switches between whether or not to make the modal visible.
    if (display == false){
        modal.style.display = "none"
    } else {
        modal.style.display = "block"
    }
}

function validateLogin(){
    //Ensures the username field only contains numbers instead of any special characters.
    if (!/^[a-zA-Z0-9]+$/.test(username.value)){
        modal_text.innerText = 'Username should only contain letters and numbers.'
        display_modal(true)
        return
    }
    //Ensures the username field isn't empty.
    if (username.value == '') {
        modal_text.innerText = 'Username field should not be empty.'
        display_modal(true)
        return
    }
    //Ensures the password field is longer than 7 characters.
    if (password.value.length < 8){
        modal_text.innerText = 'Invalid password length. Must contain 8 or more characters.'
        display_modal(true)
        return
    }
    //Ensures the password field isn't empty.
    if (password.value == ''){
        modal_text.innerText = 'Password field should not be empty.'
        display_modal(true)
        return
    }
    //Ensures the password contains special characters.
    if (/^[a-zA-Z0-9]+$/.test(password.value)){
        modal_text.innerText = 'Password should contain special characters. *^%&$#@'
        display_modal(true)
        return
    }
    
    //Relocates the user to another web page when all if statements are cleared.
    window.location.href = '../index.html'
}
//Prevents the page from reloading when submit button is pressed.
log_in_btn.addEventListener('click', function(event){
    event.preventDefault()

})

//Disables the modal when the retry biutton is pressed.
try_again_btn.addEventListener('click', function(){
    display_modal(false)
})

