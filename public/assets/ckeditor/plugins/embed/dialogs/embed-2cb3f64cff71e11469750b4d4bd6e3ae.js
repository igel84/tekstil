(function(){CKEDITOR.dialog.add("embed",function(a){return{title:a.lang.embed.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?368:350,minHeight:240,onShow:function(){this.getContentElement("general","content").getInputElement().setValue("")},onOk:function(){var a=this.getContentElement("general","content").getInputElement().getValue();this.getParentEditor().insertHtml(a)},contents:[{label:a.lang.common.generalTab,id:"general",elements:[{type:"html",id:"pasteMsg",html:'<div style="white-space:normal;width:340px;">'+a.lang.embed.pasteMsg+"</div>"},{type:"html",id:"content",style:"width:340px;height:170px",html:'<textarea style="width:346px;height:170px;resize: none;border:1px solid black;background-color:white"></textarea>',focus:function(){this.getElement().focus()}}]}]}})})()