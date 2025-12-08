(function ($) {
    "use strict";
    // inizio

    // fine

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });




    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // , o 20 , 2000
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 0, 'easeInOutExpo');
        return false;
    });

    //scroll
    /*$(window).scroll(function () {
        if ($(this).scrollTop() < 10) {
          $('html, body').animate({scrollTop: 15}, 10, 'easeInOutExpo');
        }
    });*/

    // toggle bar
    // if (select('.toggle-sidebar-btn')) {
    //     on('click', '.toggle-sidebar-btn', function(e) {
    //       select('body').classList.toggle('toggle-sidebar')
    //     })
    // }

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     margin: 30,
    //     dots: true,
    //     loop: true,
    //     center: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         576: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         992: {
    //             items: 3
    //         }
    //     }
    // });

    // Get the carousel element
    var carousel = $(".testimonial-carousel");

    // Initialize the carousel with the configuration options
    carousel.owlCarousel({
        autoplay: true,
        smartSpeed: 500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Add event listeners for the previous and next buttons
    $(".carousel-prev").click(function () {
        carousel.trigger("prev.owl.carousel");
    });

    $(".carousel-next").click(function () {
        carousel.trigger("next.owl.carousel");
    });


    /**
 * Porfolio isotope and filter
 */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
                    AOS.refresh()
                });
            }, true);
        }

    });



    /**
     * Initiate portfolio lightbox 
     */
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });

    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });


    const toggle = document.getElementById("toggle");
    const theme = window.localStorage.getItem("theme");

    if (theme === "dark") document.body.classList.add("dark");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (theme === "dark") {
            window.localStorage.setItem("theme", "light");
        } else window.localStorage.setItem("theme", "dark");
    });

})(jQuery);
function myFunction() {
    var x = document.getElementById("background");
    if (x.classList.contains("bg-color")) {
        x.classList.replace("bg-color", "bg-ab");
        document.getElementById("one").src = "/assets/pics/images/change-dark-anime-fanatics.jpg";
        document.getElementById("two").src = "/assets/pics/images/darkAnimeFanatics.jpg";
        const d = document.querySelectorAll('.btn-light');
        d.forEach(element => {
            element.classList.replace("btn-light", "btn-dark");
        });
        const z = document.querySelectorAll('.text-primary');
        z.forEach(element => {
            element.classList.replace("text-primary", "text-white");
        });
        const y = document.querySelectorAll('.text-black');
        y.forEach(element => {
            element.classList.replace("text-black", "text-ite");
        });
        const f = document.querySelectorAll('.bg-color');
        f.forEach(element => {
            element.classList.replace("bg-color", "bg-ab");
        });
        const h = document.querySelectorAll('.btn-outline-dark');
        h.forEach(element => {
            element.classList.replace("btn-outline-dark", "btn-outline-light");
        });
        const w = document.querySelectorAll('.p-4');
        w.forEach(element => {
            element.classList.replace("p-4", "p-5");
        });
        const eg = document.querySelectorAll('input.bg-light');
        eg.forEach(element => {
            element.classList.replace("bg-light", "bg-dark");
        });
        const fn = document.querySelectorAll('input.form-control');
        fn.forEach(element => {
            element.classList.replace("form-control", "form-control-df");
        });
        const gh = document.querySelectorAll('.icon-box');
        gh.forEach(element => {
            element.classList.replace("bg-light", "bg-dark");
        });
        const fj = document.querySelectorAll('button.btn-outline-primary');
        fj.forEach(element => {
            element.classList.replace("btn-outline-primary", "btn-outline-primary-dark");
        });
    } else if (x.classList.contains("bg-ab")) {
        x.classList.replace("bg-ab", "bg-color");
        document.getElementById("one").src = "/assets/pics/images/change-light-anime-fanatics.jpg";
        document.getElementById("two").src = "/assets/pics/images/light dark anime fanatics.jpg";
        const p = document.querySelectorAll('.btn-dark');
        p.forEach(element => {
            element.classList.replace("btn-dark", "btn-light");
        });
        const c = document.querySelectorAll('.text-white');
        c.forEach(element => {
            element.classList.replace("text-white", "text-primary");
        });
        const d = document.querySelectorAll('.text-ite');
        d.forEach(element => {
            element.classList.replace("text-ite", "text-black");
        });
        const f = document.querySelectorAll('.bg-ab');
        f.forEach(element => {
            element.classList.replace("bg-ab", "bg-color");
        });
        const h = document.querySelectorAll('.btn-outline-light');
        h.forEach(element => {
            element.classList.replace("btn-outline-light", "btn-outline-dark");
        });
        const w = document.querySelectorAll('.p-5');
        w.forEach(element => {
            element.classList.replace("p-5", "p-4");
        });
        const eg = document.querySelectorAll('input.bg-dark');
        eg.forEach(element => {
            element.classList.replace("bg-dark", "bg-light");
        });
        const fn = document.querySelectorAll('input.form-control-df');
        fn.forEach(element => {
            element.classList.replace("form-control-df", "form-control");
        });
        const gh = document.querySelectorAll('.icon-box');
        gh.forEach(element => {
            element.classList.replace("bg-dark", "bg-light");
        });
        const fj = document.querySelectorAll('button.btn-outline-primary-dark');
        fj.forEach(element => {
            element.classList.replace("btn-outline-primary-dark", "btn-outline-primary");
        });
    }
    var l = document.getElementById("arch");
    if (l.classList.contains(".search-bar")) {
        l.classList.replace("search-bar", "search-bar-dark");
    } else if (l.classList.contains(".search-bar-dark")) {
        l.classList.replace("search-bar-dark", "search-bar");
    };
    var k = document.getElementById("nav");
    if (k.classList.contains("bg-dark")) {
        k.classList.replace("bg-dark", "bg-light");
    } else if (k.classList.contains("bg-light")) {
        k.classList.replace("bg-light", "bg-dark");
    };
    // var s = document.getElementById("search"); 
    // if (s.classList.contains("bg-dark")) {
    //     s.classList.replace("bg-dark", "bg-light");
    // } else if (s.classList.contains("bg-light")) {
    //     s.classList.replace("bg-light", "bg-dark");
    // }; 
    var m = document.getElementById("rch");
    if (m.classList.contains("search-form")) {
        m.classList.replace("search-form", "search-form-dark");
    } else if (m.classList.contains("search-form-dark")) {
        m.classList.replace("search-form-dark", "search-form");
    };
    var j = document.getElementById("icon");
    if (j.classList.contains("search-icon")) {
        j.classList.replace("search-icon", "search-icon-dark");
    } else if (j.classList.contains("search-icon-dark")) {
        j.classList.replace("search-icon-dark", "search-icon");
    };
    var i = document.getElementById("colo");
    if (i.classList.contains("bg-dark")) {
        i.classList.replace("bg-dark", "bg-light");
    } else if (i.classList.contains("bg-light")) {
        i.classList.replace("bg-light", "bg-dark");
    };
    var h = document.getElementById("greenBtn");
    if (h.classList.contains("btn-green")) {
        h.classList.replace("btn-green", "btn-green-dark");
    } else if (h.classList.contains("btn-green-dark")) {
        h.classList.replace("btn-green-dark", "btn-green");
    };
    var h = document.getElementById("yellowBtn");
    if (h.classList.contains("btn-yellow")) {
        h.classList.replace("btn-yellow", "btn-yellow-dark");
    } else if (h.classList.contains("btn-yellow-dark")) {
        h.classList.replace("btn-yellow-dark", "btn-yellow");
    };
    // const myDiv = document.getElementById("acnt-btns");
    // const accountButton = myDiv.querySelector(".account-button");
    // if (accountButton.classList.contains("bg-color")) {
    //     accountButton.classList.remove("bg-color");
    //     accountButton.classList.add("bg-ab");
    // } else if (accountButton.classList.contains("bg-ab")) {
    //     accountButton.classList.remove("bg-ab");
    //     accountButton.classList.add("bg-color");
    // }
    // var i = document.getElementById("colo");
    // if (i.classList.contains("bg-dark")) {
    //     i.classList.replace("bg-dark", "bg-light");
    // } else if (i.classList.contains("bg-light")) {
    //     i.classList.replace("bg-light", "bg-dark");
    // }; 
    // var h = document.getElementById("stage"); 
    // if(h.classList.contains("bg-color")){
    //   h.classList.replace("bg-color", "bg-ab"); 
    // } else if (h.classList.contains("bg-ab")){
    //   h.classList.replace("bg-ab", "bg-color");
    // };   
}
// $(document).ready(function() {
//     var owl = $('#image-container');
//     owl.owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: false,
//       items: 1
//     });

//     // Go to the previous item
//     $('#prev-btn').click(function() {
//       owl.trigger('prev.owl.carousel');
//     });

//     // Go to the next item
//     $('#next-btn').click(function() {
//       owl.trigger('next.owl.carousel');
//     });
//   });