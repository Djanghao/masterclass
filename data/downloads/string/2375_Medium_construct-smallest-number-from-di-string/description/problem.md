# [2375. Construct Smallest Number From DI String](https://leetcode.com/problems/construct-smallest-number-from-di-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1641 | 86 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `goldman-sachs`, `amazon`, `josh-technology`, `facebook`

## Description

You are given a **0-indexed** string `pattern` of length `n` consisting of the characters `'I'` meaning **increasing** and `'D'` meaning **decreasing**.

A **0-indexed** string `num` of length `n + 1` is created using the following conditions:

	- `num` consists of the digits `'1'` to `'9'`, where each digit is used **at most** once.

	- If `pattern[i] == 'I'`, then `num[i]  num[i + 1]`.

Return *the lexicographically **smallest** possible string *`num`* that meets the conditions.*

 

**Example 1:**

```

Input: pattern = &quot;IIIDIDDD&quot;
Output: &quot;123549876&quot;
Explanation:
At indices 0, 1, 2, and 4 we must have that num[i] &lt; num[i+1].
At indices 3, 5, 6, and 7 we must have that num[i] &gt; num[i+1].
Some possible values of num are &quot;245639871&quot;, &quot;135749862&quot;, and &quot;123849765&quot;.
It can be proven that &quot;123549876&quot; is the smallest possible num that meets the conditions.
Note that &quot;123414321&quot; is not possible because the digit &#39;1&#39; is used more than once.
```

**Example 2:**

```

Input: pattern = &quot;DDD&quot;
Output: &quot;4321&quot;
Explanation:
Some possible values of num are &quot;9876&quot;, &quot;7321&quot;, and &quot;8742&quot;.
It can be proven that &quot;4321&quot; is the smallest possible num that meets the conditions.

```

 

**Constraints:**

	- `1 <= pattern.length <= 8`

	- `pattern` consists of only the letters `'I'` and `'D'`.

---

**Links:** [Submissions](https://leetcode.com/problems/construct-smallest-number-from-di-string/) | [Solutions](https://leetcode.com/problems/construct-smallest-number-from-di-string/)
