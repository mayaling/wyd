webpackJsonp([30],{"5X+m":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Vue.directive("loadmore",{bind:function(e,o){e.querySelector(".el-select-dropdown .el-select-dropdown__wrap").addEventListener("scroll",function(){this.scrollHeight-this.scrollTop<=this.clientHeight&&o.value()})}});var r={num:"addcanal",data:function(){return{form:{num:"",phone:"",goods_order_id:"",com:""},page:1,pageCount:"",comdata:"",tableData:"",goodorderdata:"",typedata:[{id:1,num:"UV"},{id:2,num:"注册"},{id:3,num:"激活"},{id:4,num:"其它"}],rules:{num:[{required:!0,message:"不可为空！",trigger:"blur"}],com:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],template:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],phone:[{required:!0,message:"不可为空！",trigger:["blur","change"]}]}}},created:function(){this.id=this.$route.query.id,this.getadmindata(),this.getagoodorderdata(),this.id&&this.getformdata()},computed:{},methods:{loadMore:function(){var e=this;console.log(2222);var o=this;o.page!=o.pageCount?(o.page++,this.$get("admins?type=3&status=1&sort=-id&page="+o.page).then(function(t){if(1===t.code)for(var r=0;r<t.info.items.length;r++)o.comdata.push(t.info.items[r]);else e.$message.error("数据获取失败")}).catch(function(){e.loading=!1})):o.page=o.pageCount},getadmindata:function(){var e=this;this.$get("goods-order/get-deliver-num").then(function(o){console.log(o),1===o.code?(e.comdata=o.info,e.pageCount=o.info._meta.pageCount,console.log(e.comdata)):e.$message.error(o.message),e.loading=!1}).catch(function(){e.loading=!1})},getagoodorderdata:function(){var e=this;this.$get("goods-order/get-undeliver-goods").then(function(o){console.log(o),1===o.code?(e.goodorderdata=o.info.items,e.pageCount=o.info._meta.pageCount):e.$message.error(o.message),e.loading=!1}).catch(function(){e.loading=!1})},onSubmit:function(e){var o=this;this.$refs[e].validate(function(e){if(!e)return o.$message.error("请完善红色提示内容"),!1;o.$post("goods-order/deliver-good",{num:o.form.num,com:o.form.com,phone:o.form.phone,goods_order_id:o.form.goods_order_id}).then(function(e){1===e.code?(o.$message({message:e.message,type:"success"}),o.$router.push("/logistics")):o.$message.error(e.message)})})},onEdit:function(e){var o=this;this.$refs[e].validate(function(e){if(!e)return o.$message.error("请完善红色提示内容"),!1;o.$put("goods-order/deliver-good/"+o.id,{num:o.form.num,com:o.form.com,phone:o.form.phone,goods_order_id:o.form.goods_order_id}).then(function(e){1===e.code?(o.$message({message:e.message,type:"success"}),o.$router.push("/logistics")):o.$message.error(e.message)})})},resetForm:function(e){this.$refs[e].resetFields()}}},a={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"container-title"},[e._v("新增物流")]),e._v(" "),t("el-form",{ref:"form",staticClass:"item-add-list",attrs:{model:e.form,rules:e.rules}},[t("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"快递单号 :",prop:"num"}},[t("el-input",{attrs:{type:"text"},model:{value:e.form.num,callback:function(o){e.$set(e.form,"num","string"==typeof o?o.trim():o)},expression:"form.num"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号:",prop:"phone"}},[t("el-input",{model:{value:e.form.phone,callback:function(o){e.$set(e.form,"phone","string"==typeof o?o.trim():o)},expression:"form.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"快递公司：",prop:"com"}},[t("el-select",{directives:[{name:"loadmore",rawName:"v-loadmore",value:e.loadMore,expression:"loadMore"}],attrs:{placeholder:"请选择快递公司",filterable:""},model:{value:e.form.com,callback:function(o){e.$set(e.form,"com",o)},expression:"form.com"}},[e._l(e.comdata,function(e){return[t("el-option",{key:e.id,attrs:{label:e.company_name,value:e.company_num}})]})],2)],1),e._v(" "),t("el-form-item",{attrs:{label:"商品订单id：",prop:"goods_order_id"}},[t("el-select",{attrs:{placeholder:"请选择商品订单id"},model:{value:e.form.goods_order_id,callback:function(o){e.$set(e.form,"goods_order_id",o)},expression:"form.goods_order_id"}},[e._l(e.goodorderdata,function(e){return[t("el-option",{attrs:{label:e.id,value:e.id}})]})],2)],1),e._v(" "),e.tableData?e._e():t("el-button",{staticStyle:{"margin-top":"40px"},attrs:{type:"primary"},on:{click:function(o){return e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),e.tableData?t("el-button",{staticStyle:{"margin-top":"40px"},attrs:{type:"primary"},on:{click:function(o){return e.onEdit("form")}}},[e._v("保存")]):e._e(),e._v(" "),t("router-link",{attrs:{to:{path:"canallist"}}},[t("el-button",{attrs:{type:"primary"}},[e._v("取消")])],1)],1),e._v(" "),t("el-col",{attrs:{span:6}}),e._v(" "),t("el-col",{attrs:{span:6}})],1)],1)],1)])},staticRenderFns:[]};var s=t("C7Lr")(r,a,!1,function(e){t("uvON")},"data-v-411580ee",null);o.default=s.exports},uvON:function(e,o){}});