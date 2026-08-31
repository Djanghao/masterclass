# [1018. Binary Prefix Divisible By 5](https://leetcode.com/problems/binary-prefix-divisible-by-5/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1090 | 229 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)


## Description

You are given a binary array `nums` (**0-indexed**).

We define `x_i` as the number whose binary representation is the subarray `nums[0..i]` (from most-significant-bit to least-significant-bit).

	- For example, if `nums = [1,0,1]`, then `x_0 = 1`, `x_1 = 2`, and `x_2 = 5`.

Return *an array of booleans *`answer`* where *`answer[i]`* is *`true`* if *`x_i`* is divisible by *`5`.

 

**Example 1:**

```

Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.

```

**Example 2:**

```

Input: nums = [1,1,1]
Output: [false,false,false]

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `nums[i]` is either `0` or `1`.

---

**Links:** [Submissions](https://leetcode.com/problems/binary-prefix-divisible-by-5/) | [Solutions](https://leetcode.com/problems/binary-prefix-divisible-by-5/)
