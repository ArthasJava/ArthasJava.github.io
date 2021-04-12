---
title: JVM 工具
date: 2021-04-11
sidebar: 'auto'
---

## 调试入门工具
::: tip
JDK 自带的工具，都位于 JDK 的 bin 目录
:::
### jps：进程监控工具
该命令很像 UNIX 的 ps 命令，列出当前用户正在运行的虚拟机进程，并显示虚拟机执行主类（Main Class，main() 函数所在的类）名称以及这些进程的本地虚拟机唯一 ID（LVMID，Local Virtual Machine Identifier）。

jps 命令格式：
```
jps [options] [hostid]
```

jps 工具的主要选项：
- -q：只输出 LVMID，不输出类名称、Jar 名称和传入 main 方法的参数；
- -l：输出 main 类或 Jar 的 全限定名称；
- -m：输出传入 main 方法的参数；
- -v：输出虚拟机进程启动时传入的 JVM 参数

查看更多使用方法：[Oracle jps](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jps.html#CHDCGECD)

### jstat：统计信息监控工具
jstat（JVM Statistics Monitoring Tool） 是用于识别虚拟机各种运行状态信息的命令行工具。它可以显示本地或者远程虚拟机进程中的类装载、内存、垃圾收集、jit 编译等运行时数据。

jstat 命令格式：
```
jstat -<option> [-t] [-h<lines>] <vmid> [<interval> [<count>]]
```
- option：参数选项
- -t：可以在打印的列加上 timestamp 列，用于显示系统运行的时间
- -h：可以在周期性数据的时候，可以在指定输出多少行以后输出一次表头
- vmid：进程ID
- lines：表头与表头的间隔行数
- interval：执行每次的间隔时间，单位为**毫秒**
- count：用于指定输出记录的次数，缺省则会一直打印

::: tip
想了解 option 有哪些，可以执行 `jstat -options`

- -class：显示类加载 ClassLoad 的相关信息；
- -compiler:：显示 JIT 编译的相关信息；
- -gc：显示和 gc相关的堆信息；
- -gccapacity：显示各个代的容量以及使用情况；
- -gcmetacapacity：显示元空间 metaspace 的大小；
- -gcnew：显示新生代信息；
- -gcnewcapacity: 显示新生代大小和使用情况；
- -gcold：显示老年代垃圾收集状况；
- -gcoldcapacity：显示老年代的大小；
- -gcutil：显示垃圾回收信息；
- -gccause：显示垃圾回收的相关信息（同 -gcutil），同时显示最后一次或当前正在发生的垃圾回收的原因；
- -printcompilation：输出 JIT 编译的方法信息
:::

::: details
使用 `-gc` 查看时：
- S0，S1表示新生代两个 Survivor 区，E 代表的是新生代的 Eden 区
- C 的意思是容量，U 表示已经使用的意思
- O 表示的老年代
- M 表示 Metaspace。
- F 和 Y 则表示 fullGC 和 minorGC
- GCT 表示 GC Time
- YGC、YGCT：YoungGC 的次数与时间
- FGC、FGCT：FullGC 的次数与时间
:::

查看更多使用方法：[Oracle jstat](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jstat.html#BEHHGFAE)

### jinfo：配置信息工具
jinfo（Configuration Info for Java）的作用是实时地查看和调整虚拟机各项参数，使用 jps 命令的 -v 参数可以查看虚拟机启动时**显式指定**的参数列表。但如果想知道**未被显式指定**的参数的系统默认值，除了去找资料外，就只能使用 jinfo 的 -flag 选项进行查询。

jinfo 命令格式：
```
jinfo [-options] <pid>
```
- no option：输出全部的参数和系统属性
- -flag name：输出对应名称的参数
- -flag [+|-]name：开启或者关闭对应名称的参数

::: tip
**通过 jinfo 实时的修改虚拟机的参数**

但是不是任何命令都可以修改，可以修改的参数我们先来执行这个命令：`java -XX:+PrintFlagsFinal -version`，会列出当前机器支持的所有参数，那么用 jinfo 可以修改的参数是什么呢？只有最后一列显示 `manageable` 的这一列才能进行修改
:::

查看更多使用方法：[Oracle jinfo](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jinfo.html#BCGEBFDD)
### jmap：内存映像工具
用于生成堆转储快照（一般称为 heapdump 或 dump 文件）。如果不使用jmap 命令，要想获取 Java 堆转储快照，还有一些比较“暴力”的手段：譬如 `-XX : + HeapDumpOnOutOfMemoryError` 参数，可以让虚拟机在 OOM 异常出现之后自动生成 dump 文件，通过 `-XX : +HeapDumpOnCtrlBreak` 参数则可以使用 `[Ctrl]+[Break]` 键让虚拟机生成 dump 文件，又或者在 Linux 系统下通过 Kill-3 命令发送进程退出信号“吓唬”一下虚拟机，也能拿到 dump 文件。

jmap 的作用并不仅仅是为了获取 dump 文件，他还可以查询 finalize 执行队列、Java 堆和方法区的详细信息，如空间使用率、当前用的是哪种收集器等。

和 jinfo 命令一样，jmap 有不少功能在 Windows 平台下都是受限的，除了生成 dump 文件的 -dump 选项和用于查看每个类的实例、空间占用统计的 -histo 选项在所有操作系统都提供之外，其余选项都只能在 Linux/Solaris下使用。

jmap 命令格式：
```
jmap [-options]  vmid
```
- dump：生成Java堆转储快照。格式为：`-dump:[live, ]format=b, file=<filename>`，其中 live 子参数说明是否只 dump 出存活的对象
- -finalizerinfo：显示在 F-Queue 中等待 Finalizer 线程执行 finalize 方法的对象。只在 Linux/Solaris 平台下有效
- -heap：显示 Java 堆详细信息，如使用哪种回收器、参数配置、分代状况等。只在 Linux/Solaris 平台下有效
- -histo：显示堆中对象统计信息，包括类、实例数量、合计容量
- -permstat：以 ClassLoader 为统计口径显示永久代内存状态。只在 Linux/Solaris 平台下有效
- -F：当虚拟机进程对 -dump 选项没有响应时，可使用这个选项强制生成 dump 快照。只在 Linux/Solaris 平台下有效

🌰
```
# 查看堆的情况
jmap -heap 2815

# dump
jmap -dump:live,format=b,file=/tmp/heap2.bin 2815
jmap -dump:format=b,file=/tmp/heap3.bin 2815

# 查看堆的占用
jmap -histo 2815 | head -10
```

查看更多：[JVM 性能调优工具 jmap](https://www.jianshu.com/p/a4ad53179df3)

### jhat：堆转储快照分析工具
jhat（JVM Heap Analysis Tool）命令与 jmap 搭配使用，来分析 jmap 生成的堆转储快照。jhat 内置了一个微型的 HTTP/HTML 服务器，生成 dump 文件的分析结果后，可以在浏览器中查看。

不过实事求是地说，在实际工作中，除非手上真的没有别的工具可用，否则一般都不会去直接使用 jhat 命令来分析 dump 文件，主要原因有两个：
- 一般不会在部署应用程序的服务器上直接分析 dump 文件，即使可以这样做，也会尽量将 dump 文件复制到其他机器。分析工作是一个耗时而且消耗硬件资源的过程，既然都要在其他机器进行，就没有必要受到命令行工具的限制了；
- jhat 的分析功能相对来说比较简陋，VisualVM 以及专业用于分析 dump 文件的 Eclipse Memory Analyzer、IBM HeapAnalyzer 等工具，都能实现比 jhat 更强大更专业的分析功能

### jstack：线程堆栈分析工具
jstack 用于生成虚拟机当前时刻的线程快照。线程快照是当前虚拟机内每一条线程正在执行的方法堆栈的集合，生成线程快照的**主要目的是定位线程出现长时间停顿的原因，如线程间死锁、死循环、请求外部资源导致的长时间等待等**。 线程出现停顿的时候通过 jstack 来查看各个线程的调用堆栈，就可以知道没有响应的线程到底在后台做什么事情，或者等待什么资源。

jstack 命令格式：
```
jstack [-options] vmid
```
- -F：当正常输出请求不被响应时，强制输出线程堆栈
- -l：输出锁信息
- -m：如果调用到本地方法的话，可以显示 C/C++ 堆栈

JDK5 之后，java.lang.Thread 类的 getAllStackTraces() 方法可以获取虚拟机中所有线程的StackTraceElement 对象，可以查看堆栈信息。
```java
for (Map.Entry<Thread, StackTraceElement[]> stackTrace : Thread.getAllStackTraces().entrySet()) {
    Thread thread = (Thread) stackTrace.getKey();
    StackTraceElement[] stack = (StackTraceElement[]) stackTrace.getValue();
    if (thread.equals(Thread.currentThread())) {
        continue;
    }
    System.out.println("Thread name is :" + thread.getName());
    for (StackTraceElement stackTraceElement : stack) {
        System.out.println("\t" + stackTraceElement);
    }
}
```

统计线程数：jstack -l 28367 | grep 'java.lang.Thread.State' | wc -l

**jstack 检测 CPU 过高**
- top 查看是否 CPU 占用过高
- top（top -H -p pid）：查看cpu占用高线程的 tid
- printf "%x\n" tid，将线程 ID 转换为 16进制格式的 nid
- jstack pid|grep nid -A 100：定位cpu占用线程

**jstack 解决死锁**
- jstack {pid} > {输出文件路径}
- 打开文件，找到最后一行，如果死锁会有日志

查看更多使用方法：[Oracle jstack](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jstack.html#BABGJDIF)


## 调试进阶工具
### JVisualVM ： 可视化监控
- 监控本地 Tomcat
- 监控远程 Tomcat
- 监控普通的 Java 进程


**监控本地 Java 进程**

jdk 工具，因此存放在 bin 目录，直接到指定目录上打开即可。

监控：
- 可以打开玩玩，图像化界面，可以查看 JVM 参数，还能实时监控内存、堆、Metaspace 占用、类装载总数、线程活跃数，也可以点击执行垃圾回收，点击 dump 生成堆转储信息，还能类似 MAT 来分析类、实例数。
- 还能导入 hprof 文件来分析，但功能要比 MAT 弱点。

线程：
在线程栏还可以点击 “线程 Dump”，此时看到的内容和 jstack 一样的~

抽样器：可以查看方法的处理时间，非常好用

::: tip
支持安装插件，不过需要先设置插件中心

推荐安装：Visual GC，实时动态的显示 Eden Space、Survier、Metaspace 等等
:::

**监控远程 Tomcat**
1. 打开 VisualVM
2. 选择远程，输入远程的主机名
3. 修改 Catalina.sh
```
JAVA_OPTS="$JAVA_OPTS -Dcom.sun.management.jmxremote - Dcom.sun.management.jmxremote.port=9004 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.net.preferIPv4Stack=true -Djava.rmi.server.hostname=XXX"
```
4. VisualVM - 远程 - 右键主机 - 添加 JMX 连接 - 连接中填写主机名:端口号

**监控远程 java**
1. java 启动时带入参数
```
java -Dcom.sun.management.jmxremote - Dcom.sun.management.jmxremote.port=9005 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.net.preferIPv4Stack=true -Djava.rmi.server.hostname=XXX -jar {你的 jar}
```
2. VisualVM - 远程 - 右键主机 - 添加 JMX 连接 - 连接中填写主机名:端口号

::: tip
🍭 了解更多，可查看 [VisualVM](http://visualvm.github.io/documentation.html)，有中文的文档！
:::
### MAT：分析 OOM
下载地址：https://www.eclipse.org/mat/downloads.php

::: tip
怎么获取 hprof 文件，可参考 jmap 章节
:::

### Btrace：监控调试工具
🍁 BTrace 可以动态地向目标应用程序的字节码注入追踪代码
运用的技术：
- JavaComplierApi
- JVMTI
- Agent
- Instrumentation+ASM

官方地址：https://github.com/btraceio/btrace

**安装**
1. [下载](https://github.com/btraceio/btrace/releases/tag/v2.2.0)并解压
2. 新建环境变量 BTRACE_HOME
3. 添加 PATH：%BTRACE_HOME%\bin

**运行方式**
1. JVisualVM 中添加 BTrace 插件，添加 classpath
2. 命令行 `btrace <pid> <trace_script>`

::: tip
有了巫妖王，这个用的人少了！
:::

### Java-debug-tool

### Greys

### Arthas

### JProfiler

## 其他工具
### dmesg
如果发现自己的java进程悄无声息的消失了，几乎没有留下任何线索，那么dmesg一发，很有可能有你想要的。

sudo dmesg|grep -i kill|less 去找关键字oom_killer。找到的结果类似如下:
```
著作权归https://pdai.tech所有。
链接：https://pdai.tech/md/java/jvm/java-jvm-debug-tools-list.html

[6710782.021013] java invoked oom-killer: gfp_mask=0xd0, order=0, oom_adj=0, oom_scoe_adj=0
[6710782.070639] [<ffffffff81118898>] ? oom_kill_process+0x68/0x140 
[6710782.257588] Task in /LXC011175068174 killed as a result of limit of /LXC011175068174 
[6710784.698347] Memory cgroup out of memory: Kill process 215701 (java) score 854 or sacrifice child 
[6710784.707978] Killed process 215701, UID 679, (java) total-vm:11017300kB, anon-rss:7152432kB, file-rss:1232kB
```
以上表明，对应的java进程被系统的OOM Killer给干掉了，得分为854.
解释一下OOM killer（Out-Of-Memory killer），该机制会监控机器的内存资源消耗。当机器内存耗尽前，该机制会扫描所有的进程（按照一定规则计算，内存占用，时间等），挑选出得分最高的进程，然后杀死，从而保护机器。



## 参考资料
- [JVM 性能调优工具 jmap](https://www.jianshu.com/p/a4ad53179df3)