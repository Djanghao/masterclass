# [397. Integer Replacement](https://leetcode.com/problems/integer-replacement/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1412 | 484 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`memoization`](https://leetcode.com/tag/memoization)

**Companies:** `google`, `amazon`, `baidu`

## Description

Given a positive integer `n`, you can apply one of the following operations:

	- If `n` is even, replace `n` with `n / 2`.

	- If `n` is odd, replace `n` with either `n + 1` or `n - 1`.

Return *the minimum number of operations needed for* `n` *to become* `1`.

 

**Example 1:**

```

Input: n = 8
Output: 3
Explanation: 8 -&gt; 4 -&gt; 2 -&gt; 1

```

**Example 2:**

```

Input: n = 7
Output: 4
Explanation: 7 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1
or 7 -&gt; 6 -&gt; 3 -&gt; 2 -&gt; 1

```

**Example 3:**

```

Input: n = 4
Output: 2

```

 

**Constraints:**

	- `1 <= n <= 2^31 - 1`

---

**Links:** [Submissions](https://leetcode.com/problems/integer-replacement/) | [Solutions](https://leetcode.com/problems/integer-replacement/)
