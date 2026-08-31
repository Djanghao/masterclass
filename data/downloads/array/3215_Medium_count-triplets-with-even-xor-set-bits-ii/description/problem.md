# [3215. Count Triplets with Even XOR Set Bits II](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 16 | 3 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `amazon`

## Description

Given three integer arrays `a`, `b`, and `c`, return the number of triplets `(a[i], b[j], c[k])`, such that the bitwise `XOR` between the elements of each triplet has an **even** number of set bits.

 

**Example 1:**

**Input:** a = [1], b = [2], c = [3]

**Output:** 1

**Explanation:**

The only triplet is `(a[0], b[0], c[0])` and their `XOR` is: `1 XOR 2 XOR 3 = 00_2`.

**Example 2:**

**Input:** a = [1,1], b = [2,3], c = [1,5]

**Output:** 4

**Explanation:**

Consider these four triplets:

	- `(a[0], b[1], c[0])`: `1 XOR 3 XOR 1 = 011_2`

	- `(a[1], b[1], c[0])`: `1 XOR 3 XOR 1 = 011_2`

	- `(a[0], b[0], c[1])`: `1 XOR 2 XOR 5 = 110_2`

	- `(a[1], b[0], c[1])`: `1 XOR 2 XOR 5 = 110_2`

 

**Constraints:**

	- `1 <= a.length, b.length, c.length <= 10^5`

	- `0 <= a[i], b[i], c[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/) | [Solutions](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/)
