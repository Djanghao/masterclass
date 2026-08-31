# [1493. Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4722 | 108 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `yandex`, `google`, `facebook`, `amazon`, `microsoft`

## Description

Given a binary array `nums`, you should delete one element from it.

Return *the size of the longest non-empty subarray containing only *`1`*'s in the resulting array*. Return `0` if there is no such subarray.

 

**Example 1:**

```

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1&#39;s.

```

**Example 2:**

```

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1&#39;s is [1,1,1,1,1].

```

**Example 3:**

```

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `nums[i]` is either `0` or `1`.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) | [Solutions](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)
