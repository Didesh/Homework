$('.hiring__about > div').on('click', function(){
    $(this).children('.hiring__about').toggleClass('active');
    $(this).next('p').slideToggle(300)
})