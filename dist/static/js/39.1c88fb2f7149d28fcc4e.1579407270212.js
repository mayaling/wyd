webpackJsonp([39],{P1Ax:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Vue.directive("loadmore",{bind:function(e,t){e.querySelector(".el-select-dropdown .el-select-dropdown__wrap").addEventListener("scroll",function(){this.scrollHeight-this.scrollTop<=this.clientHeight&&t.value()})}});var o={name:"addproject",data:function(){var e=/^0(\.[0-9]{0,2})$/;return{addshow:!0,editshow:!1,typeshow:!0,timeshow:!0,dayshow:!1,type1show:!1,form:{deduct:"",date_time:"",status:"",channel_id:"",min_uv:"0",type:""},statusdata:[{id:1,name:"启用"},{id:0,name:"禁用"}],timetypedata:[{id:0,name:"天"},{id:1,name:"时间段"}],page:1,pageCount:"",time:"",date:"",id:"",data:"",channeldata:"",tableData:"",rules:{channel_id:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],deduct:[{required:!0,validator:function(t,a,o){e.test(a)?o():o(new Error("0-1之间的数,保留小数点后两位"))},trigger:"blur"}],date_time:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],status:[{required:!0,message:"不可为空！",trigger:["blur","change"]}]}}},created:function(){this.getchanneldata(),this.id=this.$route.query.id,this.id&&(this.getformdata(),this.typeshow=!1,this.type1show=!0,this.editshow=!0,this.addshow=!1)},computed:{},methods:{loadMore:function(){var e=this;console.log(2222);var t=this;t.page!=t.pageCount?(t.page++,this.$get("channels?sort=-id&status=1&page="+t.page).then(function(a){if(1===a.code)for(var o=0;o<a.info.items.length;o++)t.channeldata.push(a.info.items[o]);else e.$message.error("数据获取失败")}).catch(function(){e.loading=!1})):t.page=t.pageCount},changedatetype:function(){this.form.type?(this.timeshow=!1,this.dayshow=!0):(this.timeshow=!0,this.dayshow=!1)},getchanneldata:function(){var e=this;this.$get("channels?sort=-id&status=1").then(function(t){1===t.code&&(e.channeldata=t.info.items,e.pageCount=t.info._meta.pageCount)}).catch(function(){})},getformdata:function(){var e=this;this.$get("deducts/"+this.id).then(function(t){1===t.code?(e.tableData=t.info,console.log(e.tableData),e.tableData.type=0,e.form=e.tableData):e.$message.error("数据加载失败"),e.loading=!1}).catch(function(){e.loading=!1})},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("请完善红色提示内容"),!1;t.$post("deducts",{channel_id:t.form.channel_id,deduct:t.form.deduct,date_time:t.form.date_time,status:t.form.status,start_date:t.time?t.time[0]:"",end_date:t.time?t.time[1]:"",type:t.form.type?t.form.type:t.form.type=0,min_uv:t.form.min_uv}).then(function(e){console.log(e),1===e.code?(t.$message({message:e.message,type:"success"}),t.$router.push("/deduct")):e.info.name?t.$message.error(e.info.name[0]):t.$message.error(e.message)})})},onEdit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("请完善红色提示内容"),!1;t.$put("deducts/"+t.id,{channel_id:t.form.channel_id,deduct:t.form.deduct,date_time:t.form.date_time,status:t.form.status,start_date:t.time?t.time[0]:"",end_date:t.time?t.time[1]:"",type:t.form.type?t.form.type:t.form.type=0,min_uv:t.form.min_uv}).then(function(e){console.log(e),1===e.code?(t.$message({message:e.message,type:"success"}),t.$router.push("/deduct")):t.$message.error(e.message)})})},resetForm:function(e){this.$refs[e].resetFields()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"container-title"},[e._v("新增扣除")]),e._v(" "),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("el-form",{ref:"form",staticClass:"item-add-list",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"渠道:",prop:"channel_id"}},[a("el-select",{directives:[{name:"loadmore",rawName:"v-loadmore",value:e.loadMore,expression:"loadMore"}],attrs:{placeholder:"请选择渠道"},model:{value:e.form.channel_id,callback:function(t){e.$set(e.form,"channel_id",t)},expression:"form.channel_id"}},[e._l(e.channeldata,function(e){return[a("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"扣除后的比例:",prop:"deduct"}},[a("el-input",{attrs:{type:"text",placeholder:"例如0.03"},model:{value:e.form.deduct,callback:function(t){e.$set(e.form,"deduct","string"==typeof t?t.trim():t)},expression:"form.deduct"}})],1),e._v(" "),a("span",{staticClass:"choosedate"},[e._v("日期选择:")]),e._v(" "),a("el-form-item",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[e.typeshow?a("el-select",{attrs:{placeholder:"日期形式"},on:{change:function(t){return e.changedatetype()}},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[e._l(e.timetypedata,function(e){return[a("el-option",{attrs:{label:e.name,value:e.id}})]})],2):e._e(),e._v(" "),e.type1show?a("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.timetypedata,function(e){return a("el-option",{attrs:{label:e.name,value:e.id}})}),1):e._e()],1),e._v(" "),e.dayshow?a("el-col",{attrs:{span:16}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},on:{change:e.search},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1):e._e(),e._v(" "),e.timeshow?a("el-col",{attrs:{span:16}},[e.addshow?a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.form.date_time,callback:function(t){e.$set(e.form,"date_time",t)},expression:"form.date_time"}}):e._e(),e._v(" "),e.editshow?a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd",disabled:""},model:{value:e.form.date_time,callback:function(t){e.$set(e.form,"date_time",t)},expression:"form.date_time"}}):e._e()],1):e._e()],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._l(e.statusdata,function(e){return[a("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"起扣量:",prop:"min_uv"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.min_uv,callback:function(t){e.$set(e.form,"min_uv","string"==typeof t?t.trim():t)},expression:"form.min_uv"}})],1),e._v(" "),e.tableData?e._e():a("el-button",{staticStyle:{"margin-top":"40px"},attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),e.tableData?a("el-button",{staticStyle:{"margin-top":"40px"},attrs:{type:"primary"},on:{click:function(t){return e.onEdit("form")}}},[e._v("保存")]):e._e(),e._v(" "),a("router-link",{attrs:{to:{path:"deduct"}}},[a("el-button",{attrs:{type:"primary"}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}}),e._v(" "),a("el-col",{attrs:{span:6}})],1)],1)])},staticRenderFns:[]};var s=a("C7Lr")(o,r,!1,function(e){a("ubk1")},"data-v-3058452b",null);t.default=s.exports},ubk1:function(e,t){}});