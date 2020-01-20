<template>
    <div class="table" v-loading="loading" element-loading-text="加载中">
        <div class="container">
            <div class="container-title">新建产品</div>
            <!-- <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6">
                        <el-form :model="form" ref="form" :rules="rules" class="item-add-list" :data="tableData">
                                        <el-form-item label="产品名称:" prop="name">
                                        <el-input v-model.trim="form.name" type="text"></el-input>
                                      </el-form-item>

                                        <el-form-item label="描述:" prop="desc">
                                        <el-input v-model.trim="form.desc"></el-input>
                                      </el-form-item>


                                        <el-form-item label="日利率" prop="rate">
                                        <el-input v-model.trim="form.rate" placeholder="例如0.03%"></el-input>
                                      </el-form-item>

                                        <el-form-item label="申请人数" prop="apply_num">
                                        <el-input v-model.trim="form.apply_num"></el-input>
                                      </el-form-item>


                                        <el-form-item label="放款时长" prop="lending_time">
                                            <el-input v-model.trim="form.lending_time"></el-input>
                                      </el-form-item>

                                        <el-form-item label="申请金额范围" prop="apply_duration">
                                            <el-input v-model.trim="form.apply_duration"></el-input>
                                        </el-form-item>

                                            <el-form-item label="申请最高价" prop="max_price">
                                                    <el-input-number v-model="form.max_price" controls-position="right" :min="1"></el-input-number>
                                          </el-form-item>

                                            <el-form-item label="贷款最大周期（天）" prop="max_duration">
                                                    <el-input-number v-model="form.max_duration" controls-position="right" :min="1"></el-input-number>

                                            </el-form-item>

                                                <el-form-item label="产品链接:" prop="url">
                                                <el-input v-model.trim="form.url" type="text"></el-input>
                                              </el-form-item>
                                                    <el-form-item label="热门:" prop="hot">
                                                            <el-select v-model="form.hot" placeholder="否">
                                                                    <el-option label="是" value="1"></el-option>
                                                                    <el-option label="否" value="0"></el-option>
                                                                </el-select>
                                                  </el-form-item>
                                                    <el-form-item label="状态:" prop="status">
                                                            <el-select v-model="form.status" placeholder="正常">
                                                                    <el-option label="正常" value="1"></el-option>
                                                                    <el-option label="下架" value="0"></el-option>
                                                                </el-select>
                                                  </el-form-item>
                                                        <el-form-item label="排序:" prop="sort">
                                                    <el-input-number v-model="form.sort" controls-position="right" :min="1"></el-input-number>
                                                    <span style="color:#999">数字越大越靠前,最小 0, 最大 100</span>
                                                      </el-form-item>
                                                        <el-form-item label="系统平台:" prop="projectName">
                                                                <el-select v-model="form.platform" placeholder="正常">
                                                                        <el-option label="正常" value="shanghai"></el-option>
                                                                        <el-option label="下架" value="beijing"></el-option>
                                                                    </el-select>
                                                      </el-form-item>
                                                            <el-form-item label="用户单价:" prop="apply_price">
                                                            <el-input v-model.trim="form.apply_price" type="text"></el-input>
                                                          </el-form-item>
                                                            <el-form-item label="上传图片:" prop="imageList" ref="uploadElemet">
                                                                    <el-upload class="upload-demo" :on-preview="handlePreview" :on-remove="handleRemove"   :file-list="fileList" list-type="picture" :on-change="handleChange" :http-request="addAttachment">
                                                                    <el-button size="small" type="primary">点击上传</el-button>
                                                                  </el-upload>
                                                                  <el-input v-show="false" v-model.trim="imageurl"></el-input>
                                                                  <img v-if="imageshow" :src="form.image" alt="">
                                                          </el-form-item>
                                <el-row :gutter="10" class="clearfix">

                                  <el-col :span="20" :offset="4">
                                    <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" style='margin-top:40px'>提交</el-button>
                                    <el-button type="primary" v-if="tableData" @click="onEdit('form')" style='margin-top:40px'>保存</el-button>
                                    <el-button @click="resetForm('form')">重置</el-button>
                                  </el-col>
                                </el-row>
                        </el-form>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6"></el-col>
            </el-row>   -->
            <el-row>
                <el-form :model="form" ref="form" :rules="rules" class="item-add-list" :data="tableData">
                    <el-col :span="10">
                            <el-form-item label="产品名称:" prop="name">
                                    <el-input v-model.trim="form.name" type="text"></el-input>
                                  </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item label="描述:" prop="slogan">
                            <el-input v-model.trim="form.slogan"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <!-- <el-form-item label="日利率" prop="rate">
                            <el-input v-model.trim="form.rate" placeholder="例如0.03%"></el-input>
                        </el-form-item> -->
                        <el-form-item label="上架模块:" prop="hot" >
                            <template>
                                <el-select v-model="value1" multiple placeholder="请选择" >
                                    <el-option v-for="item in option2" :key="item.key" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                            <el-form-item label="申请人数" prop="apply_num">
                                    <el-input v-model.trim="form.apply_num"></el-input>
                                  </el-form-item>
                    </el-col>
                    <!-- <el-col :span="10">
                            <el-form-item label="放款时间(分钟)" prop="lending_time">
                                    <el-input v-model.trim="form.lending_time"></el-input>
                              </el-form-item>

                    </el-col>
                    <el-col :span="10" :offset="2">
                            <el-form-item label="申请金额范围" prop="apply_price">
                                    <el-input v-model.trim="form.apply_price" placeholder="2000-50000"></el-input>
                                </el-form-item>
                    </el-col> -->
                    <el-col :span="10">
                        <el-row>
                            <el-col :span="10">
                                <!-- <el-form-item label="申请最高价" prop="max_price">
                                        <el-input v-model.trim="form.max_price"></el-input>
                                </el-form-item> -->
                                <el-form-item label="贷款最大周期（天）" prop="max_duration">
                                    <el-input v-model.trim="form.max_duration"></el-input>
                                    <span style="color:#999">老版本需要填写</span>
                            </el-form-item>
                            </el-col>
                            <el-col :span="10" :offset="2">
                                <el-form-item label="最高借款期限:" prop="loan_cycle">
                                    <el-input v-model.trim="form.loan_cycle" type="text"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="10"  :offset="2">


                        <el-row>
                            <el-col :span="10">
                                <!-- <el-form-item label="申请最高价" prop="max_price">
                                        <el-input v-model.trim="form.max_price"></el-input>
                                </el-form-item> -->
                                <el-form-item label="申请最高价" prop="max_price">
                                    <el-input v-model.trim="form.max_price"></el-input>
                                    <span style="color:#999">老版本需要填写</span>
                                    <!-- <el-input-number v-model="form.max_price" controls-position="right" :min="1"></el-input-number> -->
                                </el-form-item>
                            </el-col>
                            <el-col :span="10" :offset="2">
                                <el-form-item label="申请金额范围:" prop="apply_price">
                                    <el-input v-model.trim="form.apply_price" type="text"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>



                    <el-col :span="10">
                            <el-form-item label="产品链接:" prop="url">
                                    <el-input v-model.trim="form.url" type="text"></el-input>
                                  </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <!-- <el-form-item label="上架模块:" prop="hot">
                            <template>
                                <el-select v-model="value1" multiple placeholder="请选择">
                                    <el-option v-for="item in options" :key="item.key" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-form-item> -->
                        <el-row type="flex" class="row-bg" justify="space-between">
                            <el-col :span="6">
                                <el-form-item label="利率选择:" prop="rate_type">
                                    <template>
                                        <el-select v-model="form.rate_type" placeholder="请选择" @change="changeplatform">
                                            <el-option
                                              v-for="item in option1"
                                              :key="item.value"
                                              :label="item.label"
                                              :value="item.value">
                                            </el-option>
                                          </el-select>
                                    </template>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="利率" prop="rate" v-if="rateshow">
                                    <el-input v-model.trim="form.rate" placeholder="例如0.03%"></el-input>
                                    <span style="color:#999">老版本需要填写</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="利率" prop="rate_str" v-if="rateshow">
                                    <el-input v-model.trim="form.rate_str" placeholder="例如0.03%"></el-input>
                                </el-form-item>
                            </el-col>
                          </el-row>
                    </el-col>
                    <el-col :span="10">
                            <el-form-item label="状态:" prop="status">
                                <el-select v-model="form.status">
                                        <template v-for="item in statusdata">
                                                <el-option :label="item.name" :value="item.id"></el-option>
                                        </template>
                                    <!-- <el-option label="开启" value="1"></el-option>
                                    <el-option label="关闭" value="0"></el-option> -->
                                </el-select>
                          </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                            <el-form-item label="排序:" prop="sort">
                                    <!-- <el-input-number v-model="form.sort" controls-position="right" :min="1"></el-input-number> -->
                                    <el-input v-model.trim="form.sort" type="text"></el-input>
                                    <span style="color:#999">数字越小越靠前,最小 0, 最大 100</span>
                                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                            <el-form-item label="系统平台:" prop="platform">
                                <el-select v-model="form.platform" placeholder="请选择平台" clearable="true">
                                    <template v-for="item in platformdata">
                                        <el-option :label="item.name" :value="item.id"></el-option>
                                    </template>
                                </el-select>
                          </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                            <el-row>
                                    <el-col :span="10">
                                        <el-form-item label="结算方式:" prop="balance_type">
                                            <el-select v-model="form.balance_type ">
                                                    <template v-for="item in typedata">
                                                        <el-option :label="item.name" :value="item.id"></el-option>
                                                    </template>
                                                <!-- <el-option label="UV" value="1"></el-option>
                                                <el-option label="CPA" value="2"></el-option>
                                                <el-option label="CPS" value="3"></el-option> -->
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="10" :offset="2">
                                        <el-form-item label="用户单价:" prop="user_price">
                                            <el-input v-model.trim="form.user_price" type="text"></el-input>
                                        </el-form-item>
                                    </el-col>
                                  </el-row>
                    </el-col>
                    <el-col :span="10">
                            <el-form-item label="商户选择:" prop="admin_id">
                                    <template>
                                    <!-- 　　<div class="page-component"> -->
                                    <!-- 　　<div class="container"> -->
                                    　　　　<el-select
                                    　　　　　　v-model="form.admin_id"
                                    　　　　　　placeholder="请选择"
                                    　　　　　　v-loadmore="loadMore" >
                                    　　　　　　<el-option v-for="item in userdata" :key="item.id" :label="item.name" :value="item.id">
                                    　　　　　　</el-option>
                                    　　　　</el-select>
                                    <!-- 　　</div> -->
                                    <!-- 　　</div> -->
                                    </template>
                                <!-- <el-select v-model="form.admin_id" placeholder="请选择商户" clearable="true">
                                    <template v-for="item in userdata">
                                        <el-option :label="item.name" :value="item.id"></el-option>
                                    </template>
                                </el-select> -->
                          </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                            <el-form-item label="多端选择:" prop="os_show">
                                    <template>
                                <!-- 　　　　<el-select v-model="form.os_show" placeholder="请选择">
                                　　　　　　<el-option v-for="item in osshowdata" :key="item.id" :label="item.name" :value="item.id">
                                　　　　　　</el-option>
                                　　　　</el-select> -->
                                        <el-select v-model="form.os_show" placeholder="请选择" multiple>
                                　　　　　　<el-option v-for="item in releasedata" :key="item.id" :label="item.title" :value="item.id">
                                　　　　　　</el-option>
                                　　　　</el-select>
                                    </template>
                                <!-- <el-select v-model="form.admin_id" placeholder="请选择商户" clearable="true">
                                    <template v-for="item in userdata">
                                        <el-option :label="item.name" :value="item.id"></el-option>
                                    </template>
                                </el-select> -->
                          </el-form-item>
                        <!-- <p style="font-size:14px;font-size: 14px;color: #606266;margin-bottom: 10px;"><span style="color:#f56c6c;">*</span>
                            上传图片
                            <span style="margin-left:20px;cursor: pointer;">
                                <a class="document-btn" target="_blank"  href="https://www.sojson.com/batch_yaosuo.html" style="color: rgb(60, 141, 188);">https://www.sojson.com/batch_yaosuo.html</a>
                            </span>
                        </p>
                        <el-form-item prop="imageList" ref="uploadElemet">
                            <el-upload class="upload-demo" :on-preview="handlePreview" :on-remove="handleRemove"   :file-list="fileList" list-type="picture" :on-change="handleChange" :http-request="addAttachment">
                            <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                            <el-input v-show="false" v-model.trim="imageurl"></el-input>
                            <img v-if="imageshow" :src="form.image" alt="" style="width: 100px;height: 100px;">
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" style="margin-top:150px;">
                        <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" >提交</el-button>
                        <el-button type="primary" v-if="tableData" @click="onEdit('form')" >保存</el-button>
                        <router-link :to="{path:'productlist'}"><el-button type="primary">取消</el-button></router-link> -->
                    </el-col>

                    <el-col :span="10">
                            <p style="font-size:14px;font-size: 14px;color: #606266;margin-bottom: 10px;"><span style="color:#f56c6c;">*</span>
                                上传图片
                                <span style="margin-left:20px;cursor: pointer;">
                                    <a class="document-btn" target="_blank"  href="https://www.sojson.com/batch_yaosuo.html" style="color: rgb(60, 141, 188);">https://www.sojson.com/batch_yaosuo.html</a>
                                </span>
                            </p>
                            <el-form-item prop="imageList" ref="uploadElemet">
                                <el-upload class="upload-demo1" :on-preview="handlePreview" :on-remove="handleRemove"   :file-list="fileList" list-type="picture" :on-change="handleChange1" :http-request="addAttachment">
                                <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                                <el-input v-show="false" v-model.trim="imageurl"></el-input>
                                <img v-if="imageshow" :src="form.image" alt="" style="width: 100px;height: 100px;">
                            </el-form-item>
                        </el-col>
                        <el-col :span="10" style="margin-top:200px;">
                            <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" >提交</el-button>
                            <el-button type="primary" v-if="tableData" @click="onEdit('form')" >保存</el-button>
                            <router-link :to="{path:'productlist'}"><el-button type="primary">取消</el-button></router-link>
                            <!-- <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" >提交</el-button>
                            <el-button type="primary" v-if="tableData" @click="onEdit('form')" >保存</el-button>
                            <router-link :to="{path:'productlist'}"><el-button type="primary">取消</el-button></router-link> -->
                            <!-- <el-form-item label="上传图片:" prop="imageList" ref="uploadElemet">
                                    <el-upload class="upload-demo" :on-preview="handlePreview" :on-remove="handleRemove"   :file-list="fileList" list-type="picture" :on-change="handleChange" :http-request="addAttachment">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                  </el-upload>
                                  <el-input v-show="false" v-model.trim="imageurl"></el-input>
                                  <img v-if="imageshow" :src="form.image" alt="" style="width: 100px;height: 100px;">
                          </el-form-item> -->
                    </el-col>
                    <el-col :span="10" style="margin-top:150px;">
                            <!-- <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" >提交</el-button>
                            <el-button type="primary" v-if="tableData" @click="onEdit('form')" >保存</el-button>
                            <router-link :to="{path:'productlist'}"><el-button type="primary">取消</el-button></router-link> -->
                            <!-- <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" >提交</el-button>
                            <el-button type="primary" v-if="tableData" @click="onEdit('form')" >保存</el-button>
                            <router-link :to="{path:'productlist'}"><el-button type="primary">取消</el-button></router-link>
                            <el-form-item label="上传图片:" prop="imageList" ref="uploadElemet">
                                    <el-upload class="upload-demo" :on-preview="handlePreview" :on-remove="handleRemove"   :file-list="fileList" list-type="picture" :on-change="handleChange" :http-request="addAttachment">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                  </el-upload>
                                  <el-input v-show="false" v-model.trim="imageurl"></el-input>
                                  <img v-if="imageshow" :src="form.image" alt="" style="width: 100px;height: 100px;">
                          </el-form-item>
                          <el-form-item label="最新口子:" prop="new">
                                <el-select v-model="form.new" placeholder="否">
                                        <el-option label="是" value="1"></el-option>
                                        <el-option label="否" value="0"></el-option>
                                    </el-select>
                      </el-form-item> -->
                    </el-col>
                    <el-col :span="10" :offset="2">
                            <!-- <el-button type="primary" v-if="!tableData" @click="onSubmit('form')" >提交</el-button>
                            <el-button type="primary" v-if="tableData" @click="onEdit('form')" >保存</el-button>
                            <router-link :to="{path:'productlist'}"><el-button type="primary">取消</el-button></router-link> -->
                            <!-- <span>上传图片:</span> -->
                            <!-- <el-form-item  prop="imageList" ref="uploadElemet" v-show="false">
                                    <el-upload class="upload-demo" :on-preview="handlePreview" :on-remove="handleRemove"   :file-list="fileList" list-type="picture" :on-change="handleChange" :http-request="addAttachment">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                  </el-upload>
                                  <el-input v-show="false" v-model.trim="imageurl"></el-input>
                                  <img v-if="imageshow" :src="form.image" alt="" style="width: 100px;height: 100px;">
                          </el-form-item> -->
                    </el-col>
                </el-form>
              </el-row>

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
    name: 'addproject',
    data() {
        // var re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(198)|(199)|(166)|(165)|(146)|(148))+\d{8})$/;
        // var re = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        var re = /[0-9]{1,2}((,|\.)[0-9]{1,10})?%/;
        var re1 =  /^\d+$|^\d+[.]?\d+$/;

        // var re1 =/^[1-9]\d*$|^0$/
        var re2 = /^[0-9]+-[0-9]+$/
        var re3 = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        var re4 = /^[1-9]\d{0,5}$/;
        var re5 = /^[\u4e00-\u9fa5]{1,6}$/
        var rateRule = (rule, value, callback) => {
            if (!re.test(value)) {
                callback(new Error('格式如0.03%'));
            } else {
                callback();
            }
        };
        var numRule = (rule, value, callback) => {
            if (!re1.test(value)) {
                callback(new Error('不能为空且只能是数字'));
            } else {
                callback();
            }
        };
        var dorutionRule = (rule, value, callback) => {
            if (!re2.test(value)) {
                callback(new Error('例如2000-50000'));
            } else {
                callback();
            }
        };
        var urlRule = (rule, value, callback) => {
            if (!re3.test(value)) {
                callback(new Error('请输入有效的url'));
            } else {
                callback();
            }
        };
        var maxRule = (rule, value, callback) => {
            if (!re4.test(value)) {
                callback(new Error('输入为数字且最高1000000'));
            } else {
                callback();
            }
        };
        var desRule = (rule, value, callback) => {
            if (!re5.test(value)) {
                callback(new Error('不能为空且最多六个字符'));
            } else {
                callback();
            }
        };
        return {
            plat:"",
            value1:"",
            value2:"",
            boutique:"",
            banner:"",
            new:"",
            hot:"",
            status:"",
            page:1,
            release:"",
            option1: [{
                value: 0,
                label: '日利率'
                }, {
                value: 1,
                label: '月利率'
                }, {
                value: 2,
                label: '年利率'
                }],
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
            option2: [{
                value: 'boutique',
                label: '精品',
                key:'1'
                }, {
                value: 'banner',
                label: '分期系列',
                key:'2'
                },{
                value: 'new',
                label: '今日最新',
                key:'3'
                }, {
                value: 'hot',
                label: '最热爆款',
                key:'4'
            }],
            statusdata:[{
                id:1,
                name:"正常"
            },
            {
                id:0,
                name:"下架"
            }],
            typedata:[{
                id:1,
                name:"UV"
            },
            {
                id:2,
                name:"CPA"
            },
            {
                id:3,
                name:"CPS"
            }],
            // osshowdata:[{
            //     id:1,
            //     name:"安卓"
            // },
            // {
            //     id:2,
            //     name:"IOS"
            // },
            // {
            //     id:null,
            //     name:"双端显示"
            // }],
            dialogImageUrl: '',
            dialogVisible: false,
            hideUpload: false,
            limitCount:1,
            imageList:"",
            platformdata:"",
            userdata:"",
            releasedata:"",
            xjshow:false,
            sshshow:false,
            rateshow:false,
            // num1: 14,
            // num2: 50000,
            // num3: 100,
            form: {
                name: "",
                image: "",
                slogan: "",
                max_price: "30000",
                apply_num:Math.ceil(Math.random()*47000),
                apply_price: "",
                apply_duration:"",
                lending_time:"",
                user_price:"",
                rate: "0.03%",
                lending_time: "",
                max_duration: "14",
                url: "",
                new:"",
                hot: "",
                sort: "100",
                status: "",
                platform:"",
                boutique:"",
                banner:"",
                new:"",
                hot:"",
                balance_type:"",
                os_show:"",
                apply_price:"",
                loan_cycle:"",
                rate_str:"0.03%",
                rate_type:"",
                // user_price:'',
            },
            test:"",
            id:"",
            pageCount:"",
            tabledata:"",
            imageurl:"",
            rules: {
                apply_num: [{
                    required: true,
                    validator: numRule,
                    trigger: 'blur'
                }],
                balance_type:[
                {
                    required: true,
                    message: '不可为空！',
                    trigger: ['blur','change']
                }],
                name: [{
                    required: true,
                    message: '不可为空！',
                    trigger: 'blur'
                }],
                max_duration: [{
                    required: true,
                    validator: numRule,
                    trigger: 'blur'
                }],
                sort: [{
                    required: true,
                    validator: numRule,
                    trigger: 'blur'
                }],
                status: [{
                    required: true,
                    message: '不可为空！',
                    trigger: ['blur','change']
                }],
                slogan: [{
                    required: true,
                    message: '不可为空！',
                    // validator: desRule,
                    trigger: 'blur'
                }],
                // imageList: [{
                //     required: true,
                //     message: '不可为空！',
                //     trigger: 'blur'
                // }],
                admin_id: [{
                    required: true,
                    message: '不可为空！',
                    trigger: ['blur','change']
                }],
                apply_duration: [{
                    required: true,
                    validator: numRule,
                    trigger: 'blur'
                }],
                max_price: [{
                    required: true,
                    validator: maxRule,
                    trigger: 'blur'
                }],
                // lending_time: [{
                //     required: true,
                //     validator: numRule,
                //     trigger: 'blur'
                // }],
                apply_price: [{
                    required: true,
                    message: '不可为空！',
                    trigger: 'blur'
                }],
                url: [{
                    required: true,
                    validator: urlRule,
                    trigger: 'blur'
                }],
                // max_duration: [{
                //     required: true,
                //     validator: numRule,
                //     trigger: 'blur'
                // }],
                rate: [{
                    required: true,
                    validator: rateRule,
                    trigger: 'blur'
                }],
                rate_str: [{
                    required: true,
                    validator: rateRule,
                    trigger: 'blur'
                }],
                user_price: [{
                    required: true,
                    // message: '不可为空！',
                    validator: numRule,
                    trigger: 'blur'
                }],
                loan_cycle:[{
                    required: true,
                    message: '不可为空！',
                    // validator: numRule,
                    trigger: 'blur'
                }],
                // hot: [{
                //     required: true,
                //     message: '不可为空！',
                //     trigger: 'blur'
                // }],
                // status: [{
                //     required: true,
                //     message: '不可为空！',
                //     trigger: 'blur'
                // }],
            }
        }
    },
    created() {
        this.id = this.$route.query.id
        this.getplatform()
        this.getuserdata()
        this.getreleasedata()
        if(this.id){
            this.getformdata();
            this.imageshow = true;
            console.log(this.form)
            // this.value1.push[this.tableData.boutique]
            // this.options=[{
            //     value: 'boutique',
            //     label: '精品',
            //     key:'1'
            //     }, {
            //     value: 'banner',
            //     label: '小额现金贷',
            //     key:'2'
            //     }, {
            //     value: 'new',
            //     label: '最新口子',
            //     key:'3'
            //     }, {
            //     value: 'hot',
            //     label: '最热口子',
            //     key:'4'
            // }]
        }
    },
    computed: {

    },
    methods: {
        tiny(){
            window.location.href="https://www.sojson.com/batch_yaosuo.html";
        },
        getplatform(){
            this.$get('product/platform?sort=-id').then((res) => {
                console.log(res)
                if(res.code===1){
                    this.platformdata = res.info;
                    console.log(this.platformdata)
                }else{
                    this.$message.error(res.message);
                }
                this.loading = false
            }).catch( () => {
                this.loading = false
            })
        },
        changeplatform(){
            this.rateshow = true
            // console.log(this.plat)
            // if(this.plat===1){
            //     this.sshshow = true
            //     this.xjshow=false
            // }else{
            //     this.sshshow = false
            //     this.xjshow=true
            // }
        },
        getreleasedata(){
            this.$get('get-release-system').then((res) => {
                console.log(res)
                if(res.code===1){
                    this.releasedata = res.info;
                    console.log(this.releasedata)
                    for(var i=0;i< this.releasedata.length;i++){
                        this.releasedata[i].id = JSON.stringify(this.releasedata[i].id)
                    }
                    // for(var i=0;i<)
                }else{
                    this.$message.error(res.message);
                }
                this.loading = false
            }).catch( () => {
                this.loading = false
            })
        },
        loadMore() {
　　　　　　console.log(2222) // 这里可以做你想做的任何事
            var _this = this;
            if(_this.page != _this.pageCount){
                _this.page++;
                this.$get('admins?type=4&sort=-id&status=1&page='+_this.page).then((res) => {
                    if (res.code === 1) {
                        for(var i=0;i<res.info.items.length;i++){
                            _this.userdata.push(res.info.items[i])
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
            // this.$get('admins?type=4&sort=-id&status=1&page='+_this.page).then((res) => {
            //     if (res.code === 1) {
            //         for(var i=0;i<res.info.items.length;i++){
            //             _this.userdata.push(res.info.items[i])
            //         }
            //     } else {
            //         this.$message.error('数据获取失败');
            //     }
            // }).catch(() => {
            // 	this.loading = false
            // })

　　　　},
        getuserdata(){
            this.$get('admins?type=4&sort=-id&status=1').then((res) => {
                console.log(res)
                if(res.code===1){
                    this.userdata = res.info.items;
                    this.pageCount = res.info._meta.pageCount
                }else{
                    this.$message.error(res.message);
                }
                this.loading = false
            }).catch( () => {
                this.loading = false
            })
        },
        // 编辑进来获取表单的内容
        getformdata(){
            this.$get('products/'+this.id,).then((res) => {
                console.log(res)
                if(res.code===1){
                    this.tableData = res.info;
                    this.rateshow = true
                    console.log(this.tableData)
                //    if(this.tableData.status == 1){
                //     this.tableData.status = "正常"
                //    }else{
                //     this.tableData.status = "下架"
                //    }
                //    if(this.tableData.balance_type == 1){
                //     this.tableData.balance_type = "UV"
                //    }else if(this.tableData.balance_type == 2){
                //     this.tableData.balance_type = "CPA"
                //    }
                //    else{
                //     this.tableData.balance_type = "CPS"
                //    }
                //    if(this.tableData.hot == 1){
                //     this.tableData.hot = "是"
                //    }else{
                //     this.tableData.hot = "否"
                //    }
                //    if(this.tableData.new == 1){
                //     this.tableData.new = "是"
                //    }else{
                //     this.tableData.new = "否"
                //    }
                //    if(this.tableData.platform == 1){
                //     this.tableData.platform = "正常"
                //    }else{
                //     this.tableData.platform = "下架"
                //    }
                    var arr2 = []
                    var arr3 = []
                    var arry = []
                    this.form = this.tableData;


                    // if(this.form.system==1){

                    // }
                    // if(this.form.system==1){
                    //     this.sshshow = true
                    //     this.xjshow=false
                    // }else{
                    //     this.sshshow = false
                    //     this.xjshow=true
                    //     this.rateshow = true
                    // }
                    // this.plat = this.form.system

                    // if(this.form.rate_type){

                    // }

                    // var str = this.form.os_show
                    // arr3 = str.split(',');
                    // console.log(arr3)
                    // console.log(typeof(arr3))

                    // arr3.map((item)=>{
                    //     if (item !== "" && item != undefined) {
                    //         arry.push(item);
                    //     }
                    // })
                    // arry = arry.join(',')
                    // this.form.os_show = arry


                    // let permission = ",,,106,105,108,,,109,110,107,,101,,,"
                    // console.log("permission",permission)
                    arry = this.form.os_show.split(",");

                    console.log("arry",arry)
                    let arry2 =[]

                    arry.map((item)=>{
                        if (item !== "" && item != undefined) {
                            arry2.push(item);
                        }
                    })
                    arry2 = arry2.join(',')
                    // arr3.push(arry2)
                    console.log(typeof(arry2))
                    arr3 = arry2.split(',');
                    this.form.os_show = arr3
                    // console.log("arry2",arry2)
                    // this.form.os_show = JSON.parse(arr3)
                    // str = str.JSON.parse(JSON.stringify(str))
                    // // console.log(typeof(this.form.os_show))
                    // // this.form.os_show.substring(-1,(this.form.os_show-1));

                    // // this.form.os_show = JSON.stringify(this.form.os_show)
                    // // arr3.push(str)

                    // // for (var i = 0; i < a.length; i++) {

                    // // a[i] = a[i].replace('"', '');

                    // // }
                    // console.log(typeof(arr3))
                    // // arr3.push(this.form.os_show)
                    // // this.form.os_show = [1,3]
                    // for (i=0;i<arr3.length;i++ ) {
                    //     arr3[i] = arr3[i].replace('"', '');
                    //     console.log(arr3[i])
                    // }
                    // console.log(arr3)
                    // this.form.os_show = arr3


                    if(this.form.boutique){
                        arr2.push("boutique")
                        // this.value1
                    }
                    if(this.form.banner){
                        arr2.push("banner")
                    }
                    if(this.form.hot){
                        arr2.push("hot")
                    }
                    if(this.form.new){
                        arr2.push("new")
                    }
                    console.log(arr2)
                    this.value1 = arr2;
                }else{
                    this.$message.error(res.message);
                }
                this.loading = false
            }).catch( () => {
                this.loading = false
            })
        },
        //提交数据
        onSubmit(formName) {
            console.log(this.form.os_show)
            // console.log(typeof(this.value1))
            // console.log(this.value1)
            var arr = [];
            var arr1 =[];
            var str = '';

            for(var i in this.value1){
                console.log(this.value1[i])
                arr.push(this.value1[i])
            }
            for(var i in this.form.os_show){
                console.log(this.form.os_show[i])
                arr1.push(this.form.os_show[i])
            }
            str = arr1.join(',')
            // this.release = ','+(arr1[0]?arr1[0]:'')+','+(arr1[1]?arr1[1]:'')+","+(arr1[2]?arr1[2]:'')+','+(arr1[3]?arr1[3]:'')+','+','
            this.release = ','+str+','
            // console.log(typeof(this.release))
            // console.log(arr1[0]+','+arr1[1])
            // value2.push(this.value1[i])

                // this.boutique = arr.indexOf('boutique');
                // this.banner = arr.indexOf('banner');
                // this.new = arr.indexOf('new');
                // this.hot = arr.indexOf('hot');
                this.form.boutique = arr.indexOf('boutique');
                this.form.banner = arr.indexOf('banner');
                this.form.new = arr.indexOf('new');
                this.form.hot = arr.indexOf('hot');
                console.log(this.form.boutique)
                console.log(this.form.banner)
                console.log(this.form.new)
                console.log(this.form.hot)
                // console.log(this.boutique)
                // console.log(this.banner)
                // console.log(this.new)
                // console.log(this.hot)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$post('products', {
                        apply_price:this.form.apply_price,
                        boutique:this.form.boutique===-1?0:1,
                        banner:this.form.banner===-1?0:1,
                        hot:this.form.hot===-1?0:1,
                        new:this.form.new===-1?0:1,
                        os_show:this.release,
                        rate_type:this.form.rate_type,
                        loan_cycle:this.form.loan_cycle,
                        // boutique:this.boutique,
                        // banner:this.banner,
                        // hot:this.hot,
                        // new:this.new,
                        name: this.form.name,
                        // os_show:this.form.os_show,
                        image: this.imageurl,
                        slogan: this.form.slogan,
                        max_price: this.form.max_price,
                        user_price: this.form.user_price,
                        apply_num:this.form.apply_num,
                        apply_duration:this.form.apply_duration,
                        rate: this.form.rate,
                        platform:this.form.platform,
                        // lending_time: this.form.lending_time,
                        max_duration: this.form.max_duration,
                        url: this.form.url,
                        // hot: this.form.hot,
                        sort: this.form.sort,
                        status: this.form.status,
                        balance_type:this.form.balance_type,
                        admin_id:this.form.admin_id,
                        rate_str:this.form.rate_str
                        // new:this.form.new
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.$message({
                                message: res.message,
                                type: 'success'
                            });
                            // this.$emit('closedialog');
                            this.$router.push('/productlist');
                        } else {
                            // if(res.info){
                            //     for(var i=0;i<res.info.length;i++){
                            //         this.$message.error(res.info);
                            //     }
                            // }
                            if(res.info.image){
                                this.$message.error(res.info.image[0]);
                            }else{
                                this.$message.error(res.message);
                            }
                            // if(res.info.slogan){
                            //     this.$message.error(res.info.slogan[0]);
                            // }else{
                            //     this.$message.error(res.message);
                            // }
                        }
                    })
                } else {
                    this.$message.error("请完善红色提示内容");
                    return false;
                }
            });

        },

        onEdit(formName) {
            var arr = [];
            var arr1 =[];
            var str = '';
            for(var i in this.value1){
                console.log(this.value1[i])
                arr.push(this.value1[i])
            }
            for(var i in this.form.os_show){
                console.log(this.form.os_show[i])
                arr1.push(this.form.os_show[i])
            }
            console.log(arr1)
            str = arr1.join(',')
            // for(var i=0;i<arr1.length;i++){
            //     // console.log((arr1[i])+',')
            //     // this.release = ','+(arr1[i])+','
            //     // this.release.push(','+(arr1[i]?arr1[i]:'')+',')
            // }
            console.log(this.release)
            this.release = ','+str+','
            // value2.push(this.value1[i])
                console.log(arr)
                console.log(typeof(arr))

                // this.boutique = arr.indexOf('boutique');
                // this.banner = arr.indexOf('banner');
                // this.new = arr.indexOf('new');
                // this.hot = arr.indexOf('hot');
                this.form.boutique = arr.indexOf('boutique');
                this.form.banner = arr.indexOf('banner');
                this.form.new = arr.indexOf('new');
                this.form.hot = arr.indexOf('hot');
                console.log(this.form.boutique)
                console.log(this.form.banner)
                console.log(this.form.new)
                console.log(this.form.hot)
                // console.log(this.boutique)
                // console.log(this.banner)
                // console.log(this.new)
                // console.log(this.hot)
                console.log(this.tableData.image)
                console.log(this.imageurl)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$put('products/'+this.id, {
                        image:this.imageurl?this.imageurl:this.tableData.image,
                        boutique:this.form.boutique===-1?0:1,
                        banner:this.form.banner===-1?0:1,
                        hot:this.form.hot===-1?0:1,
                        new:this.form.new===-1?0:1,
                        name: this.form.name,
                        slogan: this.form.slogan,
                        max_price: this.form.max_price,
                        user_price: this.form.user_price,
                        apply_num:this.form.apply_num,
                        apply_duration:this.form.apply_duration,
                        rate: this.form.rate,
                        platform:this.form.platform,
                        os_show:this.release,
                        apply_price:this.form.apply_price,
                        rate_type:this.form.rate_type,
                        loan_cycle:this.form.loan_cycle,
                        rate_str:this.form.rate_str,
                        // lending_time: this.form.lending_time,
                        max_duration: this.form.max_duration,
                        url: this.form.url,
                        // hot: this.form.hot,
                        sort: this.form.sort,
                        status: this.form.status,
                        balance_type:this.form.balance_type,
                        admin_id:this.form.admin_id
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.$message({
                                message: res.message,
                                type: 'success'
                            });
                            // this.$emit('closedialog');
                            this.$router.push('/productlist');
                        } else {
                            this.$message.error(res.message);
                        }
                    })
                } else {
                    this.$message.error("请完善红色提示内容");
                    return false;
                }
            });
            this.$emit('closedialog');
        },
        // 自定义上传方法
         addAttachment ( file ) {
            // 用于显示图片
            this.imageUrl = URL.createObjectURL(file.file);
            console.log( this.imageUrl )
            //保存一份文件信息，用于上传
            this.fileData = file.file;
            console.log( this.fileData)
            var formData = new FormData();
            formData.append("file", this.fileData);
            axios({
                method: 'post',
                url: 'http://api-backend.5youfenqi.com/upload-to-aliyun_oss?type=product',
                data: formData,
                config: { headers: {'Content-Type': 'multipart/form-data' , 'Authorization': 'Bearer ' + localStorage.getItem('token')}}
              })
              .then((response)=>{
                    console.log(response)
                    if(response.data.code==1){
                        this.imageurl = response.data.info.url;
                        this.$message({
                                message: "上传成功",
                                type: 'success'
                            });
                    }else{
                        this.$message.error(response.data.message);
                        // if(response.info.image){
                        //     this.$message.error(response.data.info.image[0]);
                        // }else{
                        //     this.$message.error(response.data.message);
                        // }
                    }
              }).catch((response)=>{
                this.$message.error(response.message);
              });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        imgChange(file, fileList){
            this.hideUpload = fileList.length >= this.limitCount;
            if(fileList){
                this.$refs['uploadElemet'].clearValidate();
            }
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
            this.hideUpload = fileList.length >= this.limitCount;
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-1);
            this.imageshow = false;
        }
    }
}
</script>


<style>
.el-input-number--medium {
    width: 100%!important;
}
.hide .el-upload--picture-card {
    display: none;
}
.bg-purple-light {
    background: #f9f9fa;
}
</style>
