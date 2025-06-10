const nav_slidebar = document.querySelector('.nac-slidebar')

let toggle = false
function toggleNav(){
    if (toggle == false){
        nav_anim(false)
    } else {
        nav_anim(true)
    }
}

function nav_anim(reverse){
    let id = null
    clearInterval(id)
    id = setInterval(nav_anim_frame(reverse), 1)
}
function nav_anim_frame(reverse){
    if (reverse == false){
        let width = 50
        if (width == 272){
            clearInterval(id)
        } else {
            width++
            nav_slidebar.style.width = width + 'px'
        }
    } else {
        let width = 272
        if (width == 50){
            clearInterval(id)
        } else {
            width--
            nav_slidebar.style.width = width + 'px'
        }
    }
}