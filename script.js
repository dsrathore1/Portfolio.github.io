$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $('.contact-form').submit((e)=>{
        e.preventDefault(); //preventing from submitting form
    });

    $('.send-msg').click(()=>{
        $fullname = $('.fullname').val();
        $email = $('.email-input').val();
        $subject = $('.subject').val();
        $message = $('.message').val();
        $('.send-msg').text("Sending...");
        $('.contact-form').addClass("disable");

        $.ajax({
            url: "message.php",
            type: "POST",
            data: "email="+$email+"&subject="+$subject+"&message="+$message,
            success: function(data){
                $errorBox = $('.error-box');
                $('.send-msg').text("Send message");
                $('.contact-form').removeClass("disable");
                if(data == "success"){
                    $fullname = $('.fullname').val("");
                    $email = $('.email-input').val("");
                    $subject = $('.subject').val("");
                    $message = $('.message').val("");
                    $errorBox.html("Your message has been sent!");
                    $errorBox.addClass("success");
                    setTimeout(()=>{
                        $errorBox.html("");
                        $errorBox.removeClass("success");
                    }, 5000);
                }else{
                    $errorBox.removeClass("success");
                    $errorBox.html("<span>* </span>" + data);
                }
            }
        });
    });
});