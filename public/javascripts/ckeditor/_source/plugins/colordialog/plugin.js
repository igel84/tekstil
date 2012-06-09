<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.colordialog =
{
	init : function( editor )
	{
		editor.addCommand( 'colordialog', new CKEDITOR.dialogCommand( 'colordialog' ) );
		CKEDITOR.dialog.add( 'colordialog', this.path + 'dialogs/colordialog.js' );
	}
};

CKEDITOR.plugins.add( 'colordialog', CKEDITOR.plugins.colordialog );
=======
﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.colordialog =
{
	init : function( editor )
	{
		editor.addCommand( 'colordialog', new CKEDITOR.dialogCommand( 'colordialog' ) );
		CKEDITOR.dialog.add( 'colordialog', this.path + 'dialogs/colordialog.js' );
	}
};

CKEDITOR.plugins.add( 'colordialog', CKEDITOR.plugins.colordialog );
>>>>>>> 23b8d95dbac31453520797cbc04d68aa61d48180
