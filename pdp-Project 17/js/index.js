$(document).ready(function () {
    $(window).on('load',function () {
        $('.overload').addClass('loaded');
        $('body').removeClass('loading');
        setTimeout(
            ()=>{$(window).scrollTop(0)}
        ,200)
        setTimeout(refreshScrollSpy,1000)

        console.log(1)
    })


    AOS.init()
    AOS.init({
        duration: 600
    })

    function checkScroll(){
        if($(window).scrollTop() > 0) {
            $('nav').addClass('nav-active');
        } else {
            $('nav').removeClass('nav-active');
        }
    }
    $(window).scroll(function () {
        checkScroll()
        testScroll()
    })
    let viewed = false;

    function isScrolledIntoView(elem) {
        let docViewTop = $(window).scrollTop();
        let docViewBottom = docViewTop + $(window).height();

        let elemTop = $(elem).offset().top;
        let elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function testScroll() {
        if (isScrolledIntoView($(".counter")) && !viewed) {
            viewed = true;
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    }



    $('.owl-1').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            991:{
                items:3
            }
        }
    })
    $('.owl-2').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav:false,
        responsive:{
            0:{
                nav:true
            },
            992:{
                nav:false
            }
        }
    })

    $('.owl-2-next').on('click',function () {
        $('.owl-2').trigger('next.owl.carousel')
    })
    $('.owl-2-prev').on('click',function () {
        $('.owl-2').trigger('prev.owl.carousel')
    })
})
function refreshScrollSpy() {
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    dataSpyList.forEach(function (dataSpyEl) {
        bootstrap.ScrollSpy.getInstance(dataSpyEl)
            .refresh()
    })}
