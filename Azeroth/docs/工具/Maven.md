---
title: Maven
date: 2021-04-05
---

## 什么是 Maven
一个用于自动化构建项目和管理项目依赖的工具
自动化构建项目：按照企业中主流的项目模板，创建完善的项目结构
管理项目依赖：配置式添加和管理，自动下载和导入

## Maven 环境搭建
Maven 环境变量：
- MAVEN_HOME
- M2_HOME
- PATH

::: tip
Maven3 只需要配置 PATH 即可
:::

**下载及安装**
1、下载二进制的压缩包
Maven 官方网站：http://maven.apache.org/

2、将压缩包的文件夹解压

3、复制 Maven 的 bin 目录的路径

🌰 D:\Development Environment\apache-maven-3.8.1\bin

4、打开系统属性的环境变量

找到 path，新建将第三步的路径写入

5、验证是否安装成功
打开 cmd.exe，输入 `mvn -v`



## IDEA 使用 Maven
### 配置 Maven
1、Maven home path 选择自己安装的 Maven 路径
2、更改使用的 settings 文件：Maven 安装目录下的 conf 目录里有 settings.xml
3、本地仓库

### 创建 Maven 工程
可以直接使用模板创建，比如 Apache 提供的 webapp
org.apache.maven.archetypes:maven-archetype-webapp

::: tip
依赖默认从这个仓库下载：https://repo.maven.apache.org

可改成国内的镜像仓库提速

[Maven 依赖的检索网站](https://mvnrepository.com)
:::

**添加 Maven 插件**

比如 Tomcat ，可从 Maven 的官网找：http://maven.apache.org/plugins/index.html

### 运行项目的两种方式
1、Maven 命令
IDEA 的 Run/Debug Configurations 中新增一个 Maven 的配置
🌰 增加一个 Tomcat 启动：
Command Line: tomcat7:run
2、配置本地 Tomcat

## Maven 文件结构

Maven
- **bin**: 存放二进制可执行文件
- boot
- **conf**：settings.xml，可配置 JDK 版本， Maven 仓库
- lib：存放 Maven 自身依赖的各种 Jar 包
- **usrlibs**：自定义目录，用于本地仓库使用，方便统一管理 Maven 中的依赖
- LICENSE
- NOTICE
- README.txt

## Maven 基础操作
### 仓库
- 中央仓库：远程服务器，保存各种项目模板、依赖、插件等等
- 本地仓库：存储下载的依赖、插件等等
::: tip
本地仓库默认存储在：C:/Users/用户名/.m2/repository
:::
- 私有服务器

**Maven 中本地仓库的配置**：MAVEN_HOME/conf/settings.xml: localRepository

**Maven 中远程镜像仓库的配置**：MAVEN_HOME/conf/settings.xml: mirrors > mirror

### 配置
全局配置：settings.xml
::: details
**全局配置文件**

localRepository：配置本地仓库

interactiveMode：配置是否要和用户交互，默认为 true

usePluginRegistry：配置是否通过 PluginRegistry.xml 这个独立文件来配置插件，默认为 false，更多时候插件的配置集成到 pom.xml 中直接操作

offline：配置是否启动离线模式，默认为 false，在某些情况下挺有用的

pluginGroups：配置如果插件没有 groupId 没有提供的情况下，自动搜索 groupId，这个配置很少使用

servers：配置远程仓库所在服务器在访问时需要的身份认证信息，如账号密码

mirrors：配置中央仓库

proxies：配置连接仓库的代理

profiles：全局配置项目构建参数的列表，如配置全局的 JDK 版本

activeProfiles：手工激活 Profiles 配置

activation：profiles 的扩展选项，指定某些条件下自动切换 Profiles 配置

properties：profiles 的扩展配置项，声明扩展配置项，类似编程语言中的变量

repositories：配置远程仓库列表，项目开发多仓库的配置，

pluginRepositories
:::

全局配置：maven 使用的 JDK 版本为 1.8
```xml
<profile>
    <id>jdk-1.8</id>
    
    <activation>
    <activeByDefault>true</activeByDefault>
    <jdk>1.8</jdk>
    </activation>
    
    <properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
    </properties>
</profile>
```

项目配置：pom.xml
::: details
```xml
<!-- 项目基础信息配置> -->
<!-- 项目构建环境配置> -->
<!-- 项目仓库管理配置> -->
<!-- 项目依赖管理配置> -->
<!-- 项目报表信息配置> -->
<!-- 项目部署分发配置> -->
```
:::

::: danger
配置的优先级：

pom.xml > settings.xmlnote > settings.xml
项目配置 > 用户配置 > 全局配置
:::

### gav 坐标
**groupId**: 项目 ID ，当前项目和其他项目的唯一标志

**artifactId**：组件 ID，当前项目中的子应用或者子组件的唯一标志

**version**：版本号，迭代开发时标志的产品版本信息

::: tip
**版本号的意义**

软件名称.主版本号.小版本号.阶段版本号.字母版本号

**主版本号**更新：软件重大功能新增和修改

**小版本号**更新：子版本号，小功能新增和修改

**阶段版本号**更新：BUG 修复和完善

**字母版本号**更新：里程碑版本，常见 ALPHA，BETA，RC，Stable，RELEASE/R/GA，FINAL
:::

### 命令操作
项目构建
mvn archetype:generate
项目清理/编译/打包
mvn clean：清理 target 目录的内容
mvn compile：编译，代码生成字节码，存储到 target 目录
mvn package：项目进行打包操作，具体是 jar 包还是 war 包根据 pom 配置
项目运行/测试/发布
mvn tomcat:run
mvn test
mvn site
mvn deplendency:tree
mvn install：当前的项目安装到本地的仓库中
mvn deploy

### Maven 生命周期
- clean lifecyle：项目构建之前的清理环节
- default lifecyle：项目编译和打包环节
- site lifecyle：项目报告、站点信息、发布环节

### 构建 MVN 项目
1. 手工创建
2. MVN 命令构建
3. 工具（IDEA）构建

## Maven 高手进阶
### 依赖范围管理
**compile**：编译、运行、测试、打包都依赖的 jar 包，如开发项目时对 Spring-core 的依赖就是 compile 范围

**provided**：只在编译和运行时有效，打包时不会包含这样的 jar 包，比如 servlet-api 容器相关的依赖

**runtime**：只在运行时有效，但是打包时会将对应的 jar 包包含进来，如 jdbc 驱动在编译时是不需要参与的，但是运行时是需要具体的第三方实现的 jar 包

**test**：只有测试的时候有效，在编译和运行以及打包时都不会使用，如测试使用的 Junit 依赖就是 test 范围

**system**：本地 jar 包，作用范围和 Provided 一致，但是必须配合 systemPath 指定本地依赖的路径才能使用

::: tip
不写依赖范围的话默认是 compile

有时候是需要使用 provided，避免造成 jar 包冲突
:::

### 父子项目依赖传递

父项目打包方式需要指定
```xml
<packaging>pom</packaging>
```
依赖的版本管理放置在根 pom 的 `properties` 下统一管理

父项目中统一管理的依赖，可放置在 `dependencyManagement`

dependencyManagement：是依赖容易，在子项目中使用的时候才会引入，如果子项目没有使用的话，不会生成 jar

**子项目继承父项目**
```xml
<parent>
填写父项目坐标
<relativePath>父项目的 pom.xml</relativePath>
</parent>
```
::: tip
子项目可以自动继承父项目的 groupId，所以子项目可以不指定 groupId 

父项目的 `dependencies` 会被默认继承下来...

子项目可以使用父项目中依赖管理器中统一管理的依赖，**可以不写版本号**，依赖版本由父项目统一管理
:::

父子项目优点：
1. 合理有效的复用依赖 jar 包
2. 子项目互相独立，更加便于敏捷开发和独立管理

父子项目缺点：项目之间的系统集成性能较差

### 项目聚合
1、创建一个父项目，packaging 设置为 pom
2、右键父项目，new - module，也创建 maven 项目
3、新建的 module 会默认继承父项目
4、观察父项目的 pom，发现多了一个 `modules` （聚合项目中自动生成的）

::: tip
项目聚合有什么好处？

项目之间的整体性较高，便于系统集成和维护

父项目中可以统一打包
:::

### 常见插件
插件的检索可以找 Maven 的官网：http://maven.apache.org/plugins/index.html

生命周期插件
- resources
- source
- clean
- compile
- ...

常用操作插件
- tomcat7
- dependency
- jar

### 私有服务器
Apache Archiva
JFrog Artifactory
Sonatype Nexus

现在主流是 Sonatype Nexus
创建私有仓库的教程：https://www.imooc.com/video/22616

## Maven 常见问题
### 依赖直接冲突
项目存在依赖 A 和 B，A 依赖 1.0.0 的 C， B 依赖 2.0.0 的 C
**怎么解决？**通常引用最新的版本，一般是高版本是向下兼容的。因此 C 要 exclude 掉 1.0.0 的 C。
```xml
<exclusions>
    <exclusion>

    </exclusion>
</exclusions>
```

### 依赖传递冲突
项目依赖 A，A 又依赖 B 和C，项目又不需要 C
**怎么解决？**直接排除掉
```xml
<exclusions>
    <exclusion>

    </exclusion>
</exclusions>
```

### 挂死在构建项目环节
创建 Maven 项目，挂死在构建项目环节

[INFO] Generating project in Batch mode

原因：防火墙，阻止/延缓了访问在国外的 Maven 仓库

解决方法：Maven 配置文件(settings)里配置镜像仓库
```xml
<mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>
        http://maven.aliyun.com/nexus/content/groups/public/
    </url>
    <mirrorOf>central</mirrorOf>
</mirror>
```