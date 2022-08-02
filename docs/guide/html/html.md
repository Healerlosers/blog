# HTML

## 1.页面内容

### 1.语义标签

```js
1.em：强调内容
```

### 2.内容标题

```js
1.页眉页脚
	header:标签用于定义文档的页眉
    footer:标签定义文档或节的页脚，页脚通常包含文档的作者 版权信息 使用条款链接 联系信息等
2.导航元素：nav 导航链接
    <main>
        <article>
            <section>
                <h2>锁机制</h2>
             </section>
             <section>
                <h2>事物处理</h2>
            </section>
        </article>
	</main>
7.通用容器：div 通用容器
```

| 标签    | 功能     | 说明                                                         |
| ------- | -------- | ------------------------------------------------------------ |
| main    | 主要区域 | 表示页面的主要区域，一个页面中 main 元素最好只出现一次       |
| article | 内容区域 | 标签规定独立的包含内容区域，article 标签表示一个独立的内容容器 |
| section | 区块定义 | 定义一个区块，一般是一组相似内容的排列组合                   |
| aside   | 附加区域 | 用于设置与主要区域无关的内容，比如侧边栏                     |

## 2.文本相关

### 1.基本标签

| p    | 标记一个段落                                                 |
| ---- | ------------------------------------------------------------ |
| pre  | 原样显示文本内容包括空白 换行等                              |
| br   | 在 html 中回车会忽略的，使用 br 标签可以实现换行效果         |
| span | 标配与 div 标签都是没有语义的，span 常用于对某些文本特殊控制，但该文本又没有适合的语义标签 |

### 2.描述标签

| 标签     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| small    | 用于设置描述，声明等文本                                     |
| time     | 标签定义时间或日期，或者两者                                 |
| abbr     | 标签用于描述一个所写内容                                     |
| sub      | 用于数字的下标内容                                           |
| sup      | 用于数字的上标内容                                           |
| del      | 标签表示删除的内容，ins 一般与 del 标签配合使用描述更新与修正 |
| s        | s 标签显示效果与 del 相似，但语义用来定义哪些不正确，不准确或没用的文本 |
| code     | 用于显示代码块内容，一般需要代码格式化插件完成               |
| progress | 用于表示完成任务的进度，但浏览器不支持时显示内容             |

### 3.强调文本

```js
1.storage 标签和 em 一样，用于强调文本，区别：强调程度不同
2.mark 用于突出显示文本内容，类似我们生活中使用的马克笔
```

### 4.引用标签

```js
1.cite：标签通常表示它所包含的文本对某个参考文献的引用，或文章作者的名字
2.blockquote：用来定义摘自另一个源的块引用
3.q：用于表示行内引用文本，在大部分浏览器中会加上引号。
```

### 5.联系信息

```js
addrerss:用于设置联系地址等信息，一般将address 放在footer 标签中。
```

## 3.表单

```js
1.Form：表单项要放在 FORM 内提交
	action：后台地址
    method：提交方式 GET / POST
2.Label：使用label 用于描述表单标题，当点击标题后文本框会获得焦点，需要保证使用的 ID在页面中时唯一的
	也可以将文本框放在 label 标签内部，这样就不需要设置 id 与 for 属性了
3.hidden：隐藏表单用于提交后台数据，但是前台内容不显示所以在其上做用样式定义也没有意义  
4.pattern：表单可以通过设置 pattern 属性指定正则验证，也可以使用各种前端验证库如 formvalidator (opens new window)或 validator.js (opens new window)。
	patten：正则表达式验证规则
    oninvalid：输入错误是触发的事件
5.textarea：文本域指可以输入多行文本的表单，使用编辑器如ueditor、ckeditor    
	cols：列字符数（一般使用css控制更好）
    rows:行数（一般使用css孔氏更好）
6.文件上传  multiple(支持多选)  accept(允许上传类型 .png .psd)
    <form action="" method="POST" enctype="multipart/form-data">
        <fieldset>
        <input type="file" name="icon" multiple="multiple" accept="image/png,image/gif"></fieldset>
	</form>
7.日期与时间
	step：间隔：date缺省时1天，week缺省是1周，mounth 缺省是1月
    min：最小时间
    max：最大时间
8.Datalist：input 表单的输入值选项列表
    <form action="" method="post">
        <input type="text" list="lesson">
        <datalist id="lesson">
        	<option value="PHP">后台管理语言</option>
			<option value="CSS">美化网站页面</option>
			<option value="MYSQL">掌握数据库使用</option>
		</datalist>
	</form>
9.autocomplete：浏览器基于之前键入过的值，应该显示出在字段中填写的选项
10.列表
	有序列表：ol
	无序列表：ul
    描述列表：dl
```

## 4.表格与多媒体

```js
1.caotion：表格标题  <caption>表格标题</caption>
2.thead：表头部分
3.tbody：表格主体部分
4.tfoot：表格尾部
	colspan：水平合并
    rowspan：垂直合并
```

