
$(document).ready(function(){
    $('.slideshow').slick({
        adaptiveHeight: true,
        arrows: true,
        
    });

    $('.galleryslide').slick({
    adaptiveHeight:true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }

            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            
        ]
    });

   
  });

function gotodiscord() {
    location.replace("https://discordapp.com/api/oauth2/authorize?client_id=593054079710920722&permissions=0&redirect_uri=http%3A%2F%2Flocalhost%2FRaidAM%2Fdashboard.html&response_type=code&scope=identify%20guilds%20bot")

}


 