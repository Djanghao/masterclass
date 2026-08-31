# [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 18315 | 483 |

**Tags:** [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `facebook`, `amazon`, `linkedin`, `atlassian`, `microsoft`, `google`, `oracle`, `bloomberg`, `apple`, `yandex`, `tiktok`, `intuit`, `adobe`, `salesforce`, `ge-healthcare`, `mongodb`, `wix`

## Description

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: &ldquo;The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).&rdquo;

 

**Example 1:**

![image](./images/1.png)
```

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

```

**Example 2:**

![image](./images/1.png)
```

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

```

**Example 3:**

```

Input: root = [1,2], p = 1, q = 2
Output: 1

```

 

**Constraints:**

	- The number of nodes in the tree is in the range `[2, 10^5]`.

	- `-10^9 <= Node.val <= 10^9`

	- All `Node.val` are **unique**.

	- `p != q`

	- `p` and `q` will exist in the tree.

---

**Links:** [Submissions](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | [Solutions](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
