window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //-------------------------------TABS----------------------------------------

    let tab = document.querySelectorAll('.price__block-content'),
        info = document.querySelector('.price__wrapper1'),
        tabContent = document.querySelectorAll('.price__wrapper2');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function (event) {
        let target = event.target;
        event.preventDefault();
        if (target && target.classList.contains('price__block-content')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    $('ul.price__wrapper1').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    //--------------------------------ImgZoom----------------------------------------
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById('img01');
    let captionText = document.getElementById('caption');
    let allImg = document.querySelectorAll('.myImg');
    
    for(let i of allImg) {
        i.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    }

    let span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    };
    let modalWrapper = document.getElementById('modal-wrapper');
        modalWrapper.onclick = function (e) {
            e.preventDefault();
            modal.style.display = 'none';
        };
    //---------------------------------------POPUP------------------------------------------
    let closePopup = document.querySelector('.popup__close'),
        popupArea = document.querySelector('.popup__area');

        $('.open-popup').click(function(e){
        e.preventDefault();
        $('.popup').fadeIn(600);
        $('html').addClass('no-scroll');
    });
    
    function popupClose() {
        closePopup.addEventListener('click', function(e){
            e.preventDefault();
            $('.popup').fadeOut(600);
            $('html').removeClass('no-scroll');
        });
    }
    popupClose();
    function popupAreaBackground() {
        popupArea.addEventListener('click', function(e){
            e.preventDefault();
            $('.popup').fadeOut(600);
            $('html').removeClass('no-scroll');
        });
    }
    popupAreaBackground();
    //--------------------------------------GostCarousel-----------------------------------------

    $('.slider').slick({
        responsive: [{
            breakpoint: 371,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});