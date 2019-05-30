$(document).ready(function(){
    $('.header-toggle i').on('click',function(){
        $('.header-nav-btn').toggleClass('visible');
        $('.header-btn ').toggleClass('show');
    })

        $('.tab-news-ul ul li a').on('click',function(){
            $('.tab-news-ul ul li a').removeClass('selected');
            $(this).addClass('selected');
        })
        $('.tab-news-ul ul li').on('click',function(){
            var li= $(this).attr('rel');
            $('.tab-news-ul ul li').removeClass('active');
            $(this).addClass('active');

            $('.tab-news-panel .headline').css({'display':'none'});
            $('#'+li).css({'display':'block'})
        })

     
                    $('.theme-cell-subscribe').on('click',function(){    

                        if($(this).hasClass('added')){
                            $(this).removeClass('added').addClass('loved');

                        }
                            else if($(this).hasClass('add')){
                                $(this).removeClass('add').addClass('added');
                                $(this).parent().addClass('added-cell');

                            }
                            else if($(this).hasClass('loved')){
                                $(this).removeClass('loved').addClass('add');
                                $(this).parent().removeClass('added-cell');
                            }
                    })

            
  $('.headline-action').on('click',function(){
      if ($(this).hasClass('like')){ 
          $(this).next().removeClass('active');
          $(this).toggleClass('active');
      }
      else if( $(this).hasClass('dislike') ){
        $(this).prev().removeClass('active');
        $(this).toggleClass('active');
      }
      else if( $(this).hasClass('save') ){
        $(this).toggleClass('active');
      }
     
  })


                $('.search-suggest-icon').on('click',function(event){
                    event.stopPropagation();
                  $(this).toggleClass('opacity');
             
                
                  $('.search-suggest-div').toggleClass('append');
                  $('.search-suggest-input').toggleClass('append');
                  if( $(window).width() < 592 ){
                      $('.topbar-button').toggleClass('non-display');
                      $('.search-suggest').toggleClass('flex-form');
                      $('.x-svg').toggleClass('block');
                }
                });
                 $('.search-suggest-input').on('click',function(event){
                      event.stopPropagation();
                 })
$('.x-svg').on('click',function(){
    $(this).toggleClass('block');
    $('.topbar-button').toggleClass('non-display');
    $('.search-suggest').toggleClass('flex-form');
})

        $('.menu-edit-button').on('click',function(){
            $(this).toggleClass('clicked');
            if( $(this).hasClass('clicked')){
                $(this).html('Done');
            }
            else{
                $(this).html('Edit');
            }
            $('.theme-cell-delete').toggleClass('block');
            
        })


       $('.topbar-button.topbar-avatar').on('click',function(event){
           event.stopPropagation();
        $('.profile-popover').toggleClass('block');
       })
   
       $('.headline-action.share').on('click',function(event){
        event.stopPropagation();
      
        if($(this).siblings('.popover-container').hasClass('block')){
            $('.popover-container').removeClass('block');
            $(this).siblings('.popover-container').removeClass('block');
        }else{
            $('.popover-container').removeClass('block');
            $(this).siblings('.popover-container').addClass('block');
        }
          
       })

   
       $('body').on('click',function(){
           if($('.profile-popover').hasClass('block') || $('.search-suggest-div').hasClass('append') ||  $('.popover-container').hasClass('block') ){
               $('.profile-popover').removeClass('block');
               $('.search-suggest-div').removeClass('append');
               $('.search-suggest-input').removeClass('append');
               $('.popover-container').removeClass('block');
               $('.topbar-button').removeClass('non-display');
               $('.search-suggest').removeClass('flex-form');
               $('.x-svg').removeClass('block');
    
           }
       })
     $('.edition-cell').on('click',function(){
         $('.edition-cell').removeClass('selected'); 
         $(this).toggleClass('selected');
     })
})