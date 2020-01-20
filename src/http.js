//import axios from 'axios';
//import { Message } from 'element-ui';

import QS from 'qs'
axios.defaults.timeout = 15000;
axios.defaults.baseURL = '';
// var URL = "http://47.103.61.179:8075/";
var URL = "http://api-backend.5youfenqi.com/"
// var URL = "http://api-backend.loan.xykj1.com/"
// var URL = "http://47.92.217.27:7002/"
    // var URL = " https://www.easy-mock.com/mock/5ce796a973277860448263a6/example"
    //var URL = "http://192.168.16.141:7002/"


    // var URL = "http://192.168.16.141:7002/"
//http request 拦截器
axios.interceptors.request.use(
    config => {
        //config.data = JSON.stringify(config.data);
        if (localStorage.getItem('token') != '') {
            config.headers = {
                'Content-Type':'application/json',
                // 'Accept':'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.errCode == 2) {
            router.push({
                path: "/login",
                querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

export function geteData(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(URL + url, {
            params:params
        })
            .then(response => {
                resolve(response.data);
                // console.log(response.data,url)
            })
            .catch(err => {
                reject(err)
                    console.log(err+"get")
                ELEMENT.Message.error('数据请求失败');
            })
    })
}

export function postData(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(URL + url, data)
            .then(response => {
                resolve(response.data);
                // console.log(response.data,url)
            }, err => {
                reject(err)
                console.log(err+"post")
                ELEMENT.Message.error('数据请求失败');
            })
    })
}

export function patchData(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(URL + url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
                ELEMENT.Message.error('数据请求失败');
            })
    })
}

export function putData(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(URL + url, data)
            .then(response => {
                resolve(response.data);
                //console.log(response.data,url)
            }, err => {
                reject(err)
                ELEMENT.Message.error('数据请求失败');
            })
    })
}

export function delData(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(URL + url, data)
            .then(response => {
                resolve(response.data);
                //console.log(response.data,url)
            }, err => {
                reject(err)
                ELEMENT.Message.error('数据请求失败');
            })
    })
}
