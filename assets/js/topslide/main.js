/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.elmsln-content-wrap' ),
		container = document.querySelector( '.elmsln-container' ),
		openbtn = document.getElementById( 'open-button' ),
		openbtn_icon_open = document.getElementById( 'ob-icon-open' ),
		openbtn_icon_close = document.getElementById( 'ob-icon-close' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
			classie.add( content, 'no-scroll-y' );
			classie.remove( container, 'no-scroll-x' );
			classie.add( openbtn_icon_open, 'hide' );
			classie.remove( openbtn_icon_close, 'hide' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			classie.remove( content, 'no-scroll-y' );
			classie.add( container, 'no-scroll-x' );
			classie.remove( openbtn_icon_open, 'hide' );
			classie.add( openbtn_icon_close, 'hide' );
		}
		isOpen = !isOpen;
	}

	init();

})();