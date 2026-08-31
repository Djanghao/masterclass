# [2220. Minimum Bit Flips to Convert Number](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1560 | 36 |

**Tags:** [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `google`, `bloomberg`, `microsoft`, `ibm`, `persistent-systems`

## Description

A **bit flip** of a number `x` is choosing a bit in the binary representation of `x` and **flipping** it from either `0` to `1` or `1` to `0`.

	- For example, for `x = 7`, the binary representation is `111` and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get `110`, flip the second bit from the right to get `101`, flip the fifth bit from the right (a leading zero) to get `10111`, etc.

Given two integers `start` and `goal`, return* the **minimum** number of **bit flips** to convert *`start`* to *`goal`.

 

**Example 1:**

```

Input: start = 10, goal = 7
Output: 3
Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 1010 -&gt; 1011.
- Flip the third bit from the right: 1011 -&gt; 1111.
- Flip the fourth bit from the right: 1111 -&gt; 0111.
It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
```

**Example 2:**

```

Input: start = 3, goal = 4
Output: 3
Explanation: The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps:
- Flip the first bit from the right: 011 -&gt; 010.
- Flip the second bit from the right: 010 -&gt; 000.
- Flip the third bit from the right: 000 -&gt; 100.
It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.

```

 

**Constraints:**

	- `0 461: Hamming Distance.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/) | [Solutions](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/)
