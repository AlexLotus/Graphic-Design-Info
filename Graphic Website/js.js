    $(document).scroll(function(){
        if ($(this).scrollTop()>175){
            // animate fixed div to small size:
            $('.wrapper').stop().animate({ height: 90 , 'padding-top': 20},100);
        } else {
            //  animate fixed div to original size
            $('.wrapper').stop().animate({ height: 175, 'padding-top': 0},100);
        }
    }); 