<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">产品今日统计</div>
            <div class="mgb20">
                          <!-- <router-link :to="{path:'addproduct'}"><el-button type="primary">今日实时PV:{{puvdata.pv}}</el-button></router-link>
                          <router-link :to="{path:'addproduct'}"><el-button type="primary">今日实时UV:{{puvdata.uv}}</el-button></router-link> -->
                                <!-- <el-button type="primary">今日实时PV:{{puvdata.pv}}</el-button>
                                <el-button type="primary">今日实时UV:{{puvdata.uv}}</el-button> -->
                                <router-link :to="{path:'dailystatistics'}"><el-button type="primary">产品每日统计</el-button></router-link>
                                <el-tag>今日实时PV:{{puvdata.pv}}</el-tag>
                                <el-tag type="success">今日实时UV:{{puvdata.uv}}</el-tag>
                          <!-- 搜索 -->
                          <!-- <el-button type="primary" icon="el-icon-search"  @click="search()" style="float: right;margin-left: 20px;">搜索</el-button>

                          <el-select v-model="status" placeholder="请选择状态" @change="search()" style="float: right;">
                            <el-option label="已下架" value="0"></el-option>
                            <el-option label="已上架" value="1"></el-option>
                          </el-select> -->
                          <el-time-picker is-range v-model="date" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围" value-format="HH:mm:ss" style="float: right" @change="search()"></el-time-picker>
                          <!-- <el-date-picker v-model="date" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" style="float: right" @change="search()"></el-date-picker> -->
                </div>
            <el-table :data="tableData" border size="medium" ref="multipleTable" stripe>
                    <el-table-column prop="product_name" label="名称" align="center"></el-table-column>
                    <el-table-column prop="pv" label="产品点击pv" align="center"></el-table-column>
                    <el-table-column prop="uv" label="产品点击uv" align="center"></el-table-column>
                    <el-table-column prop="new_ctr_uv" label="新客uv" align="center"></el-table-column>
                    <el-table-column prop="old_ctr_uv" label="老客uv" align="center"></el-table-column>
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
            date:"",
            dialogTableVisible: false,
            dialogFormVisible: false,
            value1: "",
            value2: "",
            tableData: [],
            currentPage:1,
            // 总条数，根据接口获取数据长度(注意：这里不能为空)
            totalCount:1,
            // 个数选择器（可修改）
            pageSizes:[3,5,10,20],
            // 默认每页显示的条数（可修改）
            PageSize:5,
            cur_page: 1,
            pages: 0,
            name:"",
            s_student: '',
            s_school: '',
            s_grade: '',
            s_klass: '',
            status:"",
            // loading: true,
            region: "",
            region1: "",
            plusIcon: true,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            nowtime:"",
            puvdata:"",
            loading:true,
        }
    },
    created() {
        this.getlistdata()
        this.getpuvdata()
        this.gettime()
    },
    computed: {

    },
    methods: {
        getpuvdata(){
            this.$get('channel-analysis/today-count?sort=-id').then((res) => {
                console.log(res)
                if(res.code===1){
                    this.puvdata = res.info;
                }else{
                    this.$message.error('数据加载失败');
                }
                this.loading = false
            }).catch( () => {
                this.loading = false
            })
        },
        getlistdata(){
            this.$get('channel-analysis/product-list?sort=-id').then((res) => {
                console.log(res)
                if(res.code===1){
                    // for(var i=0;i<this.tableData.length;i++){
                    //     if(this.tableData[i].balance_type===1){
                    //         this.tableData[i].balance_type=== "uv"
                    //     }else if(this.tableData[i].balance_type===2){
                    //         this.tableData[i].balance_type=== "CPA"
                    //     }else{
                    //         this.tableData[i].balance_type=== "CPS"
                    //     }
                    // }
                    this.tableData = res.info;
                    this.pages = res.info._meta.pageCount;
                    for(var i=0;i<this.tableData.length;i++){
                        if(this.tableData[i].balance_type == 1){
                            this.tableData[i].balance_type = "uv"
                        }else if(this.tableData[i].balance_type == 2){
                            this.tableData[i].balance_type = "CPA"
                        }else if(this.tableData[i].balance_type == 3){
                            this.tableData[i].balance_type = "CPS"
                        }else{
                            this.tableData[i].balance_type = " "
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
            this.$get('channel-analysis/product-list?sort=-id', {
                page: val,
                start_time:this.date?this.date[0]:"",
                end_time:this.date? this.date[1]:""
            }).then((res) => {
                if (res.code === 1) {
                    this.tableData = res.info;
                    this.pages = res.info._meta.pageCount;
                    for(var i=0;i<this.tableData.length;i++){
                        if(this.tableData[i].balance_type == 1){
                            this.tableData[i].balance_type = "uv"
                        }else if(this.tableData[i].balance_type == 2){
                            this.tableData[i].balance_type = "CPA"
                        }else if(this.tableData[i].balance_type == 3){
                            this.tableData[i].balance_type = "CPS"
                        }else{
                            this.tableData[i].balance_type = " "
                        }
                    }
                } else {
                    this.$message.error('数据加载失败');
                }
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        // 搜索
        search() {
            // console.log(this.date)
            // this.loading = true
            this.$get('channel-analysis/product-list?sort=-id', {
                start_time:this.date?this.date[0]:"",
                end_time:this.date? this.date[1]:""
            }).then((res) => {
                if (res.code === 1) {
                    this.tableData = JSON.parse(JSON.stringify(res.info))
                    this.pages = res.info._meta.pageCount;
                    for(var i=0;i<this.tableData.length;i++){
                        if(this.tableData[i].balance_type == 1){
                            this.tableData[i].balance_type = "uv"
                        }else if(this.tableData[i].balance_type == 2){
                            this.tableData[i].balance_type = "CPA"
                        }else if(this.tableData[i].balance_type == 3){
                            this.tableData[i].balance_type = "CPS"
                        }else{
                            this.tableData[i].balance_type = " "
                        }
                    }
                    this.loading = false
                } else {
                    this.$message.error('数据加载失败');
                }
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        gettime(){
            var date=new Date();
            //年
            var year=date.getFullYear();
            //月
            var month=date.getMonth()+1;
            //日
            var day=date.getDate();
            var now = year+"-"+month+"-"+day;
            this.nowtime = now;
            console.log(this.nowtime)
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