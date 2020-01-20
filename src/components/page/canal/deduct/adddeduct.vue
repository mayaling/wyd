<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">新增扣除</div>
                <el-row type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6">
                            <el-form :model="form" ref="form" :rules="rules" class="item-add-list">
                                    <el-form-item label="渠道:" prop="channel_id">
                                            <el-select v-model="form.channel_id" placeholder="请选择渠道"  v-loadmore="loadMore">
                                                    <template v-for="item in channeldata">
                                                <el-option :label="item.name" :value="item.id"></el-option>
                                             </template> 
                                            </el-select>
                                        </el-form-item>
                                    <el-form-item label="扣除后的比例:" prop="deduct" >
                                    <el-input v-model.trim="form.deduct" type="text" placeholder="例如0.03"></el-input>
                                    </el-form-item>
                                    <span class="choosedate">日期选择:</span>
                                    <el-form-item>
                                            <!-- <el-date-picker  v-model="form.date_time" type="date" placeholder="选择日期">
                                          </el-date-picker> -->
                                          <el-row :gutter="20">
                                                <el-col :span="8">
                                                        <el-select v-model="form.type" placeholder="日期形式" @change="changedatetype()" v-if="typeshow">
                                                        <template v-for="item in timetypedata">
                                                                <el-option :label="item.name" :value="item.id"></el-option>
                                                        </template>
                                                        </el-select>
                                                        <el-select v-model="form.type" disabled placeholder="请选择" v-if="type1show">
                                                            <el-option v-for="item in timetypedata"  :label="item.name" :value="item.id">
                                                            </el-option>
                                                        </el-select>
                                                </el-col>
                                                <el-col :span="16" v-if="dayshow">
                                                    <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"  format="yyyy 年 MM 月 dd 日"
                                                    value-format="yyyy-MM-dd" @change="search"></el-date-picker>
                                                </el-col>
                                                <el-col :span="16" v-if="timeshow">
                                                    <el-date-picker v-model="form.date_time" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" v-if="addshow"></el-date-picker>
                                                    <el-date-picker v-model="form.date_time" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" disabled v-if="editshow"></el-date-picker>
                                                </el-col>
                                          </el-row>
                                        <!-- <el-input v-model.trim="form.name" type="text"></el-input> -->
                                    </el-form-item>
                                    <!-- <el-form-item label="日期格式:" prop="status">
                                        <el-select v-model="form.status" placeholder="日期模式">
                                            <template v-for="item in statusdata">
                                                    <el-option :label="item.name" :value="item.id"></el-option>
                                            </template>
                                        </el-select>
                                    </el-form-item> -->
                                    <el-form-item label="状态:" prop="status" >
                                            <el-select v-model="form.status" placeholder="请选择状态">
                                                <template v-for="item in statusdata">
                                                        <el-option :label="item.name" :value="item.id"></el-option>
                                                </template>
                                            </el-select>
                                    </el-form-item>
                                    <el-form-item label="起扣量:" prop="min_uv">
                                            <el-input v-model.trim="form.min_uv" type="text"></el-input>
                                        </el-form-item>
                                   
                                    <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" style='margin-top:40px'>提交</el-button>
                                    <el-button type="primary" v-if="tableData" @click="onEdit('form')" style='margin-top:40px'>保存</el-button>
                                    <router-link :to="{path:'deduct'}"><el-button type="primary">取消</el-button></router-link>

                                    <!-- <el-button @click="resetForm('form')">重置</el-button> -->
                        </el-form>
                    </el-col>
                    <el-col :span="6"></el-col>
                    <el-col :span="6"></el-col>
                    </el-row>
                
            </div>
        </div>
    </template>
    
    <script>
        Vue.directive('loadmore', {
　　　　bind(el, binding) {
 
　　　　// 获取element-ui定义好的scroll盒子
　　　　const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap');
 
　　　　SELECTWRAP_DOM.addEventListener('scroll', function() {

        /*
        * scrollHeight 获取元素内容高度(只读)
        * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
        * clientHeight 读取元素的可见高度(只读)
        * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
        * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
        */
    　　　　const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight;
    
    　　　　if(CONDITION) {
    　　　　　　binding.value();
    　　　　}
    　　　});
    　　}
    })
        export default {
            name: 'addproject',
            data() {
                // var re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(198)|(199)|(166)|(165)|(146)|(148))+\d{8})$/;
                var re = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
                var re1 =/^0(\.[0-9]{0,2})$/;
                
                var rateRule = (rule, value, callback) => {
                    if (!re1.test(value)) {
                        callback(new Error('0-1之间的数,保留小数点后两位'));
                    } else {
                        callback();
                    }
                };
                return {
                    addshow:true,
                    editshow:false,
                    typeshow:true,
                    timeshow:true,
                    dayshow:false,
                    type1show:false,
                    form: {
                        deduct: "",
                        date_time: "",
                        status: "",
                        channel_id:"",
                        min_uv:"0",
                        type:"",
                    },
                    statusdata:[{
                        id:1,
                        name:"启用"
                    },
                    {
                        id:0,
                        name:"禁用"
                    }],
                    timetypedata:[{
                        id:0,
                        name:"天"
                    },
                    {
                        id:1,
                        name:"时间段"
                    }],
                    page:1,
                    pageCount:"",
                    time:"",
                    date:"",
                    id:'',
                    data:"",
                    channeldata:"",
                    tableData:"",
                    rules: {
                        channel_id: [{
                            required: true,
                            message: '不可为空！',
                            trigger: ['blur',"change"]
                        }],
                        deduct: [{
                            required: true,
                            validator:rateRule,
                            trigger: 'blur'
                        }],
                        date_time: [{
                            required: true,
                            message: "不可为空！",
                            trigger: ['blur',"change"]
                        }],
                        status: [{
                            required: true,
                            message: '不可为空！',
                            trigger: ['blur',"change"]
                        }],
                    }
                }
            },
            created() {
                this.getchanneldata();
                this.id = this.$route.query.id
                // this.row = this.$route.query.row
                // console.log(this.row)
                if(this.id){
                    this.getformdata()
                    this.typeshow = false
                    this.type1show = true
                    this.editshow = true;
                    this.addshow = false;
                }
            },
            computed: {
    
            },
            methods: {
                loadMore() {
        　　　　　　console.log(2222) // 这里可以做你想做的任何事 
                    var _this = this;
                    if(_this.page != _this.pageCount){
                        _this.page++;
                        this.$get('channels?sort=-id&status=1&page='+_this.page).then((res) => {
                            if (res.code === 1) {
                                for(var i=0;i<res.info.items.length;i++){
                                    _this.channeldata.push(res.info.items[i])
                                }
                            } else {
                                this.$message.error('数据获取失败');
                            }
                            }).catch(() => {
                            this.loading = false
                        })
                    }else{
                        _this.page = _this.pageCount
                        return;
                    }
        　　　　},
                changedatetype(){
                    if(!this.form.type){
                        this.timeshow = true;
                        this.dayshow = false;
                    }else{
                        this.timeshow = false;
                        this.dayshow = true;
                    }
                },
                getchanneldata(){
                    this.$get('channels?sort=-id&status=1').then((res) => {
                        if(res.code === 1){
                            this.channeldata = res.info.items;
                            this.pageCount = res.info._meta.pageCount
                        }
                        // console.log(res)
                    }).catch( () => {

                    })
                },
                // 编辑进来获取表单的内容
                getformdata(){
                    this.$get('deducts/'+this.id).then((res) => {
                        if(res.code === 1){
                            this.tableData = res.info;
                            console.log(this.tableData)
                            this.tableData["type"] = 0
                            // this.tableData.push("type":"1")
                            // if(this.tableData.status == 1){
                            //     this.tableData.status = "开启"
                            // }else{
                            //     this.tableData.status = "关闭"
                            // }
                            this.form = this.tableData;
                        }else{
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch( () => {
                        this.loading = false
                    })
                },
                //提交数据
                onSubmit(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            this.$post('deducts', {
                                channel_id: this.form.channel_id,
                                deduct: this.form.deduct,
                                date_time:this.form.date_time,
                                status:this.form.status,
                                start_date:this.time?this.time[0]:"",
                                end_date:this.time?this.time[1]:"",
                                type:this.form.type?this.form.type:this.form.type=0,
                                min_uv:this.form.min_uv
                            }).then((res) => {
                                console.log(res)
                                if(res.code === 1){
                                    this.$message({
                                        message: res.message,
                                        type: 'success'
                                    });
                                    this.$router.push("/deduct")
                                }else{
                                    if(!res.info.name){
                                        this.$message.error(res.message);
                                    }else{
                                        this.$message.error(res.info.name[0]);
                                    }
                                }
                            })
                        } else {
                            this.$message.error("请完善红色提示内容");
                            return false;
                        }
                    });
                    // this.$emit('closedialog');  
                },
                
                onEdit(formName) {
                    // if(this.form.status == "开启"){
                    //         this.form.status = 1
                    //     }else{
                    //         this.form.status = 0
                    //     }
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            this.$put('deducts/'+this.id, {
                                channel_id: this.form.channel_id,
                                deduct: this.form.deduct,
                                date_time:this.form.date_time,
                                status:this.form.status,
                                start_date:this.time?this.time[0]:"",
                                end_date:this.time?this.time[1]:"",
                                type:this.form.type?this.form.type:this.form.type=0,
                                min_uv:this.form.min_uv
                            }).then((res) => {
                                console.log(res)
                                if(res.code === 1){
                                    this.$message({
                                        message: res.message,
                                        type: 'success'
                                    });
                                    this.$router.push("/deduct")
                                }else{
                                    this.$message.error(res.message);
                                }
                            })
                        } else {
                            this.$message.error("请完善红色提示内容");
                            return false;
                        }
                    });
                    // this.$emit('closedialog');  
                },
                resetForm(formName) {
                    this.$refs[formName].resetFields();
                }
            }
        }
    </script>
    
    
    <style scoped>
    .choosedate{
        text-align: right;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    </style>