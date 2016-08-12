// ==========================
// font display functionality
// ==========================

// font cycler context menu
// ========================

// Context menu
// ============
// create context menu to be used on text click
var fcjs_contextMenu_inner = [
    '<div class="fcjs_contextMenu">',
    '<p class="fcjs_fontName">FontCycler</p>',
    '<a class="fcjs_prev"> &#9664;&#9664; </a>',
    '<a class="fcjs_play"> &#9658; </a>',
    '<a class="fcjs_pause"> &#10074;&#10074; </a>',
    '<a class="fcjs_next"> &#9658;&#9658; </a>',
    // '<a class="fcjs_list"> &#9776; </a>',
    '</div>'
].join('');

// container for contextmenu
var fcjs_hidden = document.createElement('div');
fcjs_hidden.setAttribute('class','fcjs_hidden');
fcjs_hidden.innerHTML=fcjs_contextMenu_inner;

// append contextmenu
document.getElementsByTagName('body')[0].appendChild(fcjs_hidden);

// Font menu
// ============

var fcjs_fontMenu_inner = [];

for(var i=0; i<fcjs_fonts.length; i++){

    fcjs_fontMenu_inner.push(
        '<p class="fcjs_fontMenu_item_'+i+'">'+
            [i+1]+'. '+
            String(fcjs_fonts[i]).replace(/\+/g,' ')+
        '</p>'
    );

}

// font menu
var fcjs_fontMenu = document.createElement('div');
fcjs_fontMenu.setAttribute('class','fcjs_fontMenu');
fcjs_fontMenu.innerHTML=fcjs_fontMenu_inner.join('');

// append fontMenu
document.getElementsByTagName('body')[0].appendChild(fcjs_fontMenu);

// get all elements with fcjs class
var fcjs = document.getElementsByClassName('fcjs');

// getting all fcjs elements
// ==========================

var fcjs_contextMenu = document.getElementsByClassName('fcjs_contextMenu')[0];
var fcjs_fontName = document.getElementsByClassName('fcjs_fontName')[0];

var fcjs_prev = document.getElementsByClassName('fcjs_prev')[0];
var fcjs_next = document.getElementsByClassName('fcjs_next')[0];
var fcjs_play = document.getElementsByClassName('fcjs_play')[0];
var fcjs_pause = document.getElementsByClassName('fcjs_pause')[0];
var fcjs_list = document.getElementsByClassName('fcjs_list')[0];

// disable anchors
for(var i = 0; i < fcjs_a.length; i++){
	fcjs_a[i].removeAttribute('href');
	fcjs_a[i].removeAttribute('target');
}

var fontCounter = 0;