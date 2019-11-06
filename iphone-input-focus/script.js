$(document).ready(function() {
	
	$('.wr-dropdown').on('change', function() {
		if ( $(this).val().search('search') == -1 ) {
			window.location = $(this).val();
		} else {
			$('.wr-dropdown').hide();
			$('.mobile-search').show();
			$('.mobile-search').find('input').focus();
		}
	});
	
	/*setTimeout(function() {
		$('.mobile-search').find('input').focus();
		$('.mobile-search').find('input').trigger('click');
	}, 5000);*/
	
});