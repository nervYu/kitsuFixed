import{m as o,b as r,n,as as l,bG as i}from"./index-d0b155bb.js";import{D as p}from"./DepartmentNamesCell-d505736a.js";import{P as c}from"./PeopleNameCell-f77b3a1d.js";const m={name:"production-team-list",components:{DepartmentNamesCell:p,PeopleNameCell:c},props:["entries"],computed:{...o(["isCurrentUserAdmin"]),isEmpty(){return!this.entries||this.entries.length===0}},methods:{...r(["removePersonFromTeam"]),removePerson(s){this.removePersonFromTeam(s)}}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"data-list"},[t("div",{staticClass:"datatable-wrapper"},[t("table",{staticClass:"datatable"},[t("thead",{staticClass:"datatable-head"},[t("tr",[t("th",{staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.name"))+" ")]),t("th",{staticClass:"email",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.email"))+" ")]),t("th",{staticClass:"phone",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.phone"))+" ")]),t("th",{staticClass:"role",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.role"))+" ")]),t("th",{staticClass:"departments",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.departments"))+" ")]),t("th",{staticClass:"actions",attrs:{scope:"col"}})])]),e.isEmpty?e._e():t("tbody",{staticClass:"datatable-body"},e._l(e.entries,function(a){return t("tr",{key:a.id,staticClass:"datatable-row"},[t("people-name-cell",{staticClass:"name datatable-row-header",attrs:{person:a}}),t("td",{staticClass:"email"},[e._v(e._s(a.email))]),t("td",{staticClass:"phone"},[e._v(e._s(a.phone))]),t("td",{staticClass:"role"},[e._v(e._s(e.$t("people.role."+a.role)))]),t("department-names-cell",{staticClass:"departemnts",attrs:{departments:a.departments}}),e.isCurrentUserAdmin?t("td",{staticClass:"actions"},[t("button",{staticClass:"button",on:{click:function(b){return e.removePerson(a)}}},[e._v(" "+e._s(e.$t("main.remove"))+" ")])]):t("td",{staticClass:"actions"})],1)}),0)])]),e.isEmpty?t("p",{staticClass:"has-text-centered mt2"},[e._v(" "+e._s(e.$t("people.empty_team"))+" ")]):e._e(),t("p",{staticClass:"has-text-centered footer-info"},[e._v(" "+e._s(e.entries.length)+" "+e._s(e.$tc("people.persons",e.entries.length))+" ")])])},_=[],u=n(m,d,_,!1,null,"22221cfb",null,null);const v=u.exports;const f={name:"people",components:{PeopleField:l,ProductionTeamList:v},data(){return{person:null,isTeamLoading:!1,isTeamLoadingError:!1}},computed:{...o(["currentProduction","productionMap","openProductions","personMap","people"]),teamPersons(){return i(this.currentProduction.team.map(s=>this.personMap.get(s)))},unlistedPeople(){return this.people.filter(s=>!this.currentProduction.team.includes(s.id)&&s.active)}},methods:{...r(["addPersonToTeam"]),addPerson(){this.person&&(this.addPersonToTeam(this.person),setTimeout(()=>{this.$refs["people-field"].clear()},1))},removePerson(s){this.removePersonFromTeam(s)}},metaInfo(){return{title:`${this.currentProduction.name} | ${this.$t("people.team")} - Kitsu`}}};var h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"people page fixed-page"},[t("div",{staticClass:"flexrow mt2 add-people"},[t("people-field",{ref:"people-field",staticClass:"flexrow-item add-people-field",attrs:{people:e.unlistedPeople,placeholder:e.$t("people.add_member_to_team"),big:""},on:{enter:e.addPerson},model:{value:e.person,callback:function(a){e.person=a},expression:"person"}}),t("button",{staticClass:"button flexrow-item",on:{click:e.addPerson}},[e._v(" "+e._s(e.$t("main.add"))+" ")])],1),t("production-team-list",{attrs:{entries:e.teamPersons,"is-loading":e.isTeamLoading,"is-error":e.isTeamLoadingError},on:{remove:e.removePerson}})],1)},C=[],P=n(f,h,C,!1,null,"e45bb2c1",null,null);const x=P.exports;export{x as default};
//# sourceMappingURL=Team-c4ebe138.js.map
