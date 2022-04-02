"use strict"
document.addEventListener("DOMContentLoaded", function () {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.style.backgroundImage=`url('${lazyImage.dataset.original}')`;
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
})