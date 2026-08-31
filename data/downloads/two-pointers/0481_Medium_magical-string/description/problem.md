# [481. Magical String](https://leetcode.com/problems/magical-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 368 | 1394 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `amazon`

## Description

A magical string `s` consists of only `'1'` and `'2'` and obeys the following rule:

	- Concatenating the sequence of lengths of its consecutive groups of identical characters `'1'` and `'2'` generates the string `s` itself.

The first few elements of `s` is `s = "1221121221221121122&hellip;&hellip;"`. If we group the consecutive `1`'s and `2`'s in `s`, it will be `"1 22 11 2 1 22 1 22 11 2 11 22 ......"` and counting the occurrences of `1`'s or `2`'s in each group yields the sequence `"1 2 2 1 1 2 1 2 2 1 2 2 ......"`.

You can see that concatenating the occurrence sequence gives us `s` itself.

Given an integer `n`, return the number of `1`'s in the first `n` number in the magical string `s`.

 

**Example 1:**

```

Input: n = 6
Output: 3
Explanation: The first 6 elements of magical string s is &quot;122112&quot; and it contains three 1&#39;s, so return 3.

```

**Example 2:**

```

Input: n = 1
Output: 1

```

 

**Constraints:**

	- `1 <= n <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/magical-string/) | [Solutions](https://leetcode.com/problems/magical-string/)
