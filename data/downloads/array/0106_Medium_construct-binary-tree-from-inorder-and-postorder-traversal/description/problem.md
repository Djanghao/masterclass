# [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 8595 | 152 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`tree`](https://leetcode.com/tag/tree), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `google`, `amazon`, `walmart-labs`, `microsoft`, `bloomberg`

## Description

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return *the binary tree*.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

```

**Example 2:**

```

Input: inorder = [-1], postorder = [-1]
Output: [-1]

```

 

**Constraints:**

	- `1 <= inorder.length <= 3000`

	- `postorder.length == inorder.length`

	- `-3000 <= inorder[i], postorder[i] <= 3000`

	- `inorder` and `postorder` consist of **unique** values.

	- Each value of `postorder` also appears in `inorder`.

	- `inorder` is **guaranteed** to be the inorder traversal of the tree.

	- `postorder` is **guaranteed** to be the postorder traversal of the tree.

---

**Links:** [Submissions](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | [Solutions](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
