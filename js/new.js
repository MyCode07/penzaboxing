document.addEventListener('click', function (e) {
    let targetEl = e.target;
    e.preventDefault();
    if (targetEl.classList.contains('t282__burger')) {
        document.querySelector('.mobile__menu').classList.add('_active');
        document.querySelector('body').classList.add('_noscroll');
    }
    if (targetEl.classList.contains('mobile__menu-close')) {
        document.querySelector('.mobile__menu').classList.remove('_active');
        document.querySelector('body').classList.remove('_noscroll');
    }
    if (targetEl.classList.contains('item-news__more') || targetEl.classList.contains('item-news__readmore')) {
        document.querySelector('.news__grid').insertAdjacentHTML('afterend', newsPopup);
        document.querySelector('body').classList.add('_noscroll');
        lazyPopup();
    }

    if (targetEl.classList.contains('actions-popup__close')) {
        document.querySelector('.news__popup').remove();
        document.querySelector('body').classList.remove('_noscroll');
    }

})

function lazyPopup() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.style.backgroundImage = `url('${lazyImage.dataset.original}')`;
                lazyImage.classList.add('_removegif');
                imgObserver.unobserve(lazyImage);
            }
        })
    });
    const arr = document.querySelectorAll('div[data-original]');
    console.log(arr);
    arr.forEach((v) => {
        imageObserver.observe(v);
    })

    const imageObserver2 = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.add('_removegif');
                imgObserver.unobserve(lazyImage);
            }
        })
    });
    const arr2 = document.querySelectorAll('img[data-src]');
    arr2.forEach((v) => {
        imageObserver2.observe(v);
    })
}

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

    // if (document.querySelector('.news__slider')) {
    //     new Swiper('.news__slider-wrapper', {
    //         loop: true,
    //         slidesPerView: "auto",
    //         spaceBetween: 30,
    //         centeredSlides: true,
    //         effect: 'slide',
    //         slidesPerGroup: 1,
    //         navigation: {
    //             prevEl: '.news__slider-prev',
    //             nextEl: '.news__slider-next'
    //         },
    //     })
    // }

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


let newsPopup =
    `
<div class="news__popup">
<div class="news__popup-actions actions-popup">
    <div class="actions-popup__body">
        <a href="" class="actions-popup__close">
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L10 10L1 19" stroke="#002234" stroke-width="2"></path>
            </svg>
        </a>
        <div class="actions-popup__info">Федерация бокса СПб | Новости 2022-го года</div>
        <div class="actions-popup__share">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.92 15.79" style="fill:#002234">
                <g data-name="Слой 2">
                    <path d="M16 9.67v6H.19v-12h7.18a7.1 7.1 0 00-1.46.89 7 7 0 00-1.08 1.11H2.19v8H14v-1.9z">
                    </path>
                    <path
                        d="M17.73 5.7L12.16.13V3.8c-1.45.06-7 .73-7.62 7.08a.07.07 0 00.13 0c.49-1.35 2.11-3.43 7.49-3.52v3.88z">
                    </path>
                </g>
            </svg>

        </div>
    </div>
</div>
<div class="news__popup-wrapper">
    <div class="news__popup-container">
        <div class="news__popup-top">
            <div class="news__popup-image">
                <img  data-src="img/2FBA4361-146F-4203-9.jpeg" src="img/1x1.png" alt="">
            </div>
            <div class="news__popup-content">
                <div class="news__popup-data"> 30.03.2022 </div>
                <h1 class="news__popup-title"> Седьмой бой Павла Сосулина на профессиональном ринге </h1>
                <p class="news__popup-text">
                    Спустя долгое время профессиональный бокс возвращается на Первый канал и уже 2 апреля на ринге
                    «Крыльев Советов» в Москве пройдёт вечер профессионального бокса, где в соглавном бою примет
                    участие петербургский спортсмен Павел Сосулин (6-0-0).

                    Его соперником станет Игорь Иванченко (5-0-0). Оба боксёра ещё не знают поражений на проф-ринге,
                    поэтому для каждого из них это серьезная проверка.

                    Также в этот же вечер свой первый поединок среди профессионалов проведёт петербургский спортсмен
                    Никита Кузьмин. Его оппонентом станет еще один дебютант – представитель Узбекистана Асилбек
                    Мансуров.

                    В главном бою сойдутся Олимпийский чемпион игр в Токио Альберт Батыргазиев (5-0-0) и Хейбулла
                    Хаджалиев (8-2-0) из Азербайджана.
                </p>
            </div>
        </div>
        <div class="news__popup-other">Смотрите также</div>
        <div class="news__popup-bottom">
            <div class="news__grid-item item-news">
                <a href="" class="item-news__link">
                    <div class="item-news__wrapper">
                        <div class="item-news__image">
                            <div class="item-news__image-img" data-original="img/17EE28B7-28B7-4C1D-9.webp"></div>
                        </div>
                        <div class="item-news__content">
                            <div class="item-news__tags">
                                <span class="item-news__tag">Матчи</span>
                                <span class="item-news__tag">Федерация</span>
                            </div>
                            <div class="item-news__title"> Алексей Мазур, Павел Сосулин, Илья Попов и Руслан
                                Колесников совсем скоро выйдут на профессиональный ринг!</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="news__grid-item item-news">
                <a href="" class="item-news__link">
                    <div class="item-news__wrapper">
                        <div class="item-news__image">
                            <div class="item-news__image-img" data-original="img/17EE28B7-28B7-4C1D-9.webp"></div>
                        </div>
                        <div class="item-news__content">
                            <div class="item-news__tags">
                                <span class="item-news__tag">Матчи</span>
                                <span class="item-news__tag">Федерация</span>
                            </div>
                            <div class="item-news__title"> Алексей Мазур, Павел Сосулин, Илья Попов и Руслан
                                Колесников совсем скоро выйдут на профессиональный ринг!</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="news__grid-item item-news">
                <a href="" class="item-news__link">
                    <div class="item-news__wrapper">
                        <div class="item-news__image">
                            <div class="item-news__image-img" data-original="img/17EE28B7-28B7-4C1D-9.webp"></div>
                        </div>
                        <div class="item-news__content">
                            <div class="item-news__tags">
                                <span class="item-news__tag">Матчи</span>
                                <span class="item-news__tag">Федерация</span>
                            </div>
                            <div class="item-news__title"> Алексей Мазур, Павел Сосулин, Илья Попов и Руслан
                                Колесников совсем скоро выйдут на профессиональный ринг!</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="news__grid-item item-news">
                <a href="" class="item-news__link">
                    <div class="item-news__wrapper">
                        <div class="item-news__image">
                            <div class="item-news__image-img" data-original="img/17EE28B7-28B7-4C1D-9.webp"></div>
                        </div>
                        <div class="item-news__content">
                            <div class="item-news__tags">
                                <span class="item-news__tag">Матчи</span>
                                <span class="item-news__tag">Федерация</span>
                            </div>
                            <div class="item-news__title"> Алексей Мазур, Павел Сосулин, Илья Попов и Руслан
                                Колесников совсем скоро выйдут на профессиональный ринг!</div>
                        </div>
                    </div>
                </a>
            </div>
            
        </div>
    </div>
</div>
</div>

`;