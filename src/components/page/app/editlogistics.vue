<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">新增物流</div>
            <el-form :model="form" ref="form" :rules="rules" class="item-add-list">
                    <el-row type="flex" class="row-bg" justify="space-around">
                            <el-col :span="6">
                                <el-form-item label="快递单号 :" prop="num">
                                <el-input v-model.trim="form.num" type="text"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号:" prop="phone">
                                <el-input v-model.trim="form.phone" ></el-input>
                            </el-form-item>
                            <el-form-item label="快递公司：" prop="com">
                                    <el-select v-model="form.com" placeholder="请选择快递公司" v-loadmore="loadMore" filterable>
                                        <template v-for="item in comdata">
                                            <el-option :key="item.id" :label="item.company_name" :value="item.company_num"></el-option>
                                        </template>
                                      </el-select>
                          </el-form-item>
                            <el-form-item label="商品订单id：" prop="goods_order_id">
                                <el-select v-model="form.goods_order_id" placeholder="请选择商品订单id">
                                    <template v-for="item in goodorderdata">
                                            <el-option :label="item.id" :value="item.id"></el-option>
                                    </template>
                                  </el-select>
                          </el-form-item>
                            <el-button v-if="!tableData" type="primary" @click="onSubmit('form')" style='margin-top:40px'>提交</el-button>
                            <el-button v-if="tableData" type="primary" @click="onEdit('form')" style='margin-top:40px'>保存</el-button>
                            <router-link :to="{path:'canallist'}"><el-button type="primary">取消</el-button></router-link>
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
        num: 'addcanal',
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
                    num: "",
                    phone: "",
                    goods_order_id:"",
                    com:"",
                },
                page:1,
                pageCount:"",
                comdata:"",
                tableData:"",
                goodorderdata:"",
                typedata:[{
                    id:1,
                    num:"UV"
                },
                {
                    id:2,
                    num:"注册"
                },
                {
                    id:3,
                    num:"激活"
                }, {
                    id:4,
                    num:"其它"
                }],
                rules: {
                    num: [{
                        required: true,
                        message: '不可为空！',
                        trigger: 'blur'
                    }],
                    com: [{
                        required: true,
                        message: '不可为空！',
                        trigger: ['blur',"change"]
                    }],
                    template: [{
                        required: true,
                        message: '不可为空！',
                        trigger: ['blur',"change"]
                    }],
                    phone: [{
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
             this.getagoodorderdata()
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
                                    _this.comdata.push(res.info.items[i])
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
            // 快递公司名字
                getadmindata(){
                    this.$get('goods-order/get-deliver-num').then((res) => {
                        console.log(res)
                        if(res.code===1){
                            this.comdata = res.info;
                            this.pageCount = res.info._meta.pageCount
                            console.log(this.comdata)
                        }else{
                            this.$message.error(res.message);
                        }
                        this.loading = false
                    }).catch( () => {
                        this.loading = false
                    })
                },
                getagoodorderdata(){
                    this.$get('goods-order/get-undeliver-goods').then((res) => {
                        console.log(res)
                        if(res.code===1){
                            this.goodorderdata = res.info.items;
                            this.pageCount = res.info._meta.pageCount
                            // console.log(this.comdata)
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
                        this.$post('goods-order/deliver-good', {
                            num: this.form.num,
                            com:this.form.com,
                            phone: this.form.phone,
                            goods_order_id: this.form.goods_order_id,
                        }).then((res) => {
                            if (res.code === 1) {
                                this.$message({
                                    message: res.message,
                                    type: 'success'
                                });
                                this.$router.push('/logistics');
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

                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.$put('goods-order/deliver-good/'+this.id, {
                            num: this.form.num,
                            com:this.form.com,
                            phone: this.form.phone,
                            goods_order_id: this.form.goods_order_id,
                        }).then((res) => {
                            if(res.code === 1){
                                this.$message({
                                    message: res.message,
                                    type: 'success'
                                });
                                this.$router.push("/logistics")
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
