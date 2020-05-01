var offsetList = []
$('.home').click(function() {
    location = '/'
})
$('.back').click(function() {
    history.back()
})
$('.detail h1, .detail h2, .detail h3, .detail h4').each(function(idx) {
    var text = $(this).text()
    var offset = $(this).offset().top
    offsetList.push(offset)
    var tag = $(this).prop('tagName').toLowerCase()
    console.log(tag)
    var div = $('<div></div>', {class: `line ${tag}`, click: function() {
        $(document).scrollTop(offset)
        $('.line').removeClass('select')
        $(this).addClass('select')
    }}).text(text)
    $('.sidebar').append(div)
})
$(document).scroll(function() {
    $('.line').each(function(idx) {
        if($(document).scrollTop()<offsetList[idx]) {
            $('.line').removeClass('select')
            if(idx==0)
                $('.line').first().addClass('select')
            else
                $(this).prev().addClass('select')
            return false
        }
        if(idx==$('.line').length-1 && $(document).scrollTop()>offsetList[idx]) {
            $('.line').removeClass('select')
            $('.line').last().addClass('select')
            return false
        }
    })
})
$('.menu-btn').click(function() {
    $('.sidebar').toggleClass('show')
})