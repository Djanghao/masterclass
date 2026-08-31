# [1794. Count Pairs of Equal Substrings With Minimum Difference](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 48 | 62 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`

## Description

You are given two strings `firstString` and `secondString` that are **0-indexed** and consist only of lowercase English letters. Count the number of index quadruples `(i,j,a,b)` that satisfy the following conditions:

	- `0 <= i <= j < firstString.length`

	- `0 <= a <= b < secondString.length`

	- The substring of `firstString` that starts at the `i^th` character and ends at the `j^th` character (inclusive) is **equal** to the substring of `secondString` that starts at the `a^th` character and ends at the `b^th` character (inclusive).

	- `j - a` is the **minimum** possible value among all quadruples that satisfy the previous conditions.

Return *the **number** of such quadruples*.

 

**Example 1:**

```

Input: firstString = &quot;abcd&quot;, secondString = &quot;bccda&quot;
Output: 1
Explanation: The quadruple (0,0,4,4) is the only one that satisfies all the conditions and minimizes j - a.

```

**Example 2:**

```

Input: firstString = &quot;ab&quot;, secondString = &quot;cd&quot;
Output: 0
Explanation: There are no quadruples satisfying all the conditions.

```

 

**Constraints:**

	- `1 <= firstString.length, secondString.length <= 2 * 10^5`

	- Both strings consist only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/) | [Solutions](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/)
