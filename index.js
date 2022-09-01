const dash = document.querySelector('#menu-btn')
const closebtn = document.querySelector('.close')
const sidemenu = document.querySelector('.aside')
const themeToggler = document.querySelector('.theme-toggler')
const lighttheme = document.querySelector('.light')
const darktheme = document.querySelector('.dark')
const menuBtn = document.querySelector('.menuElement')
const menuBucket = document.querySelector('.aside-body')

// MenuElement
// const dashboard = document.querySelector('.dash')
// const customer = document.querySelector('.customer')
// const order = document.querySelector('.order')
// const analytic = document.querySelector('.analytic')
// const message = document.querySelector('.message')
// const product = document.querySelector('.product')
// const report = document.querySelector('.report')
// const setting = document.querySelector('.setting')
// const addProduct = document.querySelector('.addProd')
// const logout = document.querySelector('.logout')

loadEventListener()


function loadEventListener() {
    dash.addEventListener('click', showDash)
    closebtn.addEventListener('click', closeDash)
    themeToggler.addEventListener('click', theme)
    lighttheme.addEventListener('click', light)
    darktheme.addEventListener('click', dark)
        // menuBucket.addEventListener('click', mBucket)
        // menuBtn.addEventListener('click', draw)
        //Menu Elements Event Listener
        // dashboard.addEventListener('click', drag)
        // customer.addEventListener('click', drag)
        // order.addEventListener('click', drag)
        // analytic.addEventListener('click', drag)
        // message.addEventListener('click', drag)
        // product.addEventListener('click', drag)
        // report.addEventListener('click', drag)
        // setting.addEventListener('click', drag)
        // addProduct.addEventListener('click', drag)
        // logout.addEventListener('click', drag)


}

function showDash() {
    sidemenu.style.display = 'block'
    dash.style.cursor = 'pointer'

    sidemenu.style.animation = 'showMenu 1s ease forwards'

}

function closeDash() {
    console.log('hey')
    closebtn.style.cursor = 'pointer'
    sidemenu.style.display = 'none'

}
document.querySelector('.theme-toggler').style.cursor = 'pointer'

function theme() {
    document.body.classList.toggle('dark-theme-variables')
}

function light() {

    lighttheme.style.background = 'var(--primary_color)'
    lighttheme.style.color = 'white'
    darktheme.style.background = 'var(--white-color)'
    darktheme.style.color = 'var(--dark-color)'
}

function dark() {
    darktheme.style.background = 'var(--primary_color)'
    darktheme.style.color = 'white'
    lighttheme.style.background = 'var(--white-color)'
    lighttheme.style.color = 'var(--dark-color)'

}



// function drag() {
//     // console.log('green')
//     let mand = event.target.className
//     console.log(mand)
//     document.querySelector(`.customer`).style.background = 'red'
// }


window.addEventListener("DOMContentLoaded", display)

function display() {
    document.querySelectorAll(".menuElement").forEach(function(task, i) {


        task.addEventListener("click", fish)

        function fish() {

            let mElement = document.querySelectorAll('.menuElement')
            console.log(mElement[`${i}`])
            let clickedMenuElement = mElement[`${i}`]
            clickedMenuElement.style.background = '#e3cff3'
            clickedMenuElement.style.width = '1rem'
        }

    })
}

let meBucket = 0

menuBucket.addEventListener('click', function mBucket() {
    meBucket++
    console.log(`click ${meBucket}`)
    if (meBucket > 1) {
        console.log(meBucket)
        console.log('sshshshshsaoe peoe')

    }
})