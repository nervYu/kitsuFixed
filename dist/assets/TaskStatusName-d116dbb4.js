import{m as s,b as a,n}from"./index-d0b155bb.js";const r={name:"task-status-name",components:{},props:{entry:{type:Object,default:()=>{}},disable:{type:Boolean,default:!1}},computed:{...s(["isDarkTheme"]),color(){return this.entry.name==="Todo"&&this.isDarkTheme?"#5F626A":this.entry.color},textColor(){return this.entry.name==="Todo"&&!this.isDarkTheme?"#333":"white"}},methods:{...a([])}};var o=function(){var e=this,t=e._self._c;return t("td",{staticClass:"name"},[t("div",{staticClass:"tag",class:[e.disable?"canceled":""],style:{background:e.color,color:e.textColor},attrs:{title:e.entry.name}},[e._v(" "+e._s(e.entry.short_name)+" ")])])},l=[],c=n(r,o,l,!1,null,"94f290b2",null,null);const m=c.exports;export{m as T};
//# sourceMappingURL=TaskStatusName-d116dbb4.js.map
