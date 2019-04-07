(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{317:function(e,r,t){"use strict";t.r(r);var n=t(46),o=Object(n.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"setext-标题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setext-标题","aria-hidden":"true"}},[e._v("#")]),e._v(" Setext 标题")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#setext-heading",target:"_blank",rel:"noopener noreferrer"}},[e._v("setext 标题"),t("OutboundLink")],1),e._v("由一行或多行文本组成，每行包含至少一个"),t("a",{attrs:{href:"https://github.github.com/gfm/#non-whitespace-character",target:"_blank",rel:"noopener noreferrer"}},[e._v("非空字符"),t("OutboundLink")],1),e._v("，不超过 3 个空格缩进，后跟 "),t("a",{attrs:{href:"https://github.github.com/gfm/#setext-heading-underline",target:"_blank",rel:"noopener noreferrer"}},[e._v("setext 标题下划线"),t("OutboundLink")],1),e._v("。 文本行必须是这样的，如果后面没有跟 setext 标题下划线，它们将被解释为段落：它们不能被解释为"),t("router-link",{attrs:{to:"./(https://github.github.com/gfm/#code-fence)"}},[e._v("代码围栏")]),e._v("，"),t("a",{attrs:{href:"https://github.github.com/gfm/#atx-headings",target:"_blank",rel:"noopener noreferrer"}},[e._v("ATX 标题"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://github.github.com/gfm/#block-quotes",target:"_blank",rel:"noopener noreferrer"}},[e._v("块引用"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://github.github.com/gfm/#thematic-breaks",target:"_blank",rel:"noopener noreferrer"}},[e._v("专门的换行"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://github.github.com/gfm/#list-items",target:"_blank",rel:"noopener noreferrer"}},[e._v("列表项"),t("OutboundLink")],1),e._v("或 "),t("router-link",{attrs:{to:"./(https://github.github.com/gfm/#html-blocks)"}},[e._v("HTML 块")]),e._v("。")],1),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#setext-heading-underline",target:"_blank",rel:"noopener noreferrer"}},[e._v("setext 标题下划线"),t("OutboundLink")],1),e._v(" 是一系列 "),t("code",[e._v("=")]),e._v(" 字符或一系列 "),t("code",[e._v("-")]),e._v(" 字符，不超过 3 个空格缩进和任意数量的尾随空格。如果一行包含单个的 "),t("code",[e._v("-")]),e._v("，可以解释为空列表项，它应该以这种方式解释，而不是作为 "),t("a",{attrs:{href:"https://github.github.com/gfm/#setext-heading-underline",target:"_blank",rel:"noopener noreferrer"}},[e._v("setext 标题下划线"),t("OutboundLink")],1),e._v("的文本。")]),e._v(" "),t("p",[e._v("如果在 "),t("a",{attrs:{href:"https://github.github.com/gfm/#setext-heading-underline",target:"_blank",rel:"noopener noreferrer"}},[e._v("setext 标题下划线"),t("OutboundLink")],1),e._v("中使用 "),t("code",[e._v("=")]),e._v(" 字符，则标题为 1 级标题，如果使用 "),t("code",[e._v("-")]),e._v(" 字符，则标题为 2 级标题。标题的内容是将前面的文本行解析为 CommonMark 内联内容的结果。")]),e._v(" "),t("p",[e._v("通常，setext 标题不必在空白行之前或之后。但是，它不能使段落中断，所以当一个 setext 标题在段落后时，它们之间需要一个空白行。")]),e._v(" "),t("p",[e._v("简单的例子："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-50",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 50"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo *bar*\n=========\n\nFoo *bar*\n---------\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h1>Foo <em>bar</em></h1>\n<h2>Foo <em>bar</em></h2>\n")])]),e._v(" "),t("p",[e._v("标题的内容可能跨越多行："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-51",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 51"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo *bar\nbaz*\n====\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h1>Foo <em>bar\nbaz</em></h1>\n")])]),e._v(" "),t("p",[e._v("下划线可以是任意长度："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-52",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 52"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\n-------------------------\n\nFoo\n=\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h2>Foo</h2>\n<h1>Foo</h1>\n")])]),e._v(" "),t("p",[e._v("标题内容最多可缩进三个空格，不需要与下划线对齐："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-53",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 53"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("   Foo\n---\n\n  Foo\n-----\n\n  Foo\n  ===\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h2>Foo</h2>\n<h2>Foo</h2>\n<h1>Foo</h1>\n")])]),e._v(" "),t("p",[e._v("缩进四个空格太多了："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-54",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 54"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("    Foo\n    ---\n\n    Foo\n---\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<pre><code>Foo\n---\n\nFoo\n</code></pre>\n<hr />\n")])]),e._v(" "),t("p",[e._v("setext 标题下划线最多可以缩进三个空格，并且可以有尾随空格："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-55",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 55"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\n   ----\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h2>Foo</h2>\n")])]),e._v(" "),t("p",[e._v("四个空格太多了："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-56",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 56"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\n    ---\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>Foo\n---</p>\n")])]),e._v(" "),t("p",[e._v("setext 标题下划线不能包含内部空格："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-57",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 57"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\n= =\n\nFoo\n--- -\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>Foo\n= =</p>\n<p>Foo</p>\n<hr />\n")])]),e._v(" "),t("p",[e._v("内容行中的尾随空格不会导致换行："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-58",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 58"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo  \n-----\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h2>Foo</h2>\n")])]),e._v(" "),t("p",[e._v("最后也没有反斜杠："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-59",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 59"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\\\n----\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h2>Foo\\</h2>\n")])]),e._v(" "),t("p",[e._v("由于块结构的优先级优先于内联结构的优先级，因此以下是文本标题："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-60",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 60"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('`Foo\n----\n`\n\n<a title="a lot\n---\nof dashes"/>\n')])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h2>`Foo</h2>\n<p>`</p>\n<h2>&lt;a title=&quot;a lot</h2>\n<p>of dashes&quot;/&gt;</p>\n")])]),e._v(" "),t("p",[e._v("setext 标题下划线不能是列表项或块引用中的"),t("a",{attrs:{href:"https://github.github.com/gfm/#lazy-continuation-line",target:"_blank",rel:"noopener noreferrer"}},[e._v("懒连续行"),t("OutboundLink")],1),e._v("："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-61",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 61"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("> Foo\n---\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<blockquote>\n<p>Foo</p>\n</blockquote>\n<hr />\n")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-62",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 62"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("> foo\nbar\n===\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<blockquote>\n<p>foo\nbar\n===</p>\n</blockquote>\n")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-63",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 63"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("- Foo\n---\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<ul>\n<li>Foo</li>\n</ul>\n<hr />\n")])]),e._v(" "),t("p",[e._v("段落和后续 setext 标题之间需要一个空行，否则该段落将成为标题内容的一部分：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-64",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 64"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\nBar\n---\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h2>Foo\nBar</h2>\n")])]),e._v(" "),t("p",[e._v("但一般来说，在文本标题之前或之后不需要空白行："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-65",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 65"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("---\nFoo\n---\nBar\n---\nBaz\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<hr />\n<h2>Foo</h2>\n<h2>Bar</h2>\n<p>Baz</p>\n")])]),e._v(" "),t("p",[e._v("Setext 标题不能为空："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-66",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 66"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("====\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>====</p>\n")])]),e._v(" "),t("p",[e._v("Setext 标题文本行不能解释为段落以外的块结构。因此，这些示例中的破折号线被解释为专门的换行："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-67",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 67"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("---\n---\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<hr />\n<hr />\n")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-68",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 68"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("- foo\n-----\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<ul>\n<li>foo</li>\n</ul>\n<hr />\n")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-69",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 69"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("    foo\n---\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<pre><code>foo\n</code></pre>\n<hr />\n")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-70",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 70"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("> foo\n-----\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n")])]),e._v(" "),t("p",[e._v("如果你想要一个带有 "),t("code",[e._v("> foo")]),e._v(" 的标题作为它的文字文本，你可以使用反斜杠转义："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-71",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 71"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("\\> foo\n------\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<h2>&gt; foo</h2>\n")])]),e._v(" "),t("p",[t("strong",[e._v("兼容性说明：")]),e._v(" 大多数现有的 Markdown 实现不允许 setext 标题的文本跨越多行。 但是对于如何解释没有达成共识")]),e._v(" "),t("pre",[t("code",[e._v("Foo\nbar\n---\nbaz\n")])]),e._v(" "),t("p",[e._v("人们可以找到四种不同的解释：")]),e._v(" "),t("ol",[t("li",[e._v("段落 “Foo”，标题 “bar”，段落 “baz”")]),e._v(" "),t("li",[e._v("段落 “Foo bar”，专门的换行，段落 “baz”")]),e._v(" "),t("li",[e._v("段落 “Foo bar  -  baz”")]),e._v(" "),t("li",[e._v("标题为 “Foo bar”，段落 “baz”")])]),e._v(" "),t("p",[e._v("我们发现解释 4 最自然，解释 4 通过允许多行标题增加了 CommonMark 的表达能力。 想要解释 1 的作者可以在第一段后面加一个空白行："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-72",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 72"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\n\nbar\n---\nbaz\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>Foo</p>\n<h2>bar</h2>\n<p>baz</p>\n")])]),e._v(" "),t("p",[e._v("想要解释 2 的作者可以在专门的换行周围加上空白，\n"),t("a",{attrs:{href:"https://github.github.com/gfm/#example-73",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 73"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\nbar\n\n---\n\nbaz\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n")])]),e._v(" "),t("p",[e._v("或使用不能算作"),t("a",{attrs:{href:"https://github.github.com/gfm/#setext-heading-underline",target:"_blank",rel:"noopener noreferrer"}},[e._v("setext 标题下划线"),t("OutboundLink")],1),e._v("的主题中断，例如"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-74",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 74"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\nbar\n* * *\nbaz\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n")])]),e._v(" "),t("p",[e._v("想要解释 3 的作者可以使用反斜杠转义："),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-75",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 75"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("Foo\nbar\n\\---\nbaz\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>Foo\nbar\n---\nbaz</p>\n")])])])},[],!1,null,null,null);r.default=o.exports}}]);