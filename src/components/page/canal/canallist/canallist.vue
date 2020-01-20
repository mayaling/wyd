<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">渠道列表</div>
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
                <router-link :to="{path:'addcanal'}"><el-button type="primary">+新增渠道</el-button></router-link>
                <!-- <el-link type="primary"></el-link> -->

                <span> 渠道登录后台地址：
                    <el-tooltip class="item" effect="dark" content="点击复制" placement="top">
                        <span style="color:#3c8dbc;cursor: pointer;"   v-clipboard:copy="channelurl" v-clipboard:success="onCopy" v-clipboard:error="onError">c.5youfenqi.com</span>
                    </el-tooltip>
                </span>
                <!-- <span v-clipboard:success="onCopy" v-clipboard:error="onError">c.5youfenqi.com</span> -->
                <el-row :gutter="20" style="float: right">
                        <el-col :span="6">
                                <el-select v-model="status" placeholder="请选择状态" @change="search1" clearable="true">
                                        <el-option label="已下架" value="0"></el-option>
                                        <el-option label="已上架" value="1"></el-option>
                                      </el-select>
                        </el-col>
                        <el-col :span="6">
                                <el-input v-model.trim="p_name" placeholder="请输入名称" @change="search1" @keyup.enter.native="search" clearable="true"></el-input>
                        </el-col>
                        <el-col :span="6">
                                <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                        </el-col>
                      </el-row>

            </div>
            <el-table :data="tableData" border size="medium" ref="multipleTable"  stripe>
                <el-table-column prop="id" label="ID" align="center" width="50"></el-table-column>
                <el-table-column prop="name" label="渠道名称" align="center"></el-table-column>
                <el-table-column prop="url" label="投放链接" align="center" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                        <span v-clipboard:copy="scope.row.url" v-clipboard:success="onCopy" v-clipboard:error="onError">{{scope.row.url}}</span>
                　　</template>
                </el-table-column>
                <el-table-column prop="admin_name" label="渠道联系人" align="center"></el-table-column>
                <!-- <el-table-column prop="school" label="渠道联系电话" align="center"></el-table-column>
                <el-table-column prop="grade" label="用户单价" align="center"></el-table-column> -->
                <el-table-column prop="cooperation_type" label="合作方式" align="center"></el-table-column>
                <el-table-column prop="qrcode" label="渠道下载二维码" align="center">
                    <template slot-scope="scope"  >
            　　　　    <img :src="scope.row.qrcode" width="40" height="40" class="head_pic" @click="checkbigimg(scope,row)"/>
            <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
                        <el-dialog  width="20%"  :visible.sync="dialogVisible" style="margin-top: 15vh;" >
                            <img :src="qrcode"  alt="" style="margin-top:-23px">
                            <!-- <template slot-scope="scope">
                        <img :src="scope.row.qrcode"  alt="">

                            </template> -->
                    <!-- <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span> -->
                    </el-dialog>
            　　    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" align="center">
                        <template slot-scope="scope">
                            <span  @click="handleStatus(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                                <i v-if="scope.row.status" class="el-icon-check"></i>
                                <i v-if="!scope.row.status" class="el-icon-close"></i>
                            </span>
                        </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <router-link :to="{path:'addcanal',query:{id:scope.row.id}}">
                            <el-button size="mini">
                               编辑
                            </el-button>
                        </router-link>
                        <router-link :to="{path:'dailycanalstatistics',query:{id:scope.row.id}}">
                            <el-button size="mini">
                                今日统计
                            </el-button>
                        </router-link>
                        <router-link :to="{path:'channeldaylog',query:{id:scope.row.id}}">
                            <el-button size="mini">
                                渠道统计
                            </el-button>
                        </router-link>

                        <!-- <router-link :to="{path:'dailystatistics',query:{row:scope.row}}">
                                <el-button size="mini">
                                   数据
                                </el-button>
                            </router-link> -->
                        <!-- <el-button size="mini" @click="handleEdit( scope.row)">渠道充值</el-button>
                        <el-button size="mini" @click="handleEdit( scope.row)">充值详情</el-button> -->
                        <!-- <el-button size="mini" @click="handleEdit( scope.row)">渠道统计</el-button> -->
                        <!-- <el-button size="mini" @click="handleEdit( scope.row)">今日统计</el-button> -->

                        <!-- <el-button size="mini" @click="handleEdit( scope.row)">UV</el-button>
                        <el-button size="mini" @click="handleEdit( scope.row)">注册量</el-button>
                        <el-button size="mini" @click="handleEdit( scope.row)">激活量</el-button>
                        <el-button size="mini" @click="handleEdit( scope.row)">产品点击</el-button> -->
                        <el-button size="mini" @click="handleEdit(scope.row)">删除</el-button>
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
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
    export default {
        name: 'teacher',
        data() {
            return {
                dialogVisible: false,
                p_name:"",
                status:"",
                value1: "",
                value2: "",
                tableData: [],
                qrcode:"",
                 // 默认显示第几页
                 currentPage:1,
                // 总条数，根据接口获取数据长度(注意：这里不能为空)
                totalCount:1,
                // 个数选择器（可修改）
                pageSizes:[3,5,10,20],
                // 默认每页显示的条数（可修改）
                PageSize:5,
                cur_page: 1,
                channelurl:"c.5youfenqi.com",
                pages: 0,
                s_student: '',
                s_school: '',
                s_grade: '',
                s_klass: '',
                // loading: true,
                region: "",
                region1: "",
                tableData:"",
            }
        },
        created() {
            this.getlistdata()
        },
        computed: {

        },
        methods: {
            getlistdata(){
                this.$get('channels?sort=-id&status=1').then((res) => {
                    console.log(res)
                    if(res.code===1){
                        this.tableData = res.info.items;
                        this.pages = res.info._meta.pageCount;
                        for(var i=0;i<this.tableData.length;i++){
                            if(this.tableData[i].cooperation_type == 1){
                                this.tableData[i].cooperation_type = "UV"
                            }else if(this.tableData[i].cooperation_type == 2){
                                this.tableData[i].cooperation_type = "注册"
                            }else if(this.tableData[i].cooperation_type == 3){
                                this.tableData[i].cooperation_type = "激活"
                            }else{
                                this.tableData[i].cooperation_type = "其他"
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
                this.$get('channels?sort=-id', {
                    page: val,
                    status: this.status?this.status:'',
                    name:this.p_name?this.p_name:''
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
                this.$get('channels?sort=-id', {
                    status: this.status?this.status:'',
                    name:this.p_name?this.p_name:''
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
            search1() {
                this.loading = true
                this.$get('channels?sort=-id', {
                    status: this.status?this.status:'1',
                    name:this.p_name?this.p_name:''
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
             onCopy(e) {
                 this.$message({
                    message:"复制链接成功",
                    type: 'success'
                });
            },
            onError(e) {
                console.log(e);
            },
            copy(){
                var clipboard = new Clipboard('.tag-read')
                clipboard.on('success', e => {
                  console.log('复制成功')
                  // 释放内存
                  clipboard.destroy()
                })
                clipboard.on('error', e => {
                  // 不支持复制
                  console.log('该浏览器不支持自动复制')
                  // 释放内存
                  clipboard.destroy()
                })
            },
            openimg(){
                console.log(111)
            },
            handleStatus(index,row){
                row.status = !row.status;
                if(row.status == false){
                    row.status = 0
                }else{
                    row.status = 1
                }
                this.$put('channels/'+row.id, {
                    status: row.status,
                }).then((res) => {
                    this.loading = false
                    this.search1()
                    // this.handleEdit()
                    // this.getlistdata()
                }).catch(() => {
                    this.loading = false
                })
            },
            handleEdit(scope,row){
                // console.log(scope)
                this.$del('channels/'+scope.id, {
                }).then((res) => {
                    if (res.code === 1) {
                        this.$message({
                            message:"删除成功",
                            type: 'success'
                        });
                        this.getlistdata();
                    } else {
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },
            checkbigimg(scope,row){
                this.dialogVisible = true;

                console.log(scope)
                this.qrcode = scope.row.qrcode
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
