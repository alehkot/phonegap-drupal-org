(function($){
  $.getJSON( "https://pipes.yahoo.com/pipes/pipe.run?_id=0506658508c5f3b8ed372cf9b835859e&_render=json", function( data ) {
    var items = [];
    if (data.count) {
      var item_title;
      var $content = $('div[data-role="content"]');
      var $new_fieldset;
      $.each( data.value.items, function( key, val ) {
        $val = $(val.content);
        item_title = $val.find('h2 a').html();
        $new_fieldset = $content.append('<fieldset data-role="collapsible"><legend>' + item_title + '</legend><div>' + $val.html() + '</div></fieldset>')
          .enhanceWithin();
        $new_fieldset.find('.field-name-body').siblings().remove();
        $new_fieldset.find('h2').first().remove();
      });
    }
    $('.jquery-ui-loader').hide();
  });
})(jQuery);
