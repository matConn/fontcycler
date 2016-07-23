// font cycling controls
// =====================

// getting event target
function fcjs_textSelector(event) {
    var fcjs_text = event.target;
    if(fcjs_text.classList.contains('fcjs')){
        // fcjs_fontName.innerHTML=String(fcjs_text.style.fontFamily);
        fcjs_text.appendChild(fcjs_contextMenu);

    // prev/next btn fn
    function prevNextBtns(btn){
        return btn.addEventListener('click',function(){

            if(btn==fcjs_next){
                fontCounter++;
            } else if(btn==fcjs_prev){
                fontCounter--;
            }

            fcjs_text.style.fontFamily=String(fcjs_fonts[fontCounter]).replace(/\+/g,' ');
            fcjs_fontName.innerHTML=String(fcjs_fonts[fontCounter]).replace(/\+/g,' ');

            console.log(fcjs_fonts[fontCounter]);
        });
    }
    
    prevNextBtns(fcjs_next);
    prevNextBtns(fcjs_prev);

    // play btn fn
    fcjs_play.addEventListener('click',function(){

        for (var i =0;i<=fcjs_fonts.length;i++){
            (function(i){
                setTimeout(function(){
                    fcjs_text.style.fontFamily=String(fcjs_fonts[i]).replace(/\+/g,' ');
                    fcjs_fontName.innerHTML=String(fcjs_fonts[i]).replace(/\+/g,' ');
                }, 200 * i);
            }(i));
        }
    });

        
        // animation
        fcjs_contextMenu.style.opacity=0;
        setTimeout(function(){
            fcjs_contextMenu.style.opacity=1;
        },100)
    }
}

// calling target getter on click
document.addEventListener('click',function(){
    fcjs_textSelector(event);
});