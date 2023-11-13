import{p as l,a as d,m as r,b as n,ae as u,ag as h,n as c,_ as o,B as p,C as S,w as f,a5 as _,G as m,o as q,A as y}from"./index-d0b155bb.js";import{S as v}from"./StatsCell-74748da2.js";const C={name:"sequence-stats-list",mixins:[l],components:{StatsCell:v,TableInfo:d},props:{countMode:{type:String,default:"count"},displayMode:{type:String,default:"pie"},entries:{type:Array,default:()=>[]},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},sequenceStats:{type:Object,default:()=>{}},showAll:{type:Boolean,default:!1},validationColumns:{type:Array,default:()=>[]}},data(){return{busy:!1,lastSelection:null}},computed:{...r(["currentProduction","currentEpisode","displayedSequencesLength","isDarkTheme","isCurrentUserClient","isCurrentUserManager","isTVShow","sequenceSearchText","taskTypeMap"]),isEmptyList(){return this.entries&&this.entries.length===0&&!this.isLoading&&!this.isError&&(!this.sequenceSearchText||this.sequenceSearchText.length===0)}},methods:{...n([]),chartColors(s,e){return u(this.sequenceStats,s,e)},chartData(s,e,t="count"){return h(this.sequenceStats,s,e,t)},isStats(s,e){return this.sequenceStats[s]&&this.sequenceStats[s][e]},isEntryStats(s){if(!this.sequenceStats[s]&&this.sequenceSearchText)return!1;if(!this.sequenceStats[s])return!0;let e=!1;return Object.keys(this.sequenceStats[s]).forEach(t=>{e=e||this.sequenceStats[s][t]}),e},onBodyScroll(s,e){this.$emit("scroll",e.scrollTop)},setScrollPosition(s){this.$refs.body&&(this.$refs.body.scrollTop=s)},editPath(s){return this.getPath("edit-sequence",s)},deletePath(s){return this.getPath("delete-sequence",s)},taskTypePath(s){const e={name:"task-type",params:{production_id:this.currentProduction.id,task_type_id:s,type:"shots"}};return this.isTVShow&&this.currentEpisode&&(e.name="episode-task-type",e.params.episode_id=this.currentEpisode.id),e},getPath(s,e){const t={name:s,params:{production_id:this.currentProduction.id}};return this.isTVShow&&this.currentEpisode&&(t.name=`episode-${s}`,t.params.episode_id=this.currentEpisode.id),e&&(t.params.sequence_id=e),t}}};var g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"data-list"},[t("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onBodyScroll,expression:"onBodyScroll"}],ref:"body",staticClass:"datatable-wrapper"},[t("table",{staticClass:"datatable"},[t("thead",{staticClass:"datatable-head"},[t("tr",[t("th",{ref:"th-sequence",staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("shots.fields.sequence"))+" ")]),t("th",{staticClass:"validation",attrs:{scope:"col"}},[e._v(e._s(e.$t("main.all")))]),e._l(e.validationColumns,function(a){return e.isLoading?e._e():t("th",{key:a,staticClass:"validation validation-cell",attrs:{scope:"col"}},[t("div",{staticClass:"flexrow validation-content",style:e.getValidationStyle(a)},[e.isCurrentUserClient?t("span",{staticClass:"flexrow-item"},[e._v(" "+e._s(e.taskTypeMap.get(a).name)+" ")]):t("router-link",{staticClass:"flexrow-item",attrs:{to:e.taskTypePath(a)}},[e._v(" "+e._s(e.taskTypeMap.get(a).name)+" ")])],1)])}),t("th",{staticClass:"actions",attrs:{scope:"col"}})],2)]),e.isLoading?e._e():t("tbody",{staticClass:"datatable-body"},[e.showAll&&!e.isEmptyList?t("tr",{staticClass:"all-line datatable-row"},[t("th",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[e._v(" "+e._s(e.$t("sequences.all_sequences"))+" ")]),t("stats-cell",{staticClass:"all-validation",attrs:{colors:e.chartColors("all","all"),data:e.chartData("all","all"),"frames-data":e.chartData("all","all","frames"),countMode:e.countMode,displayMode:e.displayMode}}),e._l(e.validationColumns,function(a){return t("stats-cell",{key:"all-"+a,style:e.getValidationStyle(a),attrs:{colors:e.chartColors("all",a),data:e.chartData("all",a),"frames-data":e.chartData("all",a,"frames"),countMode:e.countMode,displayMode:e.displayMode}})}),t("td",{staticClass:"actions"})],2):e._e(),e._l(e.entries,function(a){return e.isEntryStats(a.id)?t("tr",{key:a.id,staticClass:"datatable-row"},[t("td",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[e._v(" "+e._s(a.name)+" ")]),e.isStats(a.id,"all")?t("stats-cell",{attrs:{colors:e.chartColors(a.id,"all"),data:e.chartData(a.id,"all"),"frames-data":e.chartData(a.id,"all","frames"),countMode:e.countMode,displayMode:e.displayMode}}):t("td"),e._l(e.validationColumns,function(i){return e.isStats(a.id,i)?t("stats-cell",{key:a.id+i,style:e.getValidationStyle(i),attrs:{colors:e.chartColors(a.id,i),data:e.chartData(a.id,i),"frames-data":e.chartData(a.id,i,"frames"),countMode:e.countMode,displayMode:e.displayMode}}):t("td",{style:e.getValidationStyle(i)})}),t("td",{staticClass:"actions"})],2):e._e()})],2)])]),t("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),e.isEmptyList&&!e.isCurrentUserClient&&!e.isLoading?t("div",{staticClass:"has-text-centered"},[e._m(0),t("p",{staticClass:"info"},[e._v(e._s(e.$t("sequences.empty_list")))])]):e._e(),e.isEmptyList&&e.isCurrentUserClient&&!e.isLoading?t("div",{staticClass:"has-text-centered"},[e._m(1),t("p",{staticClass:"info"},[e._v(e._s(e.$t("sequences.empty_list_client")))])]):e._e(),!e.isEmptyList&&!e.isLoading?t("p",{staticClass:"has-text-centered nb-sequences"},[e._v(" "+e._s(e.displayedSequencesLength)+" "+e._s(e.$tc("sequences.number",e.displayedSequencesLength))+" ")]):e._e()],1)},M=[function(){var s=this,e=s._self._c;return e("p",{staticClass:"info"},[e("img",{attrs:{src:o}})])},function(){var s=this,e=s._self._c;return e("p",{staticClass:"info"},[e("img",{attrs:{src:o}})])}],b=c(C,g,M,!1,null,"6cf0d969",null,null);const x=b.exports;const L={name:"sequence-stats",components:{ButtonSimple:p,Combobox:S,SearchField:f,SearchQueryList:_,SequenceStatsList:x},data(){return{countMode:"count",displayMode:"pie",initialLoading:!0,countModeOptions:[{label:"shots",value:"count"},{label:"frames",value:"frames"}],displayModeOptions:[{label:"pie",value:"pie"},{label:"count",value:"count"}]}},computed:{...r(["currentEpisode","currentProduction","displayedSequences","isCurrentUserManager","isShotsLoading","isShotsLoadingError","isTVShow","searchSequenceFilters","sequences","sequenceMap","sequencesPath","sequenceStats","sequenceSearchText","sequenceSearchQueries","sequenceListScrollPosition","shotValidationColumns","taskTypeMap","taskStatusMap"])},mounted(){this.loadShots(()=>{this.initSequences().then(()=>{this.initialLoading=!1}).catch(s=>console.error(s)),this.setDefaultSearchText(),this.setDefaultListScrollPosition()})},methods:{...n(["computeSequenceStats","hideAssignations","initSequences","loadShots","removeSequenceSearch","saveSequenceSearch","setLastProductionScreen","setSequenceStatsSearch","setSequenceListScrollPosition","showAssignations"]),reloadData(){this.initialLoading=!0,this.loadShots(()=>{this.initialLoading=!1,this.computeSequenceStats()})},setDefaultSearchText(){this.sequenceSearchText.length>0&&this.$refs["sequence-search-field"].setValue(this.sequenceSearchText)},setDefaultListScrollPosition(){this.$refs["sequence-list"]&&this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition)},navigateToList(){this.$router.push(this.sequencesPath)},onSearchChange(s){const e=this.$refs["sequence-search-field"].getValue();this.setSequenceStatsSearch(e)},changeSearch(s){this.$refs["sequence-search-field"].setValue(s.search_query),this.$refs["sequence-search-field"].$emit("change",s.search_query)},saveSearchQuery(s){this.saveSequenceSearch(s).catch(console.error)},removeSearchQuery(s){this.removeSequenceSearch(s).catch(console.error)},saveScrollPosition(s){this.setSequenceListScrollPosition(s)},exportStatisticsToCsv(){const s=[m().format("YYYYMMDD"),this.currentProduction.name,"sequences","statistics"];this.currentEpisode&&s.splice(2,0,this.currentEpisode.name);const e=q.slugify(s.join("_"));y.generateStatReports(e,this.sequenceStats,this.taskTypeMap,this.taskStatusMap,this.sequenceMap,this.countMode)},onFieldChanged({entry:s,fieldName:e,value:t}){const a={id:s.id};a[e]=t,this.editSequence(a)}},watch:{currentProduction(){this.$refs["sequence-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.isTVShow||this.loadShots(()=>{this.initSequences().then(this.handleModalsDisplay).catch(s=>console.error(s))})},currentEpisode(){this.isTVShow&&this.currentEpisode&&this.loadShots(()=>{this.initSequences().then(this.handleModalsDisplay).then(()=>{this.initialLoading=!1}).catch(s=>console.error(s))})},searchSequenceFilters(){this.computeSequenceStats()}},metaInfo(){return this.isTVShow?{title:`${this.currentProduction?this.currentProduction.name:""} - ${this.currentEpisode?this.currentEpisode.name:""} | ${this.$t("sequences.title")} - Kitsu`}:{title:`${this.currentProduction?this.currentProduction.name:""} ${this.$t("sequences.title")} - Kitsu`}}};var $=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sequences page fixed-page"},[t("div",{staticClass:"sequence-list-header page-header flexrow"},[t("search-field",{ref:"sequence-search-field",staticClass:"flexrow-item mt1",attrs:{"can-save":!0,placeholder:"ex: e01 s01 anim=wip"},on:{change:e.onSearchChange,enter:e.saveSearchQuery,save:e.saveSearchQuery}}),t("combobox",{staticClass:"mb0 flexrow-item",attrs:{label:e.$t("statistics.display_mode"),"locale-key-prefix":"statistics.",options:e.displayModeOptions},model:{value:e.displayMode,callback:function(a){e.displayMode=a},expression:"displayMode"}}),t("combobox",{staticClass:"mb0 flexrow-item",attrs:{label:e.$t("statistics.count_mode"),"locale-key-prefix":"statistics.",options:e.countModeOptions},model:{value:e.countMode,callback:function(a){e.countMode=a},expression:"countMode"}}),t("span",{staticClass:"filler"}),t("button-simple",{staticClass:"flexrow-item",attrs:{icon:"refresh",title:e.$t("main.reload")},on:{click:e.reloadData}}),t("button-simple",{staticClass:"flexrow-item",attrs:{icon:"download",title:e.$t("main.csv.export_file")},on:{click:e.exportStatisticsToCsv}})],1),t("div",{staticClass:"query-list mt1"},[t("search-query-list",{attrs:{queries:e.sequenceSearchQueries},on:{"change-search":e.changeSearch,"remove-search":e.removeSearchQuery}})],1),t("sequence-stats-list",{ref:"sequence-list",attrs:{"count-mode":e.countMode,"display-mode":e.displayMode,entries:e.displayedSequences,"is-loading":e.isShotsLoading||e.initialLoading,"is-error":e.isShotsLoadingError,"validation-columns":e.shotValidationColumns,"sequence-stats":e.sequenceStats,"show-all":e.sequenceSearchText.length===0},on:{"field-changed":e.onFieldChanged,scroll:e.saveScrollPosition}})],1)},T=[],w=c(L,$,T,!1,null,"aafcf3cb",null,null);const k=w.exports;export{k as default};
//# sourceMappingURL=SequenceStats-8f86487f.js.map
