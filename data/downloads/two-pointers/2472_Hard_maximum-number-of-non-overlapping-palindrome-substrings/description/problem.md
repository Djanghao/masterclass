# [2472. Maximum Number of Non-overlapping Palindrome Substrings](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 497 | 10 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `microsoft`, `oracle`, `sofi`, `salesforce`, `linkedin`

## Description

You are given a string `s` and a **positive** integer `k`.

Select a set of **non-overlapping** substrings from the string `s` that satisfy the following conditions:

	- The **length** of each substring is **at least** `k`.

	- Each substring is a **palindrome**.

Return *the **maximum** number of substrings in an optimal selection*.

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;abaccdbbd&quot;, k = 3
Output: 2
Explanation: We can select the substrings underlined in s = &quot;abaccdbbd&quot;. Both &quot;aba&quot; and &quot;dbbd&quot; are palindromes and have a length of at least k = 3.
It can be shown that we cannot find a selection with more than two valid substrings.

```

**Example 2:**

```

Input: s = &quot;adbcda&quot;, k = 2
Output: 0
Explanation: There is no palindrome substring of length at least 2 in the string.

```

 

**Constraints:**

	- `1 <= k <= s.length <= 2000`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/) | [Solutions](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/)
