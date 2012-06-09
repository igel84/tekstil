<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add( 'docprops',
{
	init : function( editor )
	{
		var cmd = new CKEDITOR.dialogCommand( 'docProps' );
		// Only applicable on full page mode.
		cmd.modes = { wysiwyg : editor.config.fullPage };
		editor.addCommand( 'docProps', cmd );
		CKEDITOR.dialog.add( 'docProps', this.path + 'dialogs/docprops.js' );

		editor.ui.addButton( 'DocProps',
		{
			label : editor.lang.docprops.label,
			command : 'docProps'
		});
	}
});
=======
﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.add( 'docprops',
{
	init : function( editor )
	{
		var cmd = new CKEDITOR.dialogCommand( 'docProps' );
		// Only applicable on full page mode.
		cmd.modes = { wysiwyg : editor.config.fullPage };
		editor.addCommand( 'docProps', cmd );
		CKEDITOR.dialog.add( 'docProps', this.path + 'dialogs/docprops.js' );

		editor.ui.addButton( 'DocProps',
		{
			label : editor.lang.docprops.label,
			command : 'docProps'
		});
	}
});
>>>>>>> 23b8d95dbac31453520797cbc04d68aa61d48180
