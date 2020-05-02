"use strict";

//---------------------------------email------------------------//

var ajax_mail = function ajax_mail(form) {
    form.submit(function () {
        //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
};

ajax_mail($(".order__form"));
ajax_mail($(".online_form"));
ajax_mail($(".header__form-offline"));

//----------------------------langswitch---------------------------//

var langSwitcher_ru = document.querySelector('.header__lang-switch.est'),
    langSwitcher_est = document.querySelector('.header__lang-switch.ru');
var ruText = document.querySelectorAll('.ru');
var estText = document.querySelectorAll('.est');

langSwitcher_est.addEventListener('click', function () {
    for (var i = 0; i < ruText.length; i++) {
        ruText[i].classList.add('hide');
        estText[i].classList.remove('hide');
    }
});

langSwitcher_ru.addEventListener('click', function () {
    for (var i = 0; i < ruText.length; i++) {
        estText[i].classList.add('hide');
        ruText[i].classList.remove('hide');
    }
});

//---------------------------popups---------------------------------//

var body = document.querySelector('body'),
    bying_trigger = document.querySelector('.main__links-bying_button'),
    bying_trigger2 = document.querySelector('.main__links-bying_button.est'),
    close_button = document.querySelector('.magnific__close-button'),
    magnific_frame = document.querySelector('.magnific__frame');

bying_trigger.addEventListener('click', function () {
    magnific_frame.classList.remove('invis');
    body.classList.add('under__pop');
});

bying_trigger2.addEventListener('click', function () {
    magnific_frame.classList.remove('invis');
    body.classList.add('under__pop');
});

close_button.addEventListener('click', function () {
    magnific_frame.classList.add('invis');
    body.classList.remove('under__pop');
});

//------------------------packet switch-------------------------------//

var links = $('.prices__packets-nav_item'),
    blocks = $('.prices__packet');

$(links).on('click', function () {
    $(links).removeClass('active');
    $(this).addClass('active');
    $(blocks).addClass('hide');
    $(blocks[$(this).index()]).removeClass('hide');
});