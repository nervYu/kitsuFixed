import{c as u,C as l,J as r,K as d,M as m,m as a,b as o,n,D as f}from"./index-d0b155bb.js";import{S as c}from"./StatusAutomationList-78020d69.js";import{L as T}from"./ListPageHeader-f13bb197.js";import"./TaskStatusName-d116dbb4.js";const p={name:"edit-status-automation-modal",mixins:[u],components:{Combobox:l,ComboboxTaskType:r,ComboboxStatus:d,ModalFooter:m},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},statusAutomationToEdit:{type:Object,default:()=>{}},taskStatus:{type:Object,default:()=>{}}},computed:{...a(["statusAutomations","statusAutomationsStatusOptions","assetTaskTypes","shotTaskTypes","productionTaskTypes","productionTaskStatuses"])},data(){return{entityTypeOptions:[{label:"asset",value:"asset"},{label:"shot",value:"shot"}],fieldTypeOptions:[{label:"status",value:"status"},{label:"ready_for",value:"ready_for"}],form:{entityType:"asset",mode:"status",inEntityTaskTypes:[],outEntityTaskTypes:[],inTaskTypeId:"",outTaskTypeId:"",inTaskStatusId:"",outTaskStatusId:""}}},methods:{...o([]),confirmClicked(){this.$emit("confirm",this.form)},isEditing(){return this.statusAutomationToEdit&&this.statusAutomationToEdit.id},setTaskTypes(s){s==="asset"?(this.form.inEntityTaskTypes=this.assetTaskTypes,this.form.outEntityTaskTypes=this.assetTaskTypes):s==="shot"&&(this.form.inEntityTaskTypes=this.shotTaskTypes,this.form.outEntityTaskTypes=this.shotTaskTypes)}},watch:{statusAutomationToEdit(){if(this.statusAutomationToEdit){var s=[];this.form.entityType==="asset"?s=this.assetTaskTypes:this.form.entityType==="shot"&&(s=this.shotTaskTypes),this.form={entityType:this.isEditing()?this.statusAutomationToEdit.entity_type:"asset",inEntityTaskTypes:s,outEntityTaskTypes:s,inTaskTypeId:this.isEditing()?this.statusAutomationToEdit.in_task_type_id:s[0].id,inTaskStatusId:this.isEditing()?this.statusAutomationToEdit.in_task_status_id:this.productionTaskStatuses[0].id,outFieldType:this.isEditing()?this.statusAutomationToEdit.out_field_type:"status",outTaskTypeId:this.isEditing()?this.statusAutomationToEdit.out_task_type_id:s[1].id,outTaskStatusId:this.isEditing()?this.statusAutomationToEdit.out_task_status_id:this.productionTaskStatuses[1].id}}},"form.entityType":function(s){this.setTaskTypes(s),this.isEditing()||(this.form.inTaskTypeId=this.form.inEntityTaskTypes[0].id,this.form.inTaskStatusId=this.productionTaskStatuses[0].id,this.form.outTaskTypeId=this.form.outEntityTaskTypes[1].id,this.form.outTaskStatusId=this.productionTaskStatuses[1].id)},"form.outFieldType":function(s){s==="ready_for"?(this.form.outEntityTaskTypes=this.shotTaskTypes,this.form.outTaskTypeId=this.shotTaskTypes[1].id):s==="status"&&(this.setTaskTypes(this.form.entityType),this.form.outTaskTypeId=this.form.outEntityTaskTypes[1].id)}}};var _=function(){var t=this,e=t._self._c;return e("div",{class:{modal:!0,"is-active":t.active}},[e("div",{staticClass:"modal-background",on:{click:function(i){return t.$emit("cancel")}}}),e("div",{staticClass:"modal-content"},[e("div",{staticClass:"box"},[t.isEditing()?e("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("status_automations.edit_title"))+" ")]):e("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("status_automations.new_status_automation"))+" ")]),e("form",{on:{submit:function(i){i.preventDefault()}}},[e("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t("status_automations.entity_title")))]),t.isEditing()?e("span",[t._v(" "+t._s(t.form.entityType)+" ")]):e("combobox",{attrs:{label:t.$t("status_automations.fields.entity_type"),options:t.entityTypeOptions,"locale-key-prefix":"status_automations.entity_types."},on:{enter:t.confirmClicked},model:{value:t.form.entityType,callback:function(i){t.$set(t.form,"entityType",i)},expression:"form.entityType"}}),e("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t("status_automations.in_title")))]),e("div",{staticClass:"flexrow"},[e("combobox-task-type",{staticClass:"flexrow-item",attrs:{label:t.$t("status_automations.fields.in_task_type"),"task-type-list":t.form.inEntityTaskTypes},on:{enter:t.confirmClicked},model:{value:t.form.inTaskTypeId,callback:function(i){t.$set(t.form,"inTaskTypeId",i)},expression:"form.inTaskTypeId"}}),e("combobox-status",{staticClass:"flexrow-item",attrs:{label:t.$t("status_automations.fields.in_task_status"),"task-status-list":t.productionTaskStatuses},on:{enter:t.confirmClicked},model:{value:t.form.inTaskStatusId,callback:function(i){t.$set(t.form,"inTaskStatusId",i)},expression:"form.inTaskStatusId"}})],1),e("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t("status_automations.out_title")))]),e("div",{staticClass:"flexrow"},[!t.isEditing()&&t.form.entityType=="asset"?e("combobox",{staticClass:"flexrow-item margin-fix",attrs:{label:t.$t("status_automations.fields.out_field_type"),options:t.fieldTypeOptions,"locale-key-prefix":"status_automations.field_types."},on:{enter:t.confirmClicked},model:{value:t.form.outFieldType,callback:function(i){t.$set(t.form,"outFieldType",i)},expression:"form.outFieldType"}}):t._e(),t.isEditing()&&t.form.outFieldType=="ready_for"?e("span",{staticClass:"flexrow-item"},[t._v(" Ready For ")]):t._e(),e("combobox-task-type",{staticClass:"flexrow-item",attrs:{label:t.$t("status_automations.fields.out_task_type"),"task-type-list":t.form.outEntityTaskTypes,"open-top":!0},on:{enter:t.confirmClicked},model:{value:t.form.outTaskTypeId,callback:function(i){t.$set(t.form,"outTaskTypeId",i)},expression:"form.outTaskTypeId"}}),t.form.outFieldType=="status"?e("combobox-status",{staticClass:"flexrow-item",attrs:{label:t.$t("status_automations.fields.out_task_status"),"task-status-list":t.productionTaskStatuses,"open-top":!0},on:{enter:t.confirmClicked},model:{value:t.form.outTaskStatusId,callback:function(i){t.$set(t.form,"outTaskStatusId",i)},expression:"form.outTaskStatusId"}}):t._e()],1)],1),e("modal-footer",{attrs:{"error-text":t.$t("status_automations.create_error"),"is-error":t.isError},on:{confirm:t.confirmClicked,cancel:function(i){return t.$emit("cancel")}}})],1)])])},y=[],h=n(p,_,y,!1,null,"de0a7896",null,null);const k=h.exports;const E={name:"status-automations",components:{DeleteModal:f,EditStatusAutomationModal:k,ListPageHeader:T,StatusAutomationList:c},data(){return{modals:{edit:!1,del:!1},loading:{edit:!1,del:!1,list:!1},errors:{edit:!1,del:!1,list:!1},statusAutomationToDelete:null,statusAutomationToEdit:null}},computed:{...a(["statusAutomations"]),deleteText(){const s=this.statusAutomationToDelete;return s?this.$t("custom_actions.delete_text",{name:s.name}):""}},created(){this.loading.list=!0,this.errors.list=!1,this.loadStatusAutomations(s=>{this.loading.list=!1,s&&(this.errors.list=!0)})},methods:{...o(["deleteStatusAutomation","editStatusAutomation","loadTaskStatuses","loadStatusAutomations","newStatusAutomation"]),confirmEditStatusAutomation(s){let t="newStatusAutomation";this.statusAutomationToEdit&&this.statusAutomationToEdit.id&&(t="editStatusAutomation",s.id=this.statusAutomationToEdit.id),this.loading.edit=!0,this.errors.edit=!1,this[t](s).then(()=>{this.loading.edit=!1,this.modals.edit=!1}).catch(e=>{console.error(e),this.errors.edit=!0,this.loading.edit=!1})},confirmDeleteStatusAutomation(){this.loading.del=!0,this.errors.del=!1,this.deleteStatusAutomation(this.statusAutomationToDelete).then(()=>{this.loading.del=!1,this.modals.del=!1}).catch(s=>{console.error(s),this.errors.del=!0,this.loading.del=!1})},onNewClicked(){this.statusAutomationToEdit={},this.errors.edit=!1,this.modals.edit=!0},onEditClicked(s){this.statusAutomationToEdit=s,this.errors.edit=!1,this.modals.edit=!0},onDeleteClicked(s){this.statusAutomationToDelete=s,this.errors.del=!1,this.modals.del=!0}},watch:{$route(){this.handleModalsDisplay()}},metaInfo(){return{title:`${this.$t("status_automations.title")} - Kitsu`}}};var v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"status-automations page fixed-page"},[e("list-page-header",{attrs:{title:t.$t("status_automations.title"),"new-entry-label":t.$t("status_automations.new_status_automation")},on:{"new-clicked":t.onNewClicked}}),e("status-automation-list",{attrs:{entries:t.statusAutomations,"is-editable":!0,"is-loading":t.loading.list,"is-error":t.errors.list},on:{"edit-clicked":t.onEditClicked,"delete-clicked":t.onDeleteClicked}}),e("edit-status-automation-modal",{attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"status-automation-to-edit":t.statusAutomationToEdit},on:{cancel:function(i){t.modals.edit=!1},confirm:t.confirmEditStatusAutomation}}),e("delete-modal",{attrs:{active:t.modals.del,"is-loading":t.loading.del,"is-error":t.errors.del,text:t.deleteText,"error-text":t.$t("status_automations.delete_error")},on:{cancel:function(i){t.modals.del=!1},confirm:t.confirmDeleteStatusAutomation}})],1)},b=[],A=n(E,v,b,!1,null,"b7999009",null,null);const $=A.exports;export{$ as default};
//# sourceMappingURL=StatusAutomations-f9a94b3d.js.map
