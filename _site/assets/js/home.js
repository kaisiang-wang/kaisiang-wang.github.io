$('.writing-bk, .project-bk').click(function() {
    console.log($(this).find('.url').text())
    location.href = $(this).find('.url').text()
})
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
    $('.menu').toggleClass('show')
})
$('.menu-btn').click(function() {
    $('.menu').toggleClass('show')
})