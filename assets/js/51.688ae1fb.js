(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{329:function(e,r,o){"use strict";o.r(r);var t=o(46),n=Object(t.a)({},function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"强制换行"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#强制换行","aria-hidden":"true"}},[e._v("#")]),e._v(" 强制换行")]),e._v(" "),o("p",[e._v("在两个或多个空格之前且不在块末尾出现的换行符（不在代码范围或 HTML 标签中）被解析为"),o("a",{attrs:{href:"https://github.github.com/gfm/#hard-line-break",target:"_blank",rel:"noopener noreferrer"}},[e._v("强制换行"),o("OutboundLink")],1),e._v("符（在 HTML 中渲染为"),o("code",[e._v("<br />")]),e._v("标签）："),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.github.com/gfm/#example-632",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 632"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("foo  \nbaz\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p>foo<br />\nbaz</p>\n")])]),e._v(" "),o("p",[e._v("有一个更明显的替代方案，可以在"),o("a",{attrs:{href:"https://github.github.com/gfm/#line-ending",target:"_blank",rel:"noopener noreferrer"}},[e._v("行结尾"),o("OutboundLink")],1),e._v("前使用反斜杠而不是两个空格："),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.github.com/gfm/#example-633",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 633"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("foo\\\nbaz\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p>foo<br />\nbaz</p>\n")])]),e._v(" "),o("p",[e._v("使用多于两个空格："),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.github.com/gfm/#example-634",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 634"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("foo       \nbaz\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p>foo<br />\nbaz</p>\n")])]),e._v(" "),o("p",[e._v("下一行开头的前导空格将被忽略："),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.github.com/gfm/#example-635",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 635"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("foo  \n     bar\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p>foo<br />\nbar</p>\n")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.github.com/gfm/#example-636",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 636"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("foo\\\n     bar\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p>foo<br />\nbar</p>\n")])]),e._v(" "),o("p",[e._v("换行符可以出现在强调，链接和其他结构允许内联的结构中："),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.github.com/gfm/#example-637",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 637"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("*foo  \nbar*\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p><em>foo<br />\nbar</em></p>\n")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.github.com/gfm/#example-638",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 638"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("*foo\\\nbar*\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p><em>foo<br />\nbar</em></p>\n")])]),e._v(" "),o("p",[e._v("换行符不可以出现在行内代码中"),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.github.com/gfm/#example-639",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 639"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("`code  \nspan`\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p><code>code span</code></p>\n")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.github.com/gfm/#example-640",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 640"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("`code\\\nspan`\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p><code>code\\ span</code></p>\n")])]),e._v(" "),o("p",[e._v("或 HTML 标签中："),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.github.com/gfm/#example-641",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 641"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v('<a href="foo  \nbar">\n')])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v('<p><a href="foo  \nbar"></p>\n')])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.github.com/gfm/#example-642",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 642"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v('<a href="foo\\\nbar">\n')])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v('<p><a href="foo\\\nbar"></p>\n')])]),e._v(" "),o("p",[e._v("强制换行用于分隔块内的内联内容。 在段落或其他块元素的末尾，强制换行的语法都不起作用："),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.github.com/gfm/#example-643",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 643"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("foo\\\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p>foo\\</p>\n")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.github.com/gfm/#example-644",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 644"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("foo\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<p>foo</p>\n")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.github.com/gfm/#example-645",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 645"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("### foo\\\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<h3>foo\\</h3>\n")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.github.com/gfm/#example-646",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 646"),o("OutboundLink")],1)]),e._v(" "),o("pre",[o("code",[e._v("### foo\n")])]),e._v(" "),o("p"),e._v(" "),o("pre",[o("code",[e._v("<h3>foo</h3>\n")])])])},[],!1,null,null,null);r.default=n.exports}}]);