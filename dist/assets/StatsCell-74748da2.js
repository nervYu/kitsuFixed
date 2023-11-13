import{n as l}from"./index-d0b155bb.js";const r={name:"stats-cell",components:{},props:{colors:{type:Array,required:!0},countMode:{type:String,default:"count"},data:{type:Array,default:()=>[]},displayMode:{type:String,default:"pie"},framesData:{type:Array,default:()=>[]},label:{type:String,default:""},labelColor:{type:String,default:"#e67e22"}},computed:{selectedData(){return this.countMode==="frames"?this.framesData:this.data},total(){return this.selectedData.reduce((a,e)=>e[1]?a+e[1]:a,0)}},methods:{percent(a){let e=0;return this.total>0&&(e=a/this.total*100),e.toFixed(2)}}};var o=function(){var e=this,t=e._self._c;return t("td",{staticClass:"validation"},[e.displayMode==="pie"?t("div",{staticClass:"flexrow"},[t("pie-chart",{staticClass:"flexrow-item",attrs:{width:"70px",height:"50px",legend:!1,colors:e.colors,data:e.selectedData}}),e.label?t("span",{staticClass:"tag flexrow-item",style:{"background-color":e.labelColor}},[e._v(" "+e._s(e.label)+" ")]):e._e()],1):t("div",[e._l(e.selectedData,function(s){return s[0]?t("div",{key:s[0]},[t("span",{staticClass:"stats-name",style:{color:s[2]}},[e._v(" "+e._s(s[0])+" ")]),t("span",[e._v(" : ")]),t("span",{staticClass:"stats-value"},[e._v(" "+e._s(s[1])+" ("+e._s(e.percent(s[1]))+"%) ")])]):e._e()}),e.label?t("span",{staticClass:"tag flexrow-item",style:{"background-color":e.labelColor}},[e._v(" "+e._s(e.label)+" ")]):e._e()],2)])},n=[],i=l(r,o,n,!1,null,"d68f32ac",null,null);const _=i.exports;export{_ as S};
//# sourceMappingURL=StatsCell-74748da2.js.map
