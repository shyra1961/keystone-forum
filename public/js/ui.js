jQuery(function($) {
	
	
	// Generic scroll to anchor
	// ------------------------------
	
	$('.js-scrollto-anchor').click( function(e) {
		
		e.preventDefault();
		
		// grabs the target id from the href
		var target = $($(this).prop('href').match(/\#(.*)/)[0]);
		
		// speed or slow the scroll using data attribute "scrollduration"
		var duration = $(this).data('scrollduration') || 300;
		
		// animate this puppy
		$('html, body').animate({
			scrollTop: target.offset().top
		}, duration, function() {
			
			// focus on the first form control if it exists
			// target.find('.form-control').eq(0).focus();
		});
	});
	
	
	
	
	
	// Generic confirms
	// ------------------------------
	
	$('.js-cancel-confirm').click(function(e) {
		if ( !confirm( $(this).data('confirm') || 'Are you sure? You will lose any changes.') )
			return e.preventDefault();
	});
	$('.js-delete-confirm').click(function(e) {
		if ( !confirm( $(this).data('confirm') || 'Are you sure? This cannot be undone.') )
			return e.preventDefault();
	});
	
	
	
	
	// Commenting
	// ------------------------------
	
	var comments = $('#comments'),
		input = $('.comment-field-input'),
		submit = comments.find('button[type=submit]');
	
	// Scroll to comments when there's a new comment
	if ($('.has-new-comment').length) {
		setTimeout(function() {
			$('html, body').animate({ scrollTop: comments.offset().top }, 250);
		}, 1000);
	}
	
	
	
	// Show buttons
	input.focus( function(e) {
		comments.find('.hidden').removeClass('hidden');
	});
	
	
	
	// Check if field has content: enable/disable submit. Disable by default
	submit.attr('disabled','disabled');
	input.keyup(function() {
		if ($.trim($(this).val())) {
			submit.removeAttr('disabled');
		} else {
			submit.attr('disabled','disabled');
		}
	});
	
});
