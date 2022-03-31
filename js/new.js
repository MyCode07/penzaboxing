document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('t282__burger')) {
        targetEl.classList.toggle('_active');
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
})

document.addEventListener('DOMContentLoaded', function (e) {
    if (document.querySelector('._scroll-header-mobile')) {
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
        let header = document.querySelector('._scroll-header-mobile');
        const headerObserver = new IntersectionObserver(callback);
        headerObserver.observe(header);
    }
})