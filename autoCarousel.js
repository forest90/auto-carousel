var current = 0;

function isImagesPreview(){
    return window.location.pathname.split('/')[1] == 'przegladaj';
}

if(isImagesPreview()){

    function navigate(element, direction, navigationArray){
        element.preventDefault();
        if(direction == 'next'){
            if(current == navigationArray.length) return;
            current++;
        }else{
            if(current == 0) return;
            current--;
        }
        var nextElement = navigationArray[current];
        var src = $(nextElement)
            .find('img')
            .attr('src')
            .replace('_thumb', '');
        $('.self').find('img').attr('src', src);
    }

    var images = $(".jcarousel ul li a");
    var navigationArray = $(".jcarousel ul li a");
    var next_button = $('.next').click(function(e){
        navigate(e, 'next', navigationArray);
    });
    if( !$('.prev').length ){
        $('.next')
            .parent()
            .append("<a class='prev'><span></span></a>")
    }
     $('.prev').click(function(e){
        navigate(e, 'prev', navigationArray);
    });
}


