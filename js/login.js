const module = document.querySelector('.modal')
const log_in_btn = document.querySelectorAll('.btn')[0]
const try_again_btn = document.querySelectorAll('.btn')[1]
const username = document.querySelector('.uname')
const password = document.querySelector('.pwd')

display_module(false)
function display_module(display){
    if (display == false){
        module.style.display = "none"
    } else {
        module.style.display = "block"
    }
}

function validateLogin(){
    if (username.value == '' && password.value == ''){
        if (username.value == ''){
            alert('Invalid username!!!')
        } 
        if (password.value == ''){
            alert('Invalid password!!!')
        }
    } else {
            window.location.href = '../index.html'
    }
}

log_in_btn.addEventListener('click', function(event){
    event.preventDefault()
    console.log("asdasdabsdbasd")
})

try_again_btn.addEventListener('click', function(){
    display_module(true)
})

