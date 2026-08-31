# [2450. Number of Distinct Binary Strings After Applying Operations](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 39 | 9 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string)

**Companies:** `microsoft`

## Description

You are given a **binary** string `s` and a positive integer `k`.

You can apply the following operation on the string **any** number of times:

	- Choose any substring of size `k` from `s` and **flip** all its characters, that is, turn all `1`'s into `0`'s, and all `0`'s into `1`'s.

Return *the number of **distinct** strings you can obtain*. Since the answer may be too large, return it **modulo** `10^9 + 7`.

**Note** that:

	- A binary string is a string that consists **only** of the characters `0` and `1`.

	- A substring is a contiguous part of a string.

 

**Example 1:**

```

Input: s = &quot;1001&quot;, k = 3
Output: 4
Explanation: We can obtain the following strings:
- Applying no operation on the string gives s = &quot;1001&quot;.
- Applying one operation on the substring starting at index 0 gives s = &quot;0111&quot;.
- Applying one operation on the substring starting at index 1 gives s = &quot;1110&quot;.
- Applying one operation on both the substrings starting at indices 0 and 1 gives s = &quot;0000&quot;.
It can be shown that we cannot obtain any other string, so the answer is 4.
```

**Example 2:**

```

Input: s = &quot;10110&quot;, k = 5
Output: 2
Explanation: We can obtain the following strings:
- Applying no operation on the string gives s = &quot;10110&quot;.
- Applying one operation on the whole string gives s = &quot;01001&quot;.
It can be shown that we cannot obtain any other string, so the answer is 2.

```

 

**Constraints:**

	- `1 <= k <= s.length <= 10^5`

	- `s[i]` is either `0` or `1`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/) | [Solutions](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/)
