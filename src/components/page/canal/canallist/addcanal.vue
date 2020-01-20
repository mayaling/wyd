<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">新增渠道</div>
            <el-form :model="form" ref="form" :rules="rules" class="item-add-list">
                    <el-row type="flex" class="row-bg" justify="space-around">
                            <el-col :span="6">
                    <!-- <el-row :gutter="10" class="clearfix">
                        <el-col :span="12"> -->
                            <el-form-item label="渠道名称:" prop="name">
                            <el-input v-model.trim="form.name" type="text"></el-input>
                          </el-form-item>
                        <!-- </el-col>
                        <el-col :span="12"> -->
                            <el-form-item label="APP下载链接:" prop="app_url">
                            <el-input v-model.trim="form.app_url" ></el-input>
                          </el-form-item>
                        <!-- </el-col>
                    </el-row>
                    <el-row :gutter="10" class="clearfix">
                        <el-col :span="12"> -->
                                <!-- <el-form-item label="系统平台:" prop="platform">
                                        <el-select v-model="form.platform" placeholder="请选择平台" clearable="true">
                                            <template v-for="item in platformdata">
                                                <el-option :label="item.name" :value="item.id"></el-option>
                                            </template>
                                        </el-select>
                                  </el-form-item> -->
                            <el-form-item label="渠道联系人名称" prop="admin_id">
                                    <!-- <el-select v-model="form.admin_id" placeholder="请选择联系人名称" v-loadmore="loadMore">
                                        <template v-for="item in admindata">
                                                <el-option :label="item.name" :value="item.id"></el-option>
                                        </template>
                                    </el-select> -->
                                    <el-select v-model="form.admin_id" placeholder="请选择联系人名称" v-loadmore="loadMore" filterable>
                                        <template v-for="item in admindata">
                                            <el-option :key="item.id" :label="item.name" :value="item.id"></el-option>
                                        </template>
                                      </el-select>
                                      <!-- <el-select v-model="form.admin_id" multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                                            <el-option :key="item.id" :label="item.name" :value="item.id"></el-option>
                                    </el-select> -->
                          </el-form-item>
                        <!-- </el-col>
                        <el-col :span="12"> -->
                            <el-form-item label="渠道模板类型" prop="template">
                                <el-select v-model="form.template" placeholder="请选择模板类型">
                                    <template v-for="item in templatedata">
                                            <el-option :label="item.name" :value="item.id"></el-option>
                                    </template>
                                  </el-select>
                          </el-form-item>
                        <!-- </el-col>
                    </el-row>
                    <el-row :gutter="10" class="clearfix">
                            <el-col :span="12"> -->
                                <el-form-item label="合作方式" prop="cooperation_type">
                                        <el-select v-model="form.cooperation_type" placeholder="请选择合作方式">
                                                <template v-for="item in typedata">
                                                        <el-option :label="item.name" :value="item.id"></el-option>
                                                </template>
                                                <!-- <el-option label="UV" value="1"></el-option>
                                                <el-option label="注册" value="2"></el-option>
                                                <el-option label="激活" value="3"></el-option>
                                                <el-option label="其他" value="4"></el-option> -->
                                              </el-select>
                              </el-form-item>
                            <!-- </el-col>
                        </el-row>
                    <el-row :gutter="10" class="clearfix">
                      <el-col :span="20" :offset="4"> -->
                            <!-- <el-button type="primary" @click="onSubmit('form')" style='margin-top:40px'>确认添加</el-button> -->
                            <el-button v-if="!tableData" type="primary" @click="onSubmit('form')" style='margin-top:40px'>提交</el-button>
                            <el-button v-if="tableData" type="primary" @click="onEdit('form')" style='margin-top:40px'>保存</el-button>
                            <router-link :to="{path:'canallist'}"><el-button type="primary">取消</el-button></router-link>
                            <!-- <el-button @click="resetForm('form')">重置</el-button> -->
                        </el-col>
                        <el-col :span="6"></el-col>
                        <el-col :span="6"></el-col>
                  </el-row>

                    </el-form>
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
        name: 'addcanal',
        data() {
            // var re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(198)|(199)|(166)|(165)|(146)|(148))+\d{8})$/;
            var re = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
            // var amtRule = (rule, value, callback) => {
            //     if (!re.test(value)) {
            //         callback(new Error('请输入正确的格式'));
            //     } else {
            //         callback();
            //     }
            // };
            return {
                form: {
                    name: "",
                    app_url: "",
                    startDate: "",
                    expDate: "",
                    amt: "",
                    memo: "",
                    cooperation_type:"",
                    template:"",
                    admin_name:'',
                    admin_id:"",
                },
                page:1,
                pageCount:"",
                admindata:"",
                tableData:"",
                templatedata:[{
                    id:1,
                    name:"默认模板"
                }, {id:2,
                    name:"中达"
                }],
                typedata:[{
                    id:1,
                    name:"UV"
                },
                {
                    id:2,
                    name:"注册"
                },
                {
                    id:3,
                    name:"激活"
                }, {
                    id:4,
                    name:"其它"
                }],
                rules: {
                    name: [{
                        required: true,
                        message: '不可为空！',
                        trigger: 'blur'
                    }],
                    admin_id: [{
                        required: true,
                        message: '不可为空！',
                        trigger: ['blur',"change"]
                    }],
                    template: [{
                        required: true,
                        message: '不可为空！',
                        trigger: ['blur',"change"]
                    }],
                    cooperation_type: [{
                        required: true,
                        message: '不可为空！',
                        trigger: ['blur',"change"]
                    }],
                    // expDate: [{
                    //     required: true,
                    //     message: '不可为空！',
                    //     trigger: 'blur'
                    // }],
                }
            }
        },
        created() {
             this.id = this.$route.query.id
             this.getadmindata()
            // this.row = this.$route.query.row
            // console.log(this.row)
            if(this.id){
                this.getformdata()
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
                        this.$get('admins?type=3&status=1&sort=-id&page='+_this.page).then((res) => {
                            if (res.code === 1) {
                                for(var i=0;i<res.info.items.length;i++){
                                    _this.admindata.push(res.info.items[i])
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
            // 渠道联系人
                getadmindata(){
                    this.$get('admins?type=3&status=1&sort=-id').then((res) => {
                        console.log(res)
                        if(res.code===1){
                            this.admindata = res.info.items;
                            this.pageCount = res.info._meta.pageCount
                            console.log(this.admindata)
                        }else{
                            this.$message.error(res.message);
                        }
                        this.loading = false
                    }).catch( () => {
                        this.loading = false
                    })
                },
              getformdata(){
                this.$get('channels/'+this.id,).then((res) => {
                    console.log(res)
                    if(res.code===1){
                        this.tableData = res.info;
                        console.log(this.tableData)
                            // if(this.tableData.template === 1){
                            //     this.tableData.template = "默认模板"
                            // }
                            // if(this.tableData.cooperation_type === 1){
                            //     this.tableData.cooperation_type = "UV"
                            // }else if(this.tableData.cooperation_type === 2){
                            //     this.tableData.cooperation_type = "注册"
                            // }else if(this.tableData.cooperation_type === 3){
                            //     this.tableData.cooperation_type = "激活"
                            // }else{
                            //     this.tableData.cooperation_type = "其他"
                            // }
                        this.form = this.tableData;
                        console.log(this.form)
                    }else{
                        this.$message.error(res.message);
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
                        this.$post('channels', {
                            name: this.form.name,
                            admin_id:this.form.admin_id,
                            cooperation_type: this.form.cooperation_type,
                            app_url: this.form.app_url,
                            template: this.form.template,
                        }).then((res) => {
                            if (res.code === 1) {
                                this.$message({
                                    message: res.message,
                                    type: 'success'
                                });
                                this.$router.push('/canallist');
                            } else {
                                this.$message.error(res.message);
                            }
                        })
                    } else {
                        this.$message.error('请完善红色提示内容');
                        return false;
                    }
                });
                // this.$emit('closedialog');
            },
             // 保存编辑
            onEdit(formName) {
                // if(this.tableData.template === "默认模板"){
                //     this.tableData.template = 1
                // }else{
                //     return;
                // }
                // if(this.tableData.cooperation_type === "UV"){
                //     this.tableData.cooperation_type = 1
                // }else if(this.tableData.cooperation_type === "注册"){
                //     this.tableData.cooperation_type = 2
                // }else if(this.tableData.cooperation_type === "激活"){
                //     this.tableData.cooperation_type = 3
                // }else{
                //     this.tableData.cooperation_type = 4
                // }
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.$put('channels/'+this.id, {
                            name: this.form.name,
                            admin_id: this.form.admin_id,
                            cooperation_type: this.form.cooperation_type,
                            app_url: this.form.app_url,
                            template: this.form.template,
                        }).then((res) => {
                            if(res.code === 1){
                                this.$message({
                                    message: res.message,
                                    type: 'success'
                                });
                                this.$router.push("/canallist")
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

</style>
