# [1246. Palindrome Removal](https://leetcode.com/problems/palindrome-removal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 315 | 14 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `microsoft`

## Description

You are given an integer array `arr`.

In one move, you can select a **palindromic** subarray `arr[i], arr[i + 1], ..., arr[j]` where `i <= j`, and remove that subarray from the given array. Note that after removing a subarray, the elements on the left and on the right of that subarray move to fill the gap left by the removal.

Return *the minimum number of moves needed to remove all numbers from the array*.

 

**Example 1:**

```

Input: arr = [1,2]
Output: 2

```

**Example 2:**

```

Input: arr = [1,3,4,1,5]
Output: 3
Explanation: Remove [4] then remove [1,3,1] then remove [5].

```

 

**Constraints:**

	- `1 <= arr.length <= 100`

	- `1 <= arr[i] <= 20`

---

**Links:** [Submissions](https://leetcode.com/problems/palindrome-removal/) | [Solutions](https://leetcode.com/problems/palindrome-removal/)
