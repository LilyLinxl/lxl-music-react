1.rmc可以创建被memo包裹的函数组件
2.重置css
安装normalize.css
css文件中导入@import "~normalize.css";
在全局文件中导入css文件

根据项目抽取一些全局样式
3.配置别名需要安装croco
在antdesign讲过
可以在不暴露webpack配置的情况下给项目添加额外配置信息
安装完后需要把react-scripts改成croco
（也可以在package.json script中加一项:{ “eject":"react-scripts eject" }
把webpack的配置暴露出来，但是这种方式不推荐）

__dirname根目录路径
