(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{371:function(e,t,n){"use strict";n.r(t);var a=n(46),o=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"blocks-and-inlines"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blocks-and-inlines","aria-hidden":"true"}},[e._v("#")]),e._v(" Blocks and inlines")]),e._v(" "),n("p",[e._v("We can think of a document as a sequence of "),n("a",{attrs:{href:"https://github.github.com/gfm/#blocks",target:"_blank",rel:"noopener noreferrer"}},[e._v("blocks"),n("OutboundLink")],1),e._v("—structural elements like paragraphs, block quotations, lists, headings, rules, and code blocks. Some blocks (like block quotes and list items) contain other blocks; others (like headings and paragraphs) contain "),n("a",{attrs:{href:"https://github.github.com/gfm/#inline",target:"_blank",rel:"noopener noreferrer"}},[e._v("inline"),n("OutboundLink")],1),e._v(" content—text, links, emphasized text, images, code spans, and so on.")]),e._v(" "),n("h3",{attrs:{id:"precedence"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#precedence","aria-hidden":"true"}},[e._v("#")]),e._v(" Precedence")]),e._v(" "),n("p",[e._v("Indicators of block structure always take precedence over indicators of inline structure. So, for example, the following is a list with two items, not a list with one item containing a code span:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-12",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 12"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("- `one\n- two`\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v("<ul>\n<li>`one</li>\n<li>two`</li>\n</ul>\n")])]),e._v(" "),n("p",[e._v("This means that parsing can proceed in two steps: first, the block structure of the document can be discerned; second, text lines inside paragraphs, headings, and other block constructs can be parsed for inline structure. The second step requires information about link reference definitions that will be available only at the end of the first step. Note that the first step requires processing lines in sequence, but the second can be parallelized, since the inline parsing of one block element does not affect the inline parsing of any other.")]),e._v(" "),n("h3",{attrs:{id:"container-blocks-and-leaf-blocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#container-blocks-and-leaf-blocks","aria-hidden":"true"}},[e._v("#")]),e._v(" Container blocks and leaf blocks")]),e._v(" "),n("p",[e._v("We can divide blocks into two types: "),n("a",{attrs:{href:"https://github.github.com/gfm/#container-block",target:"_blank",rel:"noopener noreferrer"}},[e._v("container block"),n("OutboundLink")],1),e._v("s, which can contain other blocks, and "),n("a",{attrs:{href:"https://github.github.com/gfm/#leaf-block",target:"_blank",rel:"noopener noreferrer"}},[e._v("leaf block"),n("OutboundLink")],1),e._v("s, which cannot.")])])},[],!1,null,null,null);t.default=o.exports}}]);