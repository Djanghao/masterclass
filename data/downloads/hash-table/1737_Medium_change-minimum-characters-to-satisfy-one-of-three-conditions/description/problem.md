# [1737. Change Minimum Characters to Satisfy One of Three Conditions](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 335 | 346 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `google`

## Description

You are given two strings `a` and `b` that consist of lowercase letters. In one operation, you can change any character in `a` or `b` to **any lowercase letter**.

Your goal is to satisfy **one** of the following three conditions:

	- **Every** letter in `a` is **strictly less** than **every** letter in `b` in the alphabet.

	- **Every** letter in `b` is **strictly less** than **every** letter in `a` in the alphabet.

	- **Both** `a` and `b` consist of **only one** distinct letter.

Return *the **minimum** number of operations needed to achieve your goal.*

 

**Example 1:**

```

Input: a = &quot;aba&quot;, b = &quot;caa&quot;
Output: 2
Explanation: Consider the best way to make each condition true:
1) Change b to &quot;ccc&quot; in 2 operations, then every letter in a is less than every letter in b.
2) Change a to &quot;bbb&quot; and b to &quot;aaa&quot; in 3 operations, then every letter in b is less than every letter in a.
3) Change a to &quot;aaa&quot; and b to &quot;aaa&quot; in 2 operations, then a and b consist of one distinct letter.
The best way was done in 2 operations (either condition 1 or condition 3).

```

**Example 2:**

```

Input: a = &quot;dabadd&quot;, b = &quot;cda&quot;
Output: 3
Explanation: The best way is to make condition 1 true by changing b to &quot;eee&quot;.

```

 

**Constraints:**

	- `1 <= a.length, b.length <= 10^5`

	- `a` and `b` consist only of lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/) | [Solutions](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/)
