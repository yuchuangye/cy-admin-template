// 路由处理函数
const jwt = require('jsonwebtoken')

// 用于 生成token 和 解密token 的字符串
const SECRET = 'hdfgsdfgsdf2121sfdas'

// 模拟数据
const tableData = [{
  date: '2020-05-02',
  name: '小米mix2s',
  address: '骁龙855 8G+256G超大内存'
}, {
  date: '2020-05-04',
  name: '雷蛇sm255鼠标',
  address: '基于人体设计,非常好用的一款鼠标'
}, {
  date: '2020-05-01',
  name: '佳丽清新剂',
  address: '散发如新切开柠檬般清爽宜人气息'
}, {
  date: '2020-05-03',
  name: '妥布霉素滴眼液',
  address: '专治眼睛感染、红眼病'
}]

module.exports = {
  
  // 验证token的中间件函数
  async auth (req, res, next) {
    // 获取请求头中的token
    const tokenStr = String(req.headers.authorization)
    // 解析token
    jwt.verify(tokenStr, SECRET, async (err, tokenRes) => {
      // token无效
      if (err) {
        res.json({ 
          status: 10, 
          msg: '当前未登录',
          data: {} 
        })
        return
      }
      req.tokenRes = tokenRes
      next()
    })
  },

  // 登录路由处理
  async loginHandle (req, res, next) {
    // 获取用户名
    let username = req.body.username
    // 获取用户密码
    let password = req.body.password

    if (username !== 'admin' || password !== '123456') {
      res.json({ 
        status: 1, 
        msg: '用户名或密码错误', 
        data: {} 
      })
      return
    }
    // 登陆成功, 生成token
    const token = jwt.sign({ 
      username: String(username)
    }, SECRET)
    // 返回token
    res.json({ 
      status: 0, 
      msg: '登录成功', 
      token: token, 
      data: { username } 
    })
  },

  //登录验证
  async authHandle (req, res, next) {
    res.json({ 
      status: 0, msg: '身份验证成功', 
      data: {
         username: req.tokenRes.username 
        } 
      })
  },

  // 获取数据
  async getTableDataHandle (req, res, next) {
    res.json({
      status: 0,
      msg: '获取数据成功',
      data: tableData
    })
  }

}