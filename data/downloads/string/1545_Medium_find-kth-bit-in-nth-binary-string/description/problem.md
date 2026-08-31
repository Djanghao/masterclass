# [1545. Find Kth Bit in Nth Binary String](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1512 | 96 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`recursion`](https://leetcode.com/tag/recursion), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `microsoft`, `facebook`, `amazon`

## Description

Given two positive integers `n` and `k`, the binary string `S_n` is formed as follows:

	- `S_1 = "0"`

	- `S_i = S_i - 1 + "1" + reverse(invert(S_i - 1))` for `i > 1`

Where `+` denotes the concatenation operation, `reverse(x)` returns the reversed string `x`, and `invert(x)` inverts all the bits in `x` (`0` changes to `1` and `1` changes to `0`).

For example, the first four strings in the above sequence are:

	- `S_1 = "0"`

	- `S_2 = "011"`

	- `S_3 = "0111001"`

	- `S_4 = "011100110110001"`

Return *the* `k^th` *bit* *in* `S_n`. It is guaranteed that `k` is valid for the given `n`.

 

**Example 1:**

```

Input: n = 3, k = 1
Output: &quot;0&quot;
Explanation: S3 is &quot;0111001&quot;.
The 1st bit is &quot;0&quot;.

```

**Example 2:**

```

Input: n = 4, k = 11
Output: &quot;1&quot;
Explanation: S4 is &quot;011100110110001&quot;.
The 11th bit is &quot;1&quot;.

```

 

**Constraints:**

	- `1 <= n <= 20`

	- `1 <= k <= 2^n - 1`

---

**Links:** [Submissions](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/) | [Solutions](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/)
