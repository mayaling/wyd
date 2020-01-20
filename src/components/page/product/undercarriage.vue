<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">定量下架</div>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6">
                        <el-form :model="form" ref="form" :rules="rules" class="item-add-list">
                                <el-form-item label="时间:" prop="quantity_off_start_time">
                                        <el-date-picker v-model="form.quantity_off_start_time" type="datetime" placeholder="选择日期时间"  format="yyyy-MM-dd HH:mm:ss"
                                        value-format="yyyy-MM-dd HH:mm:ss">
                                      </el-date-picker>
                                </el-form-item>
                                <el-form-item label="数量:" prop="quantity_off_num">
                                <el-input v-model.trim="form.quantity_off_num" type="text"></el-input>
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
            var re1 = /^[0-9]*$/
            var amtRule = (rule, value, callback) => {
                if (!re.test(value)) {
                    callback(new Error('请输入正确的格式'));
                } else {
                    callback();
                }
            };
            var numRule = (rule, value, callback) => {
                if (!re1.test(value)) {
                    callback(new Error('非负数'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                   name:"",
                   num:"",
                   time:"",
                   price:"",
                   balance_type:'',
                   quantity_off_start_time:"",
                   quantity_off_num:"",
                },
                quantity_off_start_time:"",
                quantity_off_num:"",
                time:"",
                id:'',
                data:"",
                channeldata:"",
                tableData:"",
                rules: {
                    quantity_off_start_time: [{
                        required: true,
                        message: '不可为空！',
                        trigger: 'blur'
                    }],
                    quantity_off_num: [{
                        required: true,
                        validator: numRule,
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
            this.form.quantity_off_num = this.$route.query.quantity_off_num
            this.form.quantity_off_start_time = this.$route.query.quantity_off_start_time
            console.log( this.form.quantity_off_num)
            console.log(this.form.quantity_off_start_time )
            // if(this.form.balance_type === 1){
            //     this.form.balance_type = "UV"
            // }else if(this.form.balance_type === 2){
            //     this.form.balance_type = "CPA"
            // }else{
            //     this.form.balance_type = "CPS"
            // }
            // console.log(this.form.balance_type )
            // this.row = this.$route.query.row
            // console.log(this.row)
            // if(this.id){
            //     this.getformdata()
            // }
        },
        computed: {

        },
        methods: {
            // 提交数据
            onSubmit(formName) {
                console.log(this.form.quantity_off_start_time)
                this.$message.error("请完善内容");
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$post('product/quantity-off', {
                            time: this.form.quantity_off_start_time,
                            num: this.form.quantity_off_num,
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