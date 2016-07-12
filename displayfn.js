// ==========================
// font display functionality
// ==========================

// get all elements with fcjs class
var fcjs = document.getElementsByClassName('fcjs');

// view fcjs_fonts after page load (or else we'll miss the first one or two fcjs_fonts)
// window.addEventListener('load', function(){

        // set the targeted elements innerHTML and/or font family.
        // iterate over fcjs_fonts array, removing +'s, which are only necessary for URLs.
        for (var i =0;i<fcjs_url.length;i++){
            (function(i){
                setTimeout(function(){
                    for (var j =0;j<fcjs.length;j++){
                        fcjs[j].style.fontFamily=String(fcjs_fonts[i]).replace(/\+/g,' ');
                    }
                }, i*900); //how fast to cycle through fcjs_fonts
            }(i));
        }
    // }
// )