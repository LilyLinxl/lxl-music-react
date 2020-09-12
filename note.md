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

## 5.头部组件编写
### 5.1 头部布局
导航和底部红色的线，为了避免样式冲突，不用普通css而采用styled-components
>用styled-components创建了一个样式组件，该组件渲染之后是一个div标签。注意组件首字母必须大写不然无法识别。
```javascript
/* 创建了一个Wrapper样式组件，该组件渲染之后是一个div标签 */
  const Wrapper = styled.div`
    color: blue;
  `;
  /* Wrapper组件跟其余的react组件一样，只不过现在他们有了自己的样式 */
  render(
    <Wrapper>
        Hello World!
    </Wrapper>
  );
```
### 5.2 头部样式
```<NavLink to={item.link} exact>```
exact精准匹配
## 6.导入文件的规范
第三方
工具类(网络请求，actionCreater，utils)
组件
# 2.引入redux和redux的补充
## 1.设置默认路由
```javaScript
 path: '/',
 exact: true,
 // component: XLAppDiscover 路由会不统一http://localhost:3000/#/
 render: ()=>(
     <Redirect to="/discover"/>
 )
```
## 2.发现页面的路由
### 2.1 导航显示
在发现组件，引入数据，遍历数据进行展示
### 2.2 子页面和路由配置
新建子页面，路由配置，发现页面用renderRoutes渲染路由
通过props获取route
