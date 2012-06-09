$(document).ready(function() {
  // bind 'myForm' and provide a simple callback function
  var options = {
    target:     '#divtoupdate',
    url:        '/add_image',
    success:    function() {
        //alert('Thanks for your comment!');
    }
	};
  $('#myForm').ajaxForm(options);
});
