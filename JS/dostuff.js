
//Page Fade in
$(document).ready(function(){$(".preFold").hide().fadeIn(1000);});


//Hamburger menu Script
const menuButton = document.querySelector('.menuButton');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuButton.classList.add('open');
        menuOpen = true;
    } else{
        menuButton.classList.remove('open');
        menuOpen = false;
    }
});

//Email
$(document).ready(init);

function init(jQuery) {
  CurrentYear();
}

function CurrentYear() {
  var thisYear = new Date().getFullYear()
  $("#currentYear").text(thisYear);
}


/* reCAPTCHA */

function validateResponse(response) {
//  if !(response === "" || response == undefined || response.length == 0) {
  if (response.length > 0) {
    showOutput(response);
//    alert(response);
  }
};

function showOutput(msg) {
  document.getElementById("txtOutput").innerHTML = msg;
}



//About page text animation

var isLast = function(word) {
    return $(word).next().length > 0 ? false : true;
  }
  
  var getNext = function(word) {
    return $(word).next();
  }
  
  var getVisible = function () {
    return document.getElementsByClassName('is-visible');
  }
  
  var getFirst =  function() {
    var node = $('.words-wrapper').children().first();
    return node;
  }
  
  var switchWords = function(current, next) {
    $(current).removeClass('is-visible').addClass('is-hidden');
    $(next).removeClass('is-hidden').addClass('is-visible');
  }
  
  var getStarted = function() {
    //get visible element and its sibling
    var first = getVisible();
    var next = getNext(first);
    
    //If our element has a sibling, it's not the last of the list. We switch the classes
    if (next.length !== 0) {
       switchWords(first,next);
    } else {
      
      //The element is the last of the list. We remove the visible class of the current element
      $(first).removeClass('is-visible').addClass('is-hidden');
      
      //And we get the first element of the list, and we give it the visible class. And it starts again.
      var newEl = getFirst();
      $(newEl).removeClass('is-hidden').addClass('is-visible');
    }
    
  }
  
  var init = function() {
    setInterval(function() {getStarted()}, 2000);
  }
  
  init();
  