# [2565. Subsequence With the Minimum Score](https://leetcode.com/problems/subsequence-with-the-minimum-score/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 402 | 7 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search)

**Companies:** `doordash`

## Description

You are given two strings `s` and `t`.

You are allowed to remove any number of characters from the string `t`.

The score of the string is `0` if no characters are removed from the string `t`, otherwise:

	- Let `left` be the minimum index among all removed characters.

	- Let `right` be the maximum index among all removed characters.

Then the score of the string is `right - left + 1`.

Return *the minimum possible score to make *`t`* a subsequence of *`s`*.*

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

 

**Example 1:**

```

Input: s = &quot;abacaba&quot;, t = &quot;bzaa&quot;
Output: 1
Explanation: In this example, we remove the character &quot;z&quot; at index 1 (0-indexed).
The string t becomes &quot;baa&quot; which is a subsequence of the string &quot;abacaba&quot; and the score is 1 - 1 + 1 = 1.
It can be proven that 1 is the minimum score that we can achieve.

```

**Example 2:**

```

Input: s = &quot;cde&quot;, t = &quot;xyz&quot;
Output: 3
Explanation: In this example, we remove characters &quot;x&quot;, &quot;y&quot; and &quot;z&quot; at indices 0, 1, and 2 (0-indexed).
The string t becomes &quot;&quot; which is a subsequence of the string &quot;cde&quot; and the score is 2 - 0 + 1 = 3.
It can be proven that 3 is the minimum score that we can achieve.

```

 

**Constraints:**

	- `1 <= s.length, t.length <= 10^5`

	- `s` and `t` consist of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/subsequence-with-the-minimum-score/) | [Solutions](https://leetcode.com/problems/subsequence-with-the-minimum-score/)
