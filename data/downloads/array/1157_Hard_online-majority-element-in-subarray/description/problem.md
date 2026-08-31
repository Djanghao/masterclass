# [1157. Online Majority Element In Subarray](https://leetcode.com/problems/online-majority-element-in-subarray/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 655 | 65 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`design`](https://leetcode.com/tag/design), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree)

**Companies:** `nutanix`

## Description

Design a data structure that efficiently finds the **majority element** of a given subarray.

The **majority element** of a subarray is an element that occurs `threshold` times or more in the subarray.

Implementing the `MajorityChecker` class:

	- `MajorityChecker(int[] arr)` Initializes the instance of the class with the given array `arr`.

	- `int query(int left, int right, int threshold)` returns the element in the subarray `arr[left...right]` that occurs at least `threshold` times, or `-1` if no such element exists.

 

**Example 1:**

```

Input
[&quot;MajorityChecker&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;]
[[[1, 1, 2, 2, 1, 1]], [0, 5, 4], [0, 3, 3], [2, 3, 2]]
Output
[null, 1, -1, 2]

Explanation
MajorityChecker majorityChecker = new MajorityChecker([1, 1, 2, 2, 1, 1]);
majorityChecker.query(0, 5, 4); // return 1
majorityChecker.query(0, 3, 3); // return -1
majorityChecker.query(2, 3, 2); // return 2

```

 

**Constraints:**

	- `1  right - left + 1`

	- At most `10^4` calls will be made to `query`.

---

**Links:** [Submissions](https://leetcode.com/problems/online-majority-element-in-subarray/) | [Solutions](https://leetcode.com/problems/online-majority-element-in-subarray/)
