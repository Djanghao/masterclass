# [3595. Once Twice](https://leetcode.com/problems/once-twice/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 8 | 2 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)


## Description

You are given an integer array `nums`. In this array:

	- 
	
Exactly one element appears **once**.

	

	- 
	
Exactly one element appears **twice**.

	

	- 
	
All other elements appear **exactly three times**.

	

Return an integer array of length 2, where the first element is the one that appears **once**, and the second is the one that appears **twice**.

Your solution must run in **O(n)** time and **O(1)** space.

 

**Example 1:**

**Input:** nums = [2,2,3,2,5,5,5,7,7]

**Output:** [3,7]

**Explanation:**

The element 3 appears once, and the element 7 appears twice. The remaining elements each appear three times.

**Example 2:**

**Input:** nums = [4,4,6,4,9,9,9,6,8]

**Output:** [8,6]

**Explanation:**

The element 8 appears once, and the element 6 appears twice. The remaining elements each appear three times.

 

**Constraints:**

	- `3 <= nums.length <= 10^5`

	- `-2^31 <= nums[i] <= 2^31 - 1`

	- `nums.length` is a multiple of 3.

	- Exactly one element appears once, one element appears twice, and all other elements appear three times.

---

**Links:** [Submissions](https://leetcode.com/problems/once-twice/) | [Solutions](https://leetcode.com/problems/once-twice/)
