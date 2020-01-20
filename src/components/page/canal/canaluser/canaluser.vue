<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">渠道用户</div>
            <router-link :to="{path:'addcanaluser'}"><el-button type="primary" style="margin-bottom:20px;">+新建渠道用户</el-button></router-link>
            <el-table :data="tableData" border size="medium" ref="multipleTable">
                    <el-table-column prop="id" label="ID" align="center" width="120"></el-table-column>
                    <el-table-column prop="name" label="账号" align="center"></el-table-column>
                    <el-table-column prop="type" label="角色类型" align="center"></el-table-column>
                    <el-table-column prop="register_time" label="注册时间" align="center"></el-table-column>
                    <el-table-column prop="status" label="状态" align="center"></el-table-column>
                    <el-table-column label="操作" align="center" width="110">
                        <template slot-scope="scope">
                            <router-link :to="{path:'addcanaluser',query:{id:scope.row.id}}" style="color:#35a000;">编辑</router-link>
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
        name: 'canaluser',
        data() {
            return {
                value1: "",
                value2: "",
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
                // loading: true,
                region: "",
                region1: ""
            }
        },
        created() {
            this.getlistdata()
        },
        computed: {

        },
        methods: {
            getlistdata(){
                this.$get('admins?type=3&sort=-id').then((res) => {
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
                        for(var i=0;i<this.tableData.length;i++){
                            if(this.tableData[i].type == 1){
                                this.tableData[i].type = "管理员"
                            }else if(this.tableData[i].type == 2){
                                this.tableData[i].type = "运营"
                            }else{
                                this.tableData[i].type = "渠道"
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
            handleCurrentChange(val) {
                this.loading = true
                this.$get('admins?type=3&sort=-id', {
                    page: val,
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages = res.info._meta.pageCount
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