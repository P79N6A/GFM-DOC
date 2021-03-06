## Preliminaries


### 1. Characters and lines

Any sequence of [characters](https://github.github.com/gfm/#character) is a valid CommonMark document.  

A [character](https://github.github.com/gfm/#character) is a Unicode code point. Although some code points (for example, combining accents) do not correspond to characters in an intuitive sense, all code points count as characters for purposes of this spec. 

This spec does not specify an encoding; it thinks of lines as composed of [characters](https://github.github.com/gfm/#character) rather than bytes. A conforming parser may be limited to a certain encoding.  

A [line](https://github.github.com/gfm/#line) is a sequence of zero or more [characters](https://github.github.com/gfm/#character) other than newline (`U+000A`) or carriage return (`U+000D`), followed by a [line ending](https://github.github.com/gfm/#line-ending) or by the end of file.  

A [line ending](https://github.github.com/gfm/#line-ending) is a newline (`U+000A`), a carriage return (`U+000D`) not followed by a newline, or a carriage return and a following newline.  

A line containing no characters, or a line containing only spaces (`U+0020`) or tabs (`U+0009`), is called a [blank line](https://github.github.com/gfm/#blank-line).  

The following definitions of character classes will be used in this spec:  
A [whitespace character](https://github.github.com/gfm/#whitespace-character) is a space (`U+0020`), tab (`U+0009`), newline (`U+000A`), line tabulation (`U+000B`), form feed (`U+000C`), or carriage return (`U+000D`). 

[Whitespace](https://github.github.com/gfm/#whitespace) is a sequence of one or more [whitespace characters](https://github.github.com/gfm/#whitespace-character).  

A [Unicode whitespace character](https://github.github.com/gfm/#unicode-whitespace-character) is any code point in the Unicode `Zs` general category, or a tab (`U+0009`), carriage return (`U+000D`), newline (`U+000A`), or form feed (`U+000C`).  

[Unicode whitespace](https://github.github.com/gfm/#unicode-whitespace) is a sequence of one or more [Unicode whitespace characters](https://github.github.com/gfm/#unicode-whitespace-character).  

A [space](https://github.github.com/gfm/#space) is `U+0020`.  

A [non-whitespace character](https://github.github.com/gfm/#non-whitespace-character) is any character that is not a [whitespace character](https://github.github.com/gfm/#whitespace-character).  

An [ASCII punctuation character](https://github.github.com/gfm/#ascii-punctuation-character) is `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\`, `]`, `^`, `_`, `` ` ``, `{`, `|`, `}`, or `~`.  
A [punctuation character](https://github.github.com/gfm/#punctuation-character) is an [ASCII punctuation character](https://github.github.com/gfm/#ascii-punctuation-character) or anything in the general Unicode categories`Pc`, `Pd`, `Pe`, `Pf`, `Pi`, `Po`, or `Ps`.  

### 2. Tabs

Tabs in lines are not expanded to [spaces](https://github.github.com/gfm/#space). However, in contexts where whitespace helps to define block structure, tabs behave as if they were replaced by spaces with a tab stop of 4 characters.  

Thus, for example, a tab can be used instead of four spaces in an indented code block. (Note, however, that internal tabs are passed through as literal tabs, not expanded to spaces.)  
[Example 1](https://github.github.com/gfm/#example-1)  

    →foo→baz→→bim

   

    <pre><code>foo→baz→→bim
    </code></pre>

[Example 2](https://github.github.com/gfm/#example-2)  

      →foo→baz→→bim

   

    <pre><code>foo→baz→→bim
    </code></pre>

[Example 3](https://github.github.com/gfm/#example-3)  

        a→a
        ὐ→a

   

    <pre><code>a→a
    ὐ→a
    </code></pre>

In the following example, a continuation paragraph of a list item is indented with a tab; this has exactly the same effect as indentation with four spaces would:  
[Example 4](https://github.github.com/gfm/#example-4)  

      - foo
    
    →bar

   

    <ul>
    <li>
    <p>foo</p>
    <p>bar</p>
    </li>
    </ul>

[Example 5](https://github.github.com/gfm/#example-5)  

    - foo
    
    →→bar

   

    <ul>
    <li>
    <p>foo</p>
    <pre><code>  bar
    </code></pre>
    </li>
    </ul>

Normally the `>` that begins a block quote may be followed optionally by a space, which is not considered part of the content. In the following case `>` is followed by a tab, which is treated as if it were expanded into three spaces. Since one of these spaces is considered part of the delimiter, `foo` is considered to be indented six spaces inside the block quote context, so we get an indented code block starting with two spaces.  

[Example 6](https://github.github.com/gfm/#example-6)  

    >→→foo

   

    <blockquote>
    <pre><code>  foo
    </code></pre>
    </blockquote>

[Example 7](https://github.github.com/gfm/#example-7)  

    -→→foo

   

    <ul>
    <li>
    <pre><code>  foo
    </code></pre>
    </li>
    </ul>

[Example 8](https://github.github.com/gfm/#example-8)  

        foo
    →bar

   

    <pre><code>foo
    bar
    </code></pre>

[Example 9](https://github.github.com/gfm/#example-9)  

     - foo
       - bar
    → - baz

   

    <ul>
    <li>foo
    <ul>
    <li>bar
    <ul>
    <li>baz</li>
    </ul>
    </li>
    </ul>
    </li>
    </ul>

[Example 10](https://github.github.com/gfm/#example-10)  

    #→Foo

   

    <h1>Foo</h1>

[Example 11](https://github.github.com/gfm/#example-11)  

    *→*→*→

   

    <hr />

### 3. Insecure characters

For security reasons, the Unicode character `U+0000` must be replaced with the REPLACEMENT CHARACTER (`U+FFFD`).  