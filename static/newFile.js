$(document).ready(function(){
  $(window).scroll(function () {

    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    if(scrollTop > 1){
      $('.fixedNav').css('background-color', 'white');
      $('#logoNav').attr('src','https://admin.shoppingauto.fr/storage/uploads/2020/12/09/5fd0fc4609c78logo.svg');
      $('.navLink').removeClass('text-white');
    }
  });






















  // FAQ ANIM
  $('.firstFaq').click(function() {
    $('.answer1').toggle(250);
    $('.firstArrow').animate(
      {deg: 0},
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)'});
          $('.colorFaq1').css('background-color', '#e2e8f0');
        }
      }
    )
    
  })

  $('.secondFaq').click(function() {
    $('.answer2').toggle(250);
    $('.secondArrow').animate(
      {deg: 0},
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)'});
          $('.colorFaq2').css('background-color', '#e2e8f0');
        }
      }
    )
    
  })

  $('.thirdFaq').click(function() {
    $('.answer3').toggle(250);
    $('.thirdArrow').animate(
      {deg: 0},
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)'});
          $('.colorFaq3').css('background-color', '#e2e8f0');
        }
      }
    )
    
  })

  $('.fourthFaq').click(function() {
    $('.answer4').toggle(250);
    $('.fourthArrow').animate(
      {deg: 0},
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)'});
          $('.colorFaq4').css('background-color', '#e2e8f0');
        }
      }
    )
    
  })

  $('.fifthFaq').click(function() {
    $('.answer5').toggle(250);
    $('.fifthArrow').animate(
      {deg: 0},
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)'});
          $('.colorFaq5').css('background-color', '#e2e8f0');
        }
      }
    )
    
  })

  $('.sixthFaq').click(function() {
    $('.answer6').toggle(250);
    $('.sixthArrow').animate(
      {deg: 0},
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)'});
          $('.colorFaq6').css('background-color', '#e2e8f0');
        }
      }
    )
    
  })

})






