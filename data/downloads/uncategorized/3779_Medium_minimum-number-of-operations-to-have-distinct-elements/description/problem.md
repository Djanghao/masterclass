# [3779. Minimum Number of Operations to Have Distinct Elements](https://leetcode.com/problems/minimum-number-of-operations-to-have-distinct-elements/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 24 | 1 |




## Description

You are given an integer array `nums`.

In one operation, you remove the **first three elements** of the current array. If there are fewer than three elements remaining, **all** remaining elements are removed.

Repeat this operation until the array is empty or contains no duplicate values.

Return an integer denoting the number of operations required.

 

**Example 1:**

**Input:** nums = [3,8,3,6,5,8]

**Output:** 1

**Explanation:**

In the first operation, we remove the first three elements. The remaining elements `[6, 5, 8]` are all distinct, so we stop. Only one operation is needed.

**Example 2:**

**Input:** nums = [2,2]

**Output:** 1

**Explanation:**

After one operation, the array becomes empty, which meets the stopping condition.

**Example 3:**

**Input:** nums = [4,3,5,1,2]

**Output:** 0

**Explanation:**

All elements in the array are distinct, therefore no operations are needed.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-operations-to-have-distinct-elements/) | [Solutions](https://leetcode.com/problems/minimum-number-of-operations-to-have-distinct-elements/)
