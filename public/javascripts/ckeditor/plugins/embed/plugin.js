<<<<<<< HEAD
﻿(function(){var embedCmd={exec:function(editor){editor.openDialog('embed');return}};CKEDITOR.plugins.add('embed',{lang:['en','ru','uk'],requires:['dialog'],init:function(editor){var commandName='embed';editor.addCommand(commandName,embedCmd);editor.ui.addButton('Embed',{label:editor.lang.embed.button,command:commandName,icon:this.path+"images/embed.png"});CKEDITOR.dialog.add(commandName,CKEDITOR.getUrl(this.path+'dialogs/embed.js'))}})})();
=======
﻿(function(){var embedCmd={exec:function(editor){editor.openDialog('embed');return}};CKEDITOR.plugins.add('embed',{lang:['en','ru','uk'],requires:['dialog'],init:function(editor){var commandName='embed';editor.addCommand(commandName,embedCmd);editor.ui.addButton('Embed',{label:editor.lang.embed.button,command:commandName,icon:this.path+"images/embed.png"});CKEDITOR.dialog.add(commandName,CKEDITOR.getUrl(this.path+'dialogs/embed.js'))}})})();
>>>>>>> 23b8d95dbac31453520797cbc04d68aa61d48180
