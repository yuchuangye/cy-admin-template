const express = require('express')
const router = require('./router')

const app = express()

// 处理跨域
app.use(require('cors')())
// 处理 post 请求的数据
app.use(express.json())
app.use(express.urlencoded())

// 注册路由
app.use(router)

const PORT = 3004

app.listen(PORT, () => {
  console.log(`RUN IN: http://localhost:${PORT}`)
})