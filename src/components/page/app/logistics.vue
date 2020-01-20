+<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">物流列表</div>

            <div class="mgb20">
                <router-link :to="{path:'editlogistics'}"><el-button type="primary">+新增物流</el-button></router-link>

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
                <el-table-column prop="goods_order_id" label="商品订单id" align="center" width="120"></el-table-column>
                <el-table-column prop="com" label="快递公司的单号" align="center"></el-table-column>
                <el-table-column prop="num" label="快递单号" align="center"></el-table-column>
                <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
                <el-table-column prop="status" label="是否收货" align="center"></el-table-column>
                <!-- <el-table-column label="操作" align="center" width="300">
                    <template slot-scope="scope">
                        <router-link :to="{path:'editgoods',query:{id:scope.row.id}}">
                            <el-button size="mini">
                                编辑
                            </el-button>
                        </router-link>
                    </template>
                </el-table-column> -->
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
            // loading: true,
            active: "",
            channel:"",
            channeldata:"",
            time:"",
            p_phone:''
        }
    },
    created() {
        this.getlistdata();
    },
    computed: {

    },
    methods: {
        getlistdata(){
            this.$get('goods-order/get-deliver-list').then((res) => {
                console.log(res)
                if(res.code===1){
                    this.tableData = res.info.items;
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
            this.$get('goods-order/get-deliver-list', {
                pageNum: val,
            }).then((res) => {
                if (res.code === 0) {
                    this.tableData = JSON.parse(JSON.stringify(res.data.items))
                    this.pages = res.data.pages;
                } else {
                    this.$message.error('数据加载失败');
                }
                this.loading = false
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
