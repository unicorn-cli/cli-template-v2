const { getRepoList, getTagList } = require('./http')
const ora = require('ora')
const inquirer = require('inquirer')
const util = require('util')
const path = require('path')
const downloadGitRepo = require('download-git-repo') // 不支持 Promise

// 添加加载动画
async function wrapLoading(fn, message, ...args) {
  // 使用 ora 初始化，传入提示信息 message
  const spinner = ora(message);
  // 开始加载动画
  spinner.start();

  try {
    // 执行传入方法 fn
    const result = await fn(...args);
    // 状态为修改为成功
    spinner.succeed();
    return result;
  } catch (error) {
    // 状态为修改为失败
    spinner.fail('Request failed, refetch ...')
  }
}

class Generator {
  constructor(name, targetDir) {
    // 目录名称
    this.name = name;
    // 创建位置
    this.targetDir = targetDir;
  }

  /**
 * 获取用户选择的模板
 * 1）从远程拉取模板数据
 * 2）用户选择自己新下载的模板名称
 * 3）return 用户选择的名称
 */
  async getRepo() {
  }

  /**
   * 获取用户选择的版本
   * 1）基于 repo 结果，远程拉取对应的 tag 列表
   * 2）用户选择自己需要下载的 tag
   * 3）return 用户选择的 tag
   */
  async getTag(repo) {
  }

  /**
     * 核心创建逻辑
     * 1）获取模板名称
     * 2）获取 tag 名称
     * 3）下载模板到模板目录
     */
   async create() {
    console.log(`start create tmp`)
  }

  // 下载远程模版
  async download(repo, tag) {
  }
}

module.exports = Generator;