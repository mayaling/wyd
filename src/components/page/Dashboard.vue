<template>
    <div class="dashboard-editor-container">
        <el-row :gutter="40" class="panel-group">
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
                  <div class="card-panel-icon-wrapper icon-people">
                    </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">
                        总用户人数
                    </div>
                    <div class="card-panel-text">
                        {{listdata.user_total}}
                      </div>
                </div>
                
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <div class="card-panel" @click="handleSetLineChartData('messages')">
                <div class="card-panel-icon-wrapper icon-message">
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">
                        今日新增用户数
                    </div>
                    <div class="card-panel-text">
                      {{listdata.user_new}}
                    </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <div class="card-panel" @click="handleSetLineChartData('purchases')">
                <div class="card-panel-icon-wrapper icon-money">
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">
                        今日产品UV
                    </div>
                    <div class="card-panel-text">
                      {{listdata.pdt_uv}}
                    </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <div class="card-panel" @click="handleSetLineChartData('shoppings')">
                <div class="card-panel-icon-wrapper icon-shopping">
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">
                        新客UV
                    </div>
                    <div class="card-panel-text">
                      {{listdata.act_uv}}
                    </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="40" class="panel-group">
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
                  <div class="card-panel-icon-wrapper icon-people">
                  </div>
                  <div class="card-panel-description">
                    <div class="card-panel-text">
                        今日刷单数
                    </div>
                    <div class="card-panel-text">
                        {{listdata.click_farm}}
                      </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('messages')">
                  <div class="card-panel-icon-wrapper icon-message">
                  </div>
                  <div class="card-panel-description">
                      <div class="card-panel-text">
                          意向用户
                      </div>
                      <div class="card-panel-text">
                          {{userdata.latent}}
                        </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('purchases')">
                  <div class="card-panel-icon-wrapper icon-money">
                  </div>
                  <div class="card-panel-description">
                      <div class="card-panel-text">
                          黑名单用户
                      </div>
                      <div class="card-panel-text">
                          {{userdata.total_black}}
                        </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('shoppings')">
                  <div class="card-panel-icon-wrapper icon-shopping">
                  </div>
                  <div class="card-panel-description">
                      <div class="card-panel-text">
                          极黑用户
                      </div>
                      <div class="card-panel-text">
                          {{userdata.very_black}}
                        </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="14">
              <div class="chart-wrapper">
                  <div class="container-title">七日趋势</div>
                  <g2-line :charData="linechartData" :id="'c2'"></g2-line>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="10">
              <div class="chart-wrapper">
                  <div class="container-title">今日渠道转化</div>
                  <div id="mountNode"></div>
              </div>
            </el-col>
        </el-row>
        <el-alert type="success" style="position:fixed;top:70px;right:0px;width:300px;height:100px;float:right">
            <template>
              <div style="font-size:14px;">
                <p style="float:right">今日UV数/昨日UV数:{{listdata.pdt_uv}}/{{listdata.last_pdt_uv}}</p>
                <p style="margin-top:10px;float:right">今日UV效率/昨日UV效率:{{listdata.pre}}/{{listdata.last_pre}}</p>
              </div>
            </template>
        </el-alert>
    </div>
  </template>
  
  <script>

    import G2Line from '../common/linechart1.vue'
    import G2 from '@antv/g2'
  export default {
    name: 'DashboardAdmin',
    components: {
        G2Line
    },
    // components: {
    //   GithubCorner,
    //   PanelGroup,
    //   LineChart,
    //   RaddarChart,
    //   PieChart,
    //   BarChart,
    //   TransactionTable,
    //   TodoList,
    //   BoxCard
    // },
    data() {
      return {
        // lineChartData: lineChartData.newVisitis,
        linechartData:[],
        listdata:'',
        bardata:'',
        des:"",
        tipdata:"",
        userdata:'',
      }
    },
    created() {
      this.getlinedata()
      this.getlistdata()
      this.getbardata()
      this.getuserdata()
    },
    mounted() {
      var _this = this
      setTimeout(function(){
        _this.draw()
      },500)
      this.timer = setInterval(
        _this.getlistdata(),
        _this.getbardata(), 
        20000
      );
    },
    destroyed() {
      clearInterval(this.timer);　　// 清除定时器
      this.timer = null;
    },  
    methods: {
      getlinedata(){
        this.$get('index/channel-analysis').then((res) => {
            console.log(res)
            var array = res.info;
            function flat() {
                var flatArr = []
                return function flatten(arr) {
                    for (let index = 0; index < arr.length; index++) {
                    Array.isArray(arr[index])
                        ? flatten(arr[index])
                        : flatArr.push(arr[index])
                    }
                    return flatArr
                }
            }
            this.linechartData = flat()(array)
            console.log(this.linechartData)
            // if(res.code===1){
            //     this.tableData = res.info.items;
            // }else{
            //     this.$message.error('数据加载失败');
            // }
            this.loading = false
        }).catch( () => {
            this.loading = false
        })
      }, 
      handleSetLineChartData(type) {
        this.lineChartData = lineChartData[type]
      },
      getlistdata(){
                this.$get('index/index').then((res) => {
                    if(res.code===1){
                        this.listdata = res.info;
                    }else{
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch( () => {
                    this.loading = false
                })
            }, 
            getbardata(){
                this.$get('index/channels').then((res) => {
                    if(res.code===1){
                        this.bardata = res.info;
                        // console.log(this.bardata)
                    }else{
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch( () => {
                    this.loading = false
                })
            }, 
            getuserdata(){
                this.$get('index/user').then((res) => {
                    if(res.code===1){
                        this.userdata = res.info;
                        
                        console.log(this.userdata)
                    }else{
                        this.$message.error('数据加载失败');
                    }
                    this.loading = false
                }).catch( () => {
                    this.loading = false
                })
            },
            draw(){
              var data = [];
              // var data = [{
              //   name: '激活',
              //   value: this.bardata[2].value,
              //   washaway: this.bardata[2].value/this.bardata[1].value
              // }, {
              //   name: '推广页注册',
              //   value: this.bardata[1].value,
              //   washaway: this.bardata[1].value/this.bardata[0].value
              // }, {
              //   name: '推广页UV',
              //   value: this.bardata[0].value,
              // }];
              data = this.bardata
              var colorSet = {
                MODIFY: '#4FAAEB',
                PRERELEASE: '#4FAAEB',
                RELEASING: '#4FAAEB'
              };
              var Shape = G2.Shape;
              Shape.registerShape('interval', 'textInterval', {
                draw: function draw(cfg, group) {
                  var points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
                  var value = cfg.origin._origin.value;
                  group.addShape('text', {
                    attrs: {
                      text: value,
                      textAlign: 'center',
                      x: points[1].x + cfg.size / 2,
                      y: points[1].y,
                      fontFamily: 'PingFang SC',
                      fontSize: 12,
                      fill: '#BBB'
                    }
                  });
                  var polygon = group.addShape('polygon', {
                    attrs: {
                      points: points.map(function(point) {
                        return [point.x, point.y];
                      }),
                      fill: cfg.color
                    }
                  });
                  return polygon;
                }
              });
              Shape.registerShape('interval', 'fallFlag', {
                getPoints: function getPoints(_ref) {
                  var x = _ref.x,
                    y = _ref.y,
                    y0 = _ref.y0,
                    size = _ref.size;

                  return [{
                    x: x + size,
                    y: y0 + size
                  }, {
                    x: x,
                    y: y
                  }];
                },
                draw: function draw(cfg, group) {
                  if (cfg.origin._origin === data[data.length - 1]) {
                    return;
                  }
                  var points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
                  var p1 = points[0];
                  var width = 9;
                  var washaway = cfg.origin._origin.washaway;
                  group.addShape('text', {
                    attrs: {
                      text: (washaway * 100).toFixed(1) + ' %',
                      x: p1.x - width / 2 - 14,
                      y: p1.y - 14,
                      fontFamily: 'PingFang SC',
                      fontSize: 12,
                      fill: '#BBB'
                    }
                  });
                  var polygon = group.addShape('image', {
                    attrs: {
                      x: p1.x - 16,
                      y: p1.y - 16,
                      img: 'https://zos.alipayobjects.com/rmsportal/JuBdciUyUAkewNAetxtS.png',
                      width: 32,
                      height: 32
                    }
                  });
                  return polygon; // 将自定义Shape返回
                }
              });
              var chart = new G2.Chart({
                container: 'mountNode',
                forceFit: true,
                height: 500
              });
              chart.legend(false);
              chart.source(data, {
                value: {
                  alias: '数量'
                },
                name: {
                  alias: '步骤名称'
                }
              });
              chart.axis('name', {
                title: null
              });
              chart.interval().position('name*value').shape('textInterval').color('name', ['#1aadbf', '#1aadbf', '#1aadbf']).size(30);
              chart.interval().position('name*value').color('#E4E4E4').shape('fallFlag');
              chart.coord().transpose();
              chart.render();
            },
    }
  }
  </script>
  
  <style scoped>
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
    /* .content-box{
      padding:20px!important;
    } */
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    /* padding-left:20px; */
    }
    
  .panel-group {
     margin-top: 18px;
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      /* margin: 14px 0 0 14px; */
      margin:0;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: left;
      /* margin-left: 20px; */
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
    }
    .card-panel-text {
        line-height: 18px;
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-text:nth-child(2){
        color: rgb(0, 188, 193);
        font-size: 24px;
      
      }
      .card-panel-num {
        font-size: 20px;
      }
 

/* @media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
} */
  </style>
  