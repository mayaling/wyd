<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">产品效率</div>
                <div class="mgb20">
                              <!-- <router-link :to="{path:'addproduct'}"><el-button type="primary">今日实时PV:{{puvdata.pv}}</el-button></router-link>
                              <router-link :to="{path:'addproduct'}"><el-button type="primary">今日实时UV:{{puvdata.uv}}</el-button></router-link> -->
                              <!-- <el-button type="primary">今日实时PV:{{puvdata.pv}}</el-button>
                                    <el-button type="primary">今日实时UV:{{puvdata.uv}}</el-button> -->
                              <!-- 搜索 -->
                              <!-- <el-button type="primary" icon="el-icon-search"  @click="search()" style="float: right;margin-left: 20px;">搜索</el-button>
    
                              <el-select v-model="status" placeholder="请选择状态" @change="search()" style="float: right;">
                                <el-option label="已下架" value="0"></el-option>
                                <el-option label="已上架" value="1"></el-option>
                              </el-select> -->
                    </div>
                <el-table :data="tableData" border size="medium" ref="multipleTable" stripe>
                    <!-- <el-table-column prop="id" label="ID" align="center" width="50"></el-table-column> -->
                    <el-table-column prop="time" label="时间" align="center"></el-table-column>
                    <el-table-column label="UV数" align="center">
                            <el-table-column prop="today_data_uv" label="今日" align="center"></el-table-column>
                            <el-table-column prop="yesterday_data_uv" label="昨日" align="center"></el-table-column>
                            <el-table-column prop="a_week_data_uv" label="上周今日" align="center"></el-table-column>
                            <!-- <el-table-column prop="old_ctr_uv" label="老客UV" align="center"></el-table-column>
                            <el-table-column prop="new_ctr_uv" label="新客UV" align="center"></el-table-column> -->
                    </el-table-column>
                    <el-table-column label="注册数" align="center">
                            <el-table-column prop="today_data_reg" label="今日" align="center"></el-table-column>
                            <el-table-column prop="yesterday_data_reg" label="昨日" align="center"></el-table-column>
                            <el-table-column prop="a_week_data_reg" label="上周今日" align="center"></el-table-column>
                    </el-table-column>
                    <el-table-column label="UV效率" align="center">
                            <el-table-column prop="today_data_efficiency" label="今日" align="center"></el-table-column>
                            <el-table-column prop="yesterday_data_efficiency" label="昨日" align="center"></el-table-column>
                            <el-table-column prop="a_week_data_efficiency" label="上周今日" align="center"></el-table-column>
                    </el-table-column>
                    <!-- <el-table-column prop="balance_type" label=" 结算方式" align="center"></el-table-column>
                    <el-table-column prop="user_price" label="结算单价" align="center"></el-table-column>
                    <el-table-column prop="income" label=" 收益" align="center"></el-table-column> -->
                    <!-- <el-table-column prop="apply_price" label="实际注册人数" align="center"></el-table-column> -->
                    <!-- <el-table-column prop="date" label="统计日期" align="center" width="200"></el-table-column> -->
                    <!-- <el-table-column label="操作" align="center" width="400">
                        <template slot-scope="scope">
                            <router-link :to="{path:'addproduct',query:{id:scope.row.id}}">
                                <el-button size="mini">
                                   编辑
                                </el-button>
                            </router-link>
                            <router-link :to="{path:'dailystatistics',query:{row:scope.row}}">
                                    <el-button size="mini">
                                       数据
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
                puvdata:"",
            }
        },
        created() {
            this.getlistdata()
            // this.getpuvdata()
         
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
                this.$get('data-statistics/uv-efficiency').then((res) => {
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
                        // this.tableData = res.info;
                        // var key= [];
                        // for(key in res.info){
                        //     console.log(res.info[key])
                        //       this.tableData.push(res.info[key]);
                        // }
                        // console.log(res.info[key])
                        // this.tableData.push(res.info[key]);

                        var objs = res.info;
                        // 自定义排序规则，按对象的time排序
                        var sortedObjKeys = Object.keys(objs).sort(function(a, b) {
                            return objs[b].time - objs[a].time;
                        });
                        // 按默认排序规则，按对象的key排序
                        var sortedObjKeys = Object.keys(objs).sort();
                        for (var index in sortedObjKeys) {
                            console.log(sortedObjKeys[index]);
                            console.log(objs[sortedObjKeys[index]]);
                            this.tableData.push(objs[sortedObjKeys[index]]);
                        }
                        console.log(this.tableData)
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
                this.$get('data-statistics/uv-efficiency', {
                    page: val,
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = res.info.items;
                        this.pages = res.info._meta.pageCount;
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
                this.loading = true
                this.$get('products', {
                    status: this.status?this.status:'',
                    name:this.name?this.name:''
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages = res.info._meta.pageCount;
                        // for (var i = 0; i < this.tableData.length; i++) {
                        //     if (this.tableData[i].sex) {
                        //         this.tableData[i].sex = '女'
                        //     } else {
                        //         this.tableData[i].sex = '男'
                        //     }
                        // }
                    } else {
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            }
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