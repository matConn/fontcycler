// font cycling controls
// =====================

var fcjs_active;

// prev/next btn fn
function prevNextBtns(btn){
    return btn.addEventListener('click',function(){

        if ( btn == fcjs_next && fontCounter < fcjs_fonts.length ) {
            fontCounter++;
        } else if ( btn == fcjs_prev && fontCounter > 0) {
            fontCounter--;
        }

        fcjs_active.style.fontFamily=String(fcjs_fonts[fontCounter]).replace(/\+/g,' ');
        fcjs_fontName.innerHTML=String(fcjs_fonts[fontCounter]).replace(/\+/g,' ');

    });
}

// getting event target
function fcjs_textSelector(event) {
    var fcjs_text = event.target;

    if(fcjs_text.classList.contains('fcjs')){

        for(var i=0; i<fcjs_allText.length;i++){

            if(fcjs_allText[i].classList.contains('fcjs_active')){
                fcjs_allText[i].classList.remove("fcjs_active");
            }
        }

        fcjs_text.classList+=" fcjs_active";

        fcjs_active = document.getElementsByClassName('fcjs_active')[0];

        fcjs_active.appendChild(fcjs_contextMenu);
        fcjs_active.style.fontFamily=String(fcjs_fonts[fontCounter]).replace(/\+/g,' ');
        
    prevNextBtns(fcjs_next);
    prevNextBtns(fcjs_prev);

    // play btn fn
    fcjs_play.addEventListener('click',function(){

    	//hide play, display pause
    	fcjs_play.style.display='none';
    	fcjs_pause.style.display='inline';

    	// disable prev and next, reduce opacity
    	fcjs_next.style.pointerEvents='none';
    	fcjs_next.style.opacity=0.5;

    	fcjs_prev.style.pointerEvents='none';
    	fcjs_prev.style.opacity=0.5;

        fcjs_list.style.pointerEvents='none';
        fcjs_list.style.opacity=0.5;

    	// increment fontcounter, display fonts
		var fontCycle = setInterval(function(){
			fontCounter++;
			fcjs_active.style.fontFamily=String(fcjs_fonts[fontCounter]).replace(/\+/g,' ');
			fcjs_fontName.innerHTML=String(fcjs_fonts[fontCounter]).replace(/\+/g,' ');
		},500);

       	// pause btn fn
        fcjs_pause.addEventListener('click',function(){
	    	fcjs_play.style.display='inline';
	    	fcjs_pause.style.display='none';

	    	// enable prev and next, 100% opacity
	    	fcjs_next.style.pointerEvents='auto';
	    	fcjs_next.style.opacity=1;

	    	fcjs_prev.style.pointerEvents='auto';
	    	fcjs_prev.style.opacity=1;

            fcjs_list.style.pointerEvents='auto';
            fcjs_list.style.opacity=1;

	    	// pause fontcylcer
    		clearInterval(fontCycle);
    	});

    });


        
        // animation
        fcjs_contextMenu.style.opacity=1;
        setTimeout(function(){
            fcjs_contextMenu.style.opacity=0;
        },1000)
    }
}

// calling target getter on click
document.addEventListener('click',function(){
    fcjs_textSelector(event);
});