webpackJsonp([1],{"2LoE":function(e,t,o){e.exports={default:o("aNMn"),__esModule:!0}},"2raJ":function(e,t){t.f={}.propertyIsEnumerable},"5JST":function(e,t,o){var r=o("2KLU"),a=o("ZuHZ"),n=o("WpJA"),l=o("ltXU"),s=o("hHwa").f;e.exports=function(e){var t=a.Symbol||(a.Symbol=n?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:l.f(e)})}},"5b1E":function(e,t,o){var r=o("RY2v"),a=o("xa7B"),n=o("2raJ");e.exports=function(e){var t=r(e),o=a.f;if(o)for(var l,s=o(e),i=n.f,u=0;s.length>u;)i.call(e,l=s[u++])&&t.push(l);return t}},"792n":function(e,t,o){"use strict";var r=o("2KLU"),a=o("1j1a"),n=o("uoC7"),l=o("Wtcz"),s=o("shwb"),i=o("Dpv6").KEY,u=o("2gH+"),f=o("cfNE"),c=o("U91k"),p=o("fifa"),m=o("+Tcy"),d=o("ltXU"),g=o("5JST"),h=o("5b1E"),y=o("RF0x"),_=o("xgeF"),b=o("+kaZ"),v=o("WXuS"),w=o("KKnT"),x=o("FHEs"),$=o("gwUl"),S=o("7ikt"),k=o("t167"),q=o("z+lr"),O=o("xa7B"),E=o("hHwa"),j=o("RY2v"),C=q.f,P=E.f,U=k.f,F=r.Symbol,D=r.JSON,J=D&&D.stringify,K=m("_hidden"),M=m("toPrimitive"),N={}.propertyIsEnumerable,T=f("symbol-registry"),L=f("symbols"),H=f("op-symbols"),R=Object.prototype,z="function"==typeof F&&!!O.f,A=r.QObject,I=!A||!A.prototype||!A.prototype.findChild,Y=n&&u(function(){return 7!=S(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(e,t,o){var r=C(R,t);r&&delete R[t],P(e,t,o),r&&e!==R&&P(R,t,r)}:P,W=function(e){var t=L[e]=S(F.prototype);return t._k=e,t},X=z&&"symbol"==typeof F.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof F},B=function(e,t,o){return e===R&&B(H,t,o),_(e),t=x(t,!0),_(o),a(L,t)?(o.enumerable?(a(e,K)&&e[K][t]&&(e[K][t]=!1),o=S(o,{enumerable:$(0,!1)})):(a(e,K)||P(e,K,$(1,{})),e[K][t]=!0),Y(e,t,o)):P(e,t,o)},Z=function(e,t){_(e);for(var o,r=h(t=w(t)),a=0,n=r.length;n>a;)B(e,o=r[a++],t[o]);return e},V=function(e){var t=N.call(this,e=x(e,!0));return!(this===R&&a(L,e)&&!a(H,e))&&(!(t||!a(this,e)||!a(L,e)||a(this,K)&&this[K][e])||t)},Q=function(e,t){if(e=w(e),t=x(t,!0),e!==R||!a(L,t)||a(H,t)){var o=C(e,t);return!o||!a(L,t)||a(e,K)&&e[K][t]||(o.enumerable=!0),o}},G=function(e){for(var t,o=U(w(e)),r=[],n=0;o.length>n;)a(L,t=o[n++])||t==K||t==i||r.push(t);return r},ee=function(e){for(var t,o=e===R,r=U(o?H:w(e)),n=[],l=0;r.length>l;)!a(L,t=r[l++])||o&&!a(R,t)||n.push(L[t]);return n};z||(s((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(o){this===R&&t.call(H,o),a(this,K)&&a(this[K],e)&&(this[K][e]=!1),Y(this,e,$(1,o))};return n&&I&&Y(R,e,{configurable:!0,set:t}),W(e)}).prototype,"toString",function(){return this._k}),q.f=Q,E.f=B,o("K61z").f=k.f=G,o("2raJ").f=V,O.f=ee,n&&!o("WpJA")&&s(R,"propertyIsEnumerable",V,!0),d.f=function(e){return W(m(e))}),l(l.G+l.W+l.F*!z,{Symbol:F});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),oe=0;te.length>oe;)m(te[oe++]);for(var re=j(m.store),ae=0;re.length>ae;)g(re[ae++]);l(l.S+l.F*!z,"Symbol",{for:function(e){return a(T,e+="")?T[e]:T[e]=F(e)},keyFor:function(e){if(!X(e))throw TypeError(e+" is not a symbol!");for(var t in T)if(T[t]===e)return t},useSetter:function(){I=!0},useSimple:function(){I=!1}}),l(l.S+l.F*!z,"Object",{create:function(e,t){return void 0===t?S(e):Z(S(e),t)},defineProperty:B,defineProperties:Z,getOwnPropertyDescriptor:Q,getOwnPropertyNames:G,getOwnPropertySymbols:ee});var ne=u(function(){O.f(1)});l(l.S+l.F*ne,"Object",{getOwnPropertySymbols:function(e){return O.f(v(e))}}),D&&l(l.S+l.F*(!z||u(function(){var e=F();return"[null]"!=J([e])||"{}"!=J({a:e})||"{}"!=J(Object(e))})),"JSON",{stringify:function(e){for(var t,o,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(o=t=r[1],(b(t)||void 0!==e)&&!X(e))return y(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!X(t))return t}),r[1]=t,J.apply(D,r)}}),F.prototype[M]||o("W4r7")(F.prototype,M,F.prototype.valueOf),c(F,"Symbol"),c(Math,"Math",!0),c(r.JSON,"JSON",!0)},Dpv6:function(e,t,o){var r=o("fifa")("meta"),a=o("+kaZ"),n=o("1j1a"),l=o("hHwa").f,s=0,i=Object.isExtensible||function(){return!0},u=!o("2gH+")(function(){return i(Object.preventExtensions({}))}),f=function(e){l(e,r,{value:{i:"O"+ ++s,w:{}}})},c=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!n(e,r)){if(!i(e))return"F";if(!t)return"E";f(e)}return e[r].i},getWeak:function(e,t){if(!n(e,r)){if(!i(e))return!0;if(!t)return!1;f(e)}return e[r].w},onFreeze:function(e){return u&&c.NEED&&i(e)&&!n(e,r)&&f(e),e}}},K61z:function(e,t,o){var r=o("H7IX"),a=o("ULQ5").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},MYli:function(e,t,o){o("5JST")("asyncIterator")},RF0x:function(e,t,o){var r=o("2uQd");e.exports=Array.isArray||function(e){return"Array"==r(e)}},S88q:function(e,t){},Tp4j:function(e,t,o){o("792n"),o("d5xd"),o("MYli"),o("xFwn"),e.exports=o("ZuHZ").Symbol},Yyxk:function(e,t,o){e.exports={default:o("Tp4j"),__esModule:!0}},aNMn:function(e,t,o){o("at0p"),o("MJJS"),e.exports=o("ltXU").f("iterator")},hRKE:function(e,t,o){"use strict";t.__esModule=!0;var r=l(o("2LoE")),a=l(o("Yyxk")),n="function"==typeof a.default&&"symbol"==typeof r.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};function l(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof a.default&&"symbol"===n(r.default)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":n(e)}},jOsB:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("hRKE"),a=o.n(r),n=o("3cXf"),l=o.n(n),s=o("a3Yh"),i=o.n(s);Vue.directive("loadmore",{bind:function(e,t){e.querySelector(".el-select-dropdown .el-select-dropdown__wrap").addEventListener("scroll",function(){this.scrollHeight-this.scrollTop<=this.clientHeight&&t.value()})}});var u={name:"addproject",data:function(){var e,t=/[0-9]{1,2}((,|\.)[0-9]{1,10})?%/,o=/^\d+$|^\d+[.]?\d+$/,r=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,a=/^[1-9]\d{0,5}$/,n=function(e,o,r){t.test(o)?r():r(new Error("格式如0.03%"))},l=function(e,t,r){o.test(t)?r():r(new Error("不能为空且只能是数字"))};return{plat:"",value1:"",value2:"",boutique:"",banner:"",new:"",hot:"",status:"",page:1,release:"",option1:[{value:0,label:"日利率"},{value:1,label:"月利率"},{value:2,label:"年利率"}],options:[{value:"boutique",label:"精品",key:"1"},{value:"banner",label:"小额现金贷",key:"2"},{value:"new",label:"最新口子",key:"3"},{value:"hot",label:"最热口子",key:"4"}],option2:[{value:"boutique",label:"精品",key:"1"},{value:"banner",label:"分期系列",key:"2"},{value:"new",label:"今日最新",key:"3"},{value:"hot",label:"最热爆款",key:"4"}],statusdata:[{id:1,name:"正常"},{id:0,name:"下架"}],typedata:[{id:1,name:"UV"},{id:2,name:"CPA"},{id:3,name:"CPS"}],dialogImageUrl:"",dialogVisible:!1,hideUpload:!1,limitCount:1,imageList:"",platformdata:"",userdata:"",releasedata:"",xjshow:!1,sshshow:!1,rateshow:!1,form:(e={name:"",image:"",slogan:"",max_price:"30000",apply_num:Math.ceil(47e3*Math.random()),apply_price:"",apply_duration:"",lending_time:"",user_price:"",rate:"0.03%"},i()(e,"lending_time",""),i()(e,"max_duration","14"),i()(e,"url",""),i()(e,"new",""),i()(e,"hot",""),i()(e,"sort","100"),i()(e,"status",""),i()(e,"platform",""),i()(e,"boutique",""),i()(e,"banner",""),i()(e,"new",""),i()(e,"hot",""),i()(e,"balance_type",""),i()(e,"os_show",""),i()(e,"apply_price",""),i()(e,"loan_cycle",""),i()(e,"rate_str","0.03%"),i()(e,"rate_type",""),e),test:"",id:"",pageCount:"",tabledata:"",imageurl:"",rules:{apply_num:[{required:!0,validator:l,trigger:"blur"}],balance_type:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],name:[{required:!0,message:"不可为空！",trigger:"blur"}],max_duration:[{required:!0,validator:l,trigger:"blur"}],sort:[{required:!0,validator:l,trigger:"blur"}],status:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],slogan:[{required:!0,message:"不可为空！",trigger:"blur"}],admin_id:[{required:!0,message:"不可为空！",trigger:["blur","change"]}],apply_duration:[{required:!0,validator:l,trigger:"blur"}],max_price:[{required:!0,validator:function(e,t,o){a.test(t)?o():o(new Error("输入为数字且最高1000000"))},trigger:"blur"}],apply_price:[{required:!0,message:"不可为空！",trigger:"blur"}],url:[{required:!0,validator:function(e,t,o){r.test(t)?o():o(new Error("请输入有效的url"))},trigger:"blur"}],rate:[{required:!0,validator:n,trigger:"blur"}],rate_str:[{required:!0,validator:n,trigger:"blur"}],user_price:[{required:!0,validator:l,trigger:"blur"}],loan_cycle:[{required:!0,message:"不可为空！",trigger:"blur"}]}}},created:function(){this.id=this.$route.query.id,this.getplatform(),this.getuserdata(),this.getreleasedata(),this.id&&(this.getformdata(),this.imageshow=!0,console.log(this.form))},computed:{},methods:{tiny:function(){window.location.href="https://www.sojson.com/batch_yaosuo.html"},getplatform:function(){var e=this;this.$get("product/platform?sort=-id").then(function(t){console.log(t),1===t.code?(e.platformdata=t.info,console.log(e.platformdata)):e.$message.error(t.message),e.loading=!1}).catch(function(){e.loading=!1})},changeplatform:function(){this.rateshow=!0},getreleasedata:function(){var e=this;this.$get("get-release-system").then(function(t){if(console.log(t),1===t.code){e.releasedata=t.info,console.log(e.releasedata);for(var o=0;o<e.releasedata.length;o++)e.releasedata[o].id=l()(e.releasedata[o].id)}else e.$message.error(t.message);e.loading=!1}).catch(function(){e.loading=!1})},loadMore:function(){var e=this;console.log(2222);var t=this;t.page!=t.pageCount?(t.page++,this.$get("admins?type=4&sort=-id&status=1&page="+t.page).then(function(o){if(1===o.code)for(var r=0;r<o.info.items.length;r++)t.userdata.push(o.info.items[r]);else e.$message.error("数据获取失败")}).catch(function(){e.loading=!1})):t.page=t.pageCount},getuserdata:function(){var e=this;this.$get("admins?type=4&sort=-id&status=1").then(function(t){console.log(t),1===t.code?(e.userdata=t.info.items,e.pageCount=t.info._meta.pageCount):e.$message.error(t.message),e.loading=!1}).catch(function(){e.loading=!1})},getformdata:function(){var e=this;this.$get("products/"+this.id).then(function(t){if(console.log(t),1===t.code){e.tableData=t.info,e.rateshow=!0,console.log(e.tableData);var o,r=[],n=[];e.form=e.tableData,n=e.form.os_show.split(","),console.log("arry",n);var l=[];n.map(function(e){""!==e&&void 0!=e&&l.push(e)}),l=l.join(","),console.log(void 0===l?"undefined":a()(l)),o=l.split(","),e.form.os_show=o,e.form.boutique&&r.push("boutique"),e.form.banner&&r.push("banner"),e.form.hot&&r.push("hot"),e.form.new&&r.push("new"),console.log(r),e.value1=r}else e.$message.error(t.message);e.loading=!1}).catch(function(){e.loading=!1})},onSubmit:function(e){var t=this;console.log(this.form.os_show);var o,r=[],a=[];for(var n in this.value1)console.log(this.value1[n]),r.push(this.value1[n]);for(var n in this.form.os_show)console.log(this.form.os_show[n]),a.push(this.form.os_show[n]);o=a.join(","),this.release=","+o+",",this.form.boutique=r.indexOf("boutique"),this.form.banner=r.indexOf("banner"),this.form.new=r.indexOf("new"),this.form.hot=r.indexOf("hot"),console.log(this.form.boutique),console.log(this.form.banner),console.log(this.form.new),console.log(this.form.hot),this.$refs[e].validate(function(e){if(!e)return t.$message.error("请完善红色提示内容"),!1;t.$post("products",{apply_price:t.form.apply_price,boutique:-1===t.form.boutique?0:1,banner:-1===t.form.banner?0:1,hot:-1===t.form.hot?0:1,new:-1===t.form.new?0:1,os_show:t.release,rate_type:t.form.rate_type,loan_cycle:t.form.loan_cycle,name:t.form.name,image:t.imageurl,slogan:t.form.slogan,max_price:t.form.max_price,user_price:t.form.user_price,apply_num:t.form.apply_num,apply_duration:t.form.apply_duration,rate:t.form.rate,platform:t.form.platform,max_duration:t.form.max_duration,url:t.form.url,sort:t.form.sort,status:t.form.status,balance_type:t.form.balance_type,admin_id:t.form.admin_id,rate_str:t.form.rate_str}).then(function(e){console.log(e),1===e.code?(t.$message({message:e.message,type:"success"}),t.$router.push("/productlist")):e.info.image?t.$message.error(e.info.image[0]):t.$message.error(e.message)})})},onEdit:function(e){var t,o=this,r=[],n=[];for(var l in this.value1)console.log(this.value1[l]),r.push(this.value1[l]);for(var l in this.form.os_show)console.log(this.form.os_show[l]),n.push(this.form.os_show[l]);console.log(n),t=n.join(","),console.log(this.release),this.release=","+t+",",console.log(r),console.log(void 0===r?"undefined":a()(r)),this.form.boutique=r.indexOf("boutique"),this.form.banner=r.indexOf("banner"),this.form.new=r.indexOf("new"),this.form.hot=r.indexOf("hot"),console.log(this.form.boutique),console.log(this.form.banner),console.log(this.form.new),console.log(this.form.hot),console.log(this.tableData.image),console.log(this.imageurl),this.$refs[e].validate(function(e){if(!e)return o.$message.error("请完善红色提示内容"),!1;o.$put("products/"+o.id,{image:o.imageurl?o.imageurl:o.tableData.image,boutique:-1===o.form.boutique?0:1,banner:-1===o.form.banner?0:1,hot:-1===o.form.hot?0:1,new:-1===o.form.new?0:1,name:o.form.name,slogan:o.form.slogan,max_price:o.form.max_price,user_price:o.form.user_price,apply_num:o.form.apply_num,apply_duration:o.form.apply_duration,rate:o.form.rate,platform:o.form.platform,os_show:o.release,apply_price:o.form.apply_price,rate_type:o.form.rate_type,loan_cycle:o.form.loan_cycle,rate_str:o.form.rate_str,max_duration:o.form.max_duration,url:o.form.url,sort:o.form.sort,status:o.form.status,balance_type:o.form.balance_type,admin_id:o.form.admin_id}).then(function(e){console.log(e),1===e.code?(o.$message({message:e.message,type:"success"}),o.$router.push("/productlist")):o.$message.error(e.message)})}),this.$emit("closedialog")},addAttachment:function(e){var t=this;this.imageUrl=URL.createObjectURL(e.file),console.log(this.imageUrl),this.fileData=e.file,console.log(this.fileData);var o=new FormData;o.append("file",this.fileData),axios({method:"post",url:"http://api-backend.5youfenqi.com/upload-to-aliyun_oss?type=product",data:o,config:{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+localStorage.getItem("token")}}}).then(function(e){console.log(e),1==e.data.code?(t.imageurl=e.data.info.url,t.$message({message:"上传成功",type:"success"})):t.$message.error(e.data.message)}).catch(function(e){t.$message.error(e.message)})},resetForm:function(e){this.$refs[e].resetFields()},imgChange:function(e,t){this.hideUpload=t.length>=this.limitCount,t&&this.$refs.uploadElemet.clearValidate()},handleRemove:function(e,t){console.log(e,t),this.hideUpload=t.length>=this.limitCount},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleChange:function(e,t){this.fileList=t.slice(-1),this.imageshow=!1}}},f={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"加载中"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"container-title"},[e._v("新建产品")]),e._v(" "),o("el-row",[o("el-form",{ref:"form",staticClass:"item-add-list",attrs:{model:e.form,rules:e.rules,data:e.tableData}},[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"产品名称:",prop:"name"}},[o("el-input",{attrs:{type:"text"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-form-item",{attrs:{label:"描述:",prop:"slogan"}},[o("el-input",{model:{value:e.form.slogan,callback:function(t){e.$set(e.form,"slogan","string"==typeof t?t.trim():t)},expression:"form.slogan"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"上架模块:",prop:"hot"}},[[o("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.option2,function(e){return o("el-option",{key:e.key,attrs:{label:e.label,value:e.value}})}),1)]],2)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-form-item",{attrs:{label:"申请人数",prop:"apply_num"}},[o("el-input",{model:{value:e.form.apply_num,callback:function(t){e.$set(e.form,"apply_num","string"==typeof t?t.trim():t)},expression:"form.apply_num"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"贷款最大周期（天）",prop:"max_duration"}},[o("el-input",{model:{value:e.form.max_duration,callback:function(t){e.$set(e.form,"max_duration","string"==typeof t?t.trim():t)},expression:"form.max_duration"}}),e._v(" "),o("span",{staticStyle:{color:"#999"}},[e._v("老版本需要填写")])],1)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-form-item",{attrs:{label:"最高借款期限:",prop:"loan_cycle"}},[o("el-input",{attrs:{type:"text"},model:{value:e.form.loan_cycle,callback:function(t){e.$set(e.form,"loan_cycle","string"==typeof t?t.trim():t)},expression:"form.loan_cycle"}})],1)],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"申请最高价",prop:"max_price"}},[o("el-input",{model:{value:e.form.max_price,callback:function(t){e.$set(e.form,"max_price","string"==typeof t?t.trim():t)},expression:"form.max_price"}}),e._v(" "),o("span",{staticStyle:{color:"#999"}},[e._v("老版本需要填写")])],1)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-form-item",{attrs:{label:"申请金额范围:",prop:"apply_price"}},[o("el-input",{attrs:{type:"text"},model:{value:e.form.apply_price,callback:function(t){e.$set(e.form,"apply_price","string"==typeof t?t.trim():t)},expression:"form.apply_price"}})],1)],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"产品链接:",prop:"url"}},[o("el-input",{attrs:{type:"text"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url","string"==typeof t?t.trim():t)},expression:"form.url"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"利率选择:",prop:"rate_type"}},[[o("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeplatform},model:{value:e.form.rate_type,callback:function(t){e.$set(e.form,"rate_type",t)},expression:"form.rate_type"}},e._l(e.option1,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2)],1),e._v(" "),o("el-col",{attrs:{span:6}},[e.rateshow?o("el-form-item",{attrs:{label:"利率",prop:"rate"}},[o("el-input",{attrs:{placeholder:"例如0.03%"},model:{value:e.form.rate,callback:function(t){e.$set(e.form,"rate","string"==typeof t?t.trim():t)},expression:"form.rate"}}),e._v(" "),o("span",{staticStyle:{color:"#999"}},[e._v("老版本需要填写")])],1):e._e()],1),e._v(" "),o("el-col",{attrs:{span:6}},[e.rateshow?o("el-form-item",{attrs:{label:"利率",prop:"rate_str"}},[o("el-input",{attrs:{placeholder:"例如0.03%"},model:{value:e.form.rate_str,callback:function(t){e.$set(e.form,"rate_str","string"==typeof t?t.trim():t)},expression:"form.rate_str"}})],1):e._e()],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"状态:",prop:"status"}},[o("el-select",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._l(e.statusdata,function(e){return[o("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-form-item",{attrs:{label:"排序:",prop:"sort"}},[o("el-input",{attrs:{type:"text"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort","string"==typeof t?t.trim():t)},expression:"form.sort"}}),e._v(" "),o("span",{staticStyle:{color:"#999"}},[e._v("数字越小越靠前,最小 0, 最大 100")])],1)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"系统平台:",prop:"platform"}},[o("el-select",{attrs:{placeholder:"请选择平台",clearable:"true"},model:{value:e.form.platform,callback:function(t){e.$set(e.form,"platform",t)},expression:"form.platform"}},[e._l(e.platformdata,function(e){return[o("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"结算方式:",prop:"balance_type"}},[o("el-select",{model:{value:e.form.balance_type,callback:function(t){e.$set(e.form,"balance_type",t)},expression:"form.balance_type "}},[e._l(e.typedata,function(e){return[o("el-option",{attrs:{label:e.name,value:e.id}})]})],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-form-item",{attrs:{label:"用户单价:",prop:"user_price"}},[o("el-input",{attrs:{type:"text"},model:{value:e.form.user_price,callback:function(t){e.$set(e.form,"user_price","string"==typeof t?t.trim():t)},expression:"form.user_price"}})],1)],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"商户选择:",prop:"admin_id"}},[[o("el-select",{directives:[{name:"loadmore",rawName:"v-loadmore",value:e.loadMore,expression:"loadMore"}],attrs:{placeholder:"请选择"},model:{value:e.form.admin_id,callback:function(t){e.$set(e.form,"admin_id",t)},expression:"form.admin_id"}},e._l(e.userdata,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)]],2)],1),e._v(" "),o("el-col",{attrs:{span:10,offset:2}},[o("el-form-item",{attrs:{label:"多端选择:",prop:"os_show"}},[[o("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.form.os_show,callback:function(t){e.$set(e.form,"os_show",t)},expression:"form.os_show"}},e._l(e.releasedata,function(e){return o("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}),1)]],2)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("p",{staticStyle:{"font-size":"14px",color:"#606266","margin-bottom":"10px"}},[o("span",{staticStyle:{color:"#f56c6c"}},[e._v("*")]),e._v("\n                                上传图片\n                                "),o("span",{staticStyle:{"margin-left":"20px",cursor:"pointer"}},[o("a",{staticClass:"document-btn",staticStyle:{color:"rgb(60, 141, 188)"},attrs:{target:"_blank",href:"https://www.sojson.com/batch_yaosuo.html"}},[e._v("https://www.sojson.com/batch_yaosuo.html")])])]),e._v(" "),o("el-form-item",{ref:"uploadElemet",attrs:{prop:"imageList"}},[o("el-upload",{staticClass:"upload-demo1",attrs:{"on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture","on-change":e.handleChange1,"http-request":e.addAttachment}},[o("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),o("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.imageurl,callback:function(t){e.imageurl="string"==typeof t?t.trim():t},expression:"imageurl"}}),e._v(" "),e.imageshow?o("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.form.image,alt:""}}):e._e()],1)],1),e._v(" "),o("el-col",{staticStyle:{"margin-top":"200px"},attrs:{span:10}},[e.tableData?e._e():o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),e.tableData?o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onEdit("form")}}},[e._v("保存")]):e._e(),e._v(" "),o("router-link",{attrs:{to:{path:"productlist"}}},[o("el-button",{attrs:{type:"primary"}},[e._v("取消")])],1)],1),e._v(" "),o("el-col",{staticStyle:{"margin-top":"150px"},attrs:{span:10}}),e._v(" "),o("el-col",{attrs:{span:10,offset:2}})],1)],1)],1)])},staticRenderFns:[]};var c=o("C7Lr")(u,f,!1,function(e){o("S88q")},null,null);t.default=c.exports},ltXU:function(e,t,o){t.f=o("+Tcy")},t167:function(e,t,o){var r=o("KKnT"),a=o("K61z").f,n={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return l&&"[object Window]"==n.call(e)?function(e){try{return a(e)}catch(e){return l.slice()}}(e):a(r(e))}},xFwn:function(e,t,o){o("5JST")("observable")},xa7B:function(e,t){t.f=Object.getOwnPropertySymbols},"z+lr":function(e,t,o){var r=o("2raJ"),a=o("gwUl"),n=o("KKnT"),l=o("FHEs"),s=o("1j1a"),i=o("bBK/"),u=Object.getOwnPropertyDescriptor;t.f=o("uoC7")?u:function(e,t){if(e=n(e),t=l(t,!0),i)try{return u(e,t)}catch(e){}if(s(e,t))return a(!r.f.call(e,t),e[t])}}});