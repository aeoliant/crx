console.log("Never Ending ONTD loaded!");

// vars
var skipCount = 0;
var working = false;

//hide the next/previous button
document.getElementById("pagenav").style.display = "none";

window.setTimeout(addListener, 5000);

function addListener () {
  $(window).scroll( function() {
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var current = $(window).scrollTop();
    var left = docHeight-winHeight - current;
    console.log("Left: "+left);
    if (left < 1500 && working == false)
    {
      working = true;
      skipCount = skipCount + 15;
      loadNext();
    }
  });
}

function getAllPosts(wholePage)
{
  return wholePage.substring(wholePage.indexOf("<!-- BEGIN POST-->"), wholePage.lastIndexOf("<!-- END POST -->") + 17);
}

function loadNext()
{
  console.log("loaded url: "+ "/?skip="+skipCount);
  $.ajax({
    url: "/?skip="+skipCount,
  }).done(function(data) {
    console.log("got next page")
    var startTime = new Date();
    var allPosts = getAllPosts(data);
    $("#pageContents").append($(allPosts));
    var endTime = new Date();
    console.log("Took " + (endTime - startTime) +" milliseconds");
    working = false;
  });
}