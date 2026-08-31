# [1898. Maximum Number of Removable Characters](https://leetcode.com/problems/maximum-number-of-removable-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1046 | 137 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search)

**Companies:** `amazon`, `snowflake`, `alphonso`

## Description

You are given two strings `s` and `p` where `p` is a **subsequence **of `s`. You are also given a **distinct 0-indexed **integer array `removable` containing a subset of indices of `s` (`s` is also **0-indexed**).

You want to choose an integer `k` (`0 <= k <= removable.length`) such that, after removing `k` characters from `s` using the **first** `k` indices in `removable`, `p` is still a **subsequence** of `s`. More formally, you will mark the character at `s[removable[i]]` for each `0 <= i < k`, then remove all marked characters and check if `p` is still a subsequence.

Return *the **maximum** *`k`* you can choose such that *`p`* is still a **subsequence** of *`s`* after the removals*.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

 

**Example 1:**

```

Input: s = &quot;abcacb&quot;, p = &quot;ab&quot;, removable = [3,1,0]
Output: 2
Explanation: After removing the characters at indices 3 and 1, &quot;abcacb&quot; becomes &quot;accb&quot;.
&quot;ab&quot; is a subsequence of &quot;accb&quot;.
If we remove the characters at indices 3, 1, and 0, &quot;abcacb&quot; becomes &quot;ccb&quot;, and &quot;ab&quot; is no longer a subsequence.
Hence, the maximum k is 2.

```

**Example 2:**

```

Input: s = &quot;abcbddddd&quot;, p = &quot;abcd&quot;, removable = [3,2,1,4,5,6]
Output: 1
Explanation: After removing the character at index 3, &quot;abcbddddd&quot; becomes &quot;abcddddd&quot;.
&quot;abcd&quot; is a subsequence of &quot;abcddddd&quot;.

```

**Example 3:**

```

Input: s = &quot;abcab&quot;, p = &quot;abc&quot;, removable = [0,1,2,3,4]
Output: 0
Explanation: If you remove the first index in the array removable, &quot;abc&quot; is no longer a subsequence.

```

 

**Constraints:**

	- `1 <= p.length <= s.length <= 10^5`

	- `0 <= removable.length < s.length`

	- `0 <= removable[i] < s.length`

	- `p` is a **subsequence** of `s`.

	- `s` and `p` both consist of lowercase English letters.

	- The elements in `removable` are **distinct**.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-removable-characters/) | [Solutions](https://leetcode.com/problems/maximum-number-of-removable-characters/)
