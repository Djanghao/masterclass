# [616. Add Bold Tag in String](https://leetcode.com/problems/add-bold-tag-in-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1112 | 201 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie), [`string-matching`](https://leetcode.com/tag/string-matching)

**Companies:** `gusto`, `facebook`, `tiktok`, `microsoft`, `google`

## Description

You are given a string `s` and an array of strings `words`.

You should add a closed pair of bold tag `` and `` to wrap the substrings in `s` that exist in `words`.

	- If two such substrings overlap, you should wrap them together with only one pair of closed bold-tag.

	- If two substrings wrapped by bold tags are consecutive, you should combine them.

Return `s` *after adding the bold tags*.

 

**Example 1:**

```

Input: s = &quot;abcxyz123&quot;, words = [&quot;abc&quot;,&quot;123&quot;]
Output: &quot;&lt;b&gt;abc&lt;/b&gt;xyz&lt;b&gt;123&lt;/b&gt;&quot;
Explanation: The two strings of words are substrings of s as following: &quot;abcxyz123&quot;.
We add &lt;b&gt; before each substring and &lt;/b&gt; after each substring.

```

**Example 2:**

```

Input: s = &quot;aaabbb&quot;, words = [&quot;aa&quot;,&quot;b&quot;]
Output: &quot;&lt;b&gt;aaabbb&lt;/b&gt;&quot;
Explanation: 
&quot;aa&quot; appears as a substring two times: &quot;aaabbb&quot; and &quot;aaabbb&quot;.
&quot;b&quot; appears as a substring three times: &quot;aaabbb&quot;, &quot;aaabbb&quot;, and &quot;aaabbb&quot;.
We add &lt;b&gt; before each substring and &lt;/b&gt; after each substring: &quot;&lt;b&gt;a&lt;b&gt;a&lt;/b&gt;a&lt;/b&gt;&lt;b&gt;b&lt;/b&gt;&lt;b&gt;b&lt;/b&gt;&lt;b&gt;b&lt;/b&gt;&quot;.
Since the first two &lt;b&gt;&#39;s overlap, we merge them: &quot;&lt;b&gt;aaa&lt;/b&gt;&lt;b&gt;b&lt;/b&gt;&lt;b&gt;b&lt;/b&gt;&lt;b&gt;b&lt;/b&gt;&quot;.
Since now the four &lt;b&gt;&#39;s are consecutive, we merge them: &quot;&lt;b&gt;aaabbb&lt;/b&gt;&quot;.

```

 

**Constraints:**

	- `1 758. Bold Words in String.

---

**Links:** [Submissions](https://leetcode.com/problems/add-bold-tag-in-string/) | [Solutions](https://leetcode.com/problems/add-bold-tag-in-string/)
