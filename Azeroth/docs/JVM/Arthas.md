---
title: Arthas
date: 2021-04-11
sidebar: 'auto'
---

## Arthas 简介
- [Arthas 用户文档](https://arthas.aliyun.com/doc/)
- [官方在线教程](https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn)
### 解决什么问题
- 这个类从哪个 jar 包加载的? 为什么会报各种类相关的 Exception? 
- 我改的代码为什么没有执行到? 难道是我没 commit? 分支搞错了? 
- 遇到问题无法在线上 debug，难道只能通过加日志再重新发布吗? 
- 线上遇到某个用户的数据处理有问题，但线上同样无法 debug，线下无法重现！ 
- 是否有一个全局视角来查看系统的运行状况? 
- 有什么办法可以监控到JVM的实时运行状态? 

Arthas支持JDK 6+，支持Linux/Mac/Windows，采用命令行交互模式，同时提供丰富的 Tab 自动补全功能，进一步方便进行问题的定位和诊断

## 场景实战
### 查看最繁忙的线程，以及是否有阻塞情况发生?
场景：我想看下查看最繁忙的线程，以及是否有阻塞情况发生? 常规查看线程，一般我们可以通过 top 等系统命令进行查看，但是那毕竟要很多个步骤，很麻烦。
```
thread -n 3 # 查看最繁忙的三个线程栈信息
thread  # 以直观的方式展现所有的线程情况
thread -b #找出当前阻塞其他线程的线程
```
### 确认某个类是否已被系统加载?
场景：我新写了一个类或者一个方法，我想知道新写的代码是否被部署了?
```
# 即可以找到需要的类全路径，如果存在的话
sc *MyServlet

# 查看这个某个类所有的方法
sm pdai.tech.servlet.TestMyServlet *

# 查看某个方法的信息，如果存在的话
sm pdai.tech.servlet.TestMyServlet testMethod
```

### 如何查看一个class类的源码信息?
场景：我新修改的内容在方法内部，而上一个步骤只能看到方法，这时候可以反编译看下源码
```
# 直接反编译出java 源代码，包含一此额外信息的
jad pdai.tech.servlet.TestMyServlet
```
### 重要：如何跟踪某个方法的返回值、入参.... ?
场景：我想看下我新加的方法在线运行的参数和返回值?
```bash
# 同时监控入参，返回值，及异常
watch pdai.tech.servlet.TestMyServlet testMethod "{params, returnObj, throwExp}" -e -x 2 
```
### 如何看方法调用栈的信息?
场景：我想看下某个方法的调用栈的信息?
```
stack pdai.tech.servlet.TestMyServlet testMethod
```
运行此命令之后需要即时触发方法才会有响应的信息打印在控制台上
### 重要：找到最耗时的方法调用?
场景：testMethod这个方法入口响应很慢，如何找到最耗时的子调用?
```bash
# 执行的时候每个子调用的运行时长，可以找到最耗时的子调用。
stack pdai.tech.servlet.TestMyServlet testMethod
```
运行此命令之后需要即时触发方法才会有响应的信息打印在控制台上，然后一层一层看子调用。
### 重要：如何临时更改代码运行?
场景：我找到了问题所在，能否线上直接修改测试，而不需要在本地改了代码后，重新打包部署，然后重启观察效果?
```bash
# 先反编译出class源码
jad --source-only com.example.demo.arthas.user.UserController > /tmp/UserController.java  

# 然后使用外部工具编辑内容
mc /tmp/UserController.java -d /tmp  # 再编译成class

# 最后，重新载入定义的类，就可以实时验证你的猜测了
redefine /tmp/com/example/demo/arthas/user/UserController.class
```

如上，是直接更改线上代码的方式，**但是一般好像是编译不成功的**。所以，最好是本地ide编译成 class文件后，再上传替换为好！ 总之，已经完全不用重启和发布了！这个功能真的很方便，比起重启带来的代价，真的是不可比的。比如，重启时可能导致负载重分配，选主等等问题，就不是你能控制的了