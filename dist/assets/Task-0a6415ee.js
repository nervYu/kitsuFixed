import{f as l,bw as m,bx as h,by as c,i as k,bz as u,D as v,bA as p,k as w,bB as f,P as C,aA as _,bC as P,y as g,bD as y,T,bf as x,bE as d,m as E,bF as b,b as I,n as $}from"./index-d0b155bb.js";const M={name:"task",mixins:[l,m],components:{AddComment:h,AddPreviewModal:c,ComboboxStyled:k,Comment:u,DeleteModal:v,EditCommentModal:p,EntityThumbnail:w,ImageIcon:f,PageSubtitle:C,PeopleAvatar:_,PreviewPlayer:P,Spinner:g,SubscribeButton:y,TaskTypeName:T,ValidationTag:x},data(){return{previewForms:[],currentTime:0,selectedTab:"validation",taskLoading:{isLoading:!0,isError:!1},modals:{addPreview:!1,addExtraPreview:!1,deleteExtraPreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},loading:{addComment:!1,addPreview:!1,addExtraPreview:!1,setPreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},errors:{addComment:!1,addCommentMaxRetakes:!1,addPreview:!1,addExtraPreview:!1,setPreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},addPreviewFormData:null,addExtraPreviewFormData:null,task:null,taskComments:[],taskPreviews:[],commentToEdit:null,selectedPreviewId:null}},created(){this.clearSelectedTasks()},mounted(){this.loadTaskData().then(()=>{this.reset()}),this.$nextTick(()=>{this.$refs["task-columns"]&&(this.$refs["task-columns"].scrollTop=100,window.scrollTo(0,0))})},beforeDestroy(){if(this.$refs["add-comment"]){const t=this.getTask(),e=`${this.$refs["add-comment"].text}`,s=d.getTaskDraft(t.id);e!==s&&!this.$options.drafted&&d.setTaskDraft(t.id,e)}},computed:{...E(["currentEpisode","currentProduction","displayedShots","displayedAssets","getTaskComments","getTaskPreviews","getTaskComment","isCurrentUserAdmin","isCurrentUserArtist","isCurrentUserSupervisor","isCurrentUserClient","isCurrentUserManager","isSingleEpisode","isTVShow","personMap","productionMap","route","taskEntityPreviews","taskStatus","taskStatusForCurrentUser","taskMap","taskTypeMap","user"]),previewOptions(){return this.taskPreviews.map(t=>({label:`v${t.revision}`,value:t.id}))},isPreviewButtonVisible(){return this.isCurrentUserManager&&this.task&&this.task.entity&&this.task.entity.preview_file_id!==this.currentPreviewId&&["png","mp4"].includes(this.extension)},isMovie(){return this.extension==="mp4"},extension(){return this.currentPreview?this.currentPreview.extension:""},currentPreviewId(){return this.currentPreview?this.currentPreview.id:""},currentPreview(){if(this.isPreviews){let t=this.taskPreviews[0];const e=this.route.params.preview_id;return this.selectedPreviewId&&(t=this.taskPreviews.find(s=>s.id===e)),t}else return null},currentFps(){return this.productionMap.get(this.task.project_id).fps||"25"},currentRevision(){return this.currentPreview?this.currentPreview.revision:0},isCommentingAllowed(){return this.isCurrentUserManager||this.isCurrentUserClient||this.task.assignees.find(t=>t===this.user.id)},taskTypeBorder(){let t="transparent";return this.task&&(t=this.task.task_type_color),{"border-left":`4px solid ${t}`}},deleteTaskPath(){return this.taskPath(this.task,"task-delete")},isPreviews(){return this.taskPreviews&&this.taskPreviews.length>0},taskEntityPath(){if(this.task){const t=this.currentEpisode?this.currentEpisode.id:this.$route.params.episode_id;return b(this.task,t)}else return{name:"open-productions"}},lastFivePreviews(){return this.taskPreviews?this.taskPreviews.slice(0,5):[]},entityList(){return this.displayedShots.find(e=>e.id===this.task.entity_id)?this.displayedShots:this.displayedAssets},previousEntity(){if(this.task){const t=this.task.task_type_id,e=this.entityList.findIndex(a=>a.id===this.task.entity_id);let s=!1,i=e-1;i<0&&(i=this.entityList.length-1);let r=null;for(;!r;)if(this.entityList[i]?r=this.entityList[i].tasks.find(n=>{const o=this.taskMap.get(r);return o?o.task_type_id===t:!1}):r=this.task.id,!r&&(i--,i<0)){if(i=this.entityList.length,s)return null;s=!0}return this.taskPath({id:r})}else return{name:"open-productions"}},nextEntity(){if(this.task){const t=this.task.task_type_id;let e=!1,i=this.entityList.findIndex(a=>a.id===this.task.entity_id)+1;i>=this.entityList.length&&(i=0);let r=null;for(;!r;)if(this.entityList[i]?r=this.entityList[i].tasks.find(n=>{const o=this.taskMap.get(r);return o?o.task_type_id===t:!1}):r=this.task.id,!r&&(i++,i>=this.entityList.length)){if(i=0,e)return null;e=!0}return this.taskPath({id:r})}else return{name:"open-productions"}},title(){if(this.task){const t=this.task.entity_type_name;let e=this.task.full_entity_name||this.task.entity_name;return this.isTVShow&&t==="Shot"&&(e=e.split("/").splice(1).join("/")),this.isTVShow&&t==="Episode"&&(e=this.task.entity_name),`${e}`}else return"Loading..."},windowTitle(){if(this.task){const t=this.task.task_type_name;return`${this.title} / ${t}`}else return"Loading..."},deleteText(){if(this.task){const t=this.taskTypeMap.get(this.task.task_type_id);return this.$t("main.delete_text",{name:`${this.task.entity_name} / ${t.name}`})}else return""},isAssigned(){return this.task?this.task.assignees.some(t=>t===this.user.id):!1},taskType(){return this.task?this.taskTypeMap.get(this.task.task_type_id):null},currentTeam(){return this.currentProduction.team.map(t=>this.personMap.get(t))},pinnedCount(){return this.taskComments.filter(t=>t.pinned).length}},methods:{...I(["addAttachmentToComment","ackComment","addCommentPreview","addCommentExtraPreview","commentTask","commentTaskWithPreview","changeCommentPreview","clearSelectedTasks","deleteAttachment","deleteTask","deleteTaskPreview","deleteTaskComment","editTaskComment","loadEpisodes","loadTask","loadShots","loadAssets","loadPreviewFileFormData","loadTaskComments","refreshComment","refreshPreview","pinComment","subscribeToTask","setCurrentEpisode","unsubscribeFromTask","updatePreviewAnnotation"]),loadTaskData(){const t=this.getCurrentTask();if(t){const e=this.route.params.task_id;return this.task=t,this.loadTaskComments({taskId:e,entityId:t.entity_id}).then(()=>(this.reset(),Promise.resolve())).catch(s=>{console.error(s),this.taskLoading.isError=!0})}else return this.taskLoading={isLoading:!0,isError:!1},this.loadTask({taskId:this.route.params.task_id}).then(e=>{let s=i=>{this.loadAssets().then(i)};e.entity_type_name==="Shot"&&(s=i=>{this.loadEpisodes().then(()=>{this.isTVShow&&this.setCurrentEpisode(e.episode.id),this.loadShots(i)}).catch(i)}),s(()=>(this.task=e,this.loadTaskComments({taskId:e.id,entityId:e.entity_id}).then(()=>(this.reset(),this.taskLoading={isLoading:!1,isError:!1},Promise.resolve())).catch(i=>{console.error(i),this.taskLoading={isLoading:!1,isError:!0}})))})},getCurrentTask(){return this.taskMap.get(this.route.params.task_id)},getCurrentComment(){if(this.route.params.comment_id)return this.getTaskComment(this.route.params.task_id,this.route.params.comment_id)},getCurrentTaskComments(){return this.getTaskComments(this.route.params.task_id)},getCurrentTaskPreviews(){return this.getTaskPreviews(this.route.params.task_id)},addComment(t,e,s,i){const r={taskId:this.task.id,taskStatusId:i,comment:t,checklist:s,attachment:e};let a="commentTask";this.previewForms.length>0&&(a="commentTaskWithPreview"),this.loading.addComment=!0,this.errors.addComment=!1,this.errors.addCommentMaxRetakes=!1,this.$store.dispatch(a,r).then(()=>{d.clearTaskDraft(this.task.id),this.reset(),this.previewForms=[],this.loading.addComment=!1}).catch(n=>{console.error(n),this.errors.addComment=!0,this.loading.addComment=!1;const o=n.response&&n.response.body.message&&n.response.body.message.indexOf("retake")>0;this.errors.addComment=!o,this.errors.addCommentMaxRetakes=o})},reset(){this.resetModals(),this.resetPreview(),this.taskComments=this.getCurrentTaskComments(),this.taskPreviews=this.getCurrentTaskPreviews(),this.task=this.getCurrentTask(),this.resetDraft(),setTimeout(()=>{this.$route.params.preview_id&&(this.selectedPreviewId=this.$route.params.preview_id)},1e3)},selectFile(t){this.loadPreviewFileFormData(t),this.previewForms=this.previewForms.concat(t)},clearPreviewFiles(){this.previewForms=[]},isHighlighted(t){return t.preview&&t.preview.id===this.currentPreviewId},createExtraPreview(){const t=this.taskPreviews,e=t.length>0?t[0]:null;this.errors.addExtraPreview=!1,this.loading.addExtraPreview=!0;const s=this.getCurrentTaskComments().find(i=>i.previews.findIndex(r=>r.id===e.id)>=0);this.addCommentExtraPreview({taskId:this.task.id,previewId:this.currentPreview.id,commentId:s.id}).then(()=>{this.loading.addExtraPreview=!1,this.modals.addExtraPreview=!1,this.$refs["add-extra-preview-modal"].reset(),setTimeout(()=>{this.$refs["preview-player"].displayLast()},0)}).catch(i=>{console.error(i),this.errors.addExtraPreview=!0,this.loading.addExtraPreview=!1})},resetPreview(t=!0){const e=this.taskPreviews||[],s=e.length>0?e[0]:null;this.taskComments=this.getCurrentTaskComments(),this.taskPreviews=this.getCurrentTaskPreviews(),s&&t&&this.$router.push(this.previewPath(s.id))},setPreview(){this.loading.setPreview=!0,this.errors.setPreview=!1,this.$store.dispatch("setPreview",{taskId:this.task.id,entityId:this.task.entity.id,previewId:this.currentPreviewId}).then(()=>{this.loading.setPreview=!1}).catch(t=>{console.error(t),this.errors.setPreview=!0})},saveComment(t,e){this.editTaskComment({taskId:this.task.id,comment:t,checklist:e})},confirmDeleteTaskComment(){this.loading.deleteComment=!0,this.errors.deleteComment=!1;const t=this.commentToEdit.id;this.deleteTaskComment({taskId:this.task.id,commentId:t}).then(()=>{this.loading.deleteComment=!1,this.reset(),this.isPreviews&&this.resetPreview(),this.modals.deleteComment=!1}).catch(e=>{console.error(e),this.loading.deleteComment=!1,this.errors.deleteComment=!0})},confirmDeleteTaskPreview(){this.loading.deleteExtraPreview=!0,this.errors.deleteExtraPreview=!1;const t=this.currentPreviewId,e=this.getCurrentTaskComments().find(s=>s.previews.findIndex(i=>i.id===t)>=0);this.$refs["preview-player"].displayFirst(),this.deleteTaskPreview({taskId:this.task.id,commentId:e.id,previewId:this.currentExtraPreviewId}).then(()=>{this.loading.deleteExtraPreview=!1,this.resetPreview(),this.hideRemoveExtraPreviewModal()}).catch(s=>{console.error(s),this.loading.deleteExtraPreview=!1,this.errors.deleteExtraPreview=!0})},onPreviewAdded(t){const e=t.task_id,s=t.comment_id,i=t.preview_file_id,r=t.revision,a=t.extension,n=this.$store.getters.getTaskComment(e,s);this.task&&n&&(n.previews.length===0||n.previews[0].id!==i)&&e===this.task.id&&(this.$store.commit("ADD_PREVIEW_END",{preview:{id:i,revision:r,extension:a},taskId:e,commentId:s,comment:n}),this.resetPreview())},toggleSubscribe(){this.task&&!this.isAssigned&&(this.task.is_subscribed?this.unsubscribeFromTask(this.task.id):this.subscribeToTask(this.task.id))},taskPath(t,e="task"){t?(t.project_id=this.task.project_id,t.episode_id=this.task.episode_id):t=this.task;let s={name:"open-productions"};return t&&(s={name:e,params:{production_id:t.project_id,task_id:t.id}},this.isTVShow&&this.currentEpisode&&(s.name=`episode-${e}`,s.params.episode_id=t.episode_id||this.currentEpisode.id)),s},previewPath(t){const e=this.taskPath(this.task,"task-preview");if(this.isTVShow){const s=this.taskTypeMap.get(this.task.task_type_id);e.name="episode-task-preview",s.for_entity==="Episode"&&(e.name="episode-episode-task-preview")}return e.params&&(e.params.preview_id=t),e},onAnnotationChanged({preview:t,additions:e,deletions:s,updates:i}){const r=this.task.id;this.updatePreviewAnnotation({taskId:r,preview:t,additions:e,deletions:s,updates:i})},onAddExtraPreviewClicked(){this.modals.addExtraPreview=!0},onRemoveExtraPreviewClicked(t){this.showRemoveExtraPreviewModal(t)},hideExtraPreviewModal(){this.modals.addExtraPreview=!1},showRemoveExtraPreviewModal(t){this.currentExtraPreviewId=t.id,this.modals.deleteExtraPreview=!0},hideRemoveExtraPreviewModal(){this.modals.deleteExtraPreview=!1},onAddPreviewClicked(){this.modals.addPreview=!0},closeAddPreviewModal(){this.modals.addPreview=!1},onDuplicateComment(t){this.$refs["add-comment"].setValue(t)},onPinComment(t){this.pinComment(t)},onEditComment(t){this.commentToEdit=t,this.modals.editComment=!0},onDeleteComment(t){this.commentToEdit=t,this.modals.deleteComment=!0},onCancelEditComment(t){this.modals.editComment=!1},onCancelDeleteComment(t){this.modals.deleteComment=!1},onTimeUpdated(t){this.currentTime=t},onPreviewFormRemoved(t){this.previewForms=this.previewForms.filter(e=>e!==t)},changeCurrentPreview(t){this.$router.push(this.previewPath(t.id))},onRemoteAcknowledge(t,e){if(this.task){const s=this.taskComments.find(r=>r.id===t.comment_id),i=this.personMap.get(t.person_id);s&&i&&(this.user.id===i.id?(e==="ack"&&!s.acknowledgements.includes(i.id)||e==="unack"&&s.acknowledgements.includes(i.id))&&this.$store.commit("ACK_COMMENT",{comment:s,user:i}):this.$store.commit("ACK_COMMENT",{comment:s,user:i}))}},isStatusChange(t){const e=this.taskComments,s=e[t];return t===e.length-1||s.task_status_id!==e[t+1].task_status_id},timeCodeClicked({versionRevision:t,minutes:e,seconds:s,milliseconds:i,frame:r}){this.changeCurrentPreview(this.taskPreviews.find(a=>a.revision===parseInt(t))),setTimeout(()=>{this.$refs["preview-player"].setCurrentFrame(r),this.$refs["preview-player"].focus()},20)},async extractAnnotationSnapshots(){this.$refs["add-comment"].showAnnotationLoading();const t=await this.$refs["preview-player"].extractAnnotationSnapshots();return this.$refs["add-comment"].setAnnotationSnapshots(t),this.$refs["add-comment"].hideAnnotationLoading(),t},isPreviewPlayerReadOnly(){if(this.task){if(this.isCurrentUserManager||this.isCurrentUserClient)return!1;if(this.isCurrentUserSupervisor){if(this.user.departments.length===0)return!1;{const t=this.taskTypeMap.get(this.task.task_type_id);return!(t.department_id&&this.user.departments.includes(t.department_id))}}}return!0}},watch:{$route(){this.$route.params.task_id!==this.task.id&&this.loadTaskData()},selectedPreviewId(){this.task&&this.$router.push(this.previewPath(this.selectedPreviewId))}},socket:{events:{"preview-file:add-file"(t){this.onPreviewAdded(t)},"comment:acknowledge"(t){this.onRemoteAcknowledge(t,"ack")},"comment:unacknowledge"(t){this.onRemoteAcknowledge(t,"unack")},"preview-file:update"(t){const e=this.taskComments.find(s=>s.previews&&s.previews.length>0&&s.previews[0].id===t.preview_file_id);e&&this.task&&this.refreshPreview({taskId:this.task.id,previewId:t.preview_file_id}).then(s=>{e.previews[0].validation_status=s.validation_status})},"comment:new"(t){setTimeout(()=>{this.getCurrentTaskComments().length!==this.taskComments.length&&(this.taskComments=this.getCurrentTaskComments(),this.taskPreviews=this.getCurrentTaskPreviews())},1e3)},"comment:reply"(t){if(this.task){const e=this.taskComments.find(s=>s.id===t.comment_id);e&&(e.replies||(e.replies=[]),e.replies.find(i=>i.id===t.reply_id)||this.refreshComment({taskId:this.task.id,commentId:t.comment_id}).then(i=>{e.replies=i.replies}).catch(console.error))}},"comment:delete"(t){const e=this.getTask();if(e){const i=this.getComments().find(r=>r.id===t.comment_id);i&&(this.$store.commit("REMOVE_TASK_COMMENT",{task:e,comment:i}),this.taskComments=this.getCurrentTaskComments(),this.taskPreviews=this.getCurrentTaskPreviews())}},"comment:delete-reply"(t){if(this.task){const e=this.taskComments.find(s=>s.id===t.comment_id);e&&(e.replies||(e.replies=[]),this.$store.commit("REMOVE_REPLY_FROM_COMMENT",{comment:e,reply:{id:t.reply_id}}))}},"preview-file:annotation-update"(t){const e=this.$refs["preview-player"];e.isValidPreviewModification(t.preview_file_id,t.updated_at)&&this.refreshPreview({previewId:e.currentPreview.id,taskId:e.currentPreview.task_id}).then(i=>{e.notSaved||(this.taskPreviews=this.getCurrentTaskPreviews(),this.$nextTick(()=>{e.reloadAnnotations(),e.loadAnnotation()}))})}}},metaInfo(){let t="Loading task... - Kitsu";if(this.task){const e=this.taskTypeMap.get(this.task.task_type_id).name;t=`${this.title} / ${e} - Kitsu`}return{title:t}}};var A=function(){var e=this,s=e._self._c;return s("div",{staticClass:"fixed-page columns xyz-in",attrs:{xyz:"fade"}},[s("div",{staticClass:"page column main-column"},[s("div",{staticClass:"page-header pa1 mb0",attrs:{xyz:"fade"}},[e.task?s("div",{staticClass:"flexrow header-title"},[e.taskType?s("task-type-name",{staticClass:"flexrow-item task-type block",attrs:{"task-type":e.taskType,"production-id":e.currentProduction.id}}):e._e(),s("span",{staticClass:"flexrow-item ml2"},[s("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:e.taskPreviews&&e.taskPreviews.length>0?{preview_file_id:e.taskPreviews[0].id}:{},"empty-width":100,"empty-height":60,width:100,"with-link":!0}})],1),s("h1",{staticClass:"title flexrow-item"},[s("router-link",{attrs:{to:e.taskEntityPath}},[e._v(" "+e._s(e.task?e.title:"Loading...")+" ")])],1),s("div",{staticClass:"flexrow-item flexrow block"},[s("span",{staticClass:"flexrow-item"},[e._v(" "+e._s(e.$t("tasks.current_status"))+" ")]),e.task?s("validation-tag",{staticClass:"is-medium flexrow-item",attrs:{task:e.task,"is-static":!0}}):e._e(),e.task.assignees.length>0?s("span",{staticClass:"flexrow-item"},[e._v(" "+e._s(e.$t("tasks.fields.assignees"))+": ")]):e._e(),e._l(e.task.assignees,function(i){return s("span",{key:i,staticClass:"flexrow-item avatar-wrapper"},[s("people-avatar",{key:i,staticClass:"flexrow-item",attrs:{person:e.personMap.get(i),size:30,"font-size":16}})],1)}),e.isAssigned?e._e():s("subscribe-button",{staticClass:"flexrow-item action-button",attrs:{subscribed:e.isAssigned||e.task.is_subscribed},on:{click:e.toggleSubscribe}})],2)],1):e._e()]),s("div",{ref:"task-columns",staticClass:"task-columns"},[s("div",{staticClass:"task-column preview-column"},[s("div",{staticClass:"preview-column-content block"},[s("div",{staticClass:"flexrow preview-header"},[e.isPreviews?s("div",{staticClass:"flexrow-item"},[s("combobox-styled",{staticClass:"preview-combo flexrow-item",attrs:{options:e.previewOptions},model:{value:e.selectedPreviewId,callback:function(i){e.selectedPreviewId=i},expression:"selectedPreviewId"}})],1):s("div",[s("em",[e._v(" "+e._s(e.$t("tasks.no_preview"))+" ")])]),e.isPreviewButtonVisible?s("div",{staticClass:"set-main-preview flexrow-item flexrow pull-right"},[e.isPreviews&&e.isCurrentUserManager?s("button",{class:{button:!0,"flexrow-item":!0,"is-loading":e.loading.setPreview},on:{click:e.setPreview}},[s("image-icon",{staticClass:"icon"}),s("span",{staticClass:"text"},[e._v(" "+e._s(e.$t("tasks.set_preview"))+" ")])],1):e._e(),e.errors.setPreview?s("span",{staticClass:"error flexrow-item"},[e._v(" "+e._s(e.$t("tasks.set_preview_error"))+" ")]):e._e()]):e._e(),e.task&&e.task.entity&&e.task.entity.preview_file_id===e.currentPreviewId?s("div",{staticClass:"set-main-preview flexrow-item pull-right"},[s("em",[e._v(e._s(e.$t("tasks.set_preview_done")))])]):e._e()]),s("div",{staticClass:"preview-area mt1"},[e.isPreviews?s("div",[e.currentPreview?s("preview-player",{ref:"preview-player",attrs:{previews:e.currentPreview.previews,"task-type-map":e.taskTypeMap,"entity-preview-files":e.taskEntityPreviews,"read-only":e.isCurrentUserArtist,"last-preview-files":e.lastFivePreviews,task:e.task,"extra-wide":!0},on:{"annotation-changed":e.onAnnotationChanged,"add-extra-preview":e.onAddExtraPreviewClicked,"remove-extra-preview":e.onRemoveExtraPreviewClicked,"change-current-preview":e.changeCurrentPreview,"time-updated":e.onTimeUpdated}}):e._e()],1):e._e()])]),s("div",{staticClass:"flexrow-item block mt1 mr0 info-block"},[s("page-subtitle",{attrs:{text:e.$t("main.info")}}),s("div",{staticClass:"table-body mt1"},[e.task?s("table",{staticClass:"datatable no-header"},[s("tbody",{staticClass:"table-body"},[s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[e._v(e._s(e.$t("tasks.fields.estimation")))]),s("td",[e._v(e._s(e.task.estimation))])]),s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[e._v(e._s(e.$t("tasks.fields.duration")))]),s("td",[e._v(e._s(e.formatDuration(e.task.duration)))])]),s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[e._v(e._s(e.$t("tasks.fields.retake_count")))]),s("td",[e._v(e._s(e.task.retake_count))])]),s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[e._v(e._s(e.$t("tasks.fields.start_date")))]),s("td",[e._v(e._s(e.formatSimpleDate(e.task.start_date)))])]),s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[e._v(e._s(e.$t("tasks.fields.due_date")))]),s("td",[e._v(e._s(e.formatSimpleDate(e.task.due_date)))])])])]):e._e()])],1),s("div",{staticClass:"pa2"})]),s("div",{staticClass:"task-column comments-column"},[e.task?s("div",[s("div",[e.isCommentingAllowed?s("add-comment",{ref:"add-comment",attrs:{"is-error":e.errors.addComment,"is-max-retakes-error":e.errors.addCommentMaxRetakes,"is-loading":e.loading.addComment,"is-movie":e.isMovie,user:e.user,team:e.currentTeam,task:e.task,"task-status":e.taskStatusForCurrentUser,"preview-forms":e.previewForms,fps:parseInt(e.currentFps),time:e.currentTime,revision:e.currentRevision},on:{"add-comment":e.addComment,"add-preview":e.onAddPreviewClicked,"duplicate-comment":e.onDuplicateComment,"file-drop":e.selectFile,"clear-files":e.clearPreviewFiles,"annotation-snapshots-requested":e.extractAnnotationSnapshots,"remove-preview":e.onPreviewFormRemoved}}):e._e(),e.taskComments&&e.taskComments.length>0?s("div",{staticClass:"comments"},[s("XyzTransitionGroup",{directives:[{name:"xyz",rawName:"v-xyz",value:{fade:!1,up:!1,"flip-up":!1},expression:"{fade: false, up: false, 'flip-up': false}"}],attrs:{appear:""}},e._l(e.taskComments,function(i,r){return s("comment",{key:i.id,attrs:{comment:i,task:e.task,highlighted:!1,"current-user":e.user,editable:i.person&&e.user.id===i.person.id||e.isCurrentUserAdmin,"is-first":r===0,"is-last":r===e.pinnedCount,"is-change":e.isStatusChange(r)},on:{"ack-comment":e.ackComment,"pin-comment":e.onPinComment,"edit-comment":e.onEditComment,"delete-comment":e.onDeleteComment,"checklist-updated":e.saveComment,"time-code-clicked":e.timeCodeClicked}})}),1)],1):s("div",{staticClass:"no-comment"},[s("em",[e._v(" "+e._s(e.$t("tasks.no_comment"))+" ")])])],1)]):s("div",{staticClass:"has-text-centered"},[s("spinner")],1)])]),s("add-preview-modal",{ref:"add-preview-modal",attrs:{active:e.modals.addPreview,"is-loading":e.loading.addPreview,"is-error":e.errors.addPreview,"form-data":e.addPreviewFormData,title:e.task?e.task.entity_name+" / "+e.taskTypeMap.get(e.task.task_type_id).name:""},on:{cancel:function(i){e.modals.addPreview=!1},fileselected:e.selectFile,confirm:e.closeAddPreviewModal}}),s("add-preview-modal",{ref:"add-extra-preview-modal",attrs:{active:e.modals.addExtraPreview,"is-loading":e.loading.addExtraPreview,"is-error":e.errors.addExtraPreview,"form-data":e.addExtraPreviewFormData,title:e.task?e.task.entity_name+" / "+e.taskTypeMap.get(e.task.task_type_id).name:""},on:{cancel:e.hideExtraPreviewModal,fileselected:e.selectFile,confirm:e.createExtraPreview}}),s("edit-comment-modal",{attrs:{active:e.modals.editComment,"is-loading":e.loading.editComment,"is-error":e.errors.editComment,"comment-to-edit":e.commentToEdit,team:e.currentTeam},on:{confirm:e.confirmEditTaskComment,cancel:e.onCancelEditComment}}),s("delete-modal",{attrs:{active:e.modals.deleteComment,"is-loading":e.loading.deleteComment,"is-error":e.errors.deleteComment,text:e.$t("tasks.delete_comment"),"error-text":e.$t("tasks.delete_comment_error")},on:{confirm:e.confirmDeleteTaskComment,cancel:e.onCancelDeleteComment}}),s("delete-modal",{attrs:{active:e.modals.deleteExtraPreview,"is-loading":e.loading.deleteExtraPreview,"is-error":e.errors.deleteExtraPreview,text:e.$t("tasks.delete_preview"),"error-text":e.$t("tasks.delete_preview_error")},on:{cancel:e.hideRemoveExtraPreviewModal,confirm:e.confirmDeleteTaskPreview}})],1)])},F=[],S=$(M,A,F,!1,null,"e396e544",null,null);const R=S.exports;export{R as default};
//# sourceMappingURL=Task-0a6415ee.js.map
