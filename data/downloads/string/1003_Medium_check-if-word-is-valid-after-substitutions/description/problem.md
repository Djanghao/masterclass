# [1003. Check If Word Is Valid After Substitutions](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1072 | 472 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `amazon`, `nutanix`

## Description

Given a string `s`, determine if it is **valid**.

A string `s` is **valid** if, starting with an empty string `t = ""`, you can **transform **`t`** into **`s` after performing the following operation **any number of times**:

	- Insert string `"abc"` into any position in `t`. More formally, `t` becomes `t_left + "abc" + t_right`, where `t == t_left + t_right`. Note that `t_left` and `t_right` may be **empty**.

Return `true` *if *`s`* is a **valid** string, otherwise, return* `false`.

 

**Example 1:**

```

Input: s = &quot;aabcbc&quot;
Output: true
Explanation:
&quot;&quot; -&gt; &quot;abc&quot; -&gt; &quot;aabcbc&quot;
Thus, &quot;aabcbc&quot; is valid.
```

**Example 2:**

```

Input: s = &quot;abcabcababcc&quot;
Output: true
Explanation:
&quot;&quot; -&gt; &quot;abc&quot; -&gt; &quot;abcabc&quot; -&gt; &quot;abcabcabc&quot; -&gt; &quot;abcabcababcc&quot;
Thus, &quot;abcabcababcc&quot; is valid.

```

**Example 3:**

```

Input: s = &quot;abccba&quot;
Output: false
Explanation: It is impossible to get &quot;abccba&quot; using the operation.

```

 

**Constraints:**

	- `1 <= s.length <= 2 * 10^4`

	- `s` consists of letters `'a'`, `'b'`, and `'c'`

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/) | [Solutions](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/)
