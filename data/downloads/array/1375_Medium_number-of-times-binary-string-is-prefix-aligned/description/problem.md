# [1375. Number of Times Binary String Is Prefix-Aligned](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 965 | 138 |

**Tags:** [`array`](https://leetcode.com/tag/array)

**Companies:** `microsoft`

## Description

You have a **1-indexed** binary string of length `n` where all the bits are `0` initially. We will flip all the bits of this binary string (i.e., change them from `0` to `1`) one by one. You are given a **1-indexed** integer array `flips` where `flips[i]` indicates that the bit at index `flips[i]` will be flipped in the `i^th` step.

A binary string is **prefix-aligned** if, after the `i^th` step, all the bits in the **inclusive** range `[1, i]` are ones and all the other bits are zeros.

Return *the number of times the binary string is **prefix-aligned** during the flipping process*.

 

**Example 1:**

```

Input: flips = [3,2,4,1,5]
Output: 2
Explanation: The binary string is initially &quot;00000&quot;.
After applying step 1: The string becomes &quot;00100&quot;, which is not prefix-aligned.
After applying step 2: The string becomes &quot;01100&quot;, which is not prefix-aligned.
After applying step 3: The string becomes &quot;01110&quot;, which is not prefix-aligned.
After applying step 4: The string becomes &quot;11110&quot;, which is prefix-aligned.
After applying step 5: The string becomes &quot;11111&quot;, which is prefix-aligned.
We can see that the string was prefix-aligned 2 times, so we return 2.

```

**Example 2:**

```

Input: flips = [4,1,2,3]
Output: 1
Explanation: The binary string is initially &quot;0000&quot;.
After applying step 1: The string becomes &quot;0001&quot;, which is not prefix-aligned.
After applying step 2: The string becomes &quot;1001&quot;, which is not prefix-aligned.
After applying step 3: The string becomes &quot;1101&quot;, which is not prefix-aligned.
After applying step 4: The string becomes &quot;1111&quot;, which is prefix-aligned.
We can see that the string was prefix-aligned 1 time, so we return 1.

```

 

**Constraints:**

	- `n == flips.length`

	- `1 <= n <= 5 * 10^4`

	- `flips` is a permutation of the integers in the range `[1, n]`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/) | [Solutions](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/)
