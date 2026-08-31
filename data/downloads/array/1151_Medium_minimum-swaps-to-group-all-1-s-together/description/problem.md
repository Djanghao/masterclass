# [1151. Minimum Swaps to Group All 1's Together](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1272 | 18 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `tiktok`, `microsoft`, `expedia`

## Description

Given a binary array `data`, return the minimum number of swaps required to group all `1`&rsquo;s present in the array together in **any place** in the array.

 

**Example 1:**

```

Input: data = [1,0,1,0,1]
Output: 1
Explanation: There are 3 ways to group all 1&#39;s together:
[1,1,1,0,0] using 1 swap.
[0,1,1,1,0] using 2 swaps.
[0,0,1,1,1] using 1 swap.
The minimum is 1.

```

**Example 2:**

```

Input: data = [0,0,0,1,0]
Output: 0
Explanation: Since there is only one 1 in the array, no swaps are needed.

```

**Example 3:**

```

Input: data = [1,0,1,0,1,0,0,1,1,0,1]
Output: 3
Explanation: One possible solution that uses 3 swaps is [0,0,0,0,0,1,1,1,1,1,1].

```

 

**Constraints:**

	- `1 <= data.length <= 10^5`

	- `data[i]` is either `0` or `1`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/) | [Solutions](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/)
