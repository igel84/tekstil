<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function()
{
	CKEDITOR.dialog.add( 'embed', function( editor )
		{
			return {
				title : editor.lang.embed.title,
        
				minWidth : CKEDITOR.env.ie && CKEDITOR.env.quirks ? 368 : 350,
				minHeight : 240,

				onShow : function()
				{
					// Reset the textarea value.
					this.getContentElement( 'general', 'content' ).getInputElement().setValue( '' );
				},

				onOk : function()
				{
					// Get the textarea value.
					var text = this.getContentElement( 'general', 'content' ).getInputElement().getValue();

					// Inserts the html.
					this.getParentEditor().insertHtml( text );
				},

				contents :
				[
					{
						label : editor.lang.common.generalTab,
						id : 'general',
						elements :
						[
							{
								type : 'html',
								id : 'pasteMsg',
								html : '<div style="white-space:normal;width:340px;">' + editor.lang.embed.pasteMsg + '</div>'
							},
							{
								type : 'html',
								id : 'content',
								style : 'width:340px;height:170px',
								html :
									'<textarea style="' +
										'width:346px;' +
										'height:170px;' +
										'resize: none;' +
										'border:1px solid black;' +
										'background-color:white">' +
									'</textarea>',
								focus : function()
								{
									this.getElement().focus();
								}
							}
						]
					}
				]
			};
		});
=======
﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function()
{
	CKEDITOR.dialog.add( 'embed', function( editor )
		{
			return {
				title : editor.lang.embed.title,
        
				minWidth : CKEDITOR.env.ie && CKEDITOR.env.quirks ? 368 : 350,
				minHeight : 240,

				onShow : function()
				{
					// Reset the textarea value.
					this.getContentElement( 'general', 'content' ).getInputElement().setValue( '' );
				},

				onOk : function()
				{
					// Get the textarea value.
					var text = this.getContentElement( 'general', 'content' ).getInputElement().getValue();

					// Inserts the html.
					this.getParentEditor().insertHtml( text );
				},

				contents :
				[
					{
						label : editor.lang.common.generalTab,
						id : 'general',
						elements :
						[
							{
								type : 'html',
								id : 'pasteMsg',
								html : '<div style="white-space:normal;width:340px;">' + editor.lang.embed.pasteMsg + '</div>'
							},
							{
								type : 'html',
								id : 'content',
								style : 'width:340px;height:170px',
								html :
									'<textarea style="' +
										'width:346px;' +
										'height:170px;' +
										'resize: none;' +
										'border:1px solid black;' +
										'background-color:white">' +
									'</textarea>',
								focus : function()
								{
									this.getElement().focus();
								}
							}
						]
					}
				]
			};
		});
>>>>>>> 23b8d95dbac31453520797cbc04d68aa61d48180
})();
