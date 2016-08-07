// ==========================
// font display functionality
// ==========================

// font cycler context menu
// ========================

// create context menu to be used on text click
var fcjs_contextMenu_inner = [
    '<div class="fcjs_contextMenu">',
    '<p class="fcjs_fontName">FontCycler</p>',
    '<a class="fcjs_prev"> &#9194; </a>',
    '<a class="fcjs_play"> &#9658; </a>',
    '<a class="fcjs_pause"> &#10074;&#10074; </a>',
    '<a class="fcjs_next"> &#9193; </a>',
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

var fcjs_contextMenu = document.getElementsByClassName('fcjs_contextMenu')[0];
var fcjs_fontName = document.getElementsByClassName('fcjs_fontName')[0];

var fcjs_prev = document.getElementsByClassName('fcjs_prev')[0];
var fcjs_next = document.getElementsByClassName('fcjs_next')[0];
var fcjs_play = document.getElementsByClassName('fcjs_play')[0];
var fcjs_pause = document.getElementsByClassName('fcjs_pause')[0];

var fontCounter = 0;