# [3416. Subsequences with a Unique Middle Mode II](https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2 | 2 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`combinatorics`](https://leetcode.com/tag/combinatorics)


## Description

Given an integer array `nums`, find the number of subsequences of size 5 of `nums` with a **unique middle mode**.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

A **mode** of a sequence of numbers is defined as the element that appears the **maximum** number of times in the sequence.

A sequence of numbers contains a** unique mode** if it has only one mode.

A sequence of numbers `seq` of size 5 contains a **unique middle mode** if the *middle element* (`seq[2]`) is a **unique mode**.

 

**Example 1:**

**Input:** nums = [1,1,1,1,1,1]

**Output:** 6

**Explanation:**

`[1, 1, 1, 1, 1]` is the only subsequence of size 5 that can be formed from this list, and it has a unique middle mode of 1.

**Example 2:**

**Input:** nums = [1,2,2,3,3,4]

**Output:** 4

**Explanation:**

`[1, 2, 2, 3, 4]` and `[1, 2, 3, 3, 4]` have unique middle modes because the number at index 2 has the greatest frequency in the subsequence. `[1, 2, 2, 3, 3]` does not have a unique middle mode because 2 and 3 both appear twice in the subsequence.

**Example 3:**

**Input:** nums = [0,1,2,3,4,5,6,7,8]

**Output:** 0

**Explanation:**

There does not exist a subsequence of length 5 with a unique middle mode.

 

**Constraints:**

	- `5 <= nums.length <= 10^5`

	- `-10^9 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-ii/) | [Solutions](https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-ii/)
