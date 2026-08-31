# [1433. Check If a String Can Break Another String](https://leetcode.com/problems/check-if-a-string-can-break-another-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 780 | 155 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)


## Description

Given two strings: `s1` and `s2` with the same size, check if some permutation of string `s1` can break some permutation of string `s2` or vice-versa. In other words `s2` can break `s1` or vice-versa.

A string `x` can break string `y` (both of size `n`) if `x[i] >= y[i]` (in alphabetical order) for all `i` between `0` and `n-1`.

 

**Example 1:**

```

Input: s1 = &quot;abc&quot;, s2 = &quot;xya&quot;
Output: true
Explanation: &quot;ayx&quot; is a permutation of s2=&quot;xya&quot; which can break to string &quot;abc&quot; which is a permutation of s1=&quot;abc&quot;.

```

**Example 2:**

```

Input: s1 = &quot;abe&quot;, s2 = &quot;acd&quot;
Output: false 
Explanation: All permutations for s1=&quot;abe&quot; are: &quot;abe&quot;, &quot;aeb&quot;, &quot;bae&quot;, &quot;bea&quot;, &quot;eab&quot; and &quot;eba&quot; and all permutation for s2=&quot;acd&quot; are: &quot;acd&quot;, &quot;adc&quot;, &quot;cad&quot;, &quot;cda&quot;, &quot;dac&quot; and &quot;dca&quot;. However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.

```

**Example 3:**

```

Input: s1 = &quot;leetcodee&quot;, s2 = &quot;interview&quot;
Output: true

```

 

**Constraints:**

	- `s1.length == n`

	- `s2.length == n`

	- `1 <= n <= 10^5`

	- All strings consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-a-string-can-break-another-string/) | [Solutions](https://leetcode.com/problems/check-if-a-string-can-break-another-string/)
