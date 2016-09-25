/**
 * Bootstrap Notification Rendering
 * https://github.com/vaddi/bnr.git
 */

// Default Message viewing time
var msgtime = 5000; // time before msg fadeout

// add css rule to head
var style = $('<style>#notifications { min-width: 320px; z-index: 9999;	position: fixed; bottom:0; right:0; margin: 10px 10px 0 10px; }</style>');
$('html > head').append(style);

// fadein TODO, doesnt work well
function fadeInEl( elclass ) {
	$( elclass ).slideDown( function() { $( elclass ).css({ display: "block", height: "auto" }); });
}

// fadeout
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
	if( $( '#' + id ).length > 0 ) id = id + guid(); // allready exists, create new id
	renderContainer( 'div', 'notifications' );
	msg = '<div id="' + id + '" class="notification alert alert-' + type + ' alert-dismissable fade in" title="Message title"><button class="close" data-dismiss="alert" aria-label="close">×</button>' + 
				'<strong style="margin-right:10px;">' + title + '</strong> ' + msg + '</div>';
	$( '#' + 'notifications' ).append( msg );
	if( type != 'danger' ){
		$( '#' + id ).fadeTo( msgtime , 500 ).slideDown( function() { $( '#' + id ).css({ opacity: 1, display: "block", height: "auto" }).slideUp( 500 ); });
	} else {
		
	}
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4();
}
