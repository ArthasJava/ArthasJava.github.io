---
title: JVM 参数
date: 2021-04-10
sidebar: 'auto'
---

## 参数类型
- **标准参数（-）**：JVM 的各个版本中基本不变的，相对比较稳定的参数，向后兼容; 🌰 `-help`
- **非标准参数（-）**：变化比较小的参数，默认 JVM 实现这些参数的功能，但是并不保证所有 JVM 实现都满足，且不保证向后兼容; 🌰 如`-Xint`（解释执行）、`-Xcomp`（第一次使用就编译成本地代码）、`-Xmixed`（混合模式，JVM 决定是否编译成本地代码）
- **非 stable 参数（-）**：此类参数各个 JVM 实现会有所不同，将来可能会随时取消，需要慎重使用；

### 标准参数
::: tip
命令行输入 `java`，即可查看
:::
- `-version`：输出 java 的版本信息，比如 jdk 版本、vendor、model
- `-help`：输出 java 标准参数列表及其描述
- `-showversion`：输出 java 版本信息（与-version相同）之后，继续输出 java 的标准参数列表及其描述，相当于 `java -verion` 和 `java -help`
- `-client`：设置 jvm 使用 client 模式，特点是启动速度比较快，但运行时性能和内存管理效率不高，通常用于客户端应用程序或者PC应用开发和调试
- `-server`：设置 jvm 使 server 模式，特点是启动速度比较慢，但运行时性能和内存管理效率很高，适用于生产环境。在具有64位能力的 jdk 环境下将默认启用该模式，而忽略 `-client` 参数
- `-agentlib:libname[=options]`：用于装载本地 lib 包。其中 libname 为本地代理库文件名，默认搜索路径为环境变量 PATH 中的路径，options 为传给本地库启动时的参数，多个参数之间用逗号分隔
- `-agentpath:pathname[=options]`：按全路径装载本地库，不再搜索PATH中的路径；其他功能和 agentlib相同
- `-Dproperty=value` 设置系统属性名/值对，运行在此jvm之上的应用程序可用 `System.getProperty("property")` 得到 value 的值。 如果 value 中有空格，则需要用双引号将该值括起来，如 `-Dname="space string"`。 该参数通常用于设置系统级全局变量值，如配置文件路径，以便该属性在程序中任何地方都可访问
- `-verbose:[class|gc|jni]`：输出每个加载类|gc|jni 的信息

### X 参数
::: tip
非标准参数又称为扩展参数，命令行输入 `java -X`，即可查看
:::
- `-Xint`：设置 jvm 以解释模式运行，所有的字节码将被直接执行，而不会编译成本地码
- `-Xmixed`：混合模式，JVM自己来决定是否编译成本地代码，默认使用的就是混合模式
- `-Xbatch`：关闭后台代码编译，强制在前台编译，编译完成之后才能进行代码执行。 默认情况下，jvm 在后台进行编译，若没有编译完成，则前台运行代码时以解释模式运行
- `-Xbootclasspath:bootclasspath`：让 jvm 从指定路径（可以是分号分隔的目录、jar、或者zip）中加载bootclass，用来替换 jdk 的 rt.jar；若非必要，一般不会用到
- `-Xbootclasspath/a:path` ：将指定路径的所有文件追加到默认 bootstrap 路径中
- `-Xfuture`：让jvm对类文件执行严格的格式检查（默认 jvm 不进行严格格式检查），以符合类文件格式规范，推荐开发人员使用该参数。
- `-Xincgc`：开启增量 gc（默认为关闭），这有助于减少长时间GC时应用程序出现的停顿，但由于可能和应用程序并发执行，所以会降低CPU对应用的处理能力
- `-Xloggc:file`： 与-verbose:gc功能类似，只是将每次GC事件的相关情况记录到一个文件中，文件的位置最好在本地，以避免网络的潜在问题。若与 verbose 命令同时出现在命令行中，则以 -Xloggc 为准
- `-Xms`：指定 jvm 堆的初始大小，默认为物理内存的1/64，最小为1M，可以指定单位，比如k、m，若不指定，则默认为字节
- `-Xmx`：指定 jvm 堆的最大值，默认为物理内存的 1/4或者1G，最小为2M；单位与-Xms一致
- `-Xprof`：跟踪正运行的程序，并将跟踪数据在标准输出输出；适合于开发环境调试
- `-Xss`： 设置单个线程栈的大小，一般默认为 512k

### XX 参数
XX 参数主要分为 Boolean 类型和 KV 类型

**Boolean 类型**

格式：`-XX:[+-]<name>`表示启用或者禁用 name 属性

比如：
- `-XX:+UseConcMarkSweepGC`： 启用 CMS 垃圾处理器
- `-XX:+UseG1GC`：启用 G1 垃圾处理器

**KV 类型**

格式：`-XX:<name>=<value>`表示 name 属性的值是 value

比如：
- `-XX:MaxGCPauseMillis=500`：GC 最大的停顿时间为 500ms
- `-XX:GCTimeRatio=19`

::: tip
`-Xmx` `-Xms` 是什么参数？

实际上不是 X 参数，**而是 XX 参数**

`-Xms` 等价于 `-XX:InitialHeapSize`

`-Xmx` 等价于 `-XX:MaxHeapSize`
:::


## 查看 JVM 运行时参数
### 通过 jinfo 查看
```cmd
jps -l
jinfo -flag {配置项} {pid}
jinfo -flags {pid} // 打印所有参数

```

### printFlags
`-XX:+PrintFlagsInitial`：查看初始值

`-XX:+PrintFlagsFinal`：查看最终值


## 常用配置
| 参数名称	| 含义 | 默认值 | 说明 |
| - | - | - | - |
| -Xms	| 初始堆大小 | 物理内存的1/64(<1GB)	| 默认(MinHeapFreeRatio参数可以调整)空余堆内存小于40%时，JVM就会增大堆直到-Xmx的最大限制 |
| -Xmx	| 最大堆大小 | 物理内存的1/4(<1GB)	| 默认(MaxHeapFreeRatio参数可以调整)空余堆内存大于70%时，JVM会减少堆直到 -Xms的最小限制 |
| -Xmn	| 年轻代大小(1.4or lator) | | 注意：此处的大小是（eden+ 2 survivor space).与jmap -heap中显示的New gen是不同的。 整个堆大小=年轻代大小 + 年老代大小 + 持久代大小. 增大年轻代后,将会减小年老代大小.此值对系统性能影响较大,Sun官方推荐配置为整个堆的3/8 |
| -Xss	| 每个线程的堆栈大小 | | DK5.0以后每个线程堆栈大小为1M,以前每个线程堆栈大小为256K.更具应用的线程所需内存大小进行 调整.在相同物理内存下,减小这个值能生成更多的线程.但是操作系统对一个进程内的线程数还是有限制的,不能无限生成,经验值在3000~5000左右 一般小的应用， 如果栈不是很深， 应该是128k够用的 大的应用建议使用256k。这个选项对性能影响比较大，需要严格的测试。（校长） 和threadstacksize选项解释很类似,官方文档似乎没有解释,在论坛中有这样一句话:"” -Xss is translated in a VM flag named ThreadStackSize” 一般设置这个值就可以了 |
| -XX:ThreadStackSize | 线程栈大小 | | |
| -XX:MetaspaceSize | 设置元空间大小 | | 设置元空间大小。元空间的本质和永久代类似，都是对 JMM 规范中方法区的实现。不过元空间与永久代最大的区别是，元空间并不在虚拟机中，而是使用本地内存。因此，默认情况下，元空间的大小仅受本地内存限制，但是元空间默认也很小，频繁 new 对象，也会 OOM |
| -XX:NewSize | 设置年轻代大小(for 1.3/1.4)	| | |
| -XX:MaxNewSize | 年轻代最大值(for 1.3/1.4) | | |
| -XX:PermSize	| 设置持久代(perm gen)初始值 | 物理内存的1/64 | |
| -XX:MaxPermSize | 设置持久代最大值 | 物理内存的1/4 | |
| -XX:NewRatio	| 年轻代(包括Eden和两个Survivor区)与年老代的比值(除去持久代) | 2 | -XX:NewRatio=4表示年轻代与年老代所占比值为1:4,年轻代占整个堆栈的1/5 Xms=Xmx并且设置了Xmn的情况下，该参数不需要进行设置 |
| -XX:SurvivorRatio	| Eden区与Survivor区的大小比值 | | 设置为8,则两个Survivor区与一个Eden区的比值为2:8,一个Survivor区占整个年轻代的1/10 |
| -XX:+UseFastAccessorMethods | 原始类型的快速优化 | | |
| -XX:+DisableExplicitGC | 关闭System.gc() | | 这个参数需要严格的测试 |
| -XX:MaxTenuringThreshold | 垃圾最大年龄 | 15 | 如果设置为 0 的话,则年轻代对象不经过 Survivor 区,直接进入年老代. 对于年老代比较多的应用,可以提高效率.如果将此值设置为一个较大值，则年轻代对象会在 Survivor 区进行多次复制,这样可以增加对象在年轻代的存活时间，增加在年轻代即被回收的概率，**该参数只有在串行GC时才有效** |
| -XX:+AggressiveOpts | 加快编译 | | |
| -XX:+UseBiasedLocking | 锁机制的性能改善 | | |
| -Xnoclassgc | 禁用垃圾回收 | | |
| -XX:SoftRefLRUPolicyMSPerMB | 每兆堆空闲空间中SoftReference的存活时间 | 1s | softly reachable objects will remain alive for some amount of time after the last time they were referenced. The default value is one second of lifetime per free megabyte in the heap |
| -XX:PretenureSizeThreshold | 对象超过多大是直接在旧生代分配 | 0 | 新生代采用 Parallel Scavenge GC 时无效 另一种直接在旧生代分配的情况是大的数组对象,且数组中无外部引用对象 |
| -XX:TLABWasteTargetPercent | TLAB占eden区的百分比	| 1% | |
| -XX:+CollectGen0First	| FullGC时是否先YGC	| false | |
| -XX:TargetSurvivorRatio | survivor 空间超过时进入老年代 | 50% | 当经历Minor GC后，survivor空间占有量(百分比)超过它的时候，就会压缩进入老年代(当然，如果survivor空间不够，则直接进入老年代)。默认值为50% |

## 并行收集器相关参数
| 参数名称 | 含义 | 默认值 | 说明 |
| - | - | - | - |
| -XX:+UseParallelGC | Full GC采用parallel MSC (此项待验证)	| | 选择垃圾收集器为并行收集器.此配置仅对年轻代有效.即上述配置下,年轻代使用并发收集,而年老代仍旧使用串行收集.(此项待验证) |
| -XX:+UseParNewGC | 设置年轻代为并行收集 | | 可与CMS收集同时使用，**JDK5.0以上，JVM会根据系统配置自行设置,所以无需再设置此值** |
| -XX:ParallelGCThreads | 并行收集器的线程数 | | 此值最好配置与处理器数目相等 同样适用于CMS |
| -XX:+UseParallelOldGC	| 年老代垃圾收集方式为并行收集(Parallel Compacting) | | 这个是JAVA 6出现的参数选项 |
| -XX:MaxGCPauseMillis | 每次年轻代垃圾回收的最长时间(最大暂停时间)	| | 如果无法满足此时间，JVM会自动调整年轻代大小，以满足此值 |
| -XX:+UseAdaptiveSizePolicy | 自动选择年轻代区大小和相应的Survivor区比例	| | 设置此选项后，并行收集器会自动选择年轻代区大小和相应的Survivor区比例，以达到目标系统规定的最低相应时间或者收集频率等，**此值建议使用并行收集器时，一直打开** |
| -XX:GCTimeRatio | 设置垃圾回收时间占程序运行时间的百分比 | | 公式为`1/(1+n)` |
| -XX:+ScavengeBeforeFullGC	| Full GC前调用YGC | true | |
## CMS 相关参数
| 参数名称 | 含义 | 默认值 | 说明 |
| - | - | - | - |
| -XX:+UseConcMarkSweepGC | 使用CMS内存收集	| | 测试中配置这个以后,-XX:NewRatio=4的配置失效了,原因不明。所以，此时年轻代大小最好用-Xmn设置 |
| -XX:CMSFullGCsBeforeCompaction | 多少次后进行内存压缩 | | 由于并发收集器不对内存空间进行压缩、整理,所以运行一段时间以后会产生"碎片"，使得运行效率降低。此值设置运行多少次 GC 以后对内存空间进行压缩、整理 |
| -XX+UseCMSCompactAtFullCollection	| 在FULL GC的时候， 对年老代的压缩 | | CMS 是不移动内存容易产生碎片，导致内存不够用，因此，内存的压缩这个时候就会被启用。增加这个参数是个好习惯。可能会影响性能,但是可以消除碎片 |
| -XX:+UseCMSInitiatingOccupancyOnly | 使用手动定义初始化定义开始CMS收集	| | 禁止hostspot自行触发CMS GC |
| -XX:CMSInitiatingOccupancyFraction=70 | 使用cms作为垃圾回收 使用70％后开始CMS收集 | 92 | 为了保证不出现promotion failed(见下面介绍)错误,该值的设置需要满足以下公式 [CMSInitiatingOccupancyFraction计算公式](https://www.cnblogs.com/redcreen/archive/2011/05/04/2037057.html#CMSInitiatingOccupancyFraction_value) |
| -XX:CMSInitiatingPermOccupancyFraction | 设置Perm Gen使用到达多少比率时触发	 | 92 | |
| -XX:+AggressiveHeap | | | 试图是使用大量的物理内存 长时间大内存使用的优化，能检查计算资源（内存， 处理器数量） 至少需要256MB内存 大量的CPU／内存， （在1.4.1在4CPU的机器上已经显示有提升）|
| -XX:+CMSParallelRemarkEnabled	| 降低标记停顿 | | |
| -XX:+CMSIncrementalMode | 设置为增量模式 | | 用于单CPU情况 |
| -XX:+CMSClassUnloadingEnabled	| 开启对永久代回收 | false | CMS是默认不会对永久代进行垃圾回收的，设置此参数则是开启 |

## 辅助信息
| 参数名称 | 含义 | 默认值 | 说明 |
| - | - | - | - |
| -XX:+PrintGC | | | 输出形式：[GC 118250K->113543K(130112K), 0.0094143 secs] [Full GC 121376K->10414K(130112K), 0.0650971 secs] |
| -XX:+PrintGCDetails | | | 输出形式：[GC [DefNew: 8614K->781K(9088K), 0.0123035 secs] 118250K->113543K(130112K), 0.0124633 secs] [GC [DefNew: 8614K->8614K(9088K), 0.0000665 secs][Tenured: 112761K->10414K(121024K), 0.0433488 secs] 121376K->10414K(130112K), 0.0436268 secs] |
| -XX:+PrintGCTimeStamps | | | |
| -XX:+PrintGC:PrintGCTimeStamps | | | 可与-XX:+PrintGC -XX:+PrintGCDetails混合使用 输出形式:11.851: [GC 98328K->93620K(130112K), 0.0082960 secs] |
| -XX:+PrintGCApplicationStoppedTime | 打印垃圾回收期间程序暂停的时间.可与上面混合使用	 | | 输出形式：Total time for which application threads were stopped: 0.0468229 seconds |
| -XX:+PrintGCApplicationConcurrentTime	| 打印每次垃圾回收前,程序未中断的执行时间.可与上面混合使用 | | 输出形式:Application time: 0.5291524 seconds |
| -XX:+PrintHeapAtGC | 打印GC前后的详细堆栈信息	| | |
| -Xloggc:filename | 把相关日志信息记录到文件以便分析. 与上面几个配合使用 | | |
| -XX:+PrintClassHistogram | | | |
| -XX:+PrintTLAB | 查看TLAB空间的使用情况 | | |
| XX:+PrintTenuringDistribution	| 查看每次minor GC后新的存活周期的阈值 | | Desired survivor size 1048576 bytes, new threshold 7 (max 15) new threshold 7即标识新的存活周期的阈值为7 |

## 推荐配置
1、首先 Oracle 官方推荐堆的**初始化大小与堆可设置的最大值一般是相等的**，即 Xms = Xmx，因为起始堆内存太小（Xms），会导致启动初期频繁 GC，起始堆内存较大（Xmx）有助于减少 GC 次数
2、调试的时候设置一些打印参数，如 `-XX:+PrintClassHistogram` `-XX:+PrintGCDetails` `-XX:+PrintGCTimeStamps` `-XX:+PrintHeapAtGC -Xloggc:log/gc.log`，这样可以从 gc.log 里看出一些端倪出来
3、系统停顿时间过长可能是 GC 的问题也可能是程序的问题，多用 jmap 和 jstack 查看，或者 `killall -3 Java`，然后查看 Java 控制台日志，能看出很多问题
4、采用并发回收时，年轻代小一点，年老代要大，因为年老代用的是并发回收，即使时间长点也不会影响其他程序继续运行，网站不会停顿
5、仔细了解自己的应用，如果用了缓存，那么年老代应该大一些，缓存的 HashMap 不应该无限制长，建议采用 LRU 算法的 Map 做缓存，LRUMap 的最大长度也要根据实际情况设定

::: danger
一般经常用到哪些参数呢？
`-Xms`、`-Xmx`、`-Xss`、`-XX:MetaspaceSize`、`-XX:+PrintGCDetails`、`-XX:SurvivorRatio`、`-XX:NewRatio`、`-XX:MaxTenuringThreshold`
:::

## GC 考虑
**垃圾回收算法 :** 
**引用计数法**: 会有循环引用的问题，古老的方法； 
**Mark-Sweep**: 标记清除。根可达判断，最大的问题是空间碎片(清除垃圾之后剩下不连续的内存空间)； 
**Copying**: 复制算法。对于短命对象来说有用，否则需要复制大量的对象，效率低。如Java的新生代堆空间中就是使用了它(survivor空间的from和to区)； **Mark-Compact**: 标记整理。对于老年对象来说有用，无需复制，不会产生内存碎片