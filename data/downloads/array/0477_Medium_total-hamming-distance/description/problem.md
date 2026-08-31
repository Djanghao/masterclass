# [477. Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2288 | 95 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `facebook`, `apple`, `microsoft`

## Description

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given an integer array `nums`, return *the sum of **Hamming distances** between all the pairs of the integers in* `nums`.

 

**Example 1:**

```

Input: nums = [4,14,2]
Output: 6
Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

```

**Example 2:**

```

Input: nums = [4,14,4]
Output: 4

```

 

**Constraints:**

	- `1 <= nums.length <= 10^4`

	- `0 <= nums[i] <= 10^9`

	- The answer for the given input will fit in a **32-bit** integer.

---

**Links:** [Submissions](https://leetcode.com/problems/total-hamming-distance/) | [Solutions](https://leetcode.com/problems/total-hamming-distance/)
