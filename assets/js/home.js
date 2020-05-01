$('.writing-bk').click(function() {
    console.log($(this).find('.url').text())
    location.href = $(this).find('.url').text()
})