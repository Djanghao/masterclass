# [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 13440 | 596 |

**Tags:** [`linked-list`](https://leetcode.com/tag/linked-list), [`stack`](https://leetcode.com/tag/stack), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `google`, `facebook`, `amazon`, `bloomberg`, `microsoft`, `oracle`, `yahoo`, `anduril`

## Description

Given the `root` of a binary tree, flatten the tree into a "linked list":

	- The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.

	- The "linked list" should be in the same order as a **pre-order**** traversal** of the binary tree.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

```

**Example 2:**

```

Input: root = []
Output: []

```

**Example 3:**

```

Input: root = [0]
Output: [0]

```

 

**Constraints:**

	- The number of nodes in the tree is in the range `[0, 2000]`.

	- `-100 <= Node.val <= 100`

 

**Follow up:** Can you flatten the tree in-place (with `O(1)` extra space)?

---

**Links:** [Submissions](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | [Solutions](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
