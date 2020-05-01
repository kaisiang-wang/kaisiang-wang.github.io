$('.menu-item').click(function() {
    switch($(this).text().trim().toLowerCase()) {
        case 'profile':
            $(document).scrollTop($('.header').offset().top-100)
        break;
        case 'projects':
            $(document).scrollTop($('.bk').offset().top - 160)
        break;
        case 'writings':
            $(document).scrollTop($('.split').offset().top - 160)
        break;
        case 'let\'s work together':
            $(document).scrollTop($('.contact').offset().top - 80)
        break;
    }
})