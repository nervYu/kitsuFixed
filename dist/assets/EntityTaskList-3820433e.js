import{am as g,ax as k,an as T,G as h,b8 as c,f as y,bp as $,aA as C,y as f,T as x,bf as b,m as _,b as p,ak as M,n as u,aR as D,k as E,ba as m,bH as L,a as P}from"./index-d0b155bb.js";import{P as w}from"./PeopleNameCell-f77b3a1d.js";const X={data(){return{currentSection:"Casting",zoomLevel:1,entityNavOptions:[{label:"Casting",value:"casting"},{label:"Schedule",value:"schedule"},{label:"Preview Files",value:"preview-files"},{label:"Activity",value:"activity"},{label:"Timelog",value:"time-logs"}],zoomOptions:[{label:"Week",value:0},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3}]}},created(){},mounted(){},beforeDestroy(){},computed:{thumbnailPath(){return`/api/pictures/originals/preview-files/${this.currentEntity.preview_file_id}.png`},isPreview(){return this.currentEntity&&this.currentEntity.preview_file_id&&this.currentEntity.preview_file_id.length>0},currentTasks(){const s=this.currentAsset||this.currentShot||this.currentEdit||this.currentSequence||this.currentEpisode;return!s||!s.tasks?[]:s?s.tasks.map(t=>this.taskMap.get(t)).filter(t=>t).sort((t,e)=>{const a=this.getTaskTypePriority(t.task_type_id),n=this.getTaskTypePriority(e.task_type_id);return a-n}):[]},tasksStartDate(){return this.scheduleItems.length>0&&this.scheduleItems[0].children.length>0?g(this.scheduleItems[0].children).clone().add(-60,"days"):k(this.currentProduction.start_date)},tasksEndDate(){return this.scheduleItems.length>0&&this.scheduleItems[0].children.length>0?T(this.scheduleItems[0].children).clone().add(60,"days"):k(this.currentProduction.end_date)},scheduleItems(){let s=0;const t={avatar:!1,id:"root",name:"Tasks",color:"#888",priority:1,expanded:!0,loading:!1,children:[],editable:!1},e=h(),a=this.currentTasks.map(i=>{const l=i.estimation;let o=e.clone(),r;if(!i.start_date&&!i.real_start_date&&!i.due_date&&!i.end_date)return null;i.start_date?o=c(i.start_date):i.real_start_date&&(o=c(i.real_start_date)),i.due_date?r=c(i.due_date):i.end_date?r=c(i.end_date):i.estimation&&(r=o.clone().add(l,"days")),(!r||r.isBefore(o))&&(r=o.clone().add(1,"days")),l&&(s+=i.estimation);const v=this.taskTypeMap.get(i.task_type_id);return{...i,name:v.name,startDate:o,endDate:r,expanded:!1,loading:!1,man_days:l,editable:!1,unresizable:!1,parentElement:t,color:v.color,children:[]}}).filter(i=>i!==null);let n=h(),d=h().add(1,"days");return a.length>0&&(n=g(a),d=T(a)),Object.assign(t,{children:a,startDate:n,endDate:d,man_days:s}),[t]}},methods:{changeTab(s){this.selectedTab=s},onEditClicked(){this.modals.edit=!0},onTaskSelected(s){!this.currentTask||this.currentTask.id!==s.id?this.currentTask=s:this.currentTask=null}},watch:{currentSection(){this.$router.push({query:{section:this.currentSection}});const s=this.$refs["schedule-widget"];this.currentSection==="schedule"&&s&&s.scrollToToday()}}};const S={name:"entity-news",mixins:[y,$],components:{PeopleAvatar:C,Spinner:f,TaskTypeName:x,ValidationTag:b},data(){return{isLoading:!1,newsList:[]}},props:{entity:{type:Object,default:()=>{}}},mounted(){this.entity&&this.reset()},computed:{..._(["currentProduction","personMap","taskMap","taskTypeMap","taskStatusMap","timezone"])},methods:{...p(["getEntityNews"]),buildTaskTypeFromNews(s){return{...this.taskTypeMap.get(s.task_type_id),episode_id:s.episode_id}},getTaskType(s){const t=this.taskMap.get(s.task_id);return this.taskTypeMap.get(t.task_type_id)},hasRetakeValue(s){const t=this.taskStatusMap.get(s.task_status_id);return t?s.change&&t.is_retake:!1},hasDoneValue(s){const t=this.taskStatusMap.get(s.task_status_id);return t?s.change&&t.is_done:!1},formatTime(s){return M.tz(s,"UTC").tz(this.timezone).format("HH:mm")},personName(s){const t=this.personMap.get(s.author_id);return t?t.full_name:""},reset(){this.isLoading=!0,this.getEntityNews(this.entity.id).then(s=>{this.newsList=s.data,this.isLoading=!1}).catch(s=>{console.error(s),this.newsList=[],this.isLoading=!1})}},watch:{entity(){this.entity&&this.reset()}}};var z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt1 news flexcolumn"},[t.isLoading?e("div",{staticClass:"has-text-centered"},[e("spinner")],1):t.newsList.length>0?e("div",{staticClass:"news"},[e("div",{staticClass:"timeline"},t._l(t.newsList,function(a){return e("div",{key:"news-"+a.id},[e("div",{staticClass:"news-line timeline-entry flexrow"},[e("span",{class:{dot:!0,red:t.hasRetakeValue(a),green:t.hasDoneValue(a)}}),e("span",{staticClass:"date flexrow-item"},[t._v(" "+t._s(t.formatFullDate(a.created_at))+" ")]),e("div",{staticClass:"flexrow-item task-type-wrapper"},[e("task-type-name",{staticClass:"task-type-name",attrs:{"task-type":t.buildTaskTypeFromNews(a),"production-id":t.currentProduction.id,"is-static":!0}})],1),e("div",{staticClass:"flexrow-item validation-wrapper"},[e("validation-tag",{staticClass:"validation-tag",attrs:{task:t.taskMap.get(a.task_id),"is-static":!0,thin:!a.change}})],1),e("div",{staticClass:"flexrow-item comment-content"},[e("div",[e("div",{staticClass:"news-info flexrow"},[t.personMap.get(a.author_id)?e("people-avatar",{staticClass:"flexrow-item",attrs:{person:t.personMap.get(a.author_id),size:30,"font-size":14,"is-link":!1}}):t._e(),e("span",{staticClass:"explaination flexrow-item"},[e("span",{staticClass:"strong person-name"},[t._v(" "+t._s(t.personName(a))+" ")])])],1)])])])])}),0)]):e("div",[t._v(" "+t._s(t.$t("entities.news.no_news"))+" ")])])},N=[],A=u(S,z,N,!1,null,"134d5f57",null,null);const Y=A.exports;const F={name:"entity-preview-files",components:{DownloadIcon:D,EntityThumbnail:E,PeopleNameCell:w,Spinner:f,TaskTypeName:m},data(){return{isLoading:!1,previewFiles:[]}},props:{entity:{type:Object,default:()=>{}}},mounted(){this.entity&&this.reset()},computed:{..._(["currentProduction","personMap","taskMap","taskTypeMap"])},methods:{...p(["getEntityPreviewFiles"]),getTaskType(s){const t=this.taskMap.get(s.task_id);return this.taskTypeMap.get(t.task_type_id)},getDownloadPath(s){return`/api/${this.isMovie?"movies":"pictures"}/originals/preview-files/${s}/download`},renderFileSize:L,reset(){this.isLoading=!0,this.getEntityPreviewFiles(this.entity.id).then(s=>{this.previewFiles=s,this.isLoading=!1}).catch(s=>{console.error(s),this.previewFiles=[],this.isLoading=!1})}},watch:{entity(){this.entity&&this.reset()}}};var B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt1 flexcolumn wrapper preview-files"},[t.isLoading?e("div",{staticClass:"has-text-centered"},[e("spinner")],1):t.previewFiles.length>0?e("div",[e("table",{staticClass:"datatable"},[e("thead",{staticClass:"datatable-head"},[e("tr",{staticClass:"datatable-row-header"},[e("th",{staticClass:"thumbnail"}),e("th",{staticClass:"type"},[t._v(" "+t._s(t.$t("entities.preview_files.task_type"))+" ")]),e("th",{staticClass:"revision"},[t._v(" "+t._s(t.$t("entities.preview_files.revision"))+" ")]),e("th",{staticClass:"original-name"},[t._v(" "+t._s(t.$t("entities.preview_files.original_file_name"))+" ")]),e("th",{staticClass:"extension"},[t._v(" "+t._s(t.$t("entities.preview_files.extension"))+" ")]),e("th",{staticClass:"size"},[t._v(" "+t._s(t.$t("entities.preview_files.size"))+" ")]),e("th",{staticClass:"status"},[t._v(" "+t._s(t.$t("entities.preview_files.status"))+" ")]),e("th",{staticClass:"uploader"},[t._v(" "+t._s(t.$t("entities.preview_files.uploader"))+" ")]),e("th",{staticClass:"person"}),e("th",{staticClass:"end-cell"})])])]),e("table",{staticClass:"datatable",staticStyle:{overflow:"auto"}},[e("tbody",{staticClass:"datatable-body"},t._l(t.previewFiles,function(a){return e("tr",{key:a.id,staticClass:"datatable-row"},[e("td",{staticClass:"thumbnail"},[e("entity-thumbnail",{staticClass:"preview-thumbnail",attrs:{"preview-file-id":a.id,"empty-width":60,width:60}})],1),e("task-type-name",{staticClass:"type",attrs:{"task-type":t.getTaskType(a),"production-id":t.currentProduction.id}}),e("td",{staticClass:"revision"},[t._v(" "+t._s(a.revision)+" ")]),e("td",{staticClass:"original-name"},[t._v(" "+t._s(a.original_name)+" ")]),e("td",{staticClass:"extension"},[t._v(" "+t._s(a.extension)+" ")]),e("td",{staticClass:"size"},[t._v(" "+t._s(t.renderFileSize(a.file_size))+" ")]),e("td",{staticClass:"status"},[t._v(" "+t._s(a.validation_status)+" ")]),e("people-name-cell",{staticClass:"person",attrs:{person:t.personMap.get(a.person_id)}}),e("td",{staticClass:"download"},[e("a",{staticClass:"button flexrow-item",attrs:{href:t.getDownloadPath(a.id),title:t.$t("playlists.actions.download_file")}},[e("download-icon",{staticClass:"icon is-small"})],1)])],1)}),0)])]):e("div",[t._v(" "+t._s(t.$t("entities.preview_files.no_preview_files"))+" ")])])},R=[],V=u(F,B,R,!1,null,"29cc30d8",null,null);const Z=V.exports;const O={name:"entity-time-logs",mixins:[y],components:{PeopleNameCell:w,Spinner:f,TaskTypeName:m},props:{entity:{type:Object,default:()=>{}}},data(){return{logs:[],isLoading:!1}},mounted(){this.entity&&this.reset()},computed:{..._(["currentProduction","personMap","taskMap","taskTypeMap"])},methods:{...p(["getEntityTimeLogs"]),getTaskType(s){const t=this.taskMap.get(s.task_id);return this.taskTypeMap.get(t.task_type_id)},reset(){this.isLoading=!0,this.getEntityTimeLogs(this.entity.id).then(s=>{this.logs=s,this.isLoading=!1}).catch(s=>{console.error(s),this.logs=[],this.isLoading=!1})}},watch:{entity(){this.entity&&this.reset()}}};var U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt1 wrapper time-logs"},[t.isLoading?e("div",{staticClass:"has-text-centered"},[e("spinner")],1):t.logs.length>0?e("div",[e("table",{staticClass:"datatable"},[e("thead",{staticClass:"datatable-head"},[e("tr",{staticClass:"datatable-row-header"},[e("th",{staticClass:"date"},[t._v(" "+t._s(t.$t("main.date"))+" ")]),e("th",{staticClass:"person"},[t._v(" "+t._s(t.$t("main.person"))+" ")]),e("th",{staticClass:"type"},[t._v(" "+t._s(t.$t("entities.preview_files.task_type"))+" ")]),e("th",{staticClass:"duration"},[t._v(" "+t._s(t.$t("tasks.fields.duration"))+" ")]),e("th",{staticClass:"end-cell"})])])]),e("table",{staticClass:"datatable"},[e("tbody",{staticClass:"datatable-body"},t._l(t.logs,function(a){return e("tr",{key:a.id,staticClass:"datatable-row"},[e("td",{staticClass:"date"},[t._v(" "+t._s(t.formatSimpleDate(a.date))+" ")]),e("people-name-cell",{staticClass:"person",attrs:{person:t.personMap.get(a.person_id)}}),e("task-type-name",{staticClass:"type",attrs:{"task-type":t.getTaskType(a),"production-id":t.currentProduction.id}}),e("td",{staticClass:"duration"},[t._v(" "+t._s(t.formatDuration(a.duration))+" ")]),e("td",{staticClass:"end-cell"})],1)}),0)])]):e("div",[t._v(" "+t._s(t.$t("entities.logs.no_logs"))+" ")])])},j=[],H=u(O,U,j,!1,null,"2f7cdf91",null,null);const I=H.exports;const W={name:"entity-task-list",mixins:[y],components:{TableInfo:P,TaskTypeCell:m,PeopleAvatar:C,ValidationTag:b},props:{entries:{type:Array,default:()=>[]},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1}},data(){return{currentTask:null}},computed:{..._(["currentProduction","getTaskTypePriority","isCurrentUserClient","isCurrentUserVendor","personMap","taskMap","taskTypeMap"]),sortedEntries(){return[...this.entries].sort((s,t)=>{const e=this.getTask(s),a=this.getTask(t);if(!e)return!1;const n=this.taskTypeMap.get(e.task_type_id),d=this.taskTypeMap.get(a.task_type_id),i=this.getTaskTypePriority(e.task_type_id),l=this.getTaskTypePriority(a.task_type_id);return i===l?n.name.localeCompare(d.name):i-l})}},methods:{...p([]),onBodyScroll(s,t){this.$refs.headerWrapper.style.left=`-${t.scrollLeft}px`},getTask(s){return typeof s=="string"?this.taskMap.get(s):s},getTaskStartDate(s){const t=this.getTask(s);return t&&t.start_date?t.start_date.substring(0,10):""},getTaskDueDate(s){const t=this.getTask(s);return t&&t.due_date?t.due_date.substring(0,10):""},getTaskEstimation(s){const t=this.getTask(s);return t&&t.estimation?this.formatDuration(t.estimation):""},getTaskDuration(s){const t=this.getTask(s);return t&&t.duration?this.formatDuration(t.duration):""},getTaskType(s){const t=this.getTask(s);return t?this.taskTypeMap.get(t.task_type_id):null},getAssignees(s){const t=this.getTask(s);return t?t.assignees:[]},selectTask(s){this.currentTask=s,this.$emit("task-selected",s)}}};var q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"data-list"},[e("div",[e("table",{ref:"headerWrapper",staticClass:"datatable"},[e("thead",{staticClass:"datatable-head"},[e("tr",{staticClass:"datatable-row-header"},[e("th",{staticClass:"type"},[t._v(" "+t._s(t.$t("tasks.fields.task_type"))+" ")]),e("th",{staticClass:"status"},[t._v(" "+t._s(t.$t("tasks.fields.task_status"))+" ")]),e("th",{staticClass:"estimation"},[t._v(" "+t._s(t.$t("tasks.fields.estimation").substring(0,3))+". ")]),e("th",{staticClass:"estimation"},[t._v(" "+t._s(t.$t("tasks.fields.duration").substring(0,3))+". ")]),e("th",{staticClass:"startdate"},[t._v(" "+t._s(t.$t("tasks.fields.start_date_short"))+" ")]),e("th",{staticClass:"duedate"},[t._v(" "+t._s(t.$t("tasks.fields.due_date"))+" ")]),e("th",{staticClass:"assignees"},[t._v(" "+t._s(t.$t("tasks.fields.assignees"))+" ")]),e("th",{staticClass:"end-cell"})])])])]),e("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),t.entries.length>0?e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onBodyScroll,expression:"onBodyScroll"}],staticClass:"task-list-body"},[e("table",{staticClass:"datatable"},[e("tbody",{staticClass:"datatable-body"},t._l(t.sortedEntries,function(a){return e("tr",{key:typeof a=="string"?a:a.id,class:{selected:t.currentTask&&t.currentTask.id===a,"datatable-row":!0,"datatable-row--selectable":!0},on:{click:function(n){t.selectTask(t.getTask(a))}}},[t.getTaskType(a)?e("task-type-cell",{staticClass:"type",attrs:{"task-type":t.getTaskType(a),"production-id":t.currentProduction.id}}):t._e(),e("td",{staticClass:"status"},[t.getTask(a)?e("validation-tag",{attrs:{task:t.getTask(a),"is-static":!0}}):t._e()],1),e("td",{staticClass:"estimation"},[t._v(" "+t._s(t.getTaskEstimation(a))+" ")]),e("td",{staticClass:"estimation"},[t._v(" "+t._s(t.getTaskDuration(a))+" ")]),e("td",{staticClass:"startdate"},[t._v(" "+t._s(t.getTaskStartDate(a))+" ")]),e("td",{staticClass:"duedate"},[t._v(" "+t._s(t.getTaskDueDate(a))+" ")]),e("td",{staticClass:"assignees"},[!t.isCurrentUserClient&&!t.isCurrentUserVendor?e("div",{staticClass:"flexrow"},t._l(t.getAssignees(a),function(n){return e("div",{key:n,staticClass:"avatar-wrapper"},[e("people-avatar",{key:a+"-"+n,staticClass:"person-avatar flexrow-item",attrs:{person:t.personMap.get(n),size:30,"font-size":15}})],1)}),0):t._e()]),e("td",{staticClass:"end-cell"})],1)}),0)])]):t._e()],1)},G=[],J=u(W,q,G,!1,null,"eb8ea32e",null,null);const tt=J.exports;export{Y as E,Z as a,tt as b,I as c,X as e};
//# sourceMappingURL=EntityTaskList-3820433e.js.map
