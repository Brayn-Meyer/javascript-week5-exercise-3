const nav_slidebar = document.querySelector('.nav-sidebar')
const nav_list = document.querySelectorAll('.nav-sidebar ul, .nav-siddebar ul li span, .nav-sidebar ul li a')
const nav_btn = document.querySelector('.btn-toggle-nav')

let toggle = false
function toggleNav(){
    //Switches between the two animation states in nav_anim when function is triggered
    if (toggle == false){
        nav_anim(true)
        toggle = true
    } else {
        nav_anim(false)
        toggle = false
    }
}

function nav_anim(reverse){
    //Checks if reverse is true in order to activate the correct animation.
    if (reverse == false){
        //Smoothly changes the width of the slidebar.
        nav_slidebar.style.width = '50px'
        nav_slidebar.style.transition = 'width 272px 1s'

        //Smoothly changes the opacity of each element in nav_list.
        nav_list.forEach(link =>{
            link.style.visibility = 'visible'
            link.style.opacity = '0'
            link.style.transition = 'opacity 1s'
        })

        //Smoothly changes the rotation of the nav_btn.
        nav_btn.style.transform = 'rotate(0deg)'
        nav_btn.style.transition = 'transform rotate(90deg) 1s'
    } else {
        //Smoothly changes the width of the slidebar.
        nav_slidebar.style.width = '272px'
        nav_slidebar.style.transition = 'width 50px 1s'

        //Smoothly changes the opacity of each element in nav_list.
        nav_list.forEach(link =>{
            link.style.visibility = 'visible'
            link.style.opacity = '1'
            link.style.transition = 'opacity 0 1s'
        })

        //Smoothly changes the rotation of the nav_btn.
        nav_btn.style.transform = 'rotate(90deg)'
        nav_btn.style.transition = 'transform rotate(0deg) 1s'
    }
}