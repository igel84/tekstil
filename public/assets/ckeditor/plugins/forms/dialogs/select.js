/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("select",function(a){function b(a,b,c,d,e){a=j(a);var f;d?f=d.createElement("OPTION"):f=document.createElement("OPTION");if(a&&f&&f.getName()=="option")CKEDITOR.env.ie?(isNaN(parseInt(e,10))?a.$.options.add(f.$):a.$.options.add(f.$,e),f.$.innerHTML=b.length>0?b:"",f.$.value=c):(e!==null&&e<a.getChildCount()?a.getChild(e<0?0:e).insertBeforeMe(f):a.append(f),f.setText(b.length>0?b:""),f.setValue(c));else return!1;return f}function c(a){a=j(a);var b=g(a);for(var c=a.getChildren().count()-1;c>=0;c--)a.getChild(c).$.selected&&a.getChild(c).remove();h(a,b)}function d(a,b,c,d){a=j(a);if(b<0)return!1;var e=a.getChild(b);return e.setText(c),e.setValue(d),e}function e(a){a=j(a);while(a.getChild(0)&&a.getChild(0).remove());}function f(a,c,d){a=j(a);var e=g(a);if(e<0)return!1;var f=e+c;f=f<0?0:f,f=f>=a.getChildCount()?a.getChildCount()-1:f;if(e==f)return!1;var i=a.getChild(e),k=i.getText(),l=i.getValue();return i.remove(),i=b(a,k,l,d?d:null,f),h(a,f),i}function g(a){return a=j(a),a?a.$.selectedIndex:-1}function h(a,b){a=j(a);if(b<0)return null;var c=a.getChildren().count();return a.$.selectedIndex=b>=c?c-1:b,a}function i(a){return a=j(a),a?a.getChildren():!1}function j(a){return a&&a.domId&&a.getInputElement().$?a.getInputElement():a&&a.$?a:!1}return{title:a.lang.select.title,minWidth:CKEDITOR.env.ie?460:395,minHeight:CKEDITOR.env.ie?320:300,onShow:function(){var a=this;delete a.selectBox,a.setupContent("clear");var b=a.getParentEditor().getSelection().getSelectedElement();if(b&&b.getName()=="select"){a.selectBox=b,a.setupContent(b.getName(),b);var c=i(b);for(var d=0;d<c.count();d++)a.setupContent("option",c.getItem(d))}},onOk:function(){var a=this.getParentEditor(),b=this.selectBox,c=!b;c&&(b=a.document.createElement("select")),this.commitContent(b);if(c){a.insertElement(b);if(CKEDITOR.env.ie){var d=a.getSelection(),e=d.createBookmarks();setTimeout(function(){d.selectBookmarks(e)},0)}}},contents:[{id:"info",label:a.lang.select.selectInfo,title:a.lang.select.selectInfo,accessKey:"",elements:[{id:"txtName",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:a.lang.common.name,"default":"",accessKey:"N",style:"width:350px",setup:function(a,b){a=="clear"?this.setValue(this["default"]||""):a=="select"&&this.setValue(b.data("cke-saved-name")||b.getAttribute("name")||"")},commit:function(a){this.getValue()?a.data("cke-saved-name",this.getValue()):(a.data("cke-saved-name",!1),a.removeAttribute("name"))}},{id:"txtValue",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:a.lang.select.value,style:"width:350px","default":"",className:"cke_disabled",onLoad:function(){this.getInputElement().setAttribute("readOnly",!0)},setup:function(a,b){a=="clear"?this.setValue(""):a=="option"&&b.getAttribute("selected")&&this.setValue(b.$.value)}},{type:"hbox",widths:["175px","170px"],children:[{id:"txtSize",type:"text",labelLayout:"horizontal",label:a.lang.select.size,"default":"",accessKey:"S",style:"width:175px",validate:function(){var b=CKEDITOR.dialog.validate.integer(a.lang.common.validateNumberFailed);return this.getValue()===""||b.apply(this)},setup:function(a,b){a=="select"&&this.setValue(b.getAttribute("size")||""),CKEDITOR.env.webkit&&this.getInputElement().setStyle("width","86px")},commit:function(a){this.getValue()?a.setAttribute("size",this.getValue()):a.removeAttribute("size")}},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(a.lang.select.lines)+"</span>"}]},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(a.lang.select.opAvail)+"</span>"},{type:"hbox",widths:["115px","115px","100px"],children:[{type:"vbox",children:[{id:"txtOptName",type:"text",label:a.lang.select.opText,style:"width:115px",setup:function(a,b){a=="clear"&&this.setValue("")}},{type:"select",id:"cmbName",label:"",title:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var a=this.getDialog(),b=a.getContentElement("info","cmbValue"),c=a.getContentElement("info","txtOptName"),d=a.getContentElement("info","txtOptValue"),e=g(this);h(b,e),c.setValue(this.getValue()),d.setValue(b.getValue())},setup:function(a,c){a=="clear"?e(this):a=="option"&&b(this,c.getText(),c.getText(),this.getDialog().getParentEditor().document)},commit:function(a){var c=this.getDialog(),d=i(this),f=i(c.getContentElement("info","cmbValue")),g=c.getContentElement("info","txtValue").getValue();e(a);for(var h=0;h<d.count();h++){var j=b(a,d.getItem(h).getValue(),f.getItem(h).getValue(),c.getParentEditor().document);f.getItem(h).getValue()==g&&(j.setAttribute("selected","selected"),j.selected=!0)}}}]},{type:"vbox",children:[{id:"txtOptValue",type:"text",label:a.lang.select.opValue,style:"width:115px",setup:function(a,b){a=="clear"&&this.setValue("")}},{type:"select",id:"cmbValue",label:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var a=this.getDialog(),b=a.getContentElement("info","cmbName"),c=a.getContentElement("info","txtOptName"),d=a.getContentElement("info","txtOptValue"),e=g(this);h(b,e),c.setValue(b.getValue()),d.setValue(this.getValue())},setup:function(a,c){var d=this;if(a=="clear")e(d);else if(a=="option"){var f=c.getValue();b(d,f,f,d.getDialog().getParentEditor().document),c.getAttribute("selected")=="selected"&&d.getDialog().getContentElement("info","txtValue").setValue(f)}}}]},{type:"vbox",padding:5,children:[{type:"button",id:"btnAdd",style:"",label:a.lang.select.btnAdd,title:a.lang.select.btnAdd,style:"width:100%;",onClick:function(){var a=this.getDialog(),c=a.getParentEditor(),d=a.getContentElement("info","txtOptName"),e=a.getContentElement("info","txtOptValue"),f=a.getContentElement("info","cmbName"),g=a.getContentElement("info","cmbValue");b(f,d.getValue(),d.getValue(),a.getParentEditor().document),b(g,e.getValue(),e.getValue(),a.getParentEditor().document),d.setValue(""),e.setValue("")}},{type:"button",id:"btnModify",label:a.lang.select.btnModify,title:a.lang.select.btnModify,style:"width:100%;",onClick:function(){var a=this.getDialog(),b=a.getContentElement("info","txtOptName"),c=a.getContentElement("info","txtOptValue"),e=a.getContentElement("info","cmbName"),f=a.getContentElement("info","cmbValue"),h=g(e);h>=0&&(d(e,h,b.getValue(),b.getValue()),d(f,h,c.getValue(),c.getValue()))}},{type:"button",id:"btnUp",style:"width:100%;",label:a.lang.select.btnUp,title:a.lang.select.btnUp,onClick:function(){var a=this.getDialog(),b=a.getContentElement("info","cmbName"),c=a.getContentElement("info","cmbValue");f(b,-1,a.getParentEditor().document),f(c,-1,a.getParentEditor().document)}},{type:"button",id:"btnDown",style:"width:100%;",label:a.lang.select.btnDown,title:a.lang.select.btnDown,onClick:function(){var a=this.getDialog(),b=a.getContentElement("info","cmbName"),c=a.getContentElement("info","cmbValue");f(b,1,a.getParentEditor().document),f(c,1,a.getParentEditor().document)}}]}]},{type:"hbox",widths:["40%","20%","40%"],children:[{type:"button",id:"btnSetValue",label:a.lang.select.btnSetValue,title:a.lang.select.btnSetValue,onClick:function(){var a=this.getDialog(),b=a.getContentElement("info","cmbValue"),c=a.getContentElement("info","txtValue");c.setValue(b.getValue())}},{type:"button",id:"btnDelete",label:a.lang.select.btnDelete,title:a.lang.select.btnDelete,onClick:function(){var a=this.getDialog(),b=a.getContentElement("info","cmbName"),d=a.getContentElement("info","cmbValue"),e=a.getContentElement("info","txtOptName"),f=a.getContentElement("info","txtOptValue");c(b),c(d),e.setValue(""),f.setValue("")}},{id:"chkMulti",type:"checkbox",label:a.lang.select.chkMulti,"default":"",accessKey:"M",value:"checked",setup:function(a,b){a=="select"&&this.setValue(b.getAttribute("multiple")),CKEDITOR.env.webkit&&this.getElement().getParent().setStyle("vertical-align","middle")},commit:function(a){this.getValue()?a.setAttribute("multiple",this.getValue()):a.removeAttribute("multiple")}}]}]}]}})