<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">无忧贷用户列表</div>
                <div class="mgb20">
                    <el-button type="primary" icon="el-icon-search">导出</el-button>
                    <el-row style="float: right">
                            <el-col :span="3">
                                <el-select v-model="channel" placeholder="渠道" v-loadmore="loadMore" @change="search" clearable="true" >
                                    <template  v-for="item in channeldata">
                                        <el-option :label="item.name" :value="item.id"></el-option>
                                    </template>
                                </el-select>
                            </el-col>
                            <el-col :span="3" offset="1">
                                    <el-select v-model="active" placeholder="状态" @change="search" clearable="true">
                                        <el-option label="已激活" value="1"></el-option>
                                        <el-option label="自然用户" value="2"></el-option>
                                        <el-option label="未激活" value="0"></el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="3" offset="1"><el-input v-model.trim="p_phone" placeholder="用户手机号" @change="search" @keyup.enter.native="search"  clearable="true"></el-input></el-col>
                                <el-col :span="8" offset="1">
                                        <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"  format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd" @change="search"></el-date-picker>
                                        <!-- <el-date-picker v-model="start_time" type="date" placeholder="注册开始时间" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" @change="search"></el-date-picker> -->
                                    </el-col>
                                    <!-- <el-col :span="4" offset="1">
                                        <el-date-picker v-model="end_time" type="date" placeholder="注册截止时间" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" @change="search"></el-date-picker>
                                    </el-col> -->
                            <el-col :span="2" offset="1"><el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button></el-col>

                        <!-- <el-col :span="4"></el-col>
                        <el-col :span="4"></el-col>
                        <el-col :span="4"></el-col>
                        <el-col :span="4"></el-col> -->
                        </el-row>
                    <!-- <el-row :gutter="20" style="float: right">
                        <el-col :span="6">
                                <el-select v-model="platform" placeholder="请选择平台" clearable="true" @change="search()">
                                    <template v-for="item in platformdata">
                                        <el-option :label="item.name" :value="item.id"></el-option>
                                    </template>
                                        </el-select>
                        </el-col>
                        <el-col :span="6">
                                <el-select v-model="status" placeholder="请选择状态" @change="search()" clearable="true">
                                        <el-option label="已下架" value="0"></el-option>
                                        <el-option label="已上架" value="1"></el-option>
                                        </el-select>
                        </el-col>
                        <el-col :span="6">
                                <el-input v-model.trim="name" placeholder="请输入产品名称" @keyup.enter.native="search"clearable="true"></el-input>
                        </el-col>
                        <el-col :span="6">
                                <el-button type="primary" icon="el-icon-search"  @click="search()">搜索</el-button>
                        </el-col>
                        </el-row> -->
                </div>
                <el-table :data="tableData" border size="medium" ref="multipleTable">
                    <el-table-column prop="id" label="ID" align="center"></el-table-column>
                    <el-table-column prop="mobile" label="手机号" align="center" width="150px"></el-table-column>
                    <el-table-column prop="active" label="是否激活" align="center"></el-table-column>
                    <el-table-column prop="active_time" label="激活时间" align="center" width="160px"></el-table-column>
                    <el-table-column prop="last_login_time" label="最后登录时间" align="center" width="160px"></el-table-column>
                    <el-table-column prop="device_id" label="设备号" align="center"></el-table-column>
                    <el-table-column prop="channel_name" label="渠道" align="center"></el-table-column>
                    <el-table-column prop="ip" label="IP" align="center">
                    <!-- <template slot-scope="scope">
                        <span>{{scope.row.register_ip}}</span>
                    </template> -->
                    </el-table-column>
                    <el-table-column prop="klass" label="版本号" align="center"></el-table-column>
                    <el-table-column prop="os" label="设备系统" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <router-link :to="{path:'CPA',query:{id:scope.row.id}}">
                                <el-button size="mini">
                                    CPA
                                </el-button>
                            </router-link>
                            <router-link :to="{path:'active',query:{row:scope.row}}">
                                <el-button size="mini" style="margin-top:10px">
                                    活跃日期
                                </el-button>
                            </router-link>
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
                value1: "",
                value2: "",
                tableData: [],
                page:1,
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
                active: "",
                channel:"",
                channeldata:"",
                time:"",
                p_phone:'',
                start_time:"",
                end_time:"",
                pageCount:"",
            }
        },
        created() {
            this.getlistdata();
            this.getchanneldata()
        },
        mounted() {

        },
        computed: {

        },
        methods: {
            loadMore() {
    　　　　　　console.log(2222) // 这里可以做你想做的任何事
                var _this = this;
                if(_this.page != _this.pageCount){
                    _this.page++;
                    this.$get('channels?sort=-id&page='+_this.page).then((res) => {
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
            getlistdata(){

                this.$get('users?sort=-id').then((res) => {
                    console.log(res)
                    // console.log(this.$options.methods.numberToIp(2147483647));
                    //     console.log(111)
                    //     console.log(this.$options.methods.getchanneldata());
                    if(res.code===1){
                        this.tableData = res.info.items;
                        this.pages = res.info._meta.pageCount;
                        // this.numberToIp(2147483647)
                        // console.log(this.numberToIp(2147483647))
                        for (var i = 0; i < this.tableData.length; i++) {
                            if (this.tableData[i].active == 0||this.tableData[i].active == null) {
                                this.tableData[i].active = '未激活'
                            } else if(this.tableData[i].active == 2) {
                                this.tableData[i].active = '自然用户'
                            }else{
                                this.tableData[i].active = ' 已激活'
                            }
                        }
                        for (var i = 0; i < this.tableData.length; i++) {
                            if (this.tableData[i].os == 0) {
                                this.tableData[i].os = 'Android'
                            } else if(this.tableData[i].os == 1){
                                this.tableData[i].os = 'IOS'
                            }else if(this.tableData[i].os == 2){
                                this.tableData[i].os = 'Web'
                            }else if(this.tableData[i].os == 4){
                                this.tableData[i].os = '其他'
                            }else{
                                this.tableData[i].os = ''
                            }
                        }


                        // this.numberToIp(2147483647)
                        // for(var i=0;i< this.channeldata.length;i++){
                        //     // numberToIp(this.channeldata[i].register_ip)
                        // }
                    }else{
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch( () => {
                    this.loading = false
                })
            },
            // numberToIp(number) {
            //     return (Math.floor(number/(256*256*256))) + "." +
            //     (Math.floor(number%(256*256*256)/(256*256))) + "." +
            //     (Math.floor(number%(256*256)/256)) + "." +
            //     (Math.floor(number%256));
            // },
            // numberToIp(number){
            //     var ip = "";
            //     if(value <= 0) {
            //         return ip;
            //     }
            //     var ip3 = (value << 0 ) >>> 24;
            //     var ip2 = (value << 8 ) >>> 24;
            //     var ip1 = (value << 16) >>> 24;
            //     var ip0 = (value << 24) >>> 24;
            //     ip += ip3 + "." + ip2 + "." + ip1 + "." + ip0;
            //     return ip;
            //     // console.log(ip)
            // },
            getchanneldata(){
                this.$get('channels?sort=-id').then((res) => {
                    console.log(res)
                    if(res.code===1){
                        this.channeldata = res.info.items;
                        this.pageCount = res.info._meta.pageCount

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
                this.$get('users?sort=-id', {
                    page: val,
                    channel_id: this.channel?this.channel:'',
                    active:this.active?this.active:'',
                    start_time:this.start_time?this.start_time:'',
                    end_time:this.end_time?this.end_time:'',
                    mobile:this.p_phone?this.p_phone:'',
                }).then((res) => {
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages = res.info._meta.pageCount;
                        for (var i = 0; i < this.tableData.length; i++) {
                            if (this.tableData[i].active == 0||this.tableData[i].active == null) {
                                this.tableData[i].active = '未激活'
                            } else if(this.tableData[i].active == 2) {
                                this.tableData[i].active = '自然用户'
                            }else{
                                this.tableData[i].active = ' 已激活'
                            }
                        }
                        for (var i = 0; i < this.tableData.length; i++) {
                            if (this.tableData[i].os == 0) {
                                this.tableData[i].os = 'Android'
                            } else if(this.tableData[i].os == 1){
                                this.tableData[i].os = 'IOS'
                            }else if(this.tableData[i].os == 2){
                                this.tableData[i].os = 'Web'
                            }else if(this.tableData[i].os == 4){
                                this.tableData[i].os = '其他'
                            }else{
                                this.tableData[i].os = ''
                            }
                        }
                        // this.pages = res.data.pages;
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
                console.log(this.start_time)
                console.log(this.time)
                this.$get('users?sort=-id', {
                    channel_id: this.channel?this.channel:'',
                    active:this.active?this.active:'',
                    // start_time:this.start_time?this.start_time:'',
                    // end_time:this.end_time?this.end_time:'',
                    mobile:this.p_phone?this.p_phone:'',
                    start_time:this.time?this.time[0]:'',
                    end_time:this.time?this.time[1]:'',
                }).then((res) => {
                    console.log(res)
                    if (res.code === 1) {
                        this.tableData = JSON.parse(JSON.stringify(res.info.items))
                        this.pages = res.info._meta.pageCount;
                        // this.$router.push({path: 'userlist', query: {active:this.tableData.active,os:this.tableData.os}});
                        for (var i = 0; i < this.tableData.length; i++) {
                            if (this.tableData[i].active == 0||this.tableData[i].active == null) {
                                this.tableData[i].active = '未激活'
                            } else if(this.tableData[i].active == 2) {
                                this.tableData[i].active = '自然用户'
                            }else{
                                this.tableData[i].active = ' 已激活'
                            }
                        }
                        for (var i = 0; i < this.tableData.length; i++) {
                            if (this.tableData[i].os == 0) {
                                this.tableData[i].os = 'Android'
                            } else if(this.tableData[i].os == 1){
                                this.tableData[i].os = 'IOS'
                            }else if(this.tableData[i].os == 2){
                                this.tableData[i].os = 'Web'
                            }else if(this.tableData[i].os == 4){
                                this.tableData[i].os = '其他'
                            }else{
                                this.tableData[i].os = ''
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
