(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{516:function(a,s,t){"use strict";t.r(s);var e=t(6),v=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("本文来自 "),t("a",{attrs:{href:"https://pdai.tech/md/java/jvm/java-jvm-jmm.html#%E5%9F%BA%E7%A1%80",target:"_blank",rel:"noopener noreferrer"}},[a._v("pdai"),t("OutboundLink")],1)])]),t("h2",{attrs:{id:"jmm-与硬件内存结构关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmm-与硬件内存结构关系"}},[a._v("#")]),a._v(" JMM 与硬件内存结构关系")]),a._v(" "),t("h3",{attrs:{id:"硬件内存结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件内存结构"}},[a._v("#")]),a._v(" 硬件内存结构")]),a._v(" "),t("p",[a._v("这是现代计算机硬件架构的简化图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-memory-model-4.png",alt:"计算机硬件架构的简化图"}})]),a._v(" "),t("p",[a._v("现代计算机通常有 2 个或更多 CPU。 其中一些 CPU 也可能有多个内核。 关键是，在具有 2 个或更多 CPU 的现代计算机上，可以同时运行多个线程。 每个 CPU 都能够在任何给定时间运行一个线程。 这意味着如果您的 Java 应用程序是多线程的，线程真的在可能同时运行。")]),a._v(" "),t("p",[a._v("每个 CPU 基本上都包含一组在 CPU 内存中的寄存器。 CPU 可以在这些寄存器上执行的操作比在主存储器中对变量执行的操作快得多。 这是因为 CPU 可以比访问主存储器更快地访问这些寄存器。")]),a._v(" "),t("p",[a._v("每个 CPU 还可以具有 CPU 高速缓存存储器层。 事实上，大多数现代 CPU 都有一些大小的缓存存储层。CPU 可以比主存储器更快地访问其高速缓存存储器，但通常不会像访问其内部寄存器那样快。 因此，CPU 高速缓存存储器介于内部寄存器和主存储器的速度之间。 某些 CPU 可能有多个缓存层(级别 1 和级别 2 )，但要了解 Java 内存模型如何与内存交互，这一点并不重要。 重要的是要知道 CPU 可以有某种缓存存储层。")]),a._v(" "),t("p",[a._v("计算机还包含主存储区(RAM)。 所有 CPU 都可以访问主内存。主存储区通常比 CPU 的高速缓存存储器大得多。同时访问速度也就较慢.")]),a._v(" "),t("p",[a._v("通常，当 CPU 需要访问主存储器时，"),t("strong",[a._v("它会将部分主存储器读入其 CPU 缓存")]),a._v("。 它甚至可以将部分缓存读入其内部寄存器，然后对其执行操作。 当 CPU 需要将结果写回主存储器时，它会将值从其内部寄存器刷新到高速缓冲存储器，并在某些时候将值刷新回主存储器。")]),a._v(" "),t("h3",{attrs:{id:"jmm-与硬件内存连接-引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmm-与硬件内存连接-引入"}},[a._v("#")]),a._v(" JMM 与硬件内存连接-引入")]),a._v(" "),t("p",[a._v("如前所述，Java 内存模型和硬件内存架构是不同的。 硬件内存架构不区分线程堆栈和堆。 在硬件上，线程堆栈和堆都位于主存储器中。 线程堆栈和堆的一部分有时可能存在于 CPU 高速缓存和内部CPU寄存器中。 这在图中说明：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-memory-model-5.png",alt:"JMM 与硬件内存"}})]),a._v(" "),t("p",[a._v("当对象和变量可以存储在计算机的各种不同存储区域中时，可能会出现某些问题。 两个主要问题是：")]),a._v(" "),t("ul",[t("li",[a._v("Visibility of thread updates (writes) to shared variables.")]),a._v(" "),t("li",[a._v("Race conditions when reading, checking and writing shared variables.")])]),a._v(" "),t("h3",{attrs:{id:"jmm-与硬件内存连接-对象共享后的可见性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmm-与硬件内存连接-对象共享后的可见性"}},[a._v("#")]),a._v(" JMM 与硬件内存连接 - 对象共享后的可见性")]),a._v(" "),t("p",[a._v("如果两个或多个线程共享一个对象，而没有正确使用 "),t("strong",[a._v("volatile")]),a._v(" 声明或同步，则一个线程对共享对象的更新可能对其他线程不可见。")]),a._v(" "),t("p",[a._v("想象一下，共享对象最初存储在主存储器中。 然后，在 CPU 上运行的线程将共享对象读入其 CPU 缓存中。 它在那里对共享对象进行了更改。 只要 CPU 缓存尚未刷新回主内存，共享对象的更改版本对于在其他 CPU 上运行的线程是不可见的。 这样，每个线程最终都可能拥有自己的共享对象副本，每个副本都位于不同的 CPU 缓存中。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-memory-model-6.png",alt:"对象共享后的可见性"}})]),a._v(" "),t("p",[a._v("要解决此问题，您可以使用 Java 的 "),t("strong",[a._v("volatile")]),a._v(" 关键字。 "),t("strong",[a._v("volatile")]),a._v(" 关键字可以确保直接从主内存读取给定变量，并在更新时始终写回主内存。")]),a._v(" "),t("h3",{attrs:{id:"jmm与硬件内存连接-竞态条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmm与硬件内存连接-竞态条件"}},[a._v("#")]),a._v(" JMM与硬件内存连接 - 竞态条件")]),a._v(" "),t("p",[a._v("如果两个或多个线程共享一个对象，并且多个线程更新该共享对象中的变量，则可能会出现竞态。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-memory-model-7.png",alt:""}})]),a._v(" "),t("p",[a._v("要解决此问题，您可以使用 Java synchronized 块。同步块"),t("strong",[a._v("保证在任何给定时间只有一个线程可以进入代码的给定关键部分")]),a._v("。"),t("strong",[a._v("同步块还保证在同步块内访问的所有变量都将从主存储器中读入，当线程退出同步块时，所有更新的变量将再次刷新回主存储器")]),a._v("，无论变量是不是声明为 volatile。")]),a._v(" "),t("h2",{attrs:{id:"基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),t("h3",{attrs:{id:"并发编程模型的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发编程模型的分类"}},[a._v("#")]),a._v(" 并发编程模型的分类")]),a._v(" "),t("p",[a._v("在并发编程中，我们需要处理两个关键问题："),t("strong",[a._v("线程之间如何通信及线程之间如何同步")]),a._v("（这里的线程是指并发执行的活动实体）。通信是指线程之间以何种机制来交换信息。在命令式编程中，线程之间的通信机制有两种："),t("strong",[a._v("共享内存和消息传递")]),a._v("。")]),a._v(" "),t("p",[a._v("在"),t("strong",[a._v("共享内存的并发模型")]),a._v("里，线程之间共享程序的公共状态，线程之间通过写 - 读内存中的"),t("strong",[a._v("公共状态来隐式进行通信")]),a._v("。在"),t("strong",[a._v("消息传递的并发模型")]),a._v("里，线程之间没有公共状态，线程之间必须通过"),t("strong",[a._v("明确的发送消息来显式进行通信")]),a._v("。")]),a._v(" "),t("p",[a._v("同步是指程序用于控制不同线程之间操作发生相对顺序的机制。在共享内存并发模型里，同步是显式进行的。"),t("strong",[a._v("程序员必须显式指定某个方法或某段代码需要在线程之间互斥执行")]),a._v("。在消息传递的并发模型里，由于消息的发送必须在消息的接收之前，因此同步是隐式进行的。")]),a._v(" "),t("p",[t("strong",[a._v("Java 的并发采用的是共享内存模型，Java 线程之间的通信总是隐式进行，整个通信过程对程序员完全透明")]),a._v("。如果编写多线程程序的 Java 程序员不理解隐式进行的线程之间通信的工作机制，很可能会遇到各种奇怪的"),t("strong",[a._v("内存可见性")]),a._v("问题。")]),a._v(" "),t("h3",{attrs:{id:"java-内存模型的抽象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型的抽象"}},[a._v("#")]),a._v(" Java 内存模型的抽象")]),a._v(" "),t("p",[a._v("在 java 中，所有"),t("strong",[a._v("实例域、静态域和数组元素")]),a._v("存储在堆内存中，堆内存在线程之间共享（本文使用“共享变量”这个术语代指实例域，静态域和数组元素）。局部变量（Local variables），方法定义参数（java 语言规范称之为 formal method parameters）和异常处理器参数（exception handler parameters）不会在线程之间共享，"),t("strong",[a._v("它们不会有内存可见性问题，也不受内存模型的影响")]),a._v("。")]),a._v(" "),t("p",[a._v("Java 线程之间的通信由 Java 内存模型控制，JMM 决定一个线程对共享变量的写入何时对另一个线程可见。从抽象的角度来看，JMM 定义了线程和主内存之间的抽象关系：线程之间的共享变量存储在主内存（main memory）中，每个线程都有一个私有的本地内存（local memory），本地内存中存储了该线程以读 / 写共享变量的副本。本地内存是 JMM 的一个抽象概念，并不真实存在。它涵盖了缓存，写缓冲区，寄存器以及其他的硬件和编译器优化。Java 内存模型的抽象示意图如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-1.png",alt:"Java 内存模型示意图"}})]),a._v(" "),t("p",[a._v("从上图来看，线程 A 与线程 B 之间如要通信的话，必须要经历下面 2 个步骤：")]),a._v(" "),t("ul",[t("li",[a._v("首先，线程 A 把本地内存 A 中更新过的共享变量刷新到主内存中去")]),a._v(" "),t("li",[a._v("然后，线程 B 到主内存中去读取线程 A 之前已更新过的共享变量")])]),a._v(" "),t("h3",{attrs:{id:"重排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重排序"}},[a._v("#")]),a._v(" 重排序")]),a._v(" "),t("p",[a._v("在执行程序时为了提高性能，编译器和处理器常常会对指令做重排序。重排序分三种类型：")]),a._v(" "),t("ul",[t("li",[a._v("编译器优化的重排序。编译器在不改变"),t("strong",[a._v("单线程程序")]),a._v("语义的前提下，可以重新安排语句的执行顺序。")]),a._v(" "),t("li",[a._v("指令级并行的重排序。现代处理器采用了"),t("strong",[a._v("指令级并行技术")]),a._v("（Instruction-Level Parallelism， ILP）来将多条指令"),t("strong",[a._v("重叠执行")]),a._v("。如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。")]),a._v(" "),t("li",[a._v("内存系统的重排序。由于处理器使用缓存和读 / 写缓冲区，这使得加载和存储操作看上去可能是在乱序执行。")])]),a._v(" "),t("p",[a._v("从 java 源代码到最终实际执行的指令序列，会分别经历下面三种重排序：\n"),t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-3.png",alt:"重排序"}})]),a._v(" "),t("p",[a._v("上述的 1 属于编译器重排序，2 和 3 属于处理器重排序。这些重排序都可能会导致多线程程序出现"),t("strong",[a._v("内存可见性问题")]),a._v("。对于编译器，JMM 的编译器重排序规则会禁止特定类型的编译器重排序（不是所有的编译器重排序都要禁止）。对于处理器重排序，JMM 的处理器重排序规则会要求 java 编译器在生成指令序列时，插入特定类型的"),t("strong",[a._v("内存屏障")]),a._v("（memory barriers，intel 称之为 memory fence）指令，通过内存屏障指令来禁止特定类型的处理器重排序（不是所有的处理器重排序都要禁止）。")]),a._v(" "),t("p",[a._v("JMM 属于语言级的内存模型，它确保在不同的编译器和不同的处理器平台之上，通过禁止特定类型的编译器重排序和处理器重排序，为程序员"),t("strong",[a._v("提供一致的内存可见性保证")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"处理器重排序与内存屏障指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理器重排序与内存屏障指令"}},[a._v("#")]),a._v(" 处理器重排序与内存屏障指令")]),a._v(" "),t("p",[a._v("现代的处理器使用"),t("strong",[a._v("写缓冲区")]),a._v("来临时保存向内存写入的数据。写缓冲区可以保证指令流水线持续运行，它可以避免由于处理器停顿下来等待向内存写入数据而产生的延迟。同时，通过以"),t("strong",[a._v("批处理")]),a._v("的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，可以减少对内存总线的占用。虽然写缓冲区有这么多好处，但每个处理器上的写缓冲区，仅仅对它所在的处理器可见。这个特性会对内存操作的执行顺序产生重要的影响：处理器对内存的读 / 写操作的执行顺序，不一定与内存实际发生的读 / 写操作顺序一致！为了具体说明，请看下面示例：")]),a._v(" "),t("div",{staticClass:"language-JAVA line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Processor A")]),a._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//A1  ")]),a._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//A2")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Processor B")]),a._v("\nb "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//B1  ")]),a._v("\ny "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//B2")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 初始状态：a = b = 0；处理器允许执行后得到结果：x = y = 0")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("p",[a._v("假设处理器 A 和处理器 B 按程序的顺序并行执行内存访问，最终却可能得到 x = y = 0 的结果。具体的原因如下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-4.png",alt:""}})]),a._v(" "),t("p",[a._v("这里处理器 A 和处理器 B 可以同时把共享变量写入自己的写缓冲区（A1，B1），然后从内存中读取另一个共享变量（A2，B2），最后才把自己写缓存区中保存的脏数据刷新到内存中（A3，B3）。当以这种时序执行时，程序就可以得到 x = y = 0 的结果。")]),a._v(" "),t("p",[a._v("从内存操作实际发生的顺序来看，直到处理器 A 执行 A3 来刷新自己的写缓存区，写操作 A1 才算真正执行了。虽然处理器 A 执行内存操作的顺序为：A1->A2，但内存操作实际发生的顺序却是：A2->A1。此时，处理器 A 的内存操作顺序被重排序了（处理器 B 的情况和处理器 A 一样，这里就不赘述了）。")]),a._v(" "),t("p",[a._v("这里的关键是，由于"),t("strong",[a._v("写缓冲区仅对自己的处理器可见")]),a._v("，它会导致处理器执行内存操作的顺序可能会与内存实际的操作执行顺序不一致。由于现代的处理器都会使用写缓冲区，因此现代的处理器都会允许对写 - 读操做重排序。")]),a._v(" "),t("p",[a._v("为了保证内存可见性，"),t("strong",[a._v("java 编译器")]),a._v("在生成指令序列的适当位置会插入内存屏障指令来禁止特定类型的处理器重排序。JMM 把内存屏障指令分为下列四类：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("屏障类型")]),a._v(" "),t("th",[a._v("指令示例")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("LoadLoad Barriers")]),a._v(" "),t("td",[a._v("Load1; LoadLoad; Load2")]),a._v(" "),t("td",[a._v("确保 Load1 数据的装载之前于 Load2 及所有后续装载指令的装载。")])]),a._v(" "),t("tr",[t("td",[a._v("StoreStore Barriers")]),a._v(" "),t("td",[a._v("Store1; StoreStore; Store2")]),a._v(" "),t("td",[a._v("确保 Store1 数据对其他处理器可见（刷新到内存），之前于 Store2 及所有后续存储指令的存储。")])]),a._v(" "),t("tr",[t("td",[a._v("LoadStore Barriers")]),a._v(" "),t("td",[a._v("Load1; LoadStore; Store2")]),a._v(" "),t("td",[a._v("确保 Load1 数据装载，之前于 Store2 及所有后续的存储指令刷新到内存。")])]),a._v(" "),t("tr",[t("td",[a._v("StoreLoad Barriers")]),a._v(" "),t("td",[a._v("Store1; StoreLoad; Load2")]),a._v(" "),t("td",[a._v("确保 Store1 数据对其他处理器变得可见（指刷新到内存），之前于 Load2 及所有后续装载指令的装载。")])])])]),a._v(" "),t("p",[a._v("StoreLoad Barriers 会使该屏障之前的所有内存访问指令（存储和装载指令）完成之后，才执行该屏障之后的内存访问指令。")]),a._v(" "),t("p",[a._v("StoreLoad Barriers 是一个“全能型”的屏障，它同时具有其他三个屏障的效果。现代的多处理器大都支持该屏障（其他类型的屏障不一定被所有处理器支持）。执行该屏障"),t("strong",[a._v("开销会很昂贵")]),a._v("，因为当前处理器通常要把写缓冲区中的数据全部刷新到内存中（buffer fully flush）。")]),a._v(" "),t("h3",{attrs:{id:"happens-before"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#happens-before"}},[a._v("#")]),a._v(" happens-before")]),a._v(" "),t("p",[a._v("从 JDK5 开始，java 使用新的 JSR-133 内存模型（本文除非特别说明，针对的都是 JSR- 133 内存模型）。JSR-133 提出了 happens-before 的概念，通过这个概念来阐述操作之间的内存可见性。"),t("strong",[a._v("如果一个操作执行的结果需要对另一个操作可见，那么这两个操作之间必须存在 happens-before 关系")]),a._v("。这里提到的两个操作既"),t("strong",[a._v("可以是在一个线程之内，也可以是在不同线程之间")]),a._v("。 与程序员密切相关的 happens-before 规则如下：")]),a._v(" "),t("ul",[t("li",[a._v("程序顺序规则：一个线程中的每个操作，happens- before 于该线程中的任意后续操作。")]),a._v(" "),t("li",[a._v("监视器锁规则：对一个监视器锁的解锁，happens- before 于随后对这个监视器锁的加锁。")]),a._v(" "),t("li",[a._v("volatile 变量规则：对一个 volatile 域的写，happens- before 于任意后续对这个 volatile 域的读。")]),a._v(" "),t("li",[a._v("传递性：如果 A happens- before B，且 B happens- before C，那么 A happens- before C。")])]),a._v(" "),t("p",[a._v("注意，两个操作之间具有 happens-before 关系，"),t("strong",[a._v("并不意味着前一个操作必须要在后一个操作之前执行")]),a._v("！happens-before 仅仅要求前一个操作"),t("strong",[a._v("执行的结果")]),a._v("对后一个操作"),t("strong",[a._v("可见")]),a._v("，且前一个操作按顺序排在第二个操作之前（the first is visible to and ordered before the second）。happens- before 的定义很微妙，后文会具体说明 happens-before 为什么要这么定义。")]),a._v(" "),t("h2",{attrs:{id:"重排序-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重排序-2"}},[a._v("#")]),a._v(" 重排序")]),a._v(" "),t("h3",{attrs:{id:"数据依赖性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据依赖性"}},[a._v("#")]),a._v(" 数据依赖性")]),a._v(" "),t("p",[a._v("如果两个操作访问同一个变量，且这两个操作中"),t("strong",[a._v("有一个为写操作")]),a._v("，此时这两个操作之间就"),t("strong",[a._v("存在数据依赖性")]),a._v("。")]),a._v(" "),t("p",[a._v("数据依赖分下列三种类型：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("名称")]),a._v(" "),t("th",[a._v("代码示例")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("写后读")]),a._v(" "),t("td",[a._v("a = 1;b = a;")]),a._v(" "),t("td",[a._v("写一个变量之后，再读这个位置。")])]),a._v(" "),t("tr",[t("td",[a._v("写后写")]),a._v(" "),t("td",[a._v("a = 1;a = 2;")]),a._v(" "),t("td",[a._v("写一个变量之后，再写这个变量。")])]),a._v(" "),t("tr",[t("td",[a._v("读后写")]),a._v(" "),t("td",[a._v("a = b;b = 1;")]),a._v(" "),t("td",[a._v("读一个变量之后，再写这个变量。")])])])]),a._v(" "),t("p",[a._v("上面三种情况，只要重排序两个操作的执行顺序，程序的执行结果将会被改变。")]),a._v(" "),t("p",[a._v("前面提到过，编译器和处理器可能会对操作做重排序。"),t("strong",[a._v("编译器和处理器在重排序时，会遵守数据依赖性，编译器和处理器不会改变存在数据依赖关系的两个操作的执行顺序")]),a._v("。")]),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"title"}),t("p",[a._v("注意，这里所说的数据依赖性仅针对单个处理器中执行的指令序列和单个线程中执行的操作，不同处理器之间和不同线程之间的数据依赖性不被编译器和处理器考虑。")])]),t("h3",{attrs:{id:"as-if-serial-语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#as-if-serial-语义"}},[a._v("#")]),a._v(" as-if-serial 语义")]),a._v(" "),t("p",[a._v("as-if-serial 语义的意思指：不管怎么重排序（编译器和处理器为了提高并行度），（单线程）程序的执行结果不能被改变。编译器，runtime 和处理器都必须遵守 as-if-serial 语义。")]),a._v(" "),t("p",[a._v("为了遵守 as-if-serial 语义，编译器和处理器不会对存在数据依赖关系的操作做重排序，因为这种重排序会改变执行结果。但是，如果操作之间不存在数据依赖关系，这些操作可能被编译器和处理器重排序。为了具体说明，请看下面计算圆面积的代码示例：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" pi  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//A")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" r   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//B")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" area "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" pi "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" r "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//C")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-6.png",alt:"数据依赖关系图"}})]),a._v(" "),t("p",[a._v("如上图所示，A 和 C 之间存在数据依赖关系，同时 B 和 C 之间也存在数据依赖关系。因此在最终执行的指令序列中，C 不能被重排序到 A 和 B 的前面（C 排到 A 和 B 的前面，程序的结果将会被改变）。"),t("strong",[a._v("但 A 和 B 之间没有数据依赖关系，编译器和处理器可以重排序 A 和 B 之间的执行顺序")]),a._v("。下图是该程序的两种执行顺序：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-7.png",alt:"as-if-serial"}})]),a._v(" "),t("p",[a._v("as-if-serial 语义把单线程程序保护了起来，遵守 as-if-serial 语义的编译器，runtime 和处理器共同为编写单线程程序的程序员创建了一个"),t("strong",[a._v("幻觉")]),a._v("：单线程程序是按程序的顺序来执行的。as-if-serial 语义使单线程程序员无需担心重排序会干扰他们，也无需担心内存可见性问题。")]),a._v(" "),t("h3",{attrs:{id:"程序顺序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序顺序规则"}},[a._v("#")]),a._v(" 程序顺序规则")]),a._v(" "),t("p",[a._v("根据 happens- before 的程序顺序规则，上面计算圆的面积的示例代码存在三个 happens- before 关系：")]),a._v(" "),t("ul",[t("li",[a._v("A happens- before B")]),a._v(" "),t("li",[a._v("B happens- before C")]),a._v(" "),t("li",[a._v("A happens- before C")])]),a._v(" "),t("p",[a._v("这里 A happens- before B，但实际执行时 B 却可以排在 A 之前执行（看上面的重排序后的执行顺序）。之前提到过，如果 A happens- before B，JMM 并不要求 A 一定要在 B 之前执行。JMM 仅仅要求前一个操作（执行的结果）对后一个操作可见，且前一个操作按顺序排在第二个操作之前。这里操作 A 的执行结果不需要对操作 B 可见；而且重排序操作 A 和操作 B 后的执行结果，与操作 A 和操作 B 按 happens- before 顺序执行的结果一致。在这种情况下，JMM 会认为这种重排序并不非法（not illegal），JMM 允许这种重排序。")]),a._v(" "),t("p",[a._v("在计算机中，软件技术和硬件技术有一个共同的目标：在不改变程序执行结果的前提下，尽可能的开发并行度。编译器和处理器遵从这一目标，从 happens- before 的定义我们可以看出，JMM 同样遵从这一目标。")]),a._v(" "),t("h3",{attrs:{id:"重排序对多线程的影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重排序对多线程的影响"}},[a._v("#")]),a._v(" 重排序对多线程的影响")]),a._v(" "),t("p",[a._v("现在让我们来看看，重排序是否会改变多线程程序的执行结果。请看下面的示例代码：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReorderExample")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("writer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//1")]),a._v("\n        flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//2")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("flag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//3")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("  a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//4")]),a._v("\n            ……\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("p",[a._v("flag 变量是个标记，用来标识变量 a 是否已被写入。这里假设有两个线程 A 和 B，A 首先执行 writer() 方法，随后 B 线程接着执行 reader() 方法。线程 B 在执行操作 4 时，能否看到线程 A 在操作 1 对共享变量 a 的写入?")]),a._v(" "),t("p",[a._v("答案是：不一定能看到。")]),a._v(" "),t("p",[a._v("由于操作 1 和操作 2 没有数据依赖关系，编译器和处理器可以对这两个操作重排序；同样，操作 3 和操作 4 没有数据依赖关系，编译器和处理器也可以对这两个操作重排序。让我们先来看看，当操作 1 和操作 2 重排序时，可能会产生什么效果? 请看下面的程序执行时序图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-8.png",alt:""}})]),a._v(" "),t("p",[a._v("如上图所示，操作 1 和操作 2 做了重排序。程序执行时，线程 A 首先写标记变量 flag，随后线程 B 读这个变量。由于条件判断为真，线程 B 将读取变量 a。此时，变量 a 还根本没有被线程 A 写入，在这里多线程程序的语义被重排序破坏了！")]),a._v(" "),t("p",[a._v("※注：本文统一用红色的虚箭线表示错误的读操作，用绿色的虚箭线表示正确的读操作。")]),a._v(" "),t("p",[a._v("下面再让我们看看，当操作 3 和操作 4 重排序时会产生什么效果（借助这个重排序，可以顺便说明控制依赖性）。下面是操作 3 和操作 4 重排序后，程序的执行时序图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-9.png",alt:""}})]),a._v(" "),t("p",[a._v("在程序中，操作 3 和操作 4 存在控制依赖关系。当代码中存在控制依赖性时，会影响指令序列执行的并行度。为此，编译器和处理器会采用猜测（Speculation）执行来克服控制相关性对并行度的影响。以处理器的猜测执行为例，执行线程 B 的处理器可以提前读取并计算 a*a，然后把计算结果临时保存到一个名为重排序缓冲（reorder buffer ROB）的硬件缓存中。当接下来操作 3 的条件判断为真时，就把该计算结果写入变量 i 中。")]),a._v(" "),t("p",[a._v("从图中我们可以看出，猜测执行实质上对操作 3 和 4 做了重排序。重排序在这里破坏了多线程程序的语义！")]),a._v(" "),t("p",[a._v("在单线程程序中，对存在控制依赖的操作重排序，不会改变执行结果（这也是 as-if-serial 语义允许对存在控制依赖的操作做重排序的原因）；但在多线程程序中，对存在控制依赖的操作重排序，可能会改变程序的执行结果。")]),a._v(" "),t("h2",{attrs:{id:"顺序一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序一致性"}},[a._v("#")]),a._v(" 顺序一致性")]),a._v(" "),t("h3",{attrs:{id:"数据竞争与顺序一致性保证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据竞争与顺序一致性保证"}},[a._v("#")]),a._v(" 数据竞争与顺序一致性保证")]),a._v(" "),t("p",[a._v("当程序未正确同步时，就会存在数据竞争。java 内存模型规范对数据竞争的定义如下：")]),a._v(" "),t("ul",[t("li",[a._v("在一个线程中写一个变量")]),a._v(" "),t("li",[a._v("在另一个线程读同一个变量")]),a._v(" "),t("li",[a._v("而且写和读没有通过同步来排序")])]),a._v(" "),t("p",[a._v("当代码中包含数据竞争时，程序的执行往往产生违反直觉的结果（前一章的示例正是如此）。如果一个多线程程序能正确同步，这个程序将是一个没有数据竞争的程序。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("JMM 对正确同步的多线程程序的内存一致性做了如下保证：")]),a._v(" "),t("ul",[t("li",[a._v("如果程序是正确同步的，程序的执行将具有顺序一致性（sequentially consistent）-- 即程序的执行结果与该程序在顺序一致性内存模型中的执行结果相同（马上我们将会看到，这对于程序员来说是一个极强的保证）")]),a._v(" "),t("li",[a._v("这里的同步是指广义上的同步，包括对常用同步原语（lock，volatile 和 final）的正确使用。")])])]),t("h3",{attrs:{id:"顺序一致性内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序一致性内存模型"}},[a._v("#")]),a._v(" 顺序一致性内存模型")]),a._v(" "),t("p",[a._v("顺序一致性内存模型是一个被计算机科学家理想化了的理论参考模型，它为程序员提供了极强的内存可见性保证。顺序一致性内存模型有两大特性：")]),a._v(" "),t("ul",[t("li",[a._v("一个线程中的所有操作必须按照程序的顺序来执行。（不管程序是否同步）所有线程都只能看到一个单一的操作执行顺序。在顺序一致性内存模型中，每个操作都必须原子执行且立刻对所有线程可见。顺序一致性内存模型为程序员提供的视图如下：")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-10.png",alt:"顺序一致性内存模型"}})]),a._v(" "),t("p",[a._v("在概念上，顺序一致性模型有一个单一的全局内存，这个内存通过一个左右摆动的开关可以连接到任意一个线程。同时，每一个线程必须按程序的顺序来执行内存读 / 写操作。从上图我们可以看出，在任意时间点最多只能有一个线程可以连接到内存。当多个线程并发执行时，图中的开关装置能把所有线程的所有内存读 / 写操作串行化。")]),a._v(" "),t("p",[a._v("为了更好的理解，下面我们通过两个示意图来对顺序一致性模型的特性做进一步的说明。")]),a._v(" "),t("p",[a._v("假设有两个线程 A 和 B 并发执行。其中 A 线程有三个操作，它们在程序中的顺序是：A1->A2->A3。B 线程也有三个操作，它们在程序中的顺序是：B1->B2->B3。")]),a._v(" "),t("p",[a._v("假设这两个线程使用监视器来"),t("strong",[a._v("正确同步")]),a._v("：A 线程的三个操作执行后释放监视器，随后 B 线程获取同一个监视器。那么程序在顺序一致性模型中的执行效果将如下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-11.png",alt:"线程同步"}})]),a._v(" "),t("p",[a._v("现在我们再假设这两个线程没有做同步，下面是这个未同步程序在顺序一致性模型中的执行示意图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-12.png",alt:"未同步"}})]),a._v(" "),t("p",[a._v("未同步程序在顺序一致性模型中虽然整体执行顺序是无序的，但所有线程都只能看到一个一致的整体执行顺序。以上图为例，线程 A 和 B 看到的执行顺序"),t("strong",[a._v("都是")]),a._v("：B1->A1->A2->B2->A3->B3。之所以能得到这个保证是因为顺序一致性内存模型中的"),t("strong",[a._v("每个操作必须立即对任意线程可见")]),a._v("。")]),a._v(" "),t("p",[a._v("但是，在 JMM 中就没有这个保证。未同步程序在 JMM 中不但整体的执行顺序是无序的，而且"),t("strong",[a._v("所有线程看到的操作执行顺序也可能不一致")]),a._v("。比如，在当前线程把写过的数据缓存在本地内存中，且还没有刷新到主内存之前，这个"),t("strong",[a._v("写操作仅对当前线程可见；从其他线程的角度来观察，会认为这个写操作根本还没有被当前线程执行")]),a._v("。只有当前线程把本地内存中写过的数据刷新到主内存之后，这个写操作才能对其他线程可见。在这种情况下，当前线程和其它线程看到的操作执行顺序将不一致。")]),a._v(" "),t("h3",{attrs:{id:"同步程序的顺序一致性效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步程序的顺序一致性效果"}},[a._v("#")]),a._v(" 同步程序的顺序一致性效果")]),a._v(" "),t("p",[a._v("下面我们对前面的示例程序 ReorderExample 用监视器来同步，看看正确同步的程序如何具有顺序一致性。")]),a._v(" "),t("p",[a._v("请看下面的示例代码：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SynchronizedExample")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("writer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("flag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            ……\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("p",[a._v("上面示例代码中，假设 A 线程执行 writer() 方法后，B 线程执行 reader() 方法。这是一个"),t("strong",[a._v("正确同步的多线程程序")]),a._v("。根据 JMM 规范，该程序的执行结果将与该程序在顺序一致性模型中的执行结果相同。下面是该程序在两个内存模型中的执行时序对比图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-13.png",alt:"JMM 和 顺序一致性模型"}})]),a._v(" "),t("p",[a._v("在顺序一致性模型中，所有操作完全按程序的顺序串行执行。而在 JMM 中，临界区内的代码可以重排序（但 JMM 不允许临界区内的代码“逸出”到临界区之外，那样会破坏监视器的语义）。JMM 会在退出监视器和进入监视器这两个关键时间点做一些特别处理，使得线程在这两个时间点具有与顺序一致性模型相同的内存视图（具体细节后文会说明）。虽然线程 A 在临界区内做了重排序，但由于监视器的互斥执行的特性，这里的线程 B 根本无法“观察”到线程 A 在临界区内的重排序。这种重排序既提高了执行效率，又没有改变程序的执行结果。")]),a._v(" "),t("p",[a._v("从这里我们可以看到 JMM 在具体实现上的基本方针：在不改变（正确同步的）程序执行结果的前提下，尽可能的为编译器和处理器的优化打开方便之门。")]),a._v(" "),t("h3",{attrs:{id:"未同步程序的执行特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#未同步程序的执行特性"}},[a._v("#")]),a._v(" 未同步程序的执行特性")]),a._v(" "),t("p",[a._v("对于未同步或未正确同步的多线程程序，JMM 只提供最小安全性：线程执行时读取到的值，要么是之前某个线程写入的值，要么是默认值（0，null，false），JMM 保证线程读操作读取到的值不会无中生有（out of thin air）的冒出来。为了实现最小安全性，JVM 在堆上分配对象时，首先会清零内存空间，然后才会在上面分配对象（JVM 内部会同步这两个操作）。因此，在以清零的内存空间（pre-zeroed memory）分配对象时，域的默认初始化已经完成了。")]),a._v(" "),t("p",[a._v("JMM 不保证未同步程序的执行结果与该程序在顺序一致性模型中的**执行结果一致。**因为未同步程序在顺序一致性模型中执行时，整体上是无序的，其执行结果无法预知。保证未同步程序在两个模型中的执行结果一致毫无意义。")]),a._v(" "),t("p",[a._v("和顺序一致性模型一样，未同步程序在 JMM 中的执行时，整体上也是无序的，其执行结果也无法预知。同时，未同步程序在这两个模型中的执行特性有下面几个差异：")]),a._v(" "),t("ul",[t("li",[a._v("顺序一致性模型保证单线程内的操作会按程序的顺序执行，而 JMM 不保证单线程内的操作会按程序的顺序执行（比如上面正确同步的多线程程序在临界区内的重排序）。这一点前面已经讲过了，这里就不再赘述。")]),a._v(" "),t("li",[a._v("顺序一致性模型保证所有线程只能看到一致的操作执行顺序，而 JMM 不保证所有线程能看到一致的操作执行顺序。这一点前面也已经讲过，这里就不再赘述。")]),a._v(" "),t("li",[a._v("JMM 不保证对 64 位的 long 型和 double 型变量的读 / 写操作具有原子性，而顺序一致性模型保证对所有的内存读 / 写操作都具有原子性。")])]),a._v(" "),t("p",[a._v("第 3 个差异与处理器总线的工作机制密切相关。在计算机中，数据通过总线在处理器和内存之间传递。每次处理器和内存之间的数据传递都是通过一系列步骤来完成的，这一系列步骤称之为"),t("strong",[a._v("总线事务")]),a._v("（bus transaction）。总线事务包括读事务（read transaction）和写事务（write transaction）。读事务从内存传送数据到处理器，写事务从处理器传送数据到内存，每个事务会读 / 写内存中一个或多个物理上连续的字。这里的关键是，总线会同步试图并发使用总线的事务。在一个处理器执行总线事务期间，总线会禁止其它所有的处理器和 I/O 设备执行内存的读 / 写。下面让我们通过一个示意图来说明总线的工作机制：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-14.png",alt:"总线工作机制"}})]),a._v(" "),t("p",[a._v("如上图所示，假设处理器 A，B 和 C 同时向总线发起总线事务，这时总线仲裁（bus arbitration）会对竞争作出裁决，这里我们假设总线在仲裁后判定处理器 A 在竞争中获胜（总线仲裁会确保所有处理器都能公平的访问内存）。此时处理器 A 继续它的总线事务，而其它两个处理器则要等待处理器 A 的总线事务完成后才能开始再次执行内存访问。假设在处理器 A 执行总线事务期间（不管这个总线事务是读事务还是写事务），处理器 D 向总线发起了总线事务，此时处理器 D 的这个请求会被总线禁止。")]),a._v(" "),t("p",[a._v("总线的这些工作机制可以把所有处理器对内存的访问以串行化的方式来执行；在任意时间点，最多只能有一个处理器能访问内存。这个特性确保了单个总线事务之中的内存读 / 写操作具有原子性。")]),a._v(" "),t("p",[a._v("在一些 32 位的处理器上，如果要求对 64 位数据的读 / 写操作具有原子性，会有比较大的开销。为了照顾这种处理器，"),t("strong",[a._v("Java 语言规范鼓励但不强求 JVM 对 64 位的 long 型变量和 double 型变量的读 / 写具有原子性")]),a._v("。当 JVM 在这种处理器上运行时，会把一个 64 位 long/ double 型变量的读 / 写操作拆分为两个 32 位的读 / 写操作来执行。这两个 32 位的读 / 写操作可能会被分配到不同的总线事务中执行，此时对这个 64 位变量的读 / 写将不具有原子性。")]),a._v(" "),t("p",[a._v("当单个内存操作不具有原子性，将可能会产生意想不到后果。请看下面示意图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-15.png",alt:"内存操作不具有原子性"}})]),a._v(" "),t("p",[a._v("如上图所示，假设处理器 A 写一个 long 型变量，同时处理器 B 要读这个 long 型变量。处理器 A 中 64 位的写操作被拆分为两个 32 位的写操作，且这两个 32 位的写操作被分配到不同的写事务中执行。同时处理器 B 中 64 位的读操作被拆分为两个 32 位的读操作，且这两个 32 位的读操作被分配到同一个的读事务中执行。当处理器 A 和 B 按上图的时序来执行时，处理器 B 将看到仅仅被处理器 A“写了一半“的无效值。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("h3",{attrs:{id:"处理器内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理器内存模型"}},[a._v("#")]),a._v(" 处理器内存模型")]),a._v(" "),t("p",[a._v("顺序一致性内存模型是一个理论参考模型，JMM 和处理器内存模型在设计时通常会把顺序一致性内存模型作为参照。JMM 和处理器内存模型在设计时会对顺序一致性模型做一些放松，因为如果完全按照顺序一致性模型来实现处理器和 JMM，那么很多的处理器和编译器优化都要被禁止，这对执行性能将会有很大的影响。")]),a._v(" "),t("h3",{attrs:{id:"jmm-的设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmm-的设计"}},[a._v("#")]),a._v(" JMM 的设计")]),a._v(" "),t("p",[a._v("从 JMM 设计者的角度来说，在设计 JMM 时，需要考虑两个关键因素：")]),a._v(" "),t("ul",[t("li",[a._v("程序员对内存模型的使用。程序员希望内存模型易于理解，易于编程。程序员希望基于一个强内存模型来编写代码。")]),a._v(" "),t("li",[a._v("编译器和处理器对内存模型的实现。编译器和处理器希望内存模型对它们的束缚越少越好，这样它们就可以做尽可能多的优化来提高性能。编译器和处理器希望实现一个弱内存模型。")])]),a._v(" "),t("p",[a._v("由于这两个因素互相矛盾，所以 JSR-133 专家组在设计 JMM 时的核心目标就是找到一个好的平衡点：一方面要为程序员提供足够强的"),t("strong",[a._v("内存可见性保证")]),a._v("；另一方面，"),t("strong",[a._v("对编译器和处理器的限制要尽可能的放")]),a._v("松。下面让我们看看 JSR-133 是如何实现这一目标的。")]),a._v(" "),t("p",[a._v("为了具体说明，请看前面提到过的计算圆面积的示例代码：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" pi  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//A")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" r   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//B")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" area "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" pi "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" r "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//C")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("上面计算圆的面积的示例代码存在三个 happens-before 关系：")]),a._v(" "),t("ul",[t("li",[a._v("A happens-before B；")]),a._v(" "),t("li",[a._v("B happens-before C；")]),a._v(" "),t("li",[a._v("A happens-before C；")])]),a._v(" "),t("p",[a._v("由于 A happens- before B，happens- before 的定义会要求：A 操作执行的结果要对 B 可见，且 A 操作的执行顺序排在 B 操作之前。 但是从程序语义的角度来说，对 A 和 B 做重排序即不会改变程序的执行结果，也还能提高程序的执行性能（允许这种重排序减少了对编译器和处理器优化的束缚）。也就是说，上面这 3 个 happens- before 关系中，虽然 2 和 3 是必需要的，但 1 是不必要的。因此，JMM 把 happens- before 要求禁止的重排序分为了下面两类：")]),a._v(" "),t("ul",[t("li",[a._v("会改变程序执行结果的重排序")]),a._v(" "),t("li",[a._v("不会改变程序执行结果的重排序")])]),a._v(" "),t("p",[a._v("JMM 对这两种不同性质的重排序，采取了不同的策略：")]),a._v(" "),t("ul",[t("li",[a._v("对于会改变程序执行结果的重排序，JMM 要求编译器和处理器必须禁止这种重排序")]),a._v(" "),t("li",[a._v("对于不会改变程序执行结果的重排序，JMM 对编译器和处理器不作要求（JMM 允许这种重排序）")])]),a._v(" "),t("p",[a._v("JMM 向程序员提供的 happens- before 规则能满足程序员的需求。JMM 的 happens- before 规则不但简单易懂，而且也"),t("strong",[a._v("向程序员提供了足够强的内存可见性保证")]),a._v("（有些内存可见性保证其实并不一定真实存在，比如上面的 A happens- before B）。")]),a._v(" "),t("p",[a._v("JMM 对编译器和处理器的束缚已经尽可能的少。从上面的分析我们可以看出，JMM 其实是在遵循一个基本原则：只要不改变程序的执行结果（指的是单线程程序和正确同步的多线程程序），编译器和处理器怎么优化都行。比如，如果编译器经过细致的分析后，认定一个锁只会被单个线程访问，那么这个锁可以被消除。再比如，如果编译器经过细致的分析后，认定一个 volatile 变量仅仅只会被单个线程访问，那么编译器可以把这个 volatile 变量当作一个普通变量来对待。这些优化既不会改变程序的执行结果，又能提高程序的执行效率。")]),a._v(" "),t("h3",{attrs:{id:"jmm-的内存可见性保证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmm-的内存可见性保证"}},[a._v("#")]),a._v(" JMM 的内存可见性保证")]),a._v(" "),t("p",[a._v("Java 程序的内存可见性保证按程序类型可以分为下列三类：")]),a._v(" "),t("ul",[t("li",[a._v("单线程程序。单线程程序不会出现内存可见性问题。编译器，runtime 和处理器会共同确保单线程程序的执行结果与该程序在顺序一致性模型中的执行结果相同。")]),a._v(" "),t("li",[a._v("正确同步的多线程程序。正确同步的多线程程序的执行将具有顺序一致性（程序的执行结果与该程序在顺序一致性内存模型中的执行结果相同）。这是 JMM 关注的重点，JMM 通过限制编译器和处理器的重排序来为程序员提供内存可见性保证。")]),a._v(" "),t("li",[a._v("未同步 / 未正确同步的多线程程序。JMM 为它们提供了最小安全性保障：线程执行时读取到的值，要么是之前某个线程写入的值，要么是默认值（0，null，false）。")])]),a._v(" "),t("p",[a._v("下图展示了这三类程序在 JMM 中与在顺序一致性内存模型中的执行结果的异同：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pdai.tech/_images/jvm/java-jmm-x04.png",alt:"三类程序在 JMM 与 顺序一致性内存模型执行结果"}})])])}),[],!1,null,null,null);s.default=v.exports}}]);