webpackJsonp([28],{AmAV:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("3cXf"),l=e.n(n),i={name:"teacher",data:function(){return{date:"",dialogTableVisible:!1,dialogFormVisible:!1,value1:"",value2:"",tableData:[],currentPage:1,totalCount:1,pageSizes:[3,5,10,20],PageSize:5,cur_page:1,pages:0,name:"",s_student:"",s_school:"",s_grade:"",s_klass:"",status:"",region:"",region1:"",plusIcon:!0,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},nowtime:"",puvdata:"",loading:!0}},created:function(){this.getlistdata(),this.getpuvdata(),this.gettime()},computed:{},methods:{getpuvdata:function(){var a=this;this.$get("channel-analysis/today-count?sort=-id").then(function(t){console.log(t),1===t.code?a.puvdata=t.info:a.$message.error("数据加载失败"),a.loading=!1}).catch(function(){a.loading=!1})},getlistdata:function(){var a=this;this.$get("channel-analysis/product-list?sort=-id").then(function(t){if(console.log(t),1===t.code){a.tableData=t.info,a.pages=t.info._meta.pageCount;for(var e=0;e<a.tableData.length;e++)1==a.tableData[e].balance_type?a.tableData[e].balance_type="uv":2==a.tableData[e].balance_type?a.tableData[e].balance_type="CPA":3==a.tableData[e].balance_type?a.tableData[e].balance_type="CPS":a.tableData[e].balance_type=" "}else a.$message.error("数据加载失败");a.loading=!1}).catch(function(){a.loading=!1})},handleCurrentChange:function(a){var t=this;this.loading=!0,this.$get("channel-analysis/product-list?sort=-id",{page:a,start_time:this.date?this.date[0]:"",end_time:this.date?this.date[1]:""}).then(function(a){if(1===a.code){t.tableData=a.info,t.pages=a.info._meta.pageCount;for(var e=0;e<t.tableData.length;e++)1==t.tableData[e].balance_type?t.tableData[e].balance_type="uv":2==t.tableData[e].balance_type?t.tableData[e].balance_type="CPA":3==t.tableData[e].balance_type?t.tableData[e].balance_type="CPS":t.tableData[e].balance_type=" "}else t.$message.error("数据加载失败");t.loading=!1}).catch(function(){t.loading=!1})},search:function(){var a=this;this.$get("channel-analysis/product-list?sort=-id",{start_time:this.date?this.date[0]:"",end_time:this.date?this.date[1]:""}).then(function(t){if(1===t.code){a.tableData=JSON.parse(l()(t.info)),a.pages=t.info._meta.pageCount;for(var e=0;e<a.tableData.length;e++)1==a.tableData[e].balance_type?a.tableData[e].balance_type="uv":2==a.tableData[e].balance_type?a.tableData[e].balance_type="CPA":3==a.tableData[e].balance_type?a.tableData[e].balance_type="CPS":a.tableData[e].balance_type=" ";a.loading=!1}else a.$message.error("数据加载失败");a.loading=!1}).catch(function(){a.loading=!1})},gettime:function(){var a=new Date,t=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();this.nowtime=t,console.log(this.nowtime)}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"container-title"},[a._v("产品今日统计")]),a._v(" "),e("div",{staticClass:"mgb20"},[e("router-link",{attrs:{to:{path:"dailystatistics"}}},[e("el-button",{attrs:{type:"primary"}},[a._v("产品每日统计")])],1),a._v(" "),e("el-tag",[a._v("今日实时PV:"+a._s(a.puvdata.pv))]),a._v(" "),e("el-tag",{attrs:{type:"success"}},[a._v("今日实时UV:"+a._s(a.puvdata.uv))]),a._v(" "),e("el-time-picker",{staticStyle:{float:"right"},attrs:{"is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围","value-format":"HH:mm:ss"},on:{change:function(t){return a.search()}},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}})],1),a._v(" "),e("el-table",{ref:"multipleTable",attrs:{data:a.tableData,border:"",size:"medium",stripe:""}},[e("el-table-column",{attrs:{prop:"product_name",label:"名称",align:"center"}}),a._v(" "),e("el-table-column",{attrs:{prop:"pv",label:"产品点击pv",align:"center"}}),a._v(" "),e("el-table-column",{attrs:{prop:"uv",label:"产品点击uv",align:"center"}}),a._v(" "),e("el-table-column",{attrs:{prop:"new_ctr_uv",label:"新客uv",align:"center"}}),a._v(" "),e("el-table-column",{attrs:{prop:"old_ctr_uv",label:"老客uv",align:"center"}})],1),a._v(" "),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"prev, pager, next","page-count":a.pages},on:{"current-change":a.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var o=e("C7Lr")(i,s,!1,function(a){e("r/n4")},"data-v-4d6e7ce8",null);t.default=o.exports},"r/n4":function(a,t){}});