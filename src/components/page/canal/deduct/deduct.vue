<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">扣除列表</div>
                <div class="mgb20">
                    <!-- <el-row :gutter="10" class="clearfix"> -->
                            <router-link :to="{path:'adddeduct'}"><el-button type="primary">+新增扣除</el-button></router-link>
                    <!-- </el-row> -->
                    <el-row :gutter="20" style="float: right">
                    <el-col :span="10">
                            <el-select v-model="channel_id" placeholder="请选择渠道" v-loadmore="loadMore" filterable @change="search1" clearable="true">
                                    <template v-for="item in channeldata">
                                <el-option :label="item.name" :value="item.id"></el-option>
                             </template> 
                            </el-select>
                        </el-col>
                        <el-col :span="10">
                            <el-date-picker v-model="date_time" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" @change="search1"></el-date-picker>
                        </el-col>
                        <!-- <el-col :span="6">
                                <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                        </el-col> -->
                      </el-row>
                </div>
                <el-table :data="tableData" border size="medium" ref="multipleTable">
                    <el-table-column prop="id" label="id" align="center" width="120"></el-table-column>
                    <el-table-column prop="channel_name" label="渠道" align="center"></el-table-column>
                    <el-table-column prop="deduct" label="结算百分比" align="center"></el-table-column>
                    <el-table-column prop="date_time" label="扣除日期" align="center"></el-table-column>
                    <el-table-column prop="create_time" label="创建时间" align="center"></el-table-column>
                    <el-table-column prop="status" label="状态" align="center"></el-table-column>
                    <el-table-column label="操作" align="center" width="150">
                        <template slot-scope="scope">
                                <router-link :to="{path:'/adddeduct',query:{id:scope.row.id}}">
                                        <el-button size="mini">
                                            编辑
                                        </el-button>
                                    </router-link>
                                    <el-button size="mini" @click="handleEdit(scope,row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination">
                    <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :page-count="pages"></el-pagination>
                </div>
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
            name: 'teacher',
            data() {
                return {
                    channel_id:"",
                    date_time:"",
                    tableData: [],
                     // 默认显示第几页
                    currentPage:1,
                    // 总条数，根据接口获取数据长度(注意：这里不能为空)
                    totalCount:1,
                    // 个数选择器（可修改）
                    pageSizes:[3,5,10,20],
                    // 默认每页显示的条数（可修改）
                    PageSize:5,
                    cur_page: 1,
                    pages: 0,
                    s_student: '',
                    s_school: '',
                    s_grade: '',
                    s_klass: '',
                    channeldata:"",
                    page:1,
                    pageCount:"",
                    // loading: true
                }
            },
            created() {
                this.getlistdata()
                this.getchanneldata()
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
                // 列表数据
                getlistdata(){
                    this.$get('deducts?sort=-id').then((res) => {
                        console.log(res)
                        if(res.code===1){
                            this.tableData = res.info.items;
                            this.pages = res.info._meta.pageCount
                            for(var i=0;i<this.tableData.length;i++){
                                if(this.tableData[i].status == 1){
                                    this.tableData[i].status = "开启"
                                }else{
                                    this.tableData[i].status = "关闭"
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
                // 分页导航
                handleCurrentChange(val) {
                    this.loading = true
                    this.$get('deducts?sort=-id', {
                        page: val,
                        channel_id: this.channel_id?this.channel_id:'',
                        date_time:this.date_time?this.date_time:''
                    }).then((res) => {
                        if (res.code === 1) {
                            this.tableData = JSON.parse(JSON.stringify(res.info.items))
                            this.pages = res.info._meta.pageCount;
                            for(var i=0;i<this.tableData.length;i++){
                                if(this.tableData[i].status == 1){
                                    this.tableData[i].status = "开启"
                                }else{
                                    this.tableData[i].status = "关闭"
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
                // 删除
                handleEdit(scope,row){
                    console.log(scope)
                    this.$del('deducts/'+scope.row.id).then((res) => {
                        console.log(res)
                        if(res.code===1){
                            this.$message({
                                message:"删除成功",
                                type: 'success'
                            });
                            this.loading = true;
                            this.getlistdata()
                            // this.tableData = JSON.parse(JSON.stringify(res.info.items))
                            console.log(this.tableData )
                        }else{
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch( () => {
                        this.loading = false
                    })
                },
                  // 搜索
                search() {
                    this.loading = true
                    this.$get('deducts?sort=-id', {
                        channel_id: this.channel_id?this.channel_id:'',
                        date_time:this.date_time?this.date_time:''
                    }).then((res) => {
                        if (res.code === 1) {
                            this.tableData = JSON.parse(JSON.stringify(res.info.items))
                            this.pages = res.info._meta.pageCount;
                            for(var i=0;i<this.tableData.length;i++){
                                if(this.tableData[i].status == 1){
                                    this.tableData[i].status = "开启"
                                }else{
                                    this.tableData[i].status = "关闭"
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
                search1() {
                    this.loading = true
                    this.$get('deducts?sort=-id', {
                        channel_id: this.channel_id?this.channel_id:'',
                        date_time:this.date_time?this.date_time:''
                    }).then((res) => {
                        if (res.code === 1) {
                            this.tableData = JSON.parse(JSON.stringify(res.info.items))
                            this.pages = res.info._meta.pageCount;
                            for(var i=0;i<this.tableData.length;i++){
                                if(this.tableData[i].status == 1){
                                    this.tableData[i].status = "开启"
                                }else{
                                    this.tableData[i].status = "关闭"
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
            }
        }
    </script>
    
    <style scoped>
    
    </style>