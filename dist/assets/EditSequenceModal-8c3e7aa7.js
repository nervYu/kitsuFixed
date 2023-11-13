import{c as o,C as a,M as r,d as c,aa as d,m as l,b as u,n as m}from"./index-d0b155bb.js";const f={name:"edit-sequence-modal",mixins:[o],components:{Combobox:a,ModalFooter:r,TextField:c,TextareaField:d},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},sequenceToEdit:{type:Object,default:()=>{}}},data(){return this.sequenceToEdit&&this.sequenceToEdit.id?{form:{id:this.sequenceToEdit.id,name:this.sequenceToEdit.name,description:this.sequenceToEdit.description,production_id:this.sequenceToEdit.project_id,data:this.sequenceToEdit.data||{}},sequenceSuccessText:""}:{form:{id:"",name:"",description:"",data:{}},sequenceSuccessText:""}},computed:{...l(["currentProduction","sequenceMetadataDescriptors"])},methods:{...u([]),getDescriptorChoicesOptions(s){const e=s.choices.map(i=>({label:i,value:i}));return[{label:"",value:""},...e]},runConfirmation(){this.confirmClicked()},confirmClicked(){this.$emit("confirm",this.form)},isEditing(){return this.sequenceToEdit&&this.sequenceToEdit.id},resetForm(){this.sequenceSuccessText="",this.isEditing()?this.form={id:this.sequenceToEdit.id,name:this.sequenceToEdit.name,description:this.sequenceToEdit.description,data:this.sequenceToEdit.data||{}}:(this.form.id=null,this.form.name="",this.form.description="")}},mounted(){this.active&&this.resetForm()},watch:{active(){this.resetForm()},sequenceToEdit(){this.resetForm()}}};var p=function(){var e=this,i=e._self._c;return i("div",{class:{modal:!0,"is-active":e.active}},[i("div",{staticClass:"modal-background",on:{click:function(t){return e.$emit("cancel")}}}),i("div",{staticClass:"modal-content"},[i("div",{staticClass:"box"},[e.sequenceToEdit&&this.sequenceToEdit.id?i("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("sequences.edit_title"))+" "+e._s(e.sequenceToEdit.name)+" ")]):i("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("sequences.new_sequence"))+" ")]),i("form",{on:{submit:function(t){t.preventDefault()}}},[i("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:e.$t("sequences.fields.name")},on:{enter:e.runConfirmation},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),i("textarea-field",{ref:"descriptionField",attrs:{label:e.$t("sequences.fields.description")},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||!t.ctrlKey?null:e.runConfirmation.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||!t.metaKey?null:e.runConfirmation.apply(null,arguments)}]},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._l(e.sequenceMetadataDescriptors,function(t){return i("div",{key:t.id},[t.choices.length>0?i("combobox",{attrs:{label:t.name,options:e.getDescriptorChoicesOptions(t)},model:{value:e.form.data[t.field_name],callback:function(n){e.$set(e.form.data,t.field_name,n)},expression:"form.data[descriptor.field_name]"}}):i("text-field",{attrs:{label:t.name},on:{enter:e.runConfirmation},model:{value:e.form.data[t.field_name],callback:function(n){e.$set(e.form.data,t.field_name,n)},expression:"form.data[descriptor.field_name]"}})],1)})],2),i("modal-footer",{attrs:{"error-text":e.$t("sequences.edit_error"),"is-loading":e.isLoading,"is-error":e.isError},on:{confirm:e.runConfirmation,cancel:function(t){return e.$emit("cancel")}}})],1)])])},_=[],h=m(f,p,_,!1,null,"f6d04c80",null,null);const E=h.exports;export{E};
//# sourceMappingURL=EditSequenceModal-8c3e7aa7.js.map
