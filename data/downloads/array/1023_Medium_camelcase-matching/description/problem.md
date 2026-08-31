# [1023. Camelcase Matching](https://leetcode.com/problems/camelcase-matching/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 972 | 347 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie), [`string-matching`](https://leetcode.com/tag/string-matching)

**Companies:** `google`

## Description

Given an array of strings `queries` and a string `pattern`, return a boolean array `answer` where `answer[i]` is `true` if `queries[i]` matches `pattern`, and `false` otherwise.

A query word `queries[i]` matches `pattern` if you can insert lowercase English letters into the pattern so that it equals the query. You may insert a character at any position in pattern or you may choose not to insert any characters **at all**.

 

**Example 1:**

```

Input: queries = [&quot;FooBar&quot;,&quot;FooBarTest&quot;,&quot;FootBall&quot;,&quot;FrameBuffer&quot;,&quot;ForceFeedBack&quot;], pattern = &quot;FB&quot;
Output: [true,false,true,true,false]
Explanation: &quot;FooBar&quot; can be generated like this &quot;F&quot; + &quot;oo&quot; + &quot;B&quot; + &quot;ar&quot;.
&quot;FootBall&quot; can be generated like this &quot;F&quot; + &quot;oot&quot; + &quot;B&quot; + &quot;all&quot;.
&quot;FrameBuffer&quot; can be generated like this &quot;F&quot; + &quot;rame&quot; + &quot;B&quot; + &quot;uffer&quot;.

```

**Example 2:**

```

Input: queries = [&quot;FooBar&quot;,&quot;FooBarTest&quot;,&quot;FootBall&quot;,&quot;FrameBuffer&quot;,&quot;ForceFeedBack&quot;], pattern = &quot;FoBa&quot;
Output: [true,false,true,false,false]
Explanation: &quot;FooBar&quot; can be generated like this &quot;Fo&quot; + &quot;o&quot; + &quot;Ba&quot; + &quot;r&quot;.
&quot;FootBall&quot; can be generated like this &quot;Fo&quot; + &quot;ot&quot; + &quot;Ba&quot; + &quot;ll&quot;.

```

**Example 3:**

```

Input: queries = [&quot;FooBar&quot;,&quot;FooBarTest&quot;,&quot;FootBall&quot;,&quot;FrameBuffer&quot;,&quot;ForceFeedBack&quot;], pattern = &quot;FoBaT&quot;
Output: [false,true,false,false,false]
Explanation: &quot;FooBarTest&quot; can be generated like this &quot;Fo&quot; + &quot;o&quot; + &quot;Ba&quot; + &quot;r&quot; + &quot;T&quot; + &quot;est&quot;.

```

 

**Constraints:**

	- `1 <= pattern.length, queries.length <= 100`

	- `1 <= queries[i].length <= 100`

	- `queries[i]` and `pattern` consist of English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/camelcase-matching/) | [Solutions](https://leetcode.com/problems/camelcase-matching/)
