# [1410. HTML Entity Parser](https://leetcode.com/problems/html-entity-parser/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 212 | 332 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `amazon`, `google`, `oracle`

## Description

**HTML entity parser** is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.

The special characters and their entities for HTML are:

	- **Quotation Mark:** the entity is `"` and symbol character is `"`.

	- **Single Quote Mark:** the entity is `&apos;` and symbol character is `'`.

	- **Ampersand:** the entity is `&amp;` and symbol character is `&`.

	- **Greater Than Sign:** the entity is `&gt;` and symbol character is `>`.

	- **Less Than Sign:** the entity is `&lt;` and symbol character is `<`.

	- **Slash:** the entity is `&frasl;` and symbol character is `/`.

Given the input `text` string to the HTML parser, you have to implement the entity parser.

Return *the text after replacing the entities by the special characters*.

 

**Example 1:**

```

Input: text = &quot;&amp;amp; is an HTML entity but &amp;ambassador; is not.&quot;
Output: &quot;&amp; is an HTML entity but &amp;ambassador; is not.&quot;
Explanation: The parser will replace the &amp;amp; entity by &amp;

```

**Example 2:**

```

Input: text = &quot;and I quote: &amp;quot;...&amp;quot;&quot;
Output: &quot;and I quote: \&quot;...\&quot;&quot;

```

 

**Constraints:**

	- `1 <= text.length <= 10^5`

	- The string may contain any possible characters out of all the 256 ASCII characters.

---

**Links:** [Submissions](https://leetcode.com/problems/html-entity-parser/) | [Solutions](https://leetcode.com/problems/html-entity-parser/)
