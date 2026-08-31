# [3064. Guess the Number Using Bitwise Questions I](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 12 | 11 |

**Tags:** [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`interactive`](https://leetcode.com/tag/interactive)


## Description

There is a number `n` that you have to find.

There is also a pre-defined API `int commonSetBits(int num)`, which returns the number of bits where both `n` and `num` are `1` in that position of their binary representation. In other words, it returns the number of set bits in `n & num`, where `&` is the bitwise `AND` operator.

Return *the number* `n`.

 

**Example 1: **

**Input: **  n = 31 

**Output: **  31 

**Explanation: ** It can be proven that it's possible to find `31` using the provided API.

**Example 2: **

**Input: **  n = 33 

**Output: **  33 

**Explanation: ** It can be proven that it's possible to find `33` using the provided API.

 

**Constraints:**

	- `1 <= n <= 2^30 - 1`

	- `0 <= num <= 2^30 - 1`

	- If you ask for some `num` out of the given range, the output wouldn't be reliable.

---

**Links:** [Submissions](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/) | [Solutions](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/)
