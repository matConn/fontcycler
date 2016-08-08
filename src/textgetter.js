// =========================
// linking to google fonts
// =========================

// array of google fcjs_fonts URLs
var fcjs_url = [];

// push google font URL, plus font names from fontlist to fcjs_url array
for (var i=0;i<fcjs_fonts.length;i++){
    fcjs_url.push("https://fonts.googleapis.com/css?family="+fcjs_fonts[i]);
}

// font fcjs_link appending fn
function fcjs_appendStyle(pathToStyle) {
    var fcjs_head = document.getElementsByTagName("head")[0];
    var fcjs_link = document.createElement("link");
    fcjs_link.setAttribute('rel','stylesheet');
    fcjs_link.type = "text/css";
    fcjs_link.setAttribute('href',pathToStyle);
    fcjs_head.appendChild(fcjs_link);
}

// append google font fcjs_links to document
for (var i =0;i<fcjs_url.length;i++){
    fcjs_appendStyle(fcjs_url[i]);
}

// ========================================================
// getting all text nodes in document and adding fcjs class
// ========================================================

// array for all text nodes in document
var fcjs_allText = [];

// getting all text nodes in document
var fcjs_p = document.getElementsByTagName('p');
var fcjs_ul = document.getElementsByTagName('ul');
var fcjs_ol = document.getElementsByTagName('ol');
var fcjs_li = document.getElementsByTagName('li');
var fcjs_a = document.getElementsByTagName('a');
var fcjs_span = document.getElementsByTagName('span');
var fcjs_strong = document.getElementsByTagName('strong');
var fcjs_i = document.getElementsByTagName('i');
var fcjs_b = document.getElementsByTagName('b');

var fcjs_h1 = document.getElementsByTagName('h1');
var fcjs_h2 = document.getElementsByTagName('h2');
var fcjs_h3 = document.getElementsByTagName('h3');
var fcjs_h4 = document.getElementsByTagName('h4');
var fcjs_h5 = document.getElementsByTagName('h5');
var fcjs_h6 = document.getElementsByTagName('h6');

// fn to push text nodes to allText array
function fcjs_pusher(elem){

	if(elem.length>0){
		for(var i=0;i<elem.length;i++){
	  		fcjs_allText.push(elem[i]);
		}
	}
}

// calling pusher fn
fcjs_pusher(fcjs_p);
fcjs_pusher(fcjs_ul);
fcjs_pusher(fcjs_ol);
fcjs_pusher(fcjs_li);
fcjs_pusher(fcjs_a);
fcjs_pusher(fcjs_span);
fcjs_pusher(fcjs_strong);
fcjs_pusher(fcjs_i);
fcjs_pusher(fcjs_b);
fcjs_pusher(fcjs_h1);
fcjs_pusher(fcjs_h2);
fcjs_pusher(fcjs_h3);
fcjs_pusher(fcjs_h4);
fcjs_pusher(fcjs_h5);
fcjs_pusher(fcjs_h6);

// adding fcjs class to all text nodes via allText array
for(var i=0;i<fcjs_allText.length;i++){
    fcjs_allText[i].classList+=" fcjs";
}