$('.menu-item').click(function() {
    switch($(this).text().trim().toLowerCase()) {
        case 'profile':
            location.href = '/profile'
        break;
        case 'projects':
            location.href = '/'
        break;
        case 'writings':
            location.href = '/'
        break;
        case 'let\'s work together':
            location.href = '/'
        break;
    }
})
$('.menu-btn').click(function() {
    $('.menu').toggleClass('show')
})