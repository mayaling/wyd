<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">刷单列表<span style="color:red;">(只检测安卓,不代表IOS没刷单!)</span></div>
                <div class="mgb20">
                    <el-row :gutter="10" class="clearfix">
                            <!-- <el-button type="primary">本页数据总和</el-button> -->
                        <!-- <el-col :span="4"><el-input v-model.trim="s_student" placeholder="输入学生姓名" @keyup.enter.native="search"></el-input></el-col>
                        <el-col :span="8"><el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button></el-col> -->
                        <!-- <el-col :span="4" class="tar"><router-link to="/studentEnter?t=1"><el-button type="success">新增</el-button></router-link></el-col> -->
                    </el-row>
                </div>
                <el-table :data="tableData" border size="medium" ref="multipleTable">
                    <el-table-column prop="id" label="ID" align="center" width="120"></el-table-column>
                    <el-table-column prop="channel_name" label="渠道" align="center"></el-table-column>
                    <el-table-column prop="platform" label="平台" align="center"></el-table-column>
                    <el-table-column prop="mobile" label="手机号" align="center"></el-table-column>
                    <el-table-column prop="ip" label="IP" align="center"></el-table-column>
                    <el-table-column prop="create_time" label="刷量时间" align="center"></el-table-column>
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
                    s_student: '',
                    s_school: '',
                    s_grade: '',
                    s_klass: '',
                    // loading: true
                }
            },
            created() {
                this.getlistdata()
            },
            computed: {
    
            },
            methods: {
                // 列表数据
                getlistdata(){
                    this.$get('click-farms?sort=-id').then((res) => {
                        if(res.code===1){
                            console.log(res)
                            this.tableData = res.info.items;
                            this.pages = res.info._meta.pageCount;
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
                    this.$get('click-farms?sort=-id', {
                        page: val,
                    }).then((res) => {
                        if (res.code === 1) {
                            this.tableData = JSON.parse(JSON.stringify(res.info.items))
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
                    this.$get('click-farms?sort=-id', {
                        studentName: this.s_student
                    }).then((res) => {
                        if (res.code === 0) {
                            this.tableData = JSON.parse(JSON.stringify(res.list))
                            this.pages = res.info._meta.pageCount;
                            for(var i=0;i<this.tableData.length;i++){
                                if(this.tableData[i].status == 1){
                                    this.tableData[i].status = "开启"
                                }else{
                                    this.tableData[i].status = "关闭"
                                }
                            }
                            for(var i=0;i<this.tableData.length;i++){
                                if(this.tableData[i].type == 1){
                                    this.tableData[i].type = "管理员"
                                }else if(this.tableData[i].type == 2){
                                    this.tableData[i].type = "运营"
                                }else{
                                    this.tableData[i].type = "渠道"
                                }
                            }
                        } else {
                            this.$message.error('学生加载失败');
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
    
    </style>