jQuery(document).ready(function($) {
    $(".tab").click(function(){
        $(".tab").removeClass("background-color-orange")
        $(".tab").addClass("background-color-black")

        $(this).addClass("background-color-orange")

        let a = $(this).attr("id").split("-")[1]; 
        let position = -362 * (a -1)  
        $(".tab1").attr("style", "margin-top:" + position +"px")
       
    })
    if(jQuery(window).width() < 1024){
        jQuery(".banner-second-section ").appendTo(".banner-form-mobile .width-80")
    }
})
jQuery(window).on("resize", function() {
    if(jQuery(window).width() < 1024){
        jQuery(".banner-second-section ").appendTo(".banner-form-mobile .width-80")
    } else {
        jQuery(".banner-second-section ").appendTo(".top-banner .width-80")
    }
})