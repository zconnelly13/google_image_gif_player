// Constants
var IMG_URL_KEY = "imgurl=";
var SEARCH_BOX_ID = "gsfi";

// Initial Vars
var links = document.getElementsByTagName('a')

function getGifUrl(link) {
  var href = link.href + "";
  var start = href.indexOf(IMG_URL_KEY) + IMG_URL_KEY.length
  href = href.substr(start) 
  var end = href.indexOf("&")
  href = href.substr(0,end)
  // yes, decodeURIComponent should be called twice, I don't know why :(
  return decodeURIComponent(decodeURIComponent(href));
}

// extract the relevant image and replace the source of the child image
function replaceGif(link) {
  var gifUrl = getGifUrl(link);
  if (link.children[0].src !== gifUrl) {
    link.children[0].src = gifUrl;
  }
}

// changes all the gifs on the page
function main() {
  for(var i=0; i<links.length;i++) {
    var link = links[i];
    var href = link.href
    if (href.indexOf(IMG_URL_KEY) !== -1) {
      replaceGif(link);
    }
  }
}

main();

setInterval(main,500);
setTimeout(main,100);
