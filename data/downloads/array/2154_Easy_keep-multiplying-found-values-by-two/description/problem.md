# [2154. Keep Multiplying Found Values by Two](https://leetcode.com/problems/keep-multiplying-found-values-by-two/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1049 | 54 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`sorting`](https://leetcode.com/tag/sorting), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `google`, `goldman-sachs`

## Description

You are given an array of integers `nums`. You are also given an integer `original` which is the first number that needs to be searched for in `nums`.

You then do the following steps:

	- If `original` is found in `nums`, **multiply** it by two (i.e., set `original = 2 * original`).

	- Otherwise, **stop** the process.

	- **Repeat** this process with the new number as long as you keep finding the number.

Return *the **final** value of *`original`.

 

**Example 1:**

```

Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.

```

**Example 2:**

```

Input: nums = [2,7,9], original = 4
Output: 4
Explanation:
- 4 is not found in nums. Thus, 4 is returned.

```

 

**Constraints:**

	- `1 <= nums.length <= 1000`

	- `1 <= nums[i], original <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/keep-multiplying-found-values-by-two/) | [Solutions](https://leetcode.com/problems/keep-multiplying-found-values-by-two/)
