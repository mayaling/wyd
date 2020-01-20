<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">产品列表</div>
            <div class="mgb20">
                    <!-- <el-row >
                            <el-col :span="12">
                                <router-link :to="{path:'addproduct'}"><el-button type="primary">+新增产品</el-button></router-link>

                            </el-col>
                            <el-col :span="12"  style="float: right">
                                    <el-row :gutter="20" >
                                            <el-col :span="6">
                                                    <el-select v-model="region" placeholder="请选择平台">
                                                            <el-option label="区域一" value="shanghai"></el-option>
                                                            <el-option label="区域二" value="beijing"></el-option>
                                                          </el-select>
                                            </el-col>
                                            <el-col :span="6">
                                                    <el-select v-model="region1" placeholder="请选择状态">
                                                            <el-option label="已下架" value="1"></el-option>
                                                            <el-option label="已上架" value="2"></el-option>
                                                          </el-select>
                                            </el-col>
                                            <el-col :span="6">
                                                    <el-input v-model.trim="s_klass" placeholder="请输入产品名称" @keyup.enter.native="search"></el-input>
                                            </el-col>
                                            <el-col :span="6">
                                                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                                            </el-col>
                                          </el-row>
                            </el-col>
                          </el-row> -->
                          <router-link :to="{path:'addproduct'}"><el-button type="primary">+新增产品</el-button></router-link>
                          <span>  商家登录后台地址：
                                <el-tooltip class="item" effect="dark" content="点击复制" placement="top">
                                    <span style="color:#3c8dbc;cursor: pointer;"   v-clipboard:copy="userurl" v-clipboard:success="onCopy" v-clipboard:error="onError">b.5youfenqi.com</span>
                                </el-tooltip>
                            </span>
                          <el-row :gutter="20" style="float: right">
                                <el-col :span="6">
                                        <template>
                                                <el-select v-model="value1" multiple placeholder="请选择模块" size="medium">
                                                        <el-option v-for="item in options" :key="item.key" :label="item.label" :value="item.value">
                                                        </el-option>
                                                      </el-select>
                                              </template>
                                        <!-- <el-select v-model="platform" placeholder="请选择平台" clearable="true" @change="search1()">
                                            <template v-for="item in platformdata">
                                                <el-option :label="item.name" :value="item.id"></el-option>
                                            </template>
                                              </el-select> -->
                                </el-col>
                                <el-col :span="4">
                                        <el-select v-model="platform" placeholder="请选择平台" clearable="true" @change="search1()">
                                            <template v-for="item in platformdata">
                                                <el-option :label="item.name" :value="item.id"></el-option>
                                            </template>
                                              </el-select>
                                </el-col>
                                <el-col :span="4">
                                        <el-select v-model="status" placeholder="请选择状态" @change="search1()" clearable="true">
                                                <el-option label="已下架" value="0"></el-option>
                                                <el-option label="已上架" value="1"></el-option>
                                              </el-select>
                                </el-col>
                                <el-col :span="4">
                                        <el-input v-model.trim="name" placeholder="请输入产品名称" @keyup.enter.native="search" @change="search1()" clearable="true"></el-input>
                                </el-col>
                                <el-col :span="4">
                                        <el-button type="primary" icon="el-icon-search"  @click="search()">搜索</el-button>
                                </el-col>
                              </el-row>
                </div>
            <el-table :data="tableData" border size="medium" ref="multipleTable" stripe>
                <el-table-column prop="id" label="ID" align="center" width="50"></el-table-column>
                <el-table-column prop="name" label="名称" align="center"></el-table-column>
                <el-table-column prop="image" label="图片" align="center">
                　<template slot-scope="scope">
                　　　　<img :src="scope.row.image" width="40" height="40" class="head_pic"/>
                　　</template>
                </el-table-column>
                <el-table-column prop="rate" label="日利率" align="center"></el-table-column>
                <el-table-column prop="apply_num" label="申请人数" align="center"></el-table-column>
                <!-- <el-table-column prop="lending_time" label="放款时长" align="center"></el-table-column> -->
                <!-- <el-table-column prop="apply_price" label="放款金额" align="center"></el-table-column> -->
                <el-table-column prop="hidden_url" label="链接地址" align="center" :show-overflow-tooltip="true" >
                    <template slot-scope="scope">
                        <span v-clipboard:copy="scope.row.hidden_url" v-clipboard:success="onCopy" v-clipboard:error="onError">{{scope.row.hidden_url}}</span>
                　　</template>
                </el-table-column>
                <el-table-column prop="create_time" label="时间" align="center"></el-table-column>
                <el-table-column prop="new" label="最新口子" align="center">
                    <template slot-scope="scope">
                        <span  @click="handleNew(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                            <i v-if="scope.row.new" class="el-icon-check"></i>
                            <i v-if="!scope.row.new" class="el-icon-close"></i>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="hot" label="热门口子" align="center">
                    <template slot-scope="scope">
                        <span  @click="handleCheck(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                            <i v-if="scope.row.hot" class="el-icon-check"></i>
                            <i v-if="!scope.row.hot" class="el-icon-close"></i>
                        </span>
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
                <el-table-column prop="money" label="余额" align="center"></el-table-column>
                <el-table-column prop="admin_name" label="商户名称" align="center"></el-table-column>
                <el-table-column prop="platform_name" label="系统平台" align="center"></el-table-column>
                <el-table-column label="操作" align="center" width="130px">
                    <template slot-scope="scope">
                        <router-link :to="{path:'addproduct',query:{id:scope.row.id}}">
                            <el-button size="mini">
                               编辑
                            </el-button>
                        </router-link>
                        <router-link :to="{path:'dailystatistics',query:{row:scope.row}}" >
                                <el-button size="mini" style="margin-top:10px">
                                   数据
                                </el-button>
                            </router-link>

                            <el-button  size="mini" @click="open" style="margin-top:10px">充值</el-button>
                            <router-link :to="{path:'adddproductadddeduct',query:{id:scope.row.id,name:scope.row.name,balance_type:scope.row.balance_type,user_price:scope.row.user_price}}">
                                    <el-button size="mini" style="margin-top:10px">
                                       新增流量详情
                                    </el-button>
                            </router-link>
                            <router-link :to="{path:'undercarriage',query:{id:scope.row.id,quantity_off_start_time:scope.row.quantity_off_start_time,quantity_off_num:scope.row.quantity_off_num}}">
                                <el-button size="mini" style="margin-top:10px">
                                   定量下架
                                </el-button>
                            </router-link>
                              <!-- <el-button size="mini" @click="dialogFormVisible = true">新增流量详情</el-button>

                              <el-dialog title="新增流量详情" :visible.sync="dialogFormVisible" width="20%" center>
                                    <el-form :model="form">
                                        <el-form-item label="产品名称" :label-width="formLabelWidth">
                                        <el-input v-model="form.name" autocomplete="off"></el-input>
                                        </el-form-item>
                                    </el-form>
                                    <el-form :model="form">
                                            <el-form-item label="用户单价" :label-width="formLabelWidth">
                                            <el-input v-model="form.name" autocomplete="off"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <el-form :model="form">
                                                <el-form-item label="实际用户流量" :label-width="formLabelWidth">
                                                <el-input v-model="form.name" autocomplete="off"></el-input>
                                                </el-form-item>
                                            </el-form>
                                    <div slot="footer" class="dialog-footer">
                                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                                    </div>
                                </el-dialog>     -->
                                <!-- <el-button size="mini"  @click="dialogTableVisible = true">流量记录</el-button> -->

                                <el-dialog title="流量记录" :visible.sync="dialogTableVisible">
                                        <el-table :data="tableData" border size="medium" ref="multipleTable">
                                                <el-table-column prop="id" label="编号" align="center" width="120"></el-table-column>
                                                <el-table-column prop="name" label="产品id" align="center"></el-table-column>
                                                <el-table-column prop="type" label="次数" align="center"></el-table-column>
                                                <el-table-column prop="register_time" label="用户单价" align="center"></el-table-column>
                                                <el-table-column prop="status" label="创建时间" align="center"></el-table-column>
                                            </el-table>
                                    <!-- <el-table :data="gridData">
                                        <el-table-column property="date" label="编号" width="150"></el-table-column>
                                        <el-table-column property="name" label="产品id" width="200"></el-table-column>
                                        <el-table-column property="address" label="次数"></el-table-column>
                                        <el-table-column property="address" label="用户单价"></el-table-column>
                                        <el-table-column property="address" label="创建时间"></el-table-column>

                                    </el-table> -->
                                </el-dialog>
                        <!-- <el-button size="mini" @click="handleEdit( scope.row)">流量记录</el-button> -->
                        <el-button size="mini" @click="handleEdit(scope,row)" style="margin-top:10px">删除</el-button>
                    </template>
                    <!-- <template slot-scope="scope">
                        <router-link :to="{path:'studentDetail',query:{id:scope.row.id}}" style="color:#35a000;">编辑</router-link>
                    </template> -->
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
            platform:"",
            dialogTableVisible: false,
            dialogFormVisible: false,
            value1: "",
            perPage:3,
            value2: "",
            tableData: [],
             // 默认显示第几页
            currentPage:1,
            // 总条数，根据接口获取数据长度(注意：这里不能为空)
            totalCount:1,
            // 个数选择器（可修改）
            pageSizes:[3,5,10,20],
            // 默认每页显示的条数（可修改）
            PageSize:10,
            cur_page: 1,
            pages: 0,
            name:"",
            s_student: '',
            s_school: '',
            s_grade: '',
            s_klass: '',
            status:"",
            userurl:"b.5youfenqi.com",
            // loading: true,
            region: "",
            region1: "",
            plusIcon: true,
            value1:"",
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                boutique:"",
                banner:"",
                new:"",
                hot:"",
            },
            options: [{
                value: 'boutique',
                label: '精品',
                key:'1'
                }, {
                value: 'banner',
                label: '小额现金贷',
                key:'2'
                }, {
                value: 'new',
                label: '最新口子',
                key:'3'
                }, {
                value: 'hot',
                label: '最热口子',
                key:'4'
            }],
            pageSize:"",
            platformdata:"",
        }
    },
    created() {
        this.getlistdata()
        this.getplatform()

    },
    computed: {

    },
    methods: {
        getlistdata(){
            this.$get('products?status=1&sort=-id').then((res) => {
                console.log(res)
                if(res.code===1){
                    this.tableData = res.info.items;
                    this.pages=res.info._meta.pageCount
                    console.log(this.pages )
                }else{
                    this.$message.error('数据加载失败');
                }
                this.loading = false
            }).catch( () => {
                this.loading = false
            })
        },
        getplatform(){
            this.$get('product/platform').then((res) => {
                console.log(res)

                if(res.code===1){
                    this.platformdata = res.info;
                }else{
                    this.$message.error('数据加载失败');
                }
                this.loading = false
            }).catch( () => {
                this.loading = false
            })
        },
        open() {
            this.$prompt('请输入充值金额', '', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            // inputPattern: /[1-9]+[0-9]*/,
            // inputErrorMessage: '充值金额格式不正确'
            }).then(({ value }) => {

                // 发送请求到后台充值

            // this.$message({
            //     type: 'success',
            //     message: '你的邮箱是: ' + value
            // });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        },
        handleCheck(index, row) {
            row.hot = !row.hot;
            if(row.hot == false){
                row.hot = 0
            }else{
                row.hot = 1
            }
            this.$put('products/'+row.id, {
                hot: row.hot,
            }).then((res) => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        handleStatus(index,row){
            row.status = !row.status;

            if(row.status == false){
                row.status = 0
            }else{
                row.status = 1
            }
            this.$put('products/'+row.id, {
                status: row.status,
            }).then((res) => {
                this.loading = false
                this.search1()
            }).catch(() => {
                this.loading = false
            })
        },
        handleNew(index,row){
            row.new = !row.new;
            if(row.new == false){
                row.new = 0
            }else{
                row.new = 1
            }
            this.$put('products/'+row.id, {
                new: row.new,
            }).then((res) => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        // 分页导航
        handleCurrentChange(val) {
            this.loading = true
            this.$get('products?sort=-id', {
                page:val,
                status: this.status?this.status:1,
                name:this.name?this.name:'',
                platform:this.platform?this.platform:''
            }).then((res) => {
                console.log(res)
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
            console.log(this.value1)
            var arr =[]
            for(var i in this.value1){
                console.log(this.value1[i])
                arr.push(this.value1[i])
            }
            console.log(arr)
            this.loading = true
            this.form.boutique = arr.indexOf('boutique');
            this.form.banner = arr.indexOf('banner');
            this.form.new = arr.indexOf('new');
            this.form.hot = arr.indexOf('hot');
            this.$get('products?sort=-id', {
                status: this.status?this.status:'',
                name:this.name?this.name:'',
                platform:this.platform?this.platform:'',
                boutique:this.form.boutique===-1?null:1,
                banner:this.form.banner===-1?null:1,
                hot:this.form.hot===-1?null:1,
                new:this.form.new===-1?null:1,
            }).then((res) => {
                if (res.code === 1) {
                    this.tableData = JSON.parse(JSON.stringify(res.info.items))
                    this.pages = res.info._meta.pageCount;
                    this.currentPage = 1
                    this.cur_page= 1
                    console.log(this.currentPage,this.cur_page)
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
            this.$get('products?sort=-id', {
                status: this.status?this.status:'1',
                name:this.name?this.name:'',
                platform:this.platform?this.platform:''
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
        // celldblclick (row, column, cell, event) {
        //     let _this = this
        //     this.$copyText(row[column.property]).then(function (e) {
        //         _this.onCopy()
        //         console.log(row[column.property])
        //     }, function (e) {
        //         _this.onError()
        //     })
        // }
        onCopy(e) {
             this.$message({
                message:"复制链接成功",
                type: 'success'
            });
        },
        onError(e) {
            console.log(e);
        },
        handleEdit(scope,row){
            console.log(scope)
            this.$del('products/'+scope.row.id).then((res) => {
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
/* .lianjie{
overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
} */
</style>
