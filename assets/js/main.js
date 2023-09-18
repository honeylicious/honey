/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})

/*=============== SHOW SCROLL UP ===============*/
// const contactForm = document.querySelector("#contact-form")
// const submitBtn = document.querySelector("#button")
// const emailInput = document.querySelector("#email")
// const textInput = document.querySelector("#text")
// const messageInput = document.querySelector("#message")

// Get nedded data from email JS
// const publicKey = "qYJL2jABzvMOFtdpJ";
// const serviceId = "service_7ent9xd";
// const templateId = "template_6u0lpg5";

// Initialize email JS with public key
// emailjs.init(publicKey);

// Add submit event to the form
// contactForm.addEventListener("submit", e => {
    // Prevent form default behaviour
    // e.preventDefault();

    // Change button text
    // submitBtn.innerText = "Just A Moment...";

    // Get all input field values
    // const inputFields = {
    //     email: emailInput.value,
    //     text: textInput.value,
    //     message: messageInput.value
    // }

    /* Send the the email
(Add service, template ID and input field values)*/
// emailjs.send(serviceId, templateId, inputFields)
// .then(() => {

    // alert('Thank you' + '! Your message has been sent.');
    // Change button text
    // submitBtn.innertext = "message sent";

    // Clear out all input fields
//     emailInput.value = "";
//     textInput.value = "";
//     messageInput.value = "";
// }, (error) => {

    // Console log error
    // console.log(error)

    // Change button text
//     submitBtn.innerText = "Something went wrong";
//   });
// });

// document.getElementById("contact-form")
//             e.preventDefault();

//             function sendMessage() {
//                 (function() {
//                     emailjs.init("qYJL2jABzvMOFtdpJ"); // Account Public Key  
//                 })();
//             }

//             var serviceID = "service_7ent9xd" // Email service ID
//             var templateID = "template_6u0lpg5" //Email template ID

//             var params = {
//                 senderemail: document.querySelector("#email").value,
//                 subject: document.querySelector("#text").value,
//                 message: document.querySelector("#message").value
//             };

//             emailjs.send(serviceID, templateID, params)
//             .then( res => {
//                 alert('Thank you, ' + params['senderemail'] + '! Your message has been sent.')
//             })
//             .catch();

    // window.onload = function() {
    //     document.getElementById('contact-form').addEventListener('submit', function(event) {
    //         event.preventDefault();
    //     })
    // }
// const publicKey = "qYJL2jABzvMOFtdpJ";
            
//             emailjs.init(publicKey); // Account Public Key  
            
        
//         var serviceID = "service_7ent9xd" // Email service ID
//         var templateID = "template_6u0lpg5" //Email template ID

//         var params = {
//             senderemail: document.querySelector("#email").value,
//             subject: document.querySelector("#text").value,
//             message: document.querySelector("#message").value
//         };
        
        

//         emailjs.send(serviceID, templateID, params)
//         .then( res => {
//             alert('Thank you, ' + params['senderemail'] + '! Your message has been sent.')
//         })
//         .catch();
