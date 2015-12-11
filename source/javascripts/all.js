//= require_tree .

	
var scrollW = document.getElementById("wrap-scroll");
var scrollUl = document.getElementById("ul-scroll");
var itemsScrolled,
    itemsMax,
    cloned = false;

var listOpts = {
  itemCount: null,
  itemHeight: null,
  items: [],
};

function scrollWrap () {
  
  itemsScrolled = Math.ceil( (this.scrollTop + listOpts.itemHeight / 2 ) / listOpts.itemHeight);
 
  if(this.scrollTop < 1) {
    itemsScrolled = 0;
  }
     
  listOpts.items.forEach(function (ele) {
    ele.classList.remove("active");
  })
  
  if (itemsScrolled < listOpts.items.length) {
    listOpts.items[itemsScrolled].classList.add("active");
  }
  
  if (itemsScrolled > listOpts.items.length - 3) {
       
    for ( _x = 0; _x <= itemsMax - 1; _x++ ) {
      var node = listOpts.items[_x];
      
      if ( !cloned ) {
        node = listOpts.items[_x].cloneNode(true);
      }
            
      scrollUl.appendChild(node);
    }
    
    initItems(cloned);
    cloned = true; 
    itemsScrolled = 0;
    
  }
}

function initItems (scrollSmooth) {
  if (scrollUl) {
  listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
  listOpts.itemHeight = listOpts.items[0].clientHeight;
  listOpts.itemCount = listOpts.items.length;
  
  if (!itemsMax) {
    itemsMax = listOpts.itemCount;
  }
  
  if (scrollSmooth) {
    var seamLessScrollPoint = ((itemsMax - 3) * listOpts.itemHeight);
    scrollW.scrollTop = seamLessScrollPoint;
  }      
}
  
}

document.addEventListener("DOMContentLoaded", function(event) {
  initItems();
  if (scrollW) {
  scrollW.onscroll = scrollWrap;}
});

//work page//

 // portfolio
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });



});