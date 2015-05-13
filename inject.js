// Constants
var IMG_URL_KEY = "imgurl=";
var SEARCH_BOX_ID = "gsfi";

// Initial Vars
var links = document.getElementsByTagName('a')
var processedGifs = {};

function getGifUrl(link) {
  var href = link.href + "";
  var start = href.indexOf(IMG_URL_KEY) + IMG_URL_KEY.length
  href = href.substr(start) 
  var end = href.indexOf("&")
  href = href.substr(0,end)
  return decodeURIComponent(href);
}

// extract the relevant image and replace the source of the child image
function replaceGif(link) {
  var gifUrl = getGifUrl(link);
  try {
    var currentSearch = document.getElementsByClassName(SEARCH_BOX_ID)[0].value
  } catch(e) {
    var currentSearch = "";
  }
  var key = gifUrl + currentSearch
  if (processedGifs[key] == undefined) {
    link.children[0].src = gifUrl;
    processedGifs[key] = true;
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
