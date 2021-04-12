---
title: Spring
date: 2021-04-05
sidebar: 'auto'
---

::: tip
工作中基本上是在已有的框架中 CRUD，缺乏对于 Spring 知识的掌握，在此学习一下“我没有三颗心脏”的博客：https://www.jianshu.com/p/1af66a499f49
:::

## 认识 Spring 框架
### Spring 中常用术语
- **框架**：完成一定功能的半成品
- **非侵入式设计**：从框架的角度可以理解为，无需继承框架提供的任何类
- **轻量级和重量级**：轻量级一般就是非侵入式的、所依赖的东西非常少、资源占用非常少、部署简单等
- **JavaBean**：符合 JavaBean 的 Java 类
- **POJO**：Plain Old Java Objects，简单老式 Java 对象，可以包含业务逻辑或者持久化逻辑，但是**不担任任何特殊角色**且**不继承或者不实现任何其他 Java 框架的类或接口**
:::tip
注意：bean 的各种名称——虽然 Spring 用 bean 或者 JavaBean 来表示应用组件，但并不意味着 Spring 组件必须遵循 JavaBean 规范，一个 Spring 组件可以是任意形式的 POJO
:::
- **容器**：在日常生活中容器就是一种盛放东西的器具，从程序设计角度看就是装对象的的对象，因为存在放入、拿出等操作，所以容器还要管理对象的生命周期

### Spring 的优势
- 低侵入，低耦合（降低组件之间的耦合度，实现软件各层之间的解耦）
- 声明式事务管理（基于切面和惯例）
- 方便集成其他框架（如 MyBatis）
- 降低 Java 开发难度
- Spring 框架中包括了 J2EE 三层的每一层的解决方案

### Spring 能帮我们做什么
1. 根据配置文件创建及组装对象之间的依赖关系
2. 面向切面编程能帮助我们无耦合的实现日志记录，性能统计，安全控制
3. 简单的帮我们管理数据库事务
4. 提供了与第三方数据访问框架（如 Hibernate、JPA）无缝集成，提供了一套 JDBC 访问模板来方便数据库访问
5. 提供与第三方 Web 框架无缝集成，自己也提供了一套 **Spring MVC** 框架，方便 web 层搭建
6. 方便的与 Java EE（如 Java Mail、任务调度）整合，与更多技术整合（比如缓存框架）

### Spring 框架结构

![](https://cdn.jsdelivr.net/gh/wmyskxz/img/img/Spring%E5%AD%A6%E4%B9%A0%EF%BC%881%EF%BC%89%E2%80%94%E2%80%94%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/7896890-a7c003d175bd41af.png)

- Data Access/Integration层包含有JDBC、ORM、OXM、JMS和Transaction模块。
- Web层包含了Web、Web-Servlet、WebSocket、Web-Porlet模块。
- AOP模块提供了一个符合AOP联盟标准的面向切面编程的实现。
- Core Container(核心容器)： 包含有Beans、Core、Context和SpEL模块。
- Test模块支持使用JUnit和TestNG对Spring组件进行测试。

## Spring IoC 和 DI
### IoC
IoC：Inverse of Control（控制反转）

- 读作 “反转控制”，更好理解，不是什么技术，而是一种设计思想，就是将原本在程序中手动创建对象的控制权，交由Spring框架来管理。
- 正控：若要使用某个对象，需要自己去负责对象的创建
- 反控：若要使用某个对象，只需要从 Spring 容器中获取需要使用的对象，不 关心对象的创建过程，也就是把创建对象的控制权反转给了Spring框架

::: tip
好莱坞法则： Don’t call me ,I’ll call you
:::

### DI
DI：Dependency Injection（依赖注入）

::: tip
指 Spring 创建对象的过程中，将对象依赖属性（简单值，集合，对象）通过配置设值给该对象
:::

### IoC 如何实现
最后我们简单说说IoC是如何实现的。想象一下如果我们自己来实现这个依赖注入的功能，我们怎么来做？ 无外乎：

1. 读取标注或者配置文件，看看JuiceMaker依赖的是哪个Source，拿到类名
2. 使用反射的API，基于类名实例化对应的对象实例
3. 将对象实例，通过构造函数或者 setter，传递给 JuiceMaker

我们发现其实自己来实现也不是很难，Spring实际也就是这么做的。这么看的话其实IoC就是一个工厂模式的升级版！当然要做一个成熟的IoC框架，还是非常多细致的工作要做，Spring不仅提供了一个已经成为业界标准的Java IoC框架，还提供了更多强大的功能，所以大家就别去造轮子啦！希望了解IoC更多实现细节不妨通过学习Spring的源码来加深理解！

## Spring AOP
AOP 即 Aspect Oriented Program 面向切面编程

首先，在面向切面编程的思想里面，把功能分为核心业务功能，和周边功能。
- **所谓的核心业务**，比如登陆，增加数据，删除数据都叫核心业务
- **所谓的周边功能**，比如性能统计，日志，事务管理等等

周边功能在 Spring 的面向切面编程AOP思想里，即被定义为切面

在面向切面编程AOP的思想里面，核心业务功能和切面功能分别独立进行开发，然后把切面功能和核心业务功能 “编织” 在一起，这就叫AOP


### AOP 中的概念
- 切入点（Pointcut）
在哪些类、哪些方法上切入（where）
- 通知（Advice）
在方法执行的什么时机（When：方法前/方法后/方法前后）做什么（what：增强的功能）
- 切面（Aspect）
切面 = 切入点 + 通知，通俗点：**在什么时机，什么地方，做什么增强！**
- 织入（Weaving）
把切面加入到对象，并创建出代理对象的过程（由 Spring 来完成）

### AOP 编程