# [845. Longest Mountain in Array](https://leetcode.com/problems/longest-mountain-in-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2988 | 91 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `ibm`, `google`, `oracle`, `sofi`, `goldman-sachs`, `faire`, `amazon`, `microsoft`, `tiktok`

## Description

You may recall that an array `arr` is a **mountain array** if and only if:

	- `arr.length >= 3`

	- There exists some index `i` (**0-indexed**) with `0 `arr[0]  arr[i + 1] > ... > arr[arr.length - 1]`

	
	

Given an integer array `arr`, return *the length of the longest subarray, which is a mountain*. Return `0` if there is no mountain subarray.

 

**Example 1:**

```

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

```

**Example 2:**

```

Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.

```

 

**Constraints:**

	- `1 <= arr.length <= 10^4`

	- `0 <= arr[i] <= 10^4`

 

**Follow up:**

	- Can you solve it using only one pass?

	- Can you solve it in `O(1)` space?

---

**Links:** [Submissions](https://leetcode.com/problems/longest-mountain-in-array/) | [Solutions](https://leetcode.com/problems/longest-mountain-in-array/)
