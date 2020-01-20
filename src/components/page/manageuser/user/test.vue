<template>
        <div class="login-container">
          <!-- <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
            <div class="title-container">
              <h3 class="title">无忧贷后台管理系统</h3>
            </div>
            <el-form-item prop="username">
              <el-input class="login-input" v-model="ruleForm.username" placeholder="用户名"><i slot="prefix" class="el-input__icon el-icon-lx-people"></i></el-input>
            </el-form-item>

            <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
              <el-form-item prop="password">
                    <el-input class="login-input" type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"><i slot="prefix" class="el-input__icon el-icon-lx-lock"></i></el-input>
                <span class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
              </el-form-item>
            </el-tooltip>

            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>
          </el-form> -->
          <div class="ms-login-right">
                <div class="login-title">无忧贷</div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input class="login-input" v-model="ruleForm.username" placeholder="用户名"><i slot="prefix" class="el-input__icon el-icon-lx-people"></i></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input class="login-input" type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"><i slot="prefix" class="el-input__icon el-icon-lx-lock"></i></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                </el-form>
            </div>
        </div>
      </template>

      <!-- <script>


      export default {
        name: 'Login',
        data() {
          const validateUsername = (rule, value, callback) => {
            if (!validUsername(value)) {
              callback(new Error('Please enter the correct user name'))
            } else {
              callback()
            }
          }
          const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
              callback(new Error('The password can not be less than 6 digits'))
            } else {
              callback()
            }
          }
          return {
            loginForm: {
              username: 'admin',
              password: '111111'
            },
            loginRules: {
              username: [{ required: true, trigger: 'blur', validator: validateUsername }],
              password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            passwordType: 'password',
            capsTooltip: false,
            loading: false,
            showDialog: false,
            redirect: undefined,
            otherQuery: {}
          }
        },
        watch: {
          $route: {
            handler: function(route) {
              const query = route.query
              if (query) {
                this.redirect = query.redirect
                this.otherQuery = this.getOtherQuery(query)
              }
            },
            immediate: true
          }
        },
        created() {
          // window.addEventListener('storage', this.afterQRScan)
        },
        mounted() {
          if (this.loginForm.username === '') {
            this.$refs.username.focus()
          } else if (this.loginForm.password === '') {
            this.$refs.password.focus()
          }
        },
        destroyed() {
          // window.removeEventListener('storage', this.afterQRScan)
        },
        methods: {
          checkCapslock({ shiftKey, key } = {}) {
            if (key && key.length === 1) {
              if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
                this.capsTooltip = true
              } else {
                this.capsTooltip = false
              }
            }
            if (key === 'CapsLock' && this.capsTooltip === true) {
              this.capsTooltip = false
            }
          },
          showPwd() {
            if (this.passwordType === 'password') {
              this.passwordType = ''
            } else {
              this.passwordType = 'password'
            }
            this.$nextTick(() => {
              this.$refs.password.focus()
            })
          },
          handleLogin() {
            this.$refs.loginForm.validate(valid => {
              if (valid) {
                this.loading = true
                this.$store.dispatch('user/login', this.loginForm)
                  .then(() => {
                    this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                    this.loading = false
                  })
                  .catch(() => {
                    this.loading = false
                  })
              } else {
                console.log('error submit!!')
                return false
              }
            })
          },
        }
      }
      </script> -->

      <script>
            export default {
                data: function() {
                    return {
                        loading: false,
                        ruleForm: {
                            type: "",
                            username: '',
                            password: ''
                        },
                        rules: {
                            username: [{
                                required: true,
                                message: '请输入用户名',
                                trigger: 'blur'
                            }],
                            password: [{
                                required: true,
                                message: '请输入密码',
                                trigger: 'blur'
                            }]
                        }
                    }
                },
                created() {

                },
                methods: {
                    submitForm(formName) {
                        this.$refs[formName].validate((valid) => {
                            if (valid) {
                                localStorage.setItem('token', '');
                                this.loading = true
                                this.$post('get-access-token', {
                                        name: this.ruleForm.username,
                                        password: this.ruleForm.password
                                    }).then((res) => {
                                        console.log(res)
                                        if (res.code === 1) {
                                            localStorage.setItem('token', res.info.access_token);
                                            this.token = localStorage.getItem("token")
                                            this.$get('admin/info', {
                                                access_token: this.token,
                                            }).then((res) => {
                                                console.log(res)
                                                if (res.code === 1) {
                                                    localStorage.setItem('userInfo', JSON.stringify(res.info));
                                                    this.$router.push('/Dashboard');
                                                } else {
                                                    this.$message.error(res.message);
                                                }
                                                this.loading = false
                                            }).catch(() => {
                                                this.loading = false
                                            })
                                            // this.$router.push('/home');
                                        } else {
                                            this.$message.error(res.message);
                                        }
                                        this.loading = false
                                    }).catch(() => {
                                        this.loading = false
                                    })
                            } else {
                                return false;
                            }
                        });
                    }

                }
            }
        </script>
      <style scoped>
        /* .login-container input{
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            height: 47px;
        }
        .login-container input :-webkit-autofill{
            box-shadow: 0 0 0px 1000px $bg inset !important;
            -webkit-text-fill-color: $cursor !important;
        }
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        } */
        .login-container{
            min-height: 100%;
            width: 100%;
            /* background-color: #2d3a4b; */
            background: url("http://sshua.oss-cn-shanghai.aliyuncs.com/images/product/bg.png");
            background-size: cover;
            background-repeat: no-repeat;
            overflow: hidden;
        }
        .login-form {
            position: relative;
            width: 520px;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
        }
        .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: #889aa4;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
        }

      </style>


