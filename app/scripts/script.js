// --------------------------change header background----------------------------//

// (() => {const header = document.querySelector('.header'),
//     header_bg__switch_button1 =  header.querySelector('.header-bg__switch-button:first-child'),
//     header_bg__switch_button2 =  header.querySelector('.header-bg__switch-button:last-child');
//     let changeInt,
//         setInt = () => {changeInt = setInterval(change_bg, 5000)},
//         change_bg = () => {
//             header.classList.toggle('active');
//             header_bg__switch_button1.classList.toggle('active');
//             header_bg__switch_button2.classList.toggle('active');
//             clearInterval(changeInt);
//             setInt()
//         };
//
//     setInt();
//
//     header_bg__switch_button1.addEventListener('click', () => {
//         if (!header_bg__switch_button1.classList.contains('active')) {
//             change_bg();
//         }
//     });
//
//     header_bg__switch_button2.addEventListener('click', () => {
//         if (!header_bg__switch_button2.classList.contains('active')) {
//             change_bg();
//         }
//     })
// })();

//-----------------------scroll-----------------------------//

// (() => {
//
//     const smoothScroll = function (targetEl, duration) {
//         // const headerElHeight =  document.querySelector('header').clientHeight;- пока без хедера
//         let target = document.querySelector(targetEl);
//         // let targetPosition = target.getBoundingClientRect().top - headerElHeight;
//         let targetPosition = target.getBoundingClientRect().top;
//         let startPosition = window.pageYOffset;
//         let startTime = null;
//
//         const ease = function(t,b,c,d) {
//             t /= d / 2;
//             if (t < 1) return c / 2 * t * t + b;
//             t--;
//             return -c / 2 * (t * (t - 2) - 1) + b;
//         };
//
//         const animation = function(currentTime){
//             if (startTime === null) startTime = currentTime;
//             const timeElapsed = currentTime - startTime;
//             const run = ease(timeElapsed, startPosition, targetPosition, duration);
//             window.scrollTo(0,run);
//             if (timeElapsed < duration) requestAnimationFrame(animation);
//         };
//         requestAnimationFrame(animation);
//
//     };
//
//     const scrollTo = function () {
//         const links = document.querySelectorAll('.js-scroll');
//         links.forEach(each => {
//             each.addEventListener('click', function () {
//                 const currentTarget = this.getAttribute('href');
//                 smoothScroll(currentTarget, 1000);
//             });
//         });
//     };
//     scrollTo();
// })();

//----------- burger-menu---------------------//
// (() => {
//     const header__burger = document.querySelector('.header__burger');
//     const header_nav_items = document.querySelector('.header__nav-items');
//     const header__nav_links = document.querySelectorAll('.header__nav-link');
//
//     header__burger.addEventListener('click', () => {
//         header__burger.classList.toggle('active');
//         header_nav_items.classList.toggle('active')
//     });
//
//     if (window.innerWidth <= 767) {
//         header__nav_links.forEach(item => {
//             item.addEventListener('click', () => {
//                 header__burger.classList.remove('active');
//                 header_nav_items.classList.remove('active')
//             })
//         })
//     }
// })();

//-----------------------------intro video-----------------------------------//

// $('.intro').vide({
//     mp4: '../img/video/cover1.mp4',
//     poster: '../img/video/cover1.jpg'
// }, {
//     volume: 1,
//     playbackRate: 1,
//     muted: true,
//     loop: true,
//     autoplay: true,
//     position: '50% 50%', // Similar to the CSS `background-position` property.
//     posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
//     resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
//     bgColor: 'transparent', // Allow custom background-color for Vide div,
//     className: '' // Add custom CSS class to Vide div
// });
//

//-----------------------------slick------------------------//

$('.gallery__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    pauseOnFocus: false
});

