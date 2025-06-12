const nav_slidebar = document.querySelector('.nav-sidebar')
const nav_list = document.querySelectorAll('.nav-sidebar ul, .nav-siddebar ul li span, .nav-sidebar ul li a')
const nav_btn = document.querySelector('.btn-toggle-nav')

let toggle = false
function toggleNav(){
    if (toggle == false){
        nav_anim(true)
        toggle = true
    } else {
        nav_anim(false)
        toggle = false
    }
}

// function nav_anim(reverse){
//     let id = null
//     clearInterval(id)
//     id = setInterval(nav_anim_frame(reverse), 1)
// }
function nav_anim(reverse){
    if (reverse == false){
        // let width = 50
        // let opacity = 0
        // let rotation = 0
        // if (width == 272 && opacity == 1 && rotation == 90){
        //     clearInterval(id)
        // } else {
            // if (width < 272){
            //     width++
            //     nav_slidebar.style.width = width + 'px'
            // } else {
            //     nav_slidebar.style.width = '272px'
            // }
        nav_slidebar.style.width = '50px'
        nav_slidebar.style.transition = 'width 272px 1s'
            // if (opacity < 1){
                // opacity += 0.0045045045045045
                // nav_list.style.opacity = opacity
        nav_list.forEach(link =>{
            link.style.visibility = 'visible'
            link.style.opacity = '0'
            link.style.transition = 'opacity 1 1s'
        })
            // }
            // } else {
            //     nav_list.style.opacity = 1
            // }
            // if (rotation < 90){
            //     rotation += 2.466666666666667
            //     nav_btn.style.rotation = rotation
            //     nav
            // } else {
            //     nav_btn.style.rotation = '90'
            // }
        nav_btn.style.rotation = '0'
        nav_btn.style.transition = 'rotation 90 1s'
        // }
    } else {
        // let width = 272
        // let opacity = 1
        // let rotation = 90
        // if (width == 50  && opacity == 0 && rotation == 0){
        //     clearInterval(id)
        // } else {
            // if (width > 50){
            //     width--
            //     nav_slidebar.style.width = width + 'px'
            // } else {
            //     nav_slidebar.style.width = '50px'
            // }
            // if (opacity > 0){
            //    opacity -= 0.0045045045045045
            //    nav_list.style.opacity = opacity
        nav_slidebar.style.width = '272px'
        nav_slidebar.style.transition = 'width 50px 1s'

        nav_list.forEach(link =>{
            link.style.visibility = 'visible'
            link.style.opacity = '1'
            link.style.transition = 'opacity 0 1s'
        })
            // } else {
            //     nav_list.style.opacity = 0
            // }
            // if (rotation > 0){
            //     rotation -= 2.466666666666667
            //     nav_btn.style.rotation = rotation
            // } else {
            //     nav_btn.style.rotation = '0'
            // }
        nav_btn.style.rotation = '90'
        nav_btn.style.transition = 'rotation 0 1s'
        // }
    }



}