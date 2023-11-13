import{R as o,a as l,m as r,b as n,n as i,c,M as m,d as p,D as f}from"./index-d0b155bb.js";import{L as _}from"./ListPageHeader-f13bb197.js";import{C as u}from"./ColorField-191a53d4.js";const h={name:"departments-list",props:["entries","isLoading","isError"],data(){return{}},components:{RowActionsCell:o,TableInfo:l},computed:{...r([])},methods:{...n([])}};var v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"data-list"},[t("div",{staticClass:"datatable-wrapper"},[t("table",{staticClass:"datatable"},[t("thead",{staticClass:"datatable-head"},[t("tr",[t("th",{staticClass:"name",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("departments.fields.name"))+" ")]),t("th",{attrs:{scope:"col"}},[e._v(e._s(e.$t("departments.fields.color")))]),t("th",{staticClass:"actions",attrs:{scope:"col"}})])]),e.entries.length>0?t("tbody",{staticClass:"datatable-body"},e._l(e.entries,function(a){return t("tr",{key:a.id,staticClass:"datatable-row"},[t("td",{staticClass:"name"},[e._v(" "+e._s(a.name)+" ")]),t("td",{staticClass:"color"},[t("div",[t("span",{style:{background:a.color}})])]),t("row-actions-cell",{attrs:{"entry-id":a.id},on:{"edit-clicked":function(d){return e.$emit("edit-clicked",a)},"delete-clicked":function(d){return e.$emit("delete-clicked",a)}}})],1)}),0):e._e()])]),t("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),t("p",{staticClass:"has-text-centered nb-asset-types"},[e._v(" "+e._s(e.entries.length)+" "+e._s(e.$tc("departments.number",e.entries.length))+" ")])],1)},g=[],$=i(h,v,g,!1,null,"f86301e3",null,null);const C=$.exports;const D={name:"edit-departments-modal",mixins:[c],components:{ColorField:u,ModalFooter:m,TextField:p},props:{active:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},departmentToEdit:{type:Object,default:()=>{}}},data(){return{form:{name:"",color:"",id:null}}},computed:{...r(["assetTypes","assetTypeStatusOptions"])},methods:{...n([]),runConfirmation(){this.$emit("confirm",this.form)}},watch:{active(){this.active&&setTimeout(()=>{this.$refs.nameField.focus()},100)},departmentToEdit(){this.departmentToEdit&&(this.form.name=this.departmentToEdit.name,this.form.color=this.departmentToEdit.color,this.form.id=this.departmentToEdit.id)}}};var T=function(){var e=this,t=e._self._c;return t("div",{class:{modal:!0,"is-active":e.active}},[t("div",{staticClass:"modal-background",on:{click:function(a){return e.$emit("cancel")}}}),t("div",{staticClass:"modal-content"},[t("div",{staticClass:"box"},[e.departmentToEdit&&e.departmentToEdit.id?t("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("departments.edit_title"))+" "+e._s(e.departmentToEdit.name)+" ")]):t("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("departments.new_departments"))+" ")]),t("form",{on:{submit:function(a){a.preventDefault()}}},[t("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:e.$t("departments.fields.name"),maxlength:30},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),t("color-field",{ref:"colorField",attrs:{label:e.$t("departments.fields.color")},model:{value:e.form.color,callback:function(a){e.$set(e.form,"color",a)},expression:"form.color"}})],1),t("modal-footer",{attrs:{"error-text":e.$t("departments.create_error"),"is-error":e.isError,"is-loading":e.isLoading},on:{confirm:e.runConfirmation,cancel:function(a){return e.$emit("cancel")}}})],1)])])},E=[],b=i(D,T,E,!1,null,"cef9cfc4",null,null);const x=b.exports;const k={name:"production-departments",components:{DeleteModal:f,DepartmentList:C,EditDepartmentsModal:x,ListPageHeader:_},props:{},data(){return{errors:{departments:!1,edit:!1,del:!1},loading:{departments:!1,edit:!1,del:!1},modals:{del:!1,edit:!1},departmentToEdit:null,departmentToDelete:null}},computed:{...r(["departments"]),deleteText(){return this.departmentToDelete?this.$t("departments.delete_text",{name:this.departmentToDelete.name}):""}},mounted(){this.loading.departments=!0,this.errors.departments=!1,this.loadDepartments().then(()=>{this.loading.departments=!1,this.errors.departments=!1}).catch(()=>{this.loading.departments=!1,this.errors.departments=!0})},methods:{...n(["deleteDepartment","loadDepartments","newDepartement"]),onNewClicked(){this.departmentToEdit={name:"",color:"#999999"},this.modals.edit=!0},onEditClicked(s){this.departmentToEdit=s,this.modals.edit=!0},confirmEditDepartment(s){let e="newDepartement";this.departmentToEdit&&this.departmentToEdit.id&&(e="editDepartement",s.id=this.departmentToEdit.id),this.loading.edit=!0,this.errors.edit=!1,this.$store.dispatch(e,s).then(()=>{this.loading.edit=!1,this.modals.edit=!1}).catch(()=>{this.loading.edit=!1,this.errors.edit=!0})},onDeleteClicked(s){this.departmentToDelete=s,this.modals.del=!0},async confirmDeleteDepartment(){this.loading.del=!0,this.errors.del=!1;try{await this.deleteDepartment(this.departmentToDelete),this.loading.del=!1,this.modals.del=!1}catch{this.loading.del=!1,this.errors.del=!0}}}};var y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"departments page fixed-page"},[t("list-page-header",{attrs:{title:e.$t("departments.title"),"new-entry-label":e.$t("departments.new_departments")},on:{"new-clicked":e.onNewClicked}}),t("department-list",{attrs:{entries:e.departments,"is-loading":e.loading.departments,"is-error":e.errors.departments},on:{"edit-clicked":e.onEditClicked,"delete-clicked":e.onDeleteClicked}}),t("edit-departments-modal",{attrs:{active:e.modals.edit,"is-loading":e.loading.edit,"is-error":e.errors.edit,"department-to-edit":e.departmentToEdit},on:{cancel:function(a){e.modals.edit=!1},confirm:e.confirmEditDepartment}}),t("delete-modal",{attrs:{active:e.modals.del,"is-loading":e.loading.del,"is-error":e.errors.del,text:e.deleteText,"error-text":e.$t("departments.delete_error")},on:{cancel:function(a){e.modals.del=!1},confirm:e.confirmDeleteDepartment}})],1)},w=[],F=i(k,y,w,!1,null,"2d4ff19d",null,null);const B=F.exports;export{B as default};
//# sourceMappingURL=Departments-c40d3c5c.js.map
