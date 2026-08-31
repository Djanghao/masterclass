# [978. Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2092 | 255 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`sliding-window`](https://leetcode.com/tag/sliding-window)


## Description

Given an integer array `arr`, return *the length of a maximum size turbulent subarray of* `arr`.

A subarray is **turbulent** if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray `[arr[i], arr[i + 1], ..., arr[j]]` of `arr` is said to be turbulent if and only if:

	- For `i `arr[k] > arr[k + 1]` when `k` is odd, and

		- `arr[k] 
	- Or, for `i `arr[k] > arr[k + 1]` when `k` is even, and

		- `arr[k] 

 

**Example 1:**

```

Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] &gt; arr[2] &lt; arr[3] &gt; arr[4] &lt; arr[5]

```

**Example 2:**

```

Input: arr = [4,8,12,16]
Output: 2

```

**Example 3:**

```

Input: arr = [100]
Output: 1

```

 

**Constraints:**

	- `1 <= arr.length <= 4 * 10^4`

	- `0 <= arr[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/longest-turbulent-subarray/) | [Solutions](https://leetcode.com/problems/longest-turbulent-subarray/)
