---
title: IDEA Skill
date: 2021-03-21
---

# 快捷键

## 编辑

| 编辑快捷键            | 介绍                                                         |
| --------------------- | ------------------------------------------------------------ |
| Ctrl + Y              | 删除光标所在行 或 删除选中的行                               |
| Ctrl + X              | 剪切光标所在行 或 剪切选择内容                               |
| Ctrl + C              | 复制光标所在行 或 复制选择内容  （*Project区使用可以复制文件名*） |
| Ctrl + Shift + V      | 弹出历史复制内容                                             |
| Ctrl + D              | 复制光标所在行 或 复制选择内容，并把复制内容插入光标位置下面 |
| Alt +                 | 鼠标左键上下拖动 多行编辑                                    |
| Alt + Shift +         | 鼠标左键多行选择 自定义多行编辑                              |
| Ctrl + Shift + 方向键 | 光标放在方法名上，将方法移动，调整方法排序。光标放在普通代码行上，移动改行代码 |
| Alt + Shift + F       | 可以收藏类也可以收藏方法                                     |

## 窗口

| 窗口快捷键                         | 介绍                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| Ctrl + Tab                         | 编辑窗口切换，如果在切换的过程又加按上delete，则是关闭对应选中的窗口 |
| Alt + 1,2,3…9                      | 显示对应数值的选项卡，其中 1 是 Project 用得最多             |
| Ctrl + alt + [ 或者 Ctrl + alt + ] | Project Window 跳转                                          |
| F12                                | 回到编辑区前一个窗口                                         |

## 光标定位

| 光标定位快捷键   | **介绍**                                 |
| ---------------- | ---------------------------------------- |
| Ctrl + Home      | 跳到文件头                               |
| Ctrl + End       | 跳到文件尾                               |
| Alt + 前方向键   | 当前光标跳转到当前文件的前一个方法名位置 |
| Alt + 后方向键   | 当前光标跳转到当前文件的后一个方法名位置 |
| Ctrl + E         | 显示最近打开的文件记录列表               |
| Ctrl + Shift + E | 显示最近修改的文件列表的弹出层           |
| Ctrl＋序号       | 带序号的BookMark跳转                     |
| Ctrl  + G        | 行号跳转                                 |

非快捷键，favorites跳转方式

## 查找替换

| 查找替换快捷键         | 介绍                                                         |
| ---------------------- | ------------------------------------------------------------ |
| Ctrl + N               | 根据输入的**类名**查找类文件                                 |
| Ctrl + Shift + N       | 通过文件名定位，打开文件 / 目录，打开目录需要在输入的内容后面多加一个正斜杠 |
| Ctrl + Shift + Alt + N | 查找 变量 / 方法                                             |
| Ctrl + E               | 显示最近打开的文件记录列表                                   |
| Ctrl + Shift + E       | 显示最近修改的文件列表的弹出层                               |
| Ctrl + F12             | 弹出当前文件结构层（如查看当前类的所有方法），可以在弹出的层上直接输入，进行筛选 |
| Ctrl + H               | 显示当前类的继承层次结构（包含其父类和子类）                 |
| Ctrl + R               | 在当前文件进行文本替换                                       |
| Ctrl + Shift + R       | 根据输入内容替换对应内容，范围为整个项目 或 指定目录内文件   |
| alt + f1               | 选择project view，快速找到当前类所在位置（90%的人不知道）    |

## 代码自动操作

| 代码自动操作快捷键   | 介绍                                                         |
| -------------------- | ------------------------------------------------------------ |
| Ctrl + Space         | 基础代码补全，默认在 Windows 系统上被输入法占用，需要进行修改，建议修改为 Ctrl + 逗号 |
| Ctrl + Shift + Space | 智能代码提示                                                 |
| Ctrl + J             | 显示与之匹配的实时代码模板                                   |
| Ctrl + Alt + Enter   | 光标所在行上空出一行，光标定位到新行                         |
| Ctrl + Shift + J     | 自动将下一行合并到当前行末尾                                 |
| Ctrl + Shift + U     | 对选中的代码进行大 / 小写轮流转换                            |
| Ctrl + Alt + L       | 格式化代码，可以对当前文件和整个包目录使用                   |
| Ctrl + Alt + O       | 优化导入的类，可以对当前文件和整个包目录使用                 |
| Ctrl + Alt + T       | 对选中的代码弹出环绕选项弹出层 （if、while...都有）          |
| Ctrl + Shift + T     | 对当前类生成单元测试类，如果已经存在的单元测试类则可以进行选择 |
| Ctrl + O             | 选择可重写的方法                                             |
| Ctrl + I             | 选择可继承的方法                                             |
| Ctrl +shift +Enter   | 快速补全功能，如if,while，list中追加后面的元素；自动结束代码，航模自动添加分号 |

## 代码追踪

| 代码追踪快捷键         | 介绍                                  |
| ---------------------- | ------------------------------------- |
| Ctrl + Shift + Alt + N | 前往指定的变量 / 方法（感觉贼好用呢） |

## 代码重构

| 代码重构快捷键         | 介绍                                                         |
| ---------------------- | ------------------------------------------------------------ |
| Ctrl + Shift + Alt + T | 重构功能大汇总，叫做 Refactor This                           |
| Shift + F6             | 对 文件夹 / 文件 / 类 / 方法 / 变量 (重构)重命名，增加变量等操作均有！ |
| Ctrl + F6              | 更改函数签名（Change Signature）                             |
| Ctrl + Alt + V         | 本地变量                                                     |
| Ctrl + Alt + F         | 成员变量                                                     |
| Ctrl + Alt + C         | 静态常量                                                     |
| Ctrl + Alt + V         |                                                              |
| Ctrl + Alt + P         | 方法参数                                                     |
| Ctrl + Alt + N         | 方法内聚                                                     |

## Git

 - annotate
- Previous Change 
- Revert 撤销，包括单个、文件、项目改动之处



| Git快捷键        | 介绍                  |
| ---------------- | --------------------- |
| alt + ~          | 集合所有Git相关的窗口 |
| Ctrl + t         | pull                  |
| Ctrl + shift + ` | 切换分支              |

## 列操作

全选相同的符号：Edit-Find-Select ALL Occurence

# Live Template

Postfix

- fori
- sout
- field
- format
- iter
- new
- while
- return
- nn

对于数组：stream可以快速创建流

# Alt Enter

- 自动创建函数
- List Replace
- 字符串format或者builder
- 实现接口
- 单词拼写
- 导包

# 断点调试

- 添加断点
- 单步运行 shift F9
- resume
- 查看所有断点 Ctrl shift F8
- 禁止所有断点
- 条件断点
- 表达式求值
- 运行到指定行
- Set Value
- 运行当前上下文 Ctrl shift F9
- 在当前可运行列表中选择一个运行
- 编辑当前运行

# 寻找修改轨迹

 - Local History

# 插件推荐

- .ignore [Git必备]
- Alibaba Java Coding Guidelines [阿里编码规范]
- JavaDoc2 [快速生产JavaDoc]
- Lombok [代码整洁必备]
- Key Promoter X [快捷键插件]
- One Dark Theme [酷炫主题]
- Rainglow Color Schemes [色彩方案插件]
- Presentation Assistant[又用Mac又用Windows，你不需要吗？]

# 常用配置

#### 鼠标调节字体大小

Settings - Editor - General - Mouse - Change font size (Zoom) with Ctrl + Mouse Wheel

#### 编码

Settings中搜索encode，所有都改成UTF-8

#### Auto import

Settings - Editor - General - Auto Import - Optimize imports on the fly (for current project)

#### 显示编辑区行号

Settings - Editor - General - Appearance - Show line numbers

#### Tabs 数量

Settings - Editor - General - Editor Tabs - Tab Closing Policy - Tab limit

#### 自动换行

Settings - Editor - General - Soft Wraps - Use soft wraps in editor