# [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 8915 | 882 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)

**Companies:** `amazon`, `yandex`, `facebook`, `google`, `doordash`, `flipkart`, `linkedin`, `apple`, `coupang`, `microsoft`, `uber`, `bloomberg`, `adobe`, `tiktok`

## Description

Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

An integer `a` is closer to `x` than an integer `b` if:

	- `|a - x| < |b - x|`, or

	- `|a - x| == |b - x|` and `a < b`

 

**Example 1:**

**Input:** arr = [1,2,3,4,5], k = 4, x = 3

**Output:** [1,2,3,4]

**Example 2:**

**Input:** arr = [1,1,2,3,4,5], k = 4, x = -1

**Output:** [1,1,2,3]

 

**Constraints:**

	- `1 <= k <= arr.length`

	- `1 <= arr.length <= 10^4`

	- `arr` is sorted in **ascending** order.

	- `-10^4 <= arr[i], x <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/find-k-closest-elements/) | [Solutions](https://leetcode.com/problems/find-k-closest-elements/)
