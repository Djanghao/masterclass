# [298. Binary Tree Longest Consecutive Sequence](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1167 | 238 |

**Tags:** [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `tiktok`, `facebook`, `walmart-labs`, `google`

## Description

Given the `root` of a binary tree, return *the length of the longest **consecutive sequence path***.

A **consecutive sequence path** is a path where the values **increase by one** along the path.

Note that the path can start **at any node** in the tree, and you cannot go from a node to its parent in the path.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: root = [1,null,3,2,4,null,null,null,5]
Output: 3
Explanation: Longest consecutive sequence path is 3-4-5, so return 3.

```

**Example 2:**

![image](./images/1.jpg)
```

Input: root = [2,null,3,2,null,1]
Output: 2
Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.

```

 

**Constraints:**

	- The number of nodes in the tree is in the range `[1, 3 * 10^4]`.

	- `-3 * 10^4 <= Node.val <= 3 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/) | [Solutions](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/)
