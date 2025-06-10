const module = document.querySelector('.modal')
const module_text = document.querySelector('p')
const log_in_btn = document.querySelectorAll('.btn')[0]
const try_again_btn = document.querySelectorAll('.btn')[1]
const username = document.querySelector('#uname')
const password = document.querySelector('#pwd')

display_module(false)
function display_module(display){
    if (display == false){
        module.style.display = "none"
    } else {
        module.style.display = "block"
    }
}

function validateLogin(){
    if (!/^[a-zA-Z0-9]+$/.test(username.value)){
        module_text.innerText = 'Username should only contain letters and numbers.'
        display_module(true)
        return
    }
    if (username.value == '') {
        module_text.innerText = 'Username field should not be empty.'
        display_module(true)
        return
    }
    if (password.value.length < 8){
        module_text.innerText = 'Invalid password length. Must contain 8 or more characters.'
        display_module(true)
        return
    }
    if (password.value == ''){
        module_text.innerText = 'Password field should not be empty.'
        display_module(true)
        return
    }
    if (/^[a-zA-Z0-9]+$/.test(password.value)){
        module_text.innerText = 'Password should contain special characters. *^%&$#@'
        display_module(true)
        return
    }
    
    window.location.href = '../index.html'
}
log_in_btn.addEventListener('click', function(event){
    event.preventDefault()
    console.log("asdasdabsdbasd")
})

try_again_btn.addEventListener('click', function(){
    display_module(false)
})

