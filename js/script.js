$(document).ready(function(){
    $('.caruseli_inner').slick({
      speed: 300,
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slider/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slider/right.png"></button>',
      responsive: 
      [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
                }
            }
      ]
    })
    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
      $(this)
        .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
        .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
    });

    $('.catalog_item_link').each(function(i){
$(this).on('click', function(e){
        e.preventDefault();
        $('.catalog_item_content').eq(i).toggleClass('catalog_item_content_active');
        $('.catalog_item_list').eq(i).toggleClass('catalog_item_list_active');

      })
    });

    $('.catalog_item_content_back').each(function(i){
      $(this).on('click', function(e){
              e.preventDefault();
              $('.catalog_item_content').eq(i).toggleClass('catalog_item_content_active');
              $('.catalog_item_list').eq(i).toggleClass('catalog_item_list_active');
      
            })
          });
          //modal
          $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modal_close').on('click', function() {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        });
    
        $('.catalog_btn').each(function(i) {
            $(this).on('click', function() {
                $('#order .modal_descr').text($('.catalog_item_subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });


    $('#consultation_form').validate({   
        rules: {
          name: {
            required: true,
            minlength: 2
          },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Пожалуйста введите свое имя",
        minlength: jQuery.validator.format("Введите больше  {0} символов!")
      },
      phone: "Пожалуйста введите свою номер телефона",
      email: {
        required: "Введите свою почту",
        email: "неправильно введен адрес почты"
      }
    }
    });

    $('#consultation form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста введите свое имя",
          minlength: jQuery.validator.format("Введите больше  {0} символов!")
        },
        phone: "Пожалуйста введите свою номер телефона",
        email: {
          required: "Введите свою почту",
          email: "неправильно введен адрес почты"
        }
      }
    });

    $('#order form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста введите свое имя",
          minlength: jQuery.validator.format("Введите больше  {0} символов!")
        },
        phone: "Пожалуйста введите свою номер телефона",
        email: {
          required: "Введите свою почту",
          email: "неправильно введен адрес почты"
        }
      }
    });

      $('input[name=phone]').mask("+38(999) 999 9999");
  });


  
