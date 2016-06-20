// =========================
// linking to google fonts
// =========================

// array of google fonts URLs
var url = [];

// push google font URL, plus font names from fontlist to url array
for (var i=0;i<fonts.length;i++){
	url.push("https://fonts.googleapis.com/css?family="+fonts[i]);
}

// font link appending fn
function appendStyle(pathToStyle) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.setAttribute('rel','stylesheet');
    link.type = "text/css";
    link.setAttribute('href',pathToStyle);
    head.appendChild(link);
}

// append google font links to document
for (var i =0;i<url.length;i++){
	appendStyle(url[i]);
}

// =========================
// styling text in document
// =========================

// get text elements
var h1 = document.getElementsByTagName('h1')[0];

// view fonts after page load (or else we'll miss the first one or two fonts)
window.addEventListener('load', function(){

        // set the targeted elements innerHTML and/or font family.
        // iterate over fonts array, removing +'s, which are only necessary for URLs.
        for (var i =0;i<url.length;i++){
            (function(i){
                setTimeout(function(){
                    h1.innerHTML=String(fonts[i]).replace('+',' ');
                    h1.style.fontFamily=String(fonts[i]).replace(/\+/g,' ');
                }, i*900); //how fast to cycle through fonts
            }(i));
        }
    }
)