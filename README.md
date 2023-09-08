# H5移动端项目模板

这是一个基于Vite+Vue3+Ts+Vant4+Tailwind CSS+Axios+rem适配+Font Awesome的H5移动端项目模板。

## 特性

- 使用Vite作为项目构建工具，提供快速的开发环境和生产优化
- 使用Vue3作为主要框架，享受其更好的性能和新功能
- 使用TypeScript进行开发，提供更好的代码提示和错误检查
- 集成Vant4作为UI组件库，拥有丰富的移动端组件
- 使用Tailwind CSS作为样式框架，提供快速构建和自定义样式
- 集成Axios作为HTTP库，方便进行API请求和数据交互
- 使用rem适配方案，实现移动端页面的响应式布局
- 集成Font Awesome作为图标库，拥有丰富的图标资源

## 使用方法

### 1. 克隆项目模板

```bash
git clone git@github.com:EnigmaGuest/vvts-h5.git
cd vvts-h5
```

### 2. 安装依赖

```bash
npm install
```

### 3. 运行开发环境

```bash
npm run dev
```

### 4. 构建生产版本

```bash
npm run build
```

### 5. 更多配置

项目模板的配置文件位于`src/config/index.ts`，你可以根据自己的需求进行相应的修改。

## 目录结构

```bash
├── .gitignore                   # Git忽略文件配置
├── index.html                   # 入口HTML文件
├── package.json                 # 项目配置文件
├── README.md                    # 项目介绍文件
├── src                          # 源代码目录
│   ├── api                      # API接口
│   ├── assets                   # 静态资源目录
│   ├── components               # 公共组件目录
│   ├── config                   # 配置文件目录
│   ├── main.ts                  # 项目入口文件
│   ├── router.ts                # 路由配置文件
│   ├── store.ts                 # 全局状态管理文件
│   ├── styles                   # 样式文件目录
│   └── views                    # 视图目录
└── vite.config.js               # Vite配置文件
```
##开发进度
- [x] 基本项目结构 vue全家桶
- [x] 集成Axios
- [x] 集成Vant
- [x] 路由管理,一键配置顶部导航栏和底部导航栏
- [ ] 集成Tailwind CSS
- [ ] 集成Font Awesome
- [ ] 集成rem适配方案
- [ ] 页面模版
## 贡献

如果你对该项目有任何建议或改进，请随时提出。同时欢迎提交Pull Request，一起使该项目变得更好。

## 许可证

该项目基于MIT许可证进行分发和使用，更多信息请参阅[LICENSE](LICENSE)文件。