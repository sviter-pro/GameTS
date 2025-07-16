(function($) {
  'use strict';

  var $accountDelete       = $('#delete-account'),
    $accountDeleteDialog = $('#confirm-delete'),
    transition;

  $accountDelete.on('click', function() {
    $accountDeleteDialog[0].showModal();
    transition = window.setTimeout(function() {
        $accountDeleteDialog.addClass('dialog-scale');
    }, 0.5);
  });

  $('#cancel').on('click', function() {
    $accountDeleteDialog[0].close();
    $accountDeleteDialog.removeClass('dialog-scale');
    clearTimeout(transition);
  });

})(jQuery);

(function($) {
  'use strict';

  var $accountDelete2       = $('#delete'),
    $accountDeleteDialog2 = $('#confirm-delete2'),
    transition;

  $accountDelete2.on('click', function() {
    $accountDeleteDialog2[0].showModal();
    transition = window.setTimeout(function() {
        $accountDeleteDialog2.addClass('dialog-scale2');
    }, 0.5);
  });

  $('#cancel2').on('click', function() {
    $accountDeleteDialog2[0].close();
    $accountDeleteDialog2.removeClass('dialog-scale2');
    clearTimeout(transition);
  });

})(jQuery);