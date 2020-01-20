<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">渠道今日实时统计</div>
                <div class="mgb20">
                    <el-row :gutter="10" class="clearfix">
                            <router-link :to="{path:'dailycanalstatistics'}"><el-button type="primary">查看今日实时</el-button></router-link>
                          <router-link :to="{path:'channeldaylog'}"><el-button type="primary">查看过往数据</el-button></router-link>
                    </el-row>
                </div>
                <el-table :data="tableData" border size="medium" ref="multipleTable" height="600">
                    <el-table-column prop="channel_name" label="渠道名称" align="center" width="120"></el-table-column>
                    <el-table-column prop="uv" label="渠道uv" align="center"></el-table-column>
                    <el-table-column prop="reg" label="注册数" align="center"></el-table-column>
                    <el-table-column prop="active" label="激活数" align="center"></el-table-column>
                    <el-table-column prop="p_pv" label="新客pv" align="center"></el-table-column>
                    <el-table-column prop="p_uv" label="新客uv" align="center"></el-table-column>
                    <el-table-column prop="total_uv" label="总uv" align="center"></el-table-column>
                    <el-table-column prop="reg_pre" label="注册转化" align="center"></el-table-column>
                    <el-table-column prop="active_pre" label="激活转化" align="center"></el-table-column>
                    <el-table-column prop="new_uv_pre" label="新客uv效率" align="center"></el-table-column>
                    <el-table-column prop="uv_pre" label="uv效率" align="center">
                        <!-- <template slot-scope="scope">
                            <span>{{scope.row.uv_pre}}%</span>
                        </template> -->
                    </el-table-column>

                </el-table>
                <div class="pagination">
                    <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :page-count="pages"></el-pagination>
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
                    cur_page: 1,
                    pages: 0,
                    s_student: '',
                    s_school: '',
                    s_grade: '',
                    s_klass: '',
                    loading: true
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
                    this.$get('channel-analysis/today-list?type=1,2&sort=-id').then((res) => {
                        console.log(res)
                        if(res.code===1){
                            this.tableData = res.info;
                            // for(var i=0;i<this.tableData.length;i++){
                            //     this.tableData[i].uv_pre = this.tableData[i].uv_pre*100
                            // }
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
                    this.$get('channel-analysis/today-list?type=1,2&sort=-id', {
                        page: val,
                    }).then((res) => {
                        if (res.code === 1) {
                            this.tableData = JSON.parse(JSON.stringify(res.info.items))
                            // this.pages = Math.ceil(res.info._meta.totalCount/this.PageSize)
                            this.pages = res.info._meta.pageCount;
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