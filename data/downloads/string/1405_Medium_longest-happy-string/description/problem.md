# [1405. Longest Happy String](https://leetcode.com/problems/longest-happy-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2770 | 319 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)

**Companies:** `tiktok`, `amazon`, `microsoft`, `google`, `rakuten`, `capgemini`, `wayfair`

## Description

A string `s` is called **happy** if it satisfies the following conditions:

	- `s` only contains the letters `'a'`, `'b'`, and `'c'`.

	- `s` does not contain any of `"aaa"`, `"bbb"`, or `"ccc"` as a substring.

	- `s` contains **at most** `a` occurrences of the letter `'a'`.

	- `s` contains **at most** `b` occurrences of the letter `'b'`.

	- `s` contains **at most** `c` occurrences of the letter `'c'`.

Given three integers `a`, `b`, and `c`, return *the **longest possible happy **string*. If there are multiple longest happy strings, return *any of them*. If there is no such string, return *the empty string *`""`.

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: a = 1, b = 1, c = 7
Output: &quot;ccaccbcc&quot;
Explanation: &quot;ccbccacc&quot; would also be a correct answer.

```

**Example 2:**

```

Input: a = 7, b = 1, c = 0
Output: &quot;aabaa&quot;
Explanation: It is the only correct answer in this case.

```

 

**Constraints:**

	- `0  0`

---

**Links:** [Submissions](https://leetcode.com/problems/longest-happy-string/) | [Solutions](https://leetcode.com/problems/longest-happy-string/)
