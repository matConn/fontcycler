// ==========================
// font display functionality
// ==========================

// font cycler context menu
// ========================

// create context menu to be used on text click
var fcjs_contextMenu_inner = [
    '<div class="fcjs_contextMenu">',
    '<p class="fcjs_fontName"></p>',
    '<a class="fcjs_cycleLeft"> < </a>', //WORK ON THIS
    '<a class="fcjs_cycleRight"> > </a>',
    '</div>'
].join('');

// container for contextmenu
var fcjs_hidden = document.createElement('div');
fcjs_hidden.setAttribute('class','fcjs_hidden');
fcjs_hidden.innerHTML=fcjs_contextMenu_inner;

// append contextmenu
document.getElementsByTagName('body')[0].appendChild(fcjs_hidden);

// get all elements with fcjs class
var fcjs = document.getElementsByClassName('fcjs');

// view fcjs_fonts after page load (or else we'll miss the first one or two fcjs_fonts)
// window.addEventListener('load', function(){

        // set the targeted elements innerHTML and/or font family.
        // iterate over fcjs_fonts array, removing +'s, which are only necessary for URLs.
        // for (var i =0;i<fcjs_url.length;i++){
        //     (function(i){
        //         setTimeout(function(){
        //             for (var j =0;j<fcjs.length;j++){
        //                 fcjs[j].style.fontFamily=String(fcjs_fonts[i]).replace(/\+/g,' ');
        //             }
        //         }, i*900); //how fast to cycle through fcjs_fonts
        //     }(i));
        // }
    // }
// )

// ============
// WORK ON THIS
// ============

var fcjs_contextMenu = document.getElementsByClassName('fcjs_contextMenu')[0];
var fcjs_fontName = document.getElementsByClassName('fcjs_fontName')[0];

// getting event target
function fcjs_textSelector(event) {
    var fcjs_text = event.target;
    if(fcjs_text.classList.contains('fcjs')){
        fcjs_text.style.fontFamily=String(fcjs_fonts[0]).replace(/\+/g,' ');//ADD LOOPING FN EVENTUALLY
        fcjs_fontName.innerHTML=String(fcjs_text.style.fontFamily);
        fcjs_text.appendChild(fcjs_contextMenu);
        
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