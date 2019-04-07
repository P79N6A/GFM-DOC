(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{311:function(t,e,n){"use strict";n.r(e);var r=n(46),a=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"表格（拓展）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表格（拓展）","aria-hidden":"true"}},[t._v("#")]),t._v(" 表格（拓展）")]),t._v(" "),n("p",[t._v("GFM 启用了 "),n("code",[t._v("表格")]),t._v(" 扩展，其中可以使用其他类型的叶子块。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.github.com/gfm/#table",target:"_blank",rel:"noopener noreferrer"}},[t._v("表格"),n("OutboundLink")],1),t._v("是具有行和列的数据排列，由单个标题行、分隔符、将标题与数据分隔开的"),n("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-row",target:"_blank",rel:"noopener noreferrer"}},[t._v("分隔符行"),n("OutboundLink")],1),t._v("以及零个或多个数据行组成。")]),t._v(" "),n("p",[t._v("每行由包含任意文本的单元格组成，其中的内容会被当做"),n("a",{attrs:{href:"https://github.github.com/gfm/#inlines",target:"_blank",rel:"noopener noreferrer"}},[t._v("内联"),n("OutboundLink")],1),t._v("解析，由管道（"),n("code",[t._v("|")]),t._v("）分隔。为了清晰阅读，还建议使用前导和尾随管道，否则会让解析模糊。管道和单元格内容之间的空间会被修剪。块级元素不能插入表中。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-row",target:"_blank",rel:"noopener noreferrer"}},[t._v("分隔符行"),n("OutboundLink")],1),t._v("由单元格组成，这些单元格的唯一内容是连字符（"),n("code",[t._v("-")]),t._v("），可选的前导或尾部冒号（"),n("code",[t._v(":")]),t._v(")或两者兼有，分别表示左，右或中心对齐。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.github.com/gfm/#example-191",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例 191"),n("OutboundLink")],1)]),t._v(" "),n("pre",[n("code",[t._v("| foo | bar |\n| --- | --- |\n| baz | bim |\n")])]),t._v(" "),n("p"),t._v(" "),n("pre",[n("code",[t._v("<table>\n<thead>\n<tr>\n<th>foo</th>\n<th>bar</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>baz</td>\n<td>bim</td>\n</tr></tbody></table>\n")])]),t._v(" "),n("p",[t._v("一列中的单元格不需要长度一致，虽然那样它们更容易阅读。同样，使用前导管道和尾随管道也可能不一致："),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-192",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例 192"),n("OutboundLink")],1)]),t._v(" "),n("pre",[n("code",[t._v("| abc | defghi |\n:-: | -----------:\nbar | baz\n")])]),t._v(" "),n("p"),t._v(" "),n("pre",[n("code",[t._v('<table>\n<thead>\n<tr>\n<th align="center">abc</th>\n<th align="right">defghi</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">bar</td>\n<td align="right">baz</td>\n</tr></tbody></table>\n')])]),t._v(" "),n("p",[t._v("通过转义在单元格的内容中可以包含管道，可以包括内部其他内联间隔："),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-193",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例 193"),n("OutboundLink")],1)]),t._v(" "),n("pre",[n("code",[t._v("| f\\|oo  |\n| ------ |\n| b `\\|` az |\n| b **\\|** im |\n")])]),t._v(" "),n("p"),t._v(" "),n("pre",[n("code",[t._v("<table>\n<thead>\n<tr>\n<th>f|oo</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>b <code>|</code> az</td>\n</tr>\n<tr>\n<td>b <strong>|</strong> im</td>\n</tr></tbody></table>\n")])]),t._v(" "),n("p",[t._v("表格在第一个空行或另一个块级结构的开头处会被破坏："),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-194",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例 194"),n("OutboundLink")],1)]),t._v(" "),n("pre",[n("code",[t._v("| abc | def |\n| --- | --- |\n| bar | baz |\n> bar\n")])]),t._v(" "),n("p"),t._v(" "),n("pre",[n("code",[t._v("<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr></tbody></table>\n<blockquote>\n<p>bar</p>\n</blockquote>\n")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.github.com/gfm/#example-195",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例 195"),n("OutboundLink")],1)]),t._v(" "),n("pre",[n("code",[t._v("| abc | def |\n| --- | --- |\n| bar | baz |\nbar\n\nbar\n")])]),t._v(" "),n("p"),t._v(" "),n("pre",[n("code",[t._v("<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr>\n<tr>\n<td>bar</td>\n<td></td>\n</tr></tbody></table>\n<p>bar</p>\n")])]),t._v(" "),n("p",[t._v("标题行必须与单元格数中的"),n("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-row",target:"_blank",rel:"noopener noreferrer"}},[t._v("分隔符行"),n("OutboundLink")],1),t._v("匹配。如果没有，表格将无法被识别："),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-196",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例 196"),n("OutboundLink")],1)]),t._v(" "),n("pre",[n("code",[t._v("| abc | def |\n| --- |\n| bar |\n")])]),t._v(" "),n("p"),t._v(" "),n("pre",[n("code",[t._v("<p>| abc | def |\n| --- |\n| bar |</p>\n")])]),t._v(" "),n("p",[t._v("表格行的其余部分可以在单元格数量上有所不同。如果有多个单元格小于标题行中的单元格数，则插入空单元格。如果有多的，则忽略多余的："),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-197",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例 197"),n("OutboundLink")],1)]),t._v(" "),n("pre",[n("code",[t._v("| abc | def |\n| --- | --- |\n| bar |\n| bar | baz | boo |\n")])]),t._v(" "),n("p"),t._v(" "),n("pre",[n("code",[t._v("<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td></td>\n</tr>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr></tbody></table>\n")])]),t._v(" "),n("p",[t._v("如果正文中没有行，则 HTML 输出中不会生成 "),n("code",[t._v("<tbody>")]),t._v("："),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-198",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例 198"),n("OutboundLink")],1)]),t._v(" "),n("pre",[n("code",[t._v("| abc | def |\n| --- | --- |\n")])]),t._v(" "),n("p"),t._v(" "),n("pre",[n("code",[t._v("<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead></table>\n")])])])},[],!1,null,null,null);e.default=a.exports}}]);