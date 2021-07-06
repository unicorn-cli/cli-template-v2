const axios = require('axios');

// axios 拦截器
axios.interceptors.response.use(res => {
})

/**
* 获取模板列表
* @returns Promise
*/
async function getRepoList() {
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
}

module.exports = {
    getRepoList,
    getTagList
}