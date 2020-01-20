+<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">无忧米商品列表</div>

            <div class="mgb20">
                <router-link :to="{path:'editgoods'}"><el-button type="primary">+新增商品</el-button></router-link>

                    <!-- <el-row :gutter="10" class="clearfix">
                            <el-col :span="2">
                                <el-select v-model="channel" placeholder="请选择渠道">
                                    <template  v-for="item in channeldata">
                                        <el-option :label="item.name" :value="item.id"></el-option>
                                    </template>
                                </el-select>
                            </el-col>
                            <el-col :span="2">
                                <el-select v-model="active" placeholder="请选择激活状态">
                                    <el-option label="已激活" value="1"></el-option>
                                    <el-option label="未激活" value="0"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="4">
                                <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"  format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"></el-date-picker>
                            </el-col>
                        <el-col :span="2"><el-input v-model.trim="p_phone" placeholder="输入用户手机号" @keyup.enter.native="search"></el-input></el-col>
                        <el-col :span="2"><el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button></el-col>
                        <el-col :span="2"><el-button type="primary" icon="el-icon-search">导出</el-button></el-col>
                    </el-row> -->
                </div>
            <el-table :data="tableData" border size="medium" ref="multipleTable">
                <el-table-column prop="id" label="ID" align="center" width="120"></el-table-column>
                <el-table-column prop="name" label="商品名称" align="center"></el-table-column>
                <el-table-column prop="price_now" label="现价" align="center"></el-table-column>
                <el-table-column prop="price_origin" label="原价" align="center"></el-table-column>
                <el-table-column prop="specification" label="规格" align="center"></el-table-column>
                <el-table-column prop="service" label="服务" align="center"></el-table-column>
                <el-table-column prop="sold_num" label="销量" align="center"></el-table-column>
                <el-table-column prop="inventory" label="库存" align="center"></el-table-column>
                <!-- <el-table-column prop="detail_url" label="商品的详情url" align="center"></el-table-column> -->
                <el-table-column prop="image" label="商品图片" align="center">
                    　<template slot-scope="scope">
                    　　　　<img :src="scope.row.image" width="40" height="40" class="head_pic"/>
                    　　</template>
                    </el-table-column>
                <el-table-column prop="is_banner" label="轮播" align="center">
                    <template slot-scope="scope">
                        <span  @click="handlebanner(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                            <i v-if="scope.row.is_banner" class="el-icon-check"></i>
                            <i v-if="!scope.row.is_banner" class="el-icon-close"></i>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="is_seckill" label="秒杀" align="center">
                    <template slot-scope="scope">
                        <span  @click="handleseckill(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                            <i v-if="scope.row.is_seckill" class="el-icon-check"></i>
                            <i v-if="!scope.row.is_seckill" class="el-icon-close"></i>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="is_recommand" label="推荐" align="center">
                        <template slot-scope="scope">
                            <span  @click="handlerecommand(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                                <i v-if="scope.row.is_recommand" class="el-icon-check"></i>
                                <i v-if="!scope.row.is_recommand" class="el-icon-close"></i>
                            </span>
                        </template>
                </el-table-column>
                <el-table-column prop="free_mail" label="包邮" align="center">
                    <template slot-scope="scope">
                        <span  @click="handlemail(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                            <i v-if="scope.row.free_mail" class="el-icon-check"></i>
                            <i v-if="!scope.row.free_mail" class="el-icon-close"></i>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="free_tax" label="免税" align="center">
                    <template slot-scope="scope">
                        <span  @click="handletax(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                            <i v-if="scope.row.free_tax" class="el-icon-check"></i>
                            <i v-if="!scope.row.free_tax" class="el-icon-close"></i>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <router-link :to="{path:'editgoods',query:{id:scope.row.id}}">
                            <el-button size="mini">
                                编辑
                            </el-button>
                        </router-link>
                        <!-- <router-link :to="{path:'active',query:{row:scope.row}}">
                            <el-button size="mini">
                                活跃日期
                            </el-button>
                        </router-link> -->
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
    name: 'teacher',
    data() {
        return {
            value1: "",
            value2: "",
            tableData: [],
            cur_page: 1,
            pages: 0,
            s_student: '',
            s_school: '',
            s_grade: '',
            s_klass: '',
            // loading: true,
            active: "",
            channel:"",
            channeldata:"",
            time:"",
            p_phone:''
        }
    },
    created() {
        this.getlistdata();
    },
    computed: {

    },
    methods: {
        getlistdata(){
            this.$get('goods').then((res) => {
                console.log(res)
                if(res.code===1){
                    this.tableData = res.info.items;
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
            this.$get('goods', {
                pageNum: val,
                studentName: this.s_student
            }).then((res) => {
                if (res.code === 0) {
                    this.tableData = JSON.parse(JSON.stringify(res.data.items))
                    this.pages = res.data.pages;
                } else {
                    this.$message.error('数据加载失败');
                }
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        handlebanner(index,row){
            row.is_banner = !row.is_banner;
            if(row.is_banner == false){
                row.is_banner = 0
            }else{
                row.is_banner = 1
            }
            this.$put('goods/'+row.id, {
                is_banner: row.is_banner,
            }).then((res) => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        handleseckill(index,row){
            row.is_seckill = !row.is_seckill;
            if(row.is_seckill == false){
                row.is_seckill = 0
            }else{
                row.is_seckill = 1
            }
            this.$put('goods/'+row.id, {
                is_seckill: row.is_seckill,
            }).then((res) => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        handlerecommand(index,row){
            row.is_recommand = !row.is_recommand;
            if(row.is_recommand == false){
                row.is_recommand = 0
            }else{
                row.is_recommand = 1
            }
            this.$put('goods/'+row.id, {
                is_recommand: row.is_recommand,
            }).then((res) => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        handlemail(index,row){
            row.free_mail = !row.free_mail;
            if(row.free_mail == false){
                row.free_mail = 0
            }else{
                row.free_mail = 1
            }
            this.$put('goods/'+row.id, {
                free_mail: row.free_mail,
            }).then((res) => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        handletax(index,row){
            row.free_tax = !row.free_tax;
            if(row.free_tax == false){
                row.free_tax = 0
            }else{
                row.free_tax = 1
            }
            this.$put('goods/'+row.id, {
                free_tax: row.free_tax,
            }).then((res) => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
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
