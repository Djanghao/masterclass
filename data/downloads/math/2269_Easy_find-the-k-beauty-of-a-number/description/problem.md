# [2269. Find the K-Beauty of a Number](https://leetcode.com/problems/find-the-k-beauty-of-a-number/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 718 | 47 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `quora`, `postmates`

## Description

The **k-beauty** of an integer `num` is defined as the number of **substrings** of `num` when it is read as a string that meet the following conditions:

	- It has a length of `k`.

	- It is a divisor of `num`.

Given integers `num` and `k`, return *the k-beauty of *`num`.

Note:

	- **Leading zeros** are allowed.

	- `0` is not a divisor of any value.

A **substring** is a contiguous sequence of characters in a string.

 

**Example 1:**

```

Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- &quot;24&quot; from &quot;240&quot;: 24 is a divisor of 240.
- &quot;40&quot; from &quot;240&quot;: 40 is a divisor of 240.
Therefore, the k-beauty is 2.

```

**Example 2:**

```

Input: num = 430043, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- &quot;43&quot; from &quot;430043&quot;: 43 is a divisor of 430043.
- &quot;30&quot; from &quot;430043&quot;: 30 is not a divisor of 430043.
- &quot;00&quot; from &quot;430043&quot;: 0 is not a divisor of 430043.
- &quot;04&quot; from &quot;430043&quot;: 4 is not a divisor of 430043.
- &quot;43&quot; from &quot;430043&quot;: 43 is a divisor of 430043.
Therefore, the k-beauty is 2.

```

 

**Constraints:**

	- `1 <= num <= 10^9`

	- `1 <= k <= num.length` (taking `num` as a string)

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-k-beauty-of-a-number/) | [Solutions](https://leetcode.com/problems/find-the-k-beauty-of-a-number/)
