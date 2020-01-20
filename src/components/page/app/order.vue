+<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">订单列表</div>

            <div class="mgb20">
                <!-- <router-link :to="{path:'editgoods'}"><el-button type="primary">+新增商品</el-button></router-link> -->

                    <!-- <el-row :gutter="10" class="clearfix">
                            <el-col :span="2">
                                <el-select v-model="channel" placeholder="请选择渠道">
                                    <template  v-for="item in channeldata">
                                        <el-option :label="item.name" :value="item.id"></el-option>
                                    </template>
                                </el-select>
                            </el-col>
                            <el-col :span="2">
                                <el-select v-model="active" placeholder="请选择激活状态">
                                    <el-option label="已激活" value="1"></el-option>
                                    <el-option label="未激活" value="0"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="4">
                                <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"  format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"></el-date-picker>
                            </el-col>
                        <el-col :span="2"><el-input v-model.trim="p_phone" placeholder="输入用户手机号" @keyup.enter.native="search"></el-input></el-col>
                        <el-col :span="2"><el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button></el-col>
                        <el-col :span="2"><el-button type="primary" icon="el-icon-search">导出</el-button></el-col>
                    </el-row> -->
                </div>
            <el-table :data="tableData" border size="medium" ref="multipleTable">
                <el-table-column prop="id" label="ID" align="center" width="120"></el-table-column>
                <el-table-column prop="order_sign" label="订单号" align="center"></el-table-column>
                <el-table-column prop="goods_name" label="商品名字" align="center"></el-table-column>
                <el-table-column prop="goods_specification" label="商品规格" align="center"></el-table-column>
                <el-table-column prop="goods_price" label="商品价格" align="center"></el-table-column>
                <el-table-column prop="goods_service" label="服务" align="center"></el-table-column>
                <el-table-column prop="user_name" label="用户名" align="center"></el-table-column>
                <el-table-column prop="receive_addr" label="收货地址" align="center"></el-table-column>
                <el-table-column prop="mobile" label="手机号" align="center"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"></el-table-column>
                <el-table-column prop="goods_image" label="商品图片" align="center">
                　  <template slot-scope="scope">
                　　　　<img :src="scope.row.goods_image" width="40" height="40" class="head_pic"/>
            　　    </template>
                </el-table-column>
                <!-- <el-table-column prop="deliver_status" label="发货状态" align="center">
                    <template slot-scope="scope">
                        <span  @click="handleCheck(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                            <i v-if="scope.row.deliver_status" class="el-icon-check"></i>
                            <i v-if="!scope.row.deliver_status" class="el-icon-close"></i>
                        </span>
                    </template>
                </el-table-column> -->
                <el-table-column label="操作" align="center" width="300"  prop="deliver_status">
                    <template slot-scope="scope">
                        <el-button size="mini" type="success"  v-if="scope.row.deliver_status">已发货</el-button>
                        <el-button size="mini" type="primary" v-if="!scope.row.deliver_status"  @click=editlogitics(scope,row) >
                            发货
                        </el-button>
                        <el-dialog title="添加物流" :visible.sync="dialogFormVisible" width="25%">
                            <el-form :model="form">
                                <el-form-item label="快递单号 :" prop="num">
                                    <el-input v-model.trim="form.num" type="text"></el-input>
                                </el-form-item>
                                <el-form-item label="手机号:" prop="phone">
                                    <el-input v-model.trim="form.phone" ></el-input>
                                </el-form-item>
                                <el-form-item label="快递公司：" prop="com">
                                    <el-select v-model="form.com" placeholder="请选择快递公司" style="width: 100%;">
                                        <template v-for="item in comdata">
                                            <el-option :key="item.id" :label="item.company_name" :value="item.company_num"></el-option>
                                        </template>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="checklogitics(scope,row)">确 定</el-button>
                            </div>
                        </el-dialog>

                    </template>
                </el-table-column>
</el-table>
<div class="pagination">
<el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :page-count="pages">
</el-pagination>
</div>
</div>
</div>
</template>


<script>
export default {
    name: 'teacher',
    data() {
        return {
            value1: "",
            value2: "",
            tableData: [],
            cur_page: 1,
            pages: 0,
            s_student: '',
            s_school: '',
            s_grade: '',
            s_klass: '',
            condata:"",
            dissend:false,
            send:true,
            // loading: true,
            active: "",
            channel:"",
            channeldata:"",
            time:"",
            p_phone:'',
            goods_order_id:"",
            dialogFormVisible:false,
            form: {
                num: "",
                phone: "",
                goods_order_id:"",
                com:"",
            },
        }
    },
    created() {
        this.getlistdata();
        this.getcomdata()
    },
    computed: {

    },
    methods: {
        // 快递公司名字
        getcomdata(){
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
        // 新增物流
        editlogitics(scope,row){
            this.dialogFormVisible = true;
            this.goods_order_id = scope.row.id
        },
        getlistdata(){
            this.$get('goods-orders').then((res) => {
                console.log(res)
                if(res.code===1){
                    this.tableData = res.info.items;
                    // this.send = false
                    // this.dissend = true
                    for(var i=0;i<this.tableData.length;i++){

                        // if(this.tableData[i].deliver_status == 1){
                        //     this.send = false
                        //     this.dissend = true

                        // }else{
                        //     this.send = true
                        //     this.dissend = false
                        // }

                        if(this.tableData[i].status == 1){
                            this.tableData[i].status = "已提交"
                        }else if(this.tableData[i].status == 2){
                            this.tableData[i].status = "已付款"
                        }else if(this.tableData[i].status == 3){
                            this.tableData[i].status = "已发货"
                        }else if(this.tableData[i].status == 4){
                            this.tableData[i].status = "已收货"
                        }else if(this.tableData[i].status == 5){
                            this.tableData[i].status = "已取消"
                        }else{
                            this.tableData[i].status = "已完成"
                        }
                    }
                }else{
                    this.$message.error('数据加载失败');
                }
                this.loading = false
            }).catch( () => {
                this.loading = false
            })
        },
        // 分页导航
        handleCurrentChange(val) {
            this.loading = true
            this.$get('goods-orders', {
                pageNum: val,
            }).then((res) => {
                if (res.code === 0) {
                    this.tableData = JSON.parse(JSON.stringify(res.data.items))
                    for(var i=0;i<this.tableData.length;i++){
                        // if(this.tableData[i].status == 3){
                        //     this.send = true
                        //     this.dissend = false
                        // }else{
                        //     this.send = false
                        //     this.dissend = true
                        // }

                        if(this.tableData[i].status == 1){
                            this.tableData[i].status = "已提交"
                        }else if(this.tableData[i].status == 2){
                            this.tableData[i].status = "已付款"
                        }else if(this.tableData[i].status == 3){
                            this.tableData[i].status = "已发货"
                        }else if(this.tableData[i].status == 4){
                            this.tableData[i].status = "已收货"
                        }else if(this.tableData[i].status == 5){
                            this.tableData[i].status = "已取消"
                        }else{
                            this.tableData[i].status = "已完成"
                        }
                    }
                    this.pages = res.data.pages;
                } else {
                    this.$message.error('数据加载失败');
                }
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        checklogitics(scope,row){
            console.log(scope)
            console.log(scope.row.id)
            this.$post('goods-order/deliver-good', {
                num: this.form.num,
                com:this.form.com,
                phone: this.form.phone,
                goods_order_id: this.goods_order_id,
            }).then((res) => {
                // this.loading = false
                this.getlistdata();

                this.dialogFormVisible = false;
            }).catch(() => {
                this.loading = false
            })
        },
    }
}
</script>

<style scoped>
.el-icon-check{
color:#1f9e27;
font-weight:800;
font-size:1.5rem;
}
.el-icon-close{
color:#d81e06;
font-weight:800;
font-size:1.5rem;
}
</style>
