(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(e,r,t){"use strict";t.r(r);var n=t(46),a=Object(n.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"backslash-escapes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backslash-escapes","aria-hidden":"true"}},[e._v("#")]),e._v(" Backslash escapes")]),e._v(" "),t("p",[e._v("Any ASCII punctuation character may be backslash-escaped:"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-301",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 301"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\`\\{\\|\\}\\~\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n")])]),e._v(" "),t("p",[e._v("Backslashes before other characters are treated as literal backslashes:"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-302",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 302"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("\\→\\A\\a\\ \\3\\φ\\«\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>\\→\\A\\a\\ \\3\\φ\\«</p>\n")])]),e._v(" "),t("p",[e._v("Escaped characters are treated as regular characters and do not have their usual Markdown meanings:"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-303",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 303"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('\\*not emphasized*\n\\<br/> not a tag\n\\[not a link](/foo)\n\\`not code`\n1\\. not a list\n\\* not a list\n\\# not a heading\n\\[foo]: /url "not a reference"\n')])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>*not emphasized*\n&lt;br/&gt; not a tag\n[not a link](/foo)\n`not code`\n1. not a list\n* not a list\n# not a heading\n[foo]: /url &quot;not a reference&quot;</p>\n")])]),e._v(" "),t("p",[e._v("If a backslash is itself escaped, the following character is not:"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-304",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 304"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("\\\\*emphasis*\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>\\<em>emphasis</em></p>\n")])]),e._v(" "),t("p",[e._v("A backslash at the end of the line is a "),t("a",{attrs:{href:"https://github.github.com/gfm/#hard-line-break",target:"_blank",rel:"noopener noreferrer"}},[e._v("hard line break"),t("OutboundLink")],1),e._v(":"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-305",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 305"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("foo\\\nbar\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p>foo<br />\nbar</p>\n")])]),e._v(" "),t("p",[e._v("Backslash escapes do not work in code blocks, code spans, autolinks, or raw HTML:"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-306",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 306"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("`` \\[\\` ``\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<p><code>\\[\\`</code></p>\n")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-307",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 307"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("    \\[\\]\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<pre><code>\\[\\]\n</code></pre>\n")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-308",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 308"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("~~~\n\\[\\]\n~~~\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v("<pre><code>\\[\\]\n</code></pre>\n")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-309",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 309"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("<http://example.com?find=\\*>\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v('<p><a href="http://example.com?find=%5C*">http://example.com?find=\\*</a></p>\n')])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-310",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 310"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('<a href="/bar\\/)">\n')])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v('<a href="/bar\\/)">\n')])]),e._v(" "),t("p",[e._v("But they work in all other contexts, including URLs and link titles, link references, and "),t("a",{attrs:{href:"https://github.github.com/gfm/#info-string",target:"_blank",rel:"noopener noreferrer"}},[e._v("info strings"),t("OutboundLink")],1),e._v(" in "),t("a",{attrs:{href:"https://github.github.com/gfm/#fenced-code-blocks",target:"_blank",rel:"noopener noreferrer"}},[e._v("fenced code blocks"),t("OutboundLink")],1),e._v(":"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.github.com/gfm/#example-311",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 311"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('[foo](/bar\\* "ti\\*tle")\n')])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v('<p><a href="/bar*" title="ti*tle">foo</a></p>\n')])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-312",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 312"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('[foo]\n\n[foo]: /bar\\* "ti\\*tle"\n')])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v('<p><a href="/bar*" title="ti*tle">foo</a></p>\n')])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.github.com/gfm/#example-313",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 313"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v("``` foo\\+bar\nfoo\n```\n")])]),e._v(" "),t("p"),e._v(" "),t("pre",[t("code",[e._v('<pre><code class="language-foo+bar">foo\n</code></pre>\n')])])])},[],!1,null,null,null);r.default=a.exports}}]);