(function($){
  $.getJSON( "http://k0teg.me/drupalorg_modules", function( data ) {
    if (!!data.length) {
      var $content = $('div[data-role="content"]'), text, title;
      $.each(data, function(key, val){
        text = $("<div/>").html(val.content).text();
        title = val.name;               
        $new_fieldset = $content.append('<fieldset data-role="collapsible"><legend>' + title + '</legend><div>' + text + '</div></fieldset>')
          .enhanceWithin();      
      });
    }
  });
})(jQuery);
