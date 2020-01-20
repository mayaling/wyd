<template>
        <div class="table" v-loading="loading" element-loading-text="加载中">
            <div class="container">
                <div class="container-title">渠道每日统计</div>
                <div class="mgb20">
                        <router-link :to="{path:'dailycanalstatistics'}"><el-button type="primary">查看今日实时</el-button></router-link>
                        <router-link :to="{path:'channeldaylog'}"><el-button type="primary">查看过往数据</el-button></router-link>
                        <!-- <el-button type="primary" icon="el-icon-download"  @click="download()">下载</el-button> -->
                                <a :href="'http://api-backend.5youfenqi.com/channel-analysis/get-data-ago?start_time='+time[0]+'&end_time='+time[1]" target="_blank">
                                    <el-button type="primary" icon="el-icon-download">下载</el-button>
                                </a>
                                <!-- <el-button type="primary" icon="el-icon-download" @click="godownload()">下载</el-button> -->
                              <el-button type="primary" icon="el-icon-search"  @click="search()" style="float:right;margin-left: 20px;">搜索</el-button>
                              <!-- <el-date-picker v-model="start_time" type="date" placeholder="结束日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" style="float: right;margin-left:20px;" @change="search">
                            </el-date-picker>
                              <el-date-picker v-model="end_time" type="date" placeholder="起始日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" style="float: right" @change="search">
                                </el-date-picker> -->
                              <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"  format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd"  style="float: right" @change="search()"></el-date-picker>
                    </div>
                <!-- <el-table :data="tableData" border size="medium" ref="multipleTable" stripe :span-method="objectSpanMethod">
                    <el-table-column prop="id" label="渠道名称" align="center"></el-table-column>
                    <el-table-column prop="name" label="统计日期" align="center"></el-table-column>
                    <el-table-column prop="image" label="推广页uv" align="center">
                    　<template slot-scope="scope">
                    　　　　<img :src="scope.row.image" width="40" height="40" class="head_pic"/>
                    　　</template>
                    </el-table-column>
                    <el-table-column prop="rate" label="渠道注册" align="center"></el-table-column>
                    <el-table-column prop="apply_num" label="渠道激活" align="center"></el-table-column>
                    <el-table-column prop="lending_time" label="产品pv(新客)" align="center"></el-table-column>
                    <el-table-column prop="apply_price" label="产品uv(新客)" align="center"></el-table-column>
                    <el-table-column prop="hidden_url" label="产品pv(老客)" align="center"></el-table-column>
                    <el-table-column prop="create_time" label="产品uv(老客)" align="center"></el-table-column>
                    <el-table-column prop="hot" label="产品累积点击" align="center">
                        <template slot-scope="scope">
                            <span  @click="handleCheck(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                                <i v-if="scope.row.hot" class="el-icon-check"></i>
                                <i v-if="!scope.row.hot" class="el-icon-close"></i>
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="平均每日" align="center">
                            <template slot-scope="scope">
                                <span  @click="handleStatus(scope.$index,scope.row)" style="width: 40px;height: 40px;">
                                    <i v-if="scope.row.status" class="el-icon-check"></i>
                                    <i v-if="!scope.row.status" class="el-icon-close"></i>
                                </span>
                            </template>
                    </el-table-column>
                    <el-table-column prop="money" label="平均每周" align="center"></el-table-column>
                </el-table> -->


                <!-- <el-table stripe :data="tableData7" :span-method="objectSpanMethod1"    border style="width: 100%; margin-top: 20px" height="800" v-if="searchshow">
                    <el-table-column prop="channel_name" label="渠道姓名"></el-table-column>
                    <el-table-column prop="date" label="统计日期"></el-table-column>
                    <el-table-column prop="uv" label="推广页uv"></el-table-column>
                    <el-table-column prop="reg" label="渠道注册"></el-table-column>
                    <el-table-column prop="active" label="渠道激活"></el-table-column>

                    <el-table-column prop="p_pv" label="产品pv（新客）"></el-table-column>
                    <el-table-column prop="p_uv" label="产品uv（新客）"></el-table-column>
                    <el-table-column prop="p_old_pv" label="产品pv（老客）"></el-table-column>
                    <el-table-column prop="p_old_uv" label="产品uv（老客）"></el-table-column>
                    <el-table-column prop="total_uv" label="总uv"></el-table-column>
                    <el-table-column prop="reg_uv_pre" label="注册转化率">
                        <template slot-scope="scope">
                            <span>{{scope.row.reg_uv_pre}}%</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="active_uv_pre" label="激活转化率">
                            <template slot-scope="scope">
                                    <span>{{scope.row.active_uv_pre}}%</span>
                                </template>
                    </el-table-column>
                    <el-table-column prop="p_uv_uv_pre" label="新客转化率">
                            <template slot-scope="scope">
                                    <span>{{scope.row.p_uv_uv_pre}}%</span>
                                </template>
                    </el-table-column>
                    <el-table-column prop="total_uv_pre" label="总uv效率">
                            <template slot-scope="scope">
                                    <span>{{scope.row.total_uv_pre}}%</span>
                                </template>
                    </el-table-column>
                </el-table> -->

                <el-table stripe :data="tableData6" :span-method="objectSpanMethod"    border style="width: 100%; margin-top: 20px" height="800" v-if="searchshow1">
                        <el-table-column prop="channel_name" label="渠道姓名"></el-table-column>
                        <el-table-column prop="date" label="统计日期"></el-table-column>
                        <el-table-column prop="uv" label="推广页uv"></el-table-column>
                        <el-table-column prop="reg" label="渠道注册"></el-table-column>
                        <el-table-column prop="active" label="渠道激活"></el-table-column>

                        <el-table-column prop="p_pv" label="产品pv（新客）"></el-table-column>
                        <el-table-column prop="p_uv" label="产品uv（新客）"></el-table-column>
                        <el-table-column prop="p_old_pv" label="产品pv（老客）"></el-table-column>
                        <el-table-column prop="p_old_uv" label="产品uv（老客）"></el-table-column>
                        <el-table-column prop="total_uv" label="总uv"></el-table-column>
                        <el-table-column prop="reg_uv_pre" label="注册转化率">
                            <template slot-scope="scope">
                                <span>{{scope.row.reg_uv_pre}}%</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="active_uv_pre" label="激活转化率">
                                <template slot-scope="scope">
                                        <span>{{scope.row.active_uv_pre}}%</span>
                                    </template>
                        </el-table-column>
                        <el-table-column prop="p_uv_uv_pre" label="新客转化率">
                                <template slot-scope="scope">
                                        <span>{{scope.row.p_uv_uv_pre}}%</span>
                                    </template>
                        </el-table-column>
                        <el-table-column prop="total_uv_pre" label="总uv效率">
                                <template slot-scope="scope">
                                        <span>{{scope.row.total_uv_pre}}%</span>
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
                searchshow:true,
                searchshow1:true,
                loading:true,
                tableData:{},
                cur_page: 1,
                pages: 0,
                end_time:"",
                start_time:"",
                tableData1:"",
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rowList: [],
                spanArr: [],
                spanArr1:[],
                position: 0,
                tableData6: [],
                tableData7: [],
                time:'',
            }
        },
        created() {
            this.loading = true
            this.getlistdata()
            // console.log(this.tableData)
        },
        mounted() {
            var _this = this;
            // setTimeout(function(){
            //     console.log(_this.tableData)
            //     let arr=[]
            //     var myData = _this.tableData;
            //     for(let index in myData){
            //     if(index==='info'){
            //         for(let j in myData[index]){
            //             for(let s in myData[index][j]){
            //                 if(s==='list'){
            //                     // console.log(myData[index][j][s])
            //                     for(let x=0;x<myData[index][j][s].length;x++){
            //                         arr.push(myData[index][j][s][x])
            //                     }
            //                 }

            //             }
            //         }
            //     }
            //     }
            //     _this.tableData6=arr
            //     console.log(arr,'arr')
            //     console.log(_this.tableData6)
            //     _this.rowspan()
            // }, 500);
            // setTimeout(function(){
            //     _this.rowspan()
            // }, 500);
        },
        watch: {
            // tableData6(val) {
            //     this.value = this.tableData6;
            // }
        },
        computed: {

        },
        methods: {
            getlistdata(){
                this.$get('channel-analysis/day-list?sort=-id').then((res) => {
                    // console.log(res)
                    if(res.code === 1){
                        // this.tableData7 = res.info.sorted_list;
                        // this.rowspan1(this.tableData7)
                        this.tableData6 = res.info.sorted_list;
                        this.rowspan(this.tableData6)
                        this.pages = res.info._meta.pageCount
                        // console.log(this.tableData)
                    }else{
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch( () => {
                    this.loading = false
                })
            },
            rowspan(){
                    this.spanArr =[]
                    this.tableData6.forEach((item,index) => {
                        // console.log(index)
                    if( index === 0){
                        this.spanArr.push(1);
                        this.position = 0;
                    }else{
                        if(this.tableData6[index].channel_name === this.tableData6[index-1].channel_name ){
                            this.spanArr[this.position] += 1;
                            this.spanArr.push(0);
                        }else{
                            this.spanArr.push(1);
                            this.position = index;
                        }
                        // console.log(this.spanArr)
                    }
                })
            },
            rowspan1(){
                this.spanArr1=[]
                    this.tableData7.forEach((item,index) => {
                        // console.log(index)
                    if( index === 0){
                        this.spanArr1.push(1);
                        this.position = 0;
                    }else{
                        if(this.tableData7[index].channel_name === this.tableData7[index-1].channel_name ){
                            this.spanArr1[this.position] += 1;
                            this.spanArr1.push(0);
                        }else{
                            this.spanArr1.push(1);
                            this.position = index;
                        }
                        // console.log(this.spanArr)
                    }
                })
            },
            objectSpanMethod({row,column,rowIndex,columnIndex}) {
                if (columnIndex === 0) {
                    const _row = this.spanArr[rowIndex];
                    const _col = _row>0 ? 1 : 0;
                    return {
                        rowspan: _row,
                        colspan: _col
                    }
                }
            },
            objectSpanMethod1({row,column,rowIndex,columnIndex}) {
                console.log(row)
                if (columnIndex === 0) {
                    const _row = this.spanArr1[rowIndex];
                    const _col = _row>0 ? 1 : 0;
                    return {
                        rowspan: _row,
                        colspan: _col
                    }
                }
            },
            // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            //     if (rowIndex % 2 === 0) {
            //     if (columnIndex === 0) {
            //         return [1, 2];
            //     } else if (columnIndex === 1) {
            //         return [0, 0];
            //     }
            //     }
            // },

            download(){
                this.$get('channel-analysis/get-data-ago').then((res) => {
                    // console.log(res)
                    // if(res.code === 1){

                    // }else{
                    //     this.$message.error('数据加载失败');
                    // }
                    this.loading = false
                }).catch( () => {
                    this.loading = false
                })
            },
            // godownload(){
            //     window.location.href = "https://api-backend.sshua.com/channel-analysis/get-data-ago?"+this.time?this.time[0]:''&this.time?this.time[1]:''
            // },
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
            // 分页导航
            handleCurrentChange(val) {
                this.loading = true
                this.$get('channel-analysis/day-list?sort=-id', {
                    page: val,
                }).then((res) => {
                    if (res.code === 0) {
                        this.tableData = JSON.parse(JSON.stringify(res.list))
                        this.pages = res.info._meta.pageCount
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
                this.tableData6 = [];
                this.loading = true
                this.$get('channel-analysis/day-list?sort=-id', {
                    // start_time:this.start_time?this.start_time:'',
                    // end_time:this.end_time?this.end_time:'',
                    start_time:this.time?this.time[0]:'',
                    end_time:this.time?this.time[1]:'',
                }).then((res) => {
                    if (res.code === 1) {
                        // this.tableData7= res.info.sorted_list;
                        // this.rowspan(this.tableData7)
                        this.tableData6 = res.info.sorted_list;
                        // this.searchshow = false;
                        // this.searchshow1 = true;
                        this.rowspan(this.tableData6)
                        // console.log(this.searchshow)
                        // setTimeout(function(){
                        //     this.rowspan1()
                        // }, 500);

                        // this.loading = true
                        // setTimeout(function(){
                        //     this.loading = true
                        // },1000)
                        // this.loading = false
                        // console.log(this.tableData6)
                        // this.tableData1 = res;
                        // let arr=[]
                        // var myData = this.tableData1;
                        // for(let index in myData){
                        // if(index==='info'){
                        //     for(let j in myData[index]){
                        //         for(let s in myData[index][j]){
                        //             if(s==='list'){
                        //                 // console.log(myData[index][j][s])
                        //                 for(let x=0;x<myData[index][j][s].length;x++){
                        //                     arr.push(myData[index][j][s][x])
                        //                 }
                        //             }

                        //         }
                        //     }
                        // }
                        // }
                        // this.tableData6=arr
                        // // this.tableData6.push(res)
                        // console.log(this.tableData6)
                        // // this.pages = res.info._meta.pageCount
                        // // this.loading = false
                    } else {
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },
            // objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            //     console.log(rowIndex)
            //     if(columnIndex === 0){
            //         if(row[rowIndex].channel_name === row[rowIndex-1].channel_name){
            //             return{

            //             }
            //         }else{
            //             return{
            //                 rowspan:0,
            //                 colspan:0
            //             }
            //         }
            //     }

            //     if (columnIndex === 0) {
            //         if (rowIndex % 2 === 0) {
            //             return {
            //             rowspan: 2,
            //             colspan: 1
            //             };
            //         } else {
            //             return {
            //             rowspan: 0,
            //             colspan: 0
            //             };
            //         }
            //     }
            // }
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
