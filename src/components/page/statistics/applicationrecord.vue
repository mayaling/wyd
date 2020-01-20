<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">申请记录</div>
                <div class="mgb20">
                        <!-- <el-row >
                                <el-col :span="4">
                                    <router-link :to="{path:'addcanal'}"><el-button type="primary">+新增渠道</el-button></router-link>
                                </el-col>
                                <el-col :span="12">
                                        <el-row :gutter="20">
                                                <el-col :span="6">
                                                        <el-select v-model="status" placeholder="请选择状态" @change="search">
                                                                <el-option label="已下架" value="0"></el-option>
                                                                <el-option label="已上架" value="1"></el-option>
                                                              </el-select>
                                                </el-col>
                                                <el-col :span="6">
                                                        <el-input v-model.trim="p_name" placeholder="请输入名称" @keyup.enter.native="search"></el-input>
                                                </el-col>
                                                <el-col :span="6">
                                                        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                                                </el-col>
                                              </el-row>
                                </el-col>
                              </el-row> -->
                              <el-button type="primary">今日申请人数:{{applynum.today_num}}</el-button>
                                    <el-button type="primary">累计申请人数:{{applynum.total_num}}</el-button>
                        <!-- <router-link :to="{path:'addcanal'}"></router-link>
                        <router-link :to="{path:'addcanal'}"></router-link> -->
                    <el-row :gutter="20" style="float: right">
                            <el-col :span="6">
                                    <el-input v-model.trim="p_mobile" placeholder="手机号" @change="search" @keyup.enter.native="search" clearable="true"></el-input>
                            </el-col>
                            <el-col :span="6">
                                    <el-input v-model.trim="p_name" placeholder="名称" @change="search" @keyup.enter.native="search" clearable="true"></el-input>
                            </el-col>
                            <el-col :span="6">
                                    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                            </el-col>
                          </el-row>
    
                </div>
                <el-table :data="tableData" border size="medium" ref="multipleTable"  stripe>
                    <el-table-column prop="id" label="ID" align="center" width="200px"></el-table-column>
                    <el-table-column prop="channel_name" label="渠道名称" align="center" ></el-table-column>
                    <el-table-column prop="mobile" label="手机号" align="center"></el-table-column>
                    <el-table-column prop="product_name" label="产品名称" align="center"></el-table-column>
                    <el-table-column prop="apply_time" label="申请时间" align="center"></el-table-column>
                </el-table>
    <div class="pagination">
        <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :page-count="pages">
        </el-pagination>
        <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
            </el-pagination> -->
            <!-- <el-pagination @size-change="handleSizeChange" 
                           @current-change="handleCurrentChange" 
                           :current-page="currentPage" 
                           :page-sizes="pageSizes" 
                           :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" 
                           :total="totalCount">
              </el-pagination> -->
    </div>
    </div>
    </div>
    </template>
    
    
    <script>
    import VueClipboard from 'vue-clipboard2'
    
    Vue.use(VueClipboard)
        export default {
            name: 'teacher',
            data() {
                return {
                    p_mobile:"",
                    p_name:"",
                    status:"",
                    value1: "",
                    value2: "",
                    tableData: [],
                    currentPage:1,
                    // 总条数，根据接口获取数据长度(注意：这里不能为空)
                    totalCount:1,
                    // 个数选择器（可修改）
                    pageSizes:[3,5,10,20],
                    // 默认每页显示的条数（可修改）
                    PageSize:20,
                    cur_page: 1,
                    pages: 0,
                    s_student: '',
                    s_school: '',
                    s_grade: '',
                    s_klass: '',
                    // loading: true,
                    region: "",
                    region1: "",
                    tableData:"",
                    applynum:"",
                }
            },
            created() {
                this.getapply()
                this.getlistdata();
                // this.getlistdata(this.PageSize,this.currentPage) 
            },
            computed: {
    
            },
            methods: {
                getapply(){
                    this.$get('apply-record/count').then((res) => {
                        console.log(res)
                        if(res.code===1){
                            this.applynum = res.info;
                        }else{
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch( () => {
                        this.loading = false
                    })
                }, 
                getlistdata(){
                    this.$get('apply-record/index').then((res) => {
                        console.log(res)
                        if(res.code===1){
                            this.tableData = res.info.items;
                            this.pages = res.info._meta.pageCount
                        }else{
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch( () => {
                        this.loading = false
                    })
                }, 
                 // 分页导航
                  // 每页显示的条数
                    // handleSizeChange(val) {
                    //     // 改变每页显示的条数 

                    //     this.PageSize=val
                    //     // 点击每页显示的条数时，显示第一页
                    //     this.getlistdata(val,1)
                    //     // 注意：在改变每页显示的条数时，要将页码显示到第一页
                    //     this.currentPage=1  
                    // },
                    // // 显示第几页
                    // handleCurrentChange(val) {
                    //     // 改变默认的页数
                    //     this.currentPage=val
                    //     console.log(this.currentPage)
                    //     // 切换页码时，要获取每页显示的条数
                    //     this.getlistdata(this.PageSize,(val)*(this.pageSize))
                    // },
                //  handleSizeChange(val) {
                //     // 改变每页显示的条数 
                //     this.PageSize=val
                //     // 注意：在改变每页显示的条数时，要将页码显示到第一页
                //     this.currentPage=1
                // },
                //     // 显示第几页
                // handleCurrentChange(val) {
                //     // 改变默认的页数
                //     this.currentPage=val
                // },
                // 搜索
                search() {
                    this.loading = true
                    this.$get('apply-record/index', {
                        mobile: this.p_mobile?this.p_mobile:'',
                        name: this.p_name?this.p_name:'',
                        // name:this.p_name.name?this.p_name.name:''
                    }).then((res) => {
                        if (res.code === 1) {
                            this.tableData = JSON.parse(JSON.stringify(res.info.items))
                            this.pages = res.info._meta.pageCount
                            // this.pages = res.info._meta.pageCount
                            // this.totalCount=res.info.items.length
                            console.log(this.pages)
                        } else {
                            this.$message.error('数据');
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                },
                 onCopy(e) {
                     this.$message({
                        message:"复制链接成功",
                        type: 'success'
                    });
                },
                onError(e) {
                    console.log(e);
                },
                // 分页
                handleCurrentChange(val) {
                this.loading = true
                this.$get('apply-record/index', {
                    page: val,
                    mobile: this.p_mobile?this.p_mobile:'',
                    name: this.p_name?this.p_name:'',
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages = res.info._meta.pageCount
                        console.log(this.pages)
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