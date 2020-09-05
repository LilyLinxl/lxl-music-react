# 1.搭建和布局
## 1.rmc可以创建被memo包裹的函数组件
## 2.重置css
安装normalize.css
css文件中导入@import "~normalize.css";
在全局文件中导入css文件

根据项目抽取一些全局样式
##　3.配置别名需要安装croco
在antdesign讲过
可以在不暴露webpack配置的情况下给项目添加额外配置信息
安装完后需要把react-scripts改成croco
（也可以在package.json script中加一项:{ “eject":"react-scripts eject" }
把webpack的配置暴露出来，但是这种方式不推荐）

__dirname根目录路径

## 4.项目结构的划分
头部和尾部不变，中间变化的用路由切换(需要安装 react-router-dom)
```
export default memo(function XLAppHeader() {
```
自己写的组件推荐加上固定的前缀

react-router-config 将路由进行统一配置管理的包

App.js导入路由

pages中写对应的组件


# 5.导入文件的规范
第三方
工具类(网络请求，actionCreater，utils)
组件

