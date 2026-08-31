# [1529. Minimum Suffix Flips](https://leetcode.com/problems/minimum-suffix-flips/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1064 | 50 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `microsoft`, `jpmorgan`, `amazon`

## Description

You are given a **0-indexed** binary string `target` of length `n`. You have another binary string `s` of length `n` that is initially set to all zeros. You want to make `s` equal to `target`.

In one operation, you can pick an index `i` where `0 <= i < n` and flip all bits in the **inclusive** range `[i, n - 1]`. Flip means changing `'0'` to `'1'` and `'1'` to `'0'`.

Return *the minimum number of operations needed to make *`s`* equal to *`target`.

 

**Example 1:**

```

Input: target = &quot;10111&quot;
Output: 3
Explanation: Initially, s = &quot;00000&quot;.
Choose index i = 2: &quot;00000&quot; -&gt; &quot;00111&quot;
Choose index i = 0: &quot;00111&quot; -&gt; &quot;11000&quot;
Choose index i = 1: &quot;11000&quot; -&gt; &quot;10111&quot;
We need at least 3 flip operations to form target.

```

**Example 2:**

```

Input: target = &quot;101&quot;
Output: 3
Explanation: Initially, s = &quot;000&quot;.
Choose index i = 0: &quot;000&quot; -&gt; &quot;111&quot;
Choose index i = 1: &quot;111&quot; -&gt; &quot;100&quot;
Choose index i = 2: &quot;100&quot; -&gt; &quot;101&quot;
We need at least 3 flip operations to form target.

```

**Example 3:**

```

Input: target = &quot;00000&quot;
Output: 0
Explanation: We do not need any operations since the initial s already equals target.

```

 

**Constraints:**

	- `n == target.length`

	- `1 <= n <= 10^5`

	- `target[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-suffix-flips/) | [Solutions](https://leetcode.com/problems/minimum-suffix-flips/)
