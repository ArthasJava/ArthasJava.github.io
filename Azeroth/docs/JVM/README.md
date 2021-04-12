---
title: JVM
date: 2021-03-21
---

## JVM 是什么
Java 虚拟机是二进制字节码的运行环境，负责装载**字节码**到其内部，解释/编译为对应平台的机器指令执行。每一条 Java 指令，Java 虚拟机规范中都有详细定义，如怎么取操作数，怎么处理操作数，处理结果放在哪里。

特点：
- 一次编译，到处运次（跨平台）
- 自动内存管理
- 自动垃圾回收功能

![JVM 的位置](https://tva1.sinaimg.cn/large/006tNbRwly1gbmnj3i2fyj315m0rc0z8.jpg)

JDK(Java Development Kit) 是 Java 语言的软件开发工具包（SDK）。**JDK 物理存在**，是 Java Language、Tools、JRE 和 JVM 的一个集合。

## JVM 生命周期
### 虚拟机的启动
Java 虚拟机的启动是通过引导类加载器（Bootstrap Class Loader）创建一个初始类（initial class）来完成的，这个类是由虚拟机的具体实现指定的。

### 虚拟机的执行
- 一个运行中的 Java 虚拟机有着一个清晰的任务：执行 Java 程序
- 程序开始执行时它才运行，程序结束时它就停止
- 执行一个所谓的 Java 程序的时候，真正执行的是一个叫做 Java 虚拟机的进程
- 你在同一台机器上运行三个程序，就会有三个运行中的 Java 虚拟机。 Java 虚拟机总是开始于一个 `main()` 方法，这个方法必须是公有、返回 void、只接受一个字符串数组。在程序执行时，你必须给 Java 虚拟机指明这个包含 `main()` 方法的类名

### 虚拟机的退出
- 程序正常执行结束
- 程序在执行过程中遇到了异常或错误而异常终止
- 由于操作系统出现错误而导致 Java 虚拟机进程终止
- 某线程调用 Runtime 类或 System 类的 exit 方法，或 Runtime 类的 halt 方法，并且 Java 安全管理器也允许这次 exit 或 halt 操作
- 除此之外，JNI(Java Native Interface) 规范描述了用 JNI Invocation API 来加载或卸载 Java 虚拟机时，Java 虚拟机的退出情况

## Java 和 JVM 规范
[Java Language and Virtual Machine Specifications](https://docs.oracle.com/javase/specs/index.html)

## 参考资料
- [JVM解毒——JVM与Java体系结构](https://juejin.cn/post/6844904069144772616)