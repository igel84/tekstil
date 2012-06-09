<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @file Paste as plain text plugin
 */

(function()
{
	// The pastetext command definition.
	var attachmentCmd =
	{
		exec : function( editor )
		{
		  editor.openDialog( 'attachment' );
		  return;
		}
	};
  
	// Register the plugin.
	CKEDITOR.plugins.add( 'attachment',
	{
	  lang : [ 'en', 'ru', 'uk' ],
	  requires : [ 'dialog' ],
	  
		init : function( editor )
		{ 
			var commandName = 'attachment';
			editor.addCommand( commandName, attachmentCmd );
      
			editor.ui.addButton( 'Attachment',
				{
					label : editor.lang.attachment.button,
					command : commandName,
					icon: this.path + "images/attachment.png"
				});
      
			CKEDITOR.dialog.add( commandName, CKEDITOR.getUrl( this.path + 'dialogs/attachment.js' ) );
		}
	});
	
=======
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @file Paste as plain text plugin
 */

(function()
{
	// The pastetext command definition.
	var attachmentCmd =
	{
		exec : function( editor )
		{
		  editor.openDialog( 'attachment' );
		  return;
		}
	};
  
	// Register the plugin.
	CKEDITOR.plugins.add( 'attachment',
	{
	  lang : [ 'en', 'ru', 'uk' ],
	  requires : [ 'dialog' ],
	  
		init : function( editor )
		{ 
			var commandName = 'attachment';
			editor.addCommand( commandName, attachmentCmd );
      
			editor.ui.addButton( 'Attachment',
				{
					label : editor.lang.attachment.button,
					command : commandName,
					icon: this.path + "images/attachment.png"
				});
      
			CKEDITOR.dialog.add( commandName, CKEDITOR.getUrl( this.path + 'dialogs/attachment.js' ) );
		}
	});
	
>>>>>>> 23b8d95dbac31453520797cbc04d68aa61d48180
})();
