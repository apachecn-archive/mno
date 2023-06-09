$(document).ready(function() {

  $('a.blog-button').click(function(evt) {
    // If already in blog, return early without animate overlay panel again.
    let targetIsBlog = evt.target.hash && evt.target.hash == "#blog";
    let currentIsBlog = location.hash && location.hash == "#blog"
    if ( targetIsBlog && currentIsBlog || !targetIsBlog && !currentIsBlog){
      return;
    }
    if (!$('.panel-cover').hasClass('panel-cover--collapsed')) {
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      //$('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '700px', 'width': '20%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.pathname == "/"  && window.location.hash != "#blog") {
    $('.panel-cover').removeClass('panel-cover--collapsed');
    $('.main-post-list').addClass('hidden');
  }else{
    if(!$('.panel-cover').hasClass('panel-cover--collapsed')){
      $('.panel-cover').addClass('panel-cover--collapsed');
    }
    $('.main-post-list').removeClass('hidden');
  }

  $('.btn-mobile-menu__icon').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated');
      });
    }
    
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });
});
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
