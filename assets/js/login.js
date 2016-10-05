
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    var images = [
                    "/cap/assets/img/backgrounds/1.jpg"
	              , "/cap/assets/img/backgrounds/2.jpg"
	              , "/cap/assets/img/backgrounds/3.jpg"
				  , "/cap/assets/img/backgrounds/4.jpg"
	              , "/cap/assets/img/backgrounds/5.jpg"
				  , "/cap/assets/img/backgrounds/6.jpg"
	              , "/cap/assets/img/backgrounds/7.jpg"
				  , "/cap/assets/img/backgrounds/8.jpg"
	              , "/cap/assets/img/backgrounds/9.jpg"
				  , "/cap/assets/img/backgrounds/10.jpg"
	              , "/cap/assets/img/backgrounds/11.jpg"
				  , "/cap/assets/img/backgrounds/12.jpg"
	              , "/cap/assets/img/backgrounds/13.jpg"
				  , "/cap/assets/img/backgrounds/14.jpg"
	              , "/cap/assets/img/backgrounds/15.jpg"
				  , "/cap/assets/img/backgrounds/16.jpg"
	              , "/cap/assets/img/backgrounds/17.jpg"
				  , "/cap/assets/img/backgrounds/18.jpg"
	              , "/cap/assets/img/backgrounds/19.jpg"
				  , "/cap/assets/img/backgrounds/20.jpg"
	              , "/cap/assets/img/backgrounds/21.jpg"
	];
	var index = 0,oldIndex;
        index = Math.floor((Math.random()*images.length));
        $.backstretch(images[index], {
            duration: 3000,
            fade: 750
        });


    setInterval(function() {
        oldIndex = index;
        while (oldIndex == index) {
            index = Math.floor((Math.random()*images.length));
        }
        $.backstretch(images[index]);
    }, 7500);
    
    /*
        Form validation
    */
    $('.login-form input[type="email"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="email"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});
