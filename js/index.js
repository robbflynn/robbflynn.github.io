$('.gallery-container').each(function() {
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled:true
    }
  });
});

$('.case-tumb').click(function() {
  $(this).parent().find(".gallery-item")[0].click();
})
