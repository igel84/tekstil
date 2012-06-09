<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add( 'uicolor',
{
	requires : [ 'dialog' ],
	lang : [ 'en', 'he' ],

	init : function( editor )
	{
		if ( CKEDITOR.env.ie6Compat )
			return;

		editor.addCommand( 'uicolor', new CKEDITOR.dialogCommand( 'uicolor' ) );
		editor.ui.addButton( 'UIColor',
			{
				label : editor.lang.uicolor.title,
				command : 'uicolor',
				icon : this.path + 'uicolor.gif'
			});
		CKEDITOR.dialog.add( 'uicolor', this.path + 'dialogs/uicolor.js' );

		// Load YUI js files.
		CKEDITOR.scriptLoader.load( CKEDITOR.getUrl(
			'_source/' + // @Packager.RemoveLine
			'plugins/uicolor/yui/yui.js'
		));

		// Load YUI css files.
		editor.element.getDocument().appendStyleSheet( CKEDITOR.getUrl(
				'_source/' + // @Packager.RemoveLine
				'plugins/uicolor/yui/assets/yui.css'
		));
	}
} );
=======
﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add( 'uicolor',
{
	requires : [ 'dialog' ],
	lang : [ 'en', 'he' ],

	init : function( editor )
	{
		if ( CKEDITOR.env.ie6Compat )
			return;

		editor.addCommand( 'uicolor', new CKEDITOR.dialogCommand( 'uicolor' ) );
		editor.ui.addButton( 'UIColor',
			{
				label : editor.lang.uicolor.title,
				command : 'uicolor',
				icon : this.path + 'uicolor.gif'
			});
		CKEDITOR.dialog.add( 'uicolor', this.path + 'dialogs/uicolor.js' );

		// Load YUI js files.
		CKEDITOR.scriptLoader.load( CKEDITOR.getUrl(
			'_source/' + // @Packager.RemoveLine
			'plugins/uicolor/yui/yui.js'
		));

		// Load YUI css files.
		editor.element.getDocument().appendStyleSheet( CKEDITOR.getUrl(
				'_source/' + // @Packager.RemoveLine
				'plugins/uicolor/yui/assets/yui.css'
		));
	}
} );
>>>>>>> 23b8d95dbac31453520797cbc04d68aa61d48180
