# [2311. Longest Binary Subsequence Less Than or Equal to K](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1140 | 79 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy), [`memoization`](https://leetcode.com/tag/memoization)

**Companies:** `google`

## Description

You are given a binary string `s` and a positive integer `k`.

Return *the length of the **longest** subsequence of *`s`* that makes up a **binary** number less than or equal to* `k`.

Note:

	- The subsequence can contain **leading zeroes**.

	- The empty string is considered to be equal to `0`.

	- A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

 

**Example 1:**

```

Input: s = &quot;1001010&quot;, k = 5
Output: 5
Explanation: The longest subsequence of s that makes up a binary number less than or equal to 5 is &quot;00010&quot;, as this number is equal to 2 in decimal.
Note that &quot;00100&quot; and &quot;00101&quot; are also possible, which are equal to 4 and 5 in decimal, respectively.
The length of this subsequence is 5, so 5 is returned.

```

**Example 2:**

```

Input: s = &quot;00101001&quot;, k = 1
Output: 6
Explanation: &quot;000001&quot; is the longest subsequence of s that makes up a binary number less than or equal to 1, as this number is equal to 1 in decimal.
The length of this subsequence is 6, so 6 is returned.

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s[i]` is either `'0'` or `'1'`.

	- `1 <= k <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/) | [Solutions](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/)
