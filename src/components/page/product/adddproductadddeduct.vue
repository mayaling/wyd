<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">新增流量详情</div>
                <el-row type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6">
                            <el-form :model="form" ref="form" :rules="rules" class="item-add-list">
                                    <el-form-item label="产品名称:" prop="name">
                                            <el-input v-model.trim="form.name" type="text" disabled></el-input>
                                        </el-form-item>
                                    <el-form-item label="用户单价:" prop="price">
                                    <el-input v-model.trim="form.price" type="text" disabled></el-input>
                                    </el-form-item>
                                    <el-form-item label="用户流量数:" prop="num">
                                            <el-input v-model.trim="form.num" type="text"></el-input>
                                            </el-form-item>
                                            <el-form-item label="结算方式:" prop="balance_type">
                                                    <el-input v-model.trim="form.balance_type" type="text" disabled></el-input>
                                                    </el-form-item>
                                    <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" style='margin-top:40px'>提交</el-button>
                                    <!-- <el-button type="primary" v-if="tableData" @click="onEdit('form')" style='margin-top:40px'>保存</el-button> -->
                                    <router-link :to="{path:'productlist'}">
                                        <el-button>取消</el-button>
                                    </router-link>
                        </el-form>
                    </el-col>
                    <el-col :span="6"></el-col>
                    <el-col :span="6"></el-col>
                    </el-row>
                
            </div>
        </div>
    </template>
    
    <script>
        export default {
            name: 'addproject',
            data() {
                // var re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(198)|(199)|(166)|(165)|(146)|(148))+\d{8})$/;
                var re = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
                var amtRule = (rule, value, callback) => {
                    if (!re.test(value)) {
                        callback(new Error('请输入正确的格式'));
                    } else {
                        callback();
                    }
                };
                return {
                    form: {
                       name:"",
                       num:"",
                       price:"",
                       balance_type:'',
                    },
                    time:"",
                    id:'',
                    data:"",
                    channeldata:"",
                    tableData:"",
                    rules: {
                        name: [{
                            required: true,
                            message: '不可为空！',
                            trigger: 'blur'
                        }],
                        price: [{
                            required: true,
                            message: '不可为空！',
                            trigger: 'blur'
                        }],
                        balance_type: [{
                            required: true,
                            message: "不可为空！",
                            trigger: 'blur'
                        }],
                        num: [{
                            required: true,
                            message: '不可为空！',
                            trigger: 'blur'
                        }],
                    }
                }
            },
            created() {
                // this.getchanneldata();
                this.id = this.$route.query.id
                this.form.name = this.$route.query.name
                this.form.balance_type = this.$route.query.balance_type
                this.form.price = this.$route.query.user_price
                if(this.form.balance_type === 1){
                    this.form.balance_type = "UV"
                }else if(this.form.balance_type === 2){
                    this.form.balance_type = "CPA"
                }else{
                    this.form.balance_type = "CPS"
                }
                console.log(this.form.balance_type )
                // this.row = this.$route.query.row
                // console.log(this.row)
                // if(this.id){
                //     this.getformdata()
                // }
            },
            computed: {
    
            },
            methods: {
                getchanneldata(){
                    this.$get('channels').then((res) => {
                        if(res.code === 1){
                            this.channeldata = res.info.items;
                        }
                        // console.log(res)
                    }).catch( () => {

                    })
                },
                // 提交数据
                onSubmit(formName) {
                    this.$message.error("请完善内容");
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            this.$post('product/deduct', {
                                name: this.form.name,
                                num: this.form.num,
                                price:this.form.price,
                                product_id :this.id
                            }).then((res) => {
                                console.log(res)
                                if(res.code === 1){
                                    this.$message({
                                        message: res.message,
                                        type: 'success'
                                    });
                                    this.$router.push("/productlist")
                                }else{
                                    if(!res.info.name){
                                        this.$message.error(res.message);
                                    }else{
                                        this.$message.error(res.info.name[0]);
                                    }
                                }
                            })
                        } else {
                            return false;
                        }
                    });
                },
            }
        }
    </script>
    
    
    <style scoped>
    
    </style>