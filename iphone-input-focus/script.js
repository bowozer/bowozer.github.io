$(document).ready(function() {
	
	$('.wr-dropdown').on('change', function() {
		if ( $(this).val().search('search') == -1 ) {
			window.location = $(this).val();
		} else {
			$('.wr-dropdown').hide();
			$('.mobile-search').show();
			// $('.mobile-search').find('input').focus();
			
			// create invisible dummy input to receive the focus first
			const fakeInput = document.createElement('input')
			fakeInput.setAttribute('type', 'text')
			fakeInput.style.position = 'absolute'
			fakeInput.style.opacity = 0
			fakeInput.style.height = 0
			fakeInput.style.fontSize = '16px' // disable auto zoom

			// you may need to append to another element depending on the browser's auto 
			// zoom/scroll behavior
			document.body.prepend(fakeInput)

			// focus so that subsequent async focus will work
			fakeInput.focus()

			setTimeout(() => {

			// now we can focus on the target input
			// targetInput.focus()
			$('.mobile-search').find('input').focus();

			// cleanup
			fakeInput.remove()

			}, 1000);

		}
	});
	
	/*setTimeout(function() {
		$('.mobile-search').find('input').focus();
		$('.mobile-search').find('input').trigger('click');
	}, 5000);*/
	
});