$(function() {
  var checkbox = $(':checkbox');

  checkbox.attr('checked', $.cookie('pjax'));

  if ( !checkbox.is(':checked') )
    $.fn.pjax = $.noop;

  checkbox.change(function() {
    if ( $.pjax == $.noop ) {
      checkbox.attr('checked', false);
      return alert( 'Sorry, your browser doesn\'t support pjax :(' );
    }

    if ( checkbox.is(':checked') )
      $.cookie('pjax', true);
    else
      $.cookie('pjax', null);

    window.location = location.href;
  });
});
