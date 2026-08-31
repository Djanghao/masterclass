# [1026. Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5076 | 170 |

**Tags:** [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `josh-technology`, `facebook`, `amazon`, `epam-systems`

## Description

Given the `root` of a binary tree, find the maximum value `v` for which there exist **different** nodes `a` and `b` where `v = |a.val - b.val|` and `a` is an ancestor of `b`.

A node `a` is an ancestor of `b` if either: any child of `a` is equal to `b` or any child of `a` is an ancestor of `b`.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
```

**Example 2:**

![image](./images/1.jpg)
```

Input: root = [1,null,2,null,0,3]
Output: 3

```

 

**Constraints:**

	- The number of nodes in the tree is in the range `[2, 5000]`.

	- `0 <= Node.val <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/) | [Solutions](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)
