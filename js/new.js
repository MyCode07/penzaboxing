document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('t282__burger')) {
        document.querySelector('.mobile__menu').classList.add('_active');
        document.querySelector('body').classList.add('_noscroll');
    }
    if (targetEl.classList.contains('mobile__menu-close')) {
        document.querySelector('.mobile__menu').classList.remove('_active');
        document.querySelector('body').classList.remove('_noscroll');
    }
})

document.addEventListener('DOMContentLoaded', function (e) {
    if (document.querySelector('._scroll-header')) {
        const callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                header.classList.remove('_fixed');
                if (document.querySelector('.first__image')) {
                    document.querySelector('.first__image').classList.remove('_low-Zindex');
                }
            }
            else {
                header.classList.add('_fixed');
                if (document.querySelector('.first__image')) {
                    document.querySelector('.first__image').classList.add('_low-Zindex');
                }
            }
        }
        let header = document.querySelector('._scroll-header');
        const headerObserver = new IntersectionObserver(callback);
        headerObserver.observe(header);
    }

    if (document.querySelector('._scroll-header__mobile')) {
        const callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                header.classList.remove('_fixed');
                if (document.querySelector('.first__image')) {
                    document.querySelector('.first__image').classList.remove('_low-Zindex');
                }
            }
            else {
                header.classList.add('_fixed');
                if (document.querySelector('.first__image')) {
                    document.querySelector('.first__image').classList.add('_low-Zindex');
                }
            }
        }
        let header = document.querySelector('._scroll-header__mobile');
        const headerObserver = new IntersectionObserver(callback);
        headerObserver.observe(header);
    }

    if (document.querySelector('.news__slider')) {
        new Swiper('.news__slider-wrapper', {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
            effect: 'slide',
            slidesPerGroup: 1,
            navigation: {
                prevEl: '.news__slider-prev',
                nextEl: '.news__slider-next'
            },
        })
    }

    if (document.querySelector('.partners__slider')) {
        new Swiper('.partners__slider', {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
            effect: 'slide',
            slidesPerGroup: 1,
            navigation: {
                prevEl: '.partners__slider-prev',
                nextEl: '.partners__slider-next'
            },
            preloadImages: false,
            lazy: {
                loadOnTransitionStart: false,
                loadPrevNext: false,
            },
            watchSlidesProgress: true,
            watchSlidesVisability: true,
        })
    }


    // .t-animate


    const animItems = document.querySelectorAll('.t-animate');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_visible');
                }

            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop };
        }

        setTimeout(() => {
            animOnScroll();
        }, 800);
    }

    

})