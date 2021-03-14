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
### 2.3 处理网络请求数据
#### 安装axios
配置网络请求
#### 引入redux管理数据
业务数据拿到之后用redux来进行管理。

1.引入依赖
yarn add redux react-redux redux-thunk
+ react-redux(react组件和redux结合) 比如context，provider共享store
+ redux-thunk 进行异步请求
+ combineReducers 合并reducer(因为业务比较多，所以reducer需要拆分，然后需要插件来合并多个reducer)
+ applyMiddleware 合并中间件
+ 为了让调试工具的redux起作用，还需要使用composeEnhancers包裹applyMiddleware
+ App.js导入Provider，store，这样项目就可以使用共享的store了
  
2.存储推荐数据
+ 1.定义状态和动作，在总reducer文件里导入对应的reducer
+ 2.使用reducer的流程
  1.使用redux-thunk发起网络请求 
  2.拿到数据 （dispath(函数）获取数据)
  3.通过dispatch传入action对象（包含了数据）
  4.到reducer里面进行数据的合并  这整一个流程都属于集成的redux
step1：在actionCreator里面写派发的函数(action)
> 为什么要传入action返回的函数而不是action赋值的函数，因为可能会需要根据传入的参数生成新的函数
step2: 在action里面写请求数据的方法
step3: 如何在函数组件使用刚刚的action，使用connect 做一个映射，返回一个高阶组件
step4: 定义state和dispatch,然后导入需要派发的action，在useEffect中发送异步请求
step5: 通过另外一个action来存储banners数据到reducer里面

+ 3.redux 的hooks来简化组件和redux的关联(获取数据和进行操作)
  发送网络请求
  获取存储在reducer里的数据
+ 4.性能优化
  1.useSelector
  使用useSelector会出现，组件没有使用某个状态，但是状态改变组件会重新渲染
  默认做的是全等比较，但是我们希望是做个浅层比较(shallowEqual)
  {a:aaObj,b:bbObj}
  如果是全等比较，没有使用aa，bb状态的组件，在aabb改变时组件会重新渲染，state改变后。
  而浅层比较，不会重新渲染，只是比较key名有没有变化
  2.reducer里的数据在变化时需要拷贝旧数据，所产生的性能和内存消耗问题
1) 管理的数据转化为immutable
  安装 immutable
  选择map还是fromJS，fromJS进行的深层比较，没有什么必要，所以选择map
2) combineReducers不能使用Map，因为无法直接获取key值，需要安装新的依赖： redux-immutable,可以
  把原来的对象转化为immutable对象
# 3.页面业务开发
## 3.1 推荐页面顶部轮播图
+ 1.样式
+ 2.请求数据
+ 3.使用antd的走马灯
+ 4.背景（高斯模糊），轮播图切换背景也切换成相应的高斯模糊图片
  如果把一个函数作为参数传递到下一个组件A里面去，需要使用useCallback来优化切换方法，对当前的函数做一个缓存，这样函数都是指向同一个引用，这样组件A就不会经常发生重新渲染。