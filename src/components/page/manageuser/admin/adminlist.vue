<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">用户列表</div>
            <div class="mgb20">
                <el-row :gutter="10" class="clearfix">
                        <router-link :to="{path:'addadmin'}"><el-button type="primary">+新增用户</el-button></router-link>
                    <!-- <el-col :span="4"><el-input v-model.trim="s_student" placeholder="输入学生姓名" @keyup.enter.native="search"></el-input></el-col>
                    <el-col :span="8"><el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button></el-col> -->
                    <!-- <el-col :span="4" class="tar"><router-link to="/studentEnter?t=1"><el-button type="success">新增</el-button></router-link></el-col> -->
                </el-row>
            </div>
            <el-table :data="tableData" border size="medium" ref="multipleTable">
                <el-table-column prop="id" label="UID" align="center" width="120"></el-table-column>
                <el-table-column prop="name" label="账号" align="center"></el-table-column>
                <el-table-column prop="type" label="角色类型" align="center"></el-table-column>
                <el-table-column prop="register_time" label="注册时间" align="center"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"></el-table-column>
                <el-table-column label="操作" align="center" width="110">
                    <template slot-scope="scope">
                        <router-link :to="{path:'addadmin',query:{id:scope.row.id}}" style="color:#35a000;">编辑</router-link>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :page-count="pages"></el-pagination>
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
                currentPage:"",
                perPage:"",
                pageCount:'',
                tableData: [],
                  // 默认显示第几页
                  currentPage:1,
                // 总条数，根据接口获取数据长度(注意：这里不能为空)
                totalCount:1,
                // 个数选择器（可修改）
                // pageSizes:[3,5,10,20],
                // 默认每页显示的条数（可修改）
                // PageSize:3,
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
                this.$get('admins?type=1,2&sort=-id').then((res) => {
                    console.log(res)
                    if(res.code===1){
                        this.tableData = res.info.items;
                        this.pages=res.info._meta.pageCount
                        // this.pages = Math.ceil(res.info._meta.totalCount/this.PageSize)
                        console.log(this.pages)
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
                            }else if(this.tableData[i].type == 3){
                                this.tableData[i].type = "渠道"
                            }else{
                                this.tableData[i].type = "商户"
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
                this.$get('admins?type=1,2&sort=-id', {
                    page: val,
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        // this.pages = Math.ceil(res.info._meta.totalCount/this.PageSize)
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
                            }else if(this.tableData[i].type == 3){
                                this.tableData[i].type = "渠道"
                            }else{
                                this.tableData[i].type = "商户"
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
                this.loading = true
                this.$get('students', {
                    studentName: this.s_student
                }).then((res) => {
                    if (res.code === 0) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages=res.info._meta.pageCount
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
                            }else if(this.tableData[i].type == 3){
                                this.tableData[i].type = "渠道"
                            }else{
                                this.tableData[i].type = "商户"
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