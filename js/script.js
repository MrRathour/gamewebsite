let change = document.querySelector("#lost");
console.log(change);
change.addEventListener("click",function(){
    let b = document.querySelector(".main");
    b.tyle.display="block";
});

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                50: {
                    items: 2,
                    nav: true
                },
                100: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        })
        

    });


// date object

// function displaytime(){
//     let date = new Date();
//     var hour = date.getHours();
//     var mnt = date.getMinutes();
//     var second = date.getSeconds();
//     document.getElementById("hour").innerHTML=hour;
//     document.getElementById("minute").innerHTML=mnt;
//     document.getElementById("second").innerHTML=second;
//     if(hour >= 12){
//         return  hour = hour -12;
//       }
//     
// }
//  setInterval(displaytime,100);


// toggle
$("#lost").click(function(){
    $("#main").css({
        "display":"block"
    });
})

$("#cancel").click(function(){
    $("#main").css({
        "display":"none"
    });
})

    $(".bar").click(function(){
        $("body").toggleClass("menu_bar");
    })


// scroll
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 30) {
            $('.start').addClass("active");
        }
        else {
            $('.start').removeClass("active");
        }
    });
});

// accordin enu

$('.child-trigger').click(function() {
    $(this).parent().siblings('.has-submenu').find('.child-trigger').removeClass('child-open');
    $(this).parent().siblings('.has-submenu').find('.submenu').slideUp(250);
    $(this).next('.submenu').slideToggle(250);
    $(this).next('.submenu').children('.has-submenu').find('.submenu').slideUp(250);
    $(this).next('.submenu').children('.has-submenu').find('.child-trigger').removeClass('child-open');
    $(this).toggleClass('child-open');
    return false;
});








