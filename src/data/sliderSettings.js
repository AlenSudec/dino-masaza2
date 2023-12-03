export const sliderSettings = {
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 30,
    autoplay: true,
    nav: true,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
    navElement: 'div',
    dots: false,
    responsive: {
        600: {

            nav: true,
            items: 1
        },
        1000: {

            stagePadding: 0,
            nav: true,
            items: 2
        },
        1200: {

            stagePadding: 0,
            nav: true,
            items: 2
        }
    }
}