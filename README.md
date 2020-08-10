# 简答题
## 1、谈谈你对工程化的初步认识，结合你之前遇到过的问题说出三个以上工程化能够解决问题或者带来的价值。
    * 能够解决多人合作开发,代码风格统一、质量保证、代码管理
    * 可以使用模块化、组件化
    * 解决重复机械式工作 
    * 自动化上线部署 而不需要手动压缩打包
## 2、你认为脚手架除了为我们创建项目结构，还有什么更深的意义？
   * 创建项目的基础结构 便于管理和维护 

# 编程题
## 1、概述脚手架实现的过程，并使用 NodeJS 完成一个自定义的小型脚手架工具
    实现过程: 1、明确需求
    2、找到合适的Genrator
    3、全局范围安装找到的Genrator
    4、通过Yo 运行对应Genrator
    5、通过命令交互填写选项
    6、生成所有需要的项目结构

    ### 具体代码详见 generator-xller-vue

    * 初始化一个package.json
        yarn init
    * 安装yeoman-generator
        yarn add yeoman-generator
    * 创建generators/app/index.js
        在index.js中写入实现功能的方法
    * yarn link 在全局生成该自定义的generator
    * 新建templates放入项目模版文件
    * 使用时 调用 yo xller-vue(生成器的名字) 生成文件    
## 2、尝试使用 Gulp 完成项目的自动化构建
   构建步骤
   yarn 
   yarn add gulp --dev
   gulpfile.js  构建任务
   具体代码详见pages-boilerplate
## 3、使用 Grunt 完成项目的自动化构建
 详见 grunt-demo

    构建步骤
    yarn init --yes  初始化package.json
    yarn add grunt   安装grunt
    gruntfile.js     根目录下创建入口文件
    安装处理css的插件
    yarn add grunt-sass sass --dev  
    安装处理es6语法的插件
    yarn add grunt-babel @babel/core @babel/preset-env --dev
    安装处理多个任务插件
    yarn add load-grunt-tasks --dev  //减少loadNpmTasks使用
    安装处理文件修改时监听改变插件
    yarn add grunt-contrib-watch --dev

