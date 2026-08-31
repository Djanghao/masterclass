# [1671. Minimum Number of Removals to Make Mountain Array](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2259 | 41 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`, `facebook`, `paypal`, `microsoft`

## Description

You may recall that an array `arr` is a **mountain array** if and only if:

	- `arr.length >= 3`

	- There exists some index `i` (**0-indexed**) with `0 `arr[0]  arr[i + 1] > ... > arr[arr.length - 1]`

	
	

Given an integer array `nums`​​​, return *the **minimum** number of elements to remove to make *`nums​​​`* **a **mountain array**.*

 

**Example 1:**

```

Input: nums = [1,3,1]
Output: 0
Explanation: The array itself is a mountain array so we do not need to remove any elements.

```

**Example 2:**

```

Input: nums = [2,1,1,5,6,2,3,1]
Output: 3
Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].

```

 

**Constraints:**

	- `3 <= nums.length <= 1000`

	- `1 <= nums[i] <= 10^9`

	- It is guaranteed that you can make a mountain array out of `nums`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/) | [Solutions](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/)
