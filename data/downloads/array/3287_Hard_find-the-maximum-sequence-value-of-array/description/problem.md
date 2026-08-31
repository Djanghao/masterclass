# [3287. Find the Maximum Sequence Value of Array](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 88 | 9 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `google`

## Description

You are given an integer array `nums` and a **positive** integer `k`.

The **value** of a sequence `seq` of size `2 * x` is defined as:

	- `(seq[0] OR seq[1] OR ... OR seq[x - 1]) XOR (seq[x] OR seq[x + 1] OR ... OR seq[2 * x - 1])`.

Return the **maximum** **value** of any subsequence of `nums` having size `2 * k`.

 

**Example 1:**

**Input:** nums = [2,6,7], k = 1

**Output:** 5

**Explanation:**

The subsequence `[2, 7]` has the maximum value of `2 XOR 7 = 5`.

**Example 2:**

**Input:** nums = [4,2,5,6,7], k = 2

**Output:** 2

**Explanation:**

The subsequence `[4, 5, 6, 7]` has the maximum value of `(4 OR 5) XOR (6 OR 7) = 2`.

 

**Constraints:**

	- `2 <= nums.length <= 400`

	- `1 <= nums[i] < 2^7`

	- `1 <= k <= nums.length / 2`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/) | [Solutions](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/)
