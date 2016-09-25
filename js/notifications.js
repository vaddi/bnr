/**
 * Bootstrap Notification Rendering
 * https://github.com/vaddi/bnr.git
 */

function fadeInEl( elclass ) {
	$( elclass ).slideDown( function() { $( elclass ).css({ display: "block", height: "auto" }); });
}

function fadeOutEl( elclass ) {
	$( elclass ).fadeTo( 500, 0 ).slideUp( function() { $( elclass ).css({ display: "none", height: "0" }).remove(); });
}

// our messages container
function renderContainer( el, id ) {
	if( id === undefined ) id = 'notifications';
	if( el === undefined ) el = 'div';
	if ( $( '#' + id ).length != 1 ) {
		var element = '<' + el + ' id="' + id + '"></' + el + '>'; 
		$( 'body' ).prepend( element );
	} else {
		// container allready exists, clear container for new messages
	}
}

// our messages viewer
function showMsg( id, type, title, msg ) {
	if( title === undefined ) title = 'Info';
	if( id === undefined ) id = 'notification';
	if( type === undefined ) type = 'info';
	renderContainer( 'div', 'notifications' );
	msg = '<div id="' + id + '" class="notification alert alert-' + type + ' alert-dismissable fade in" title="Message title"><button class="close" data-dismiss="alert" aria-label="close">×</button>' + 
				'<strong>' + title + '</strong> ' + msg + '</div>';
	$( '#' + 'notifications' ).prepend( msg );
//	$( '#' + id ).slideDown( function() { $( '#' + id ).css({ opacity: 1, display: "block", height: "auto" }); });
}

// add timeout function to classes
window.setTimeout( function() {
	fadeOutEl( ".alert-info" );
  fadeOutEl( ".alert-success" );
  fadeOutEl( ".alert-warning" );
}, 5000);

