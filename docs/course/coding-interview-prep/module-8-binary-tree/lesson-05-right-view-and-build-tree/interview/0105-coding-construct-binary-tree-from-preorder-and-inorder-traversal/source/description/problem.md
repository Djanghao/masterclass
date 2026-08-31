# [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 16397 | 605 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`tree`](https://leetcode.com/tag/tree), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `amazon`, `google`, `microsoft`, `tiktok`, `bloomberg`, `facebook`, `uber`, `snowflake`

## Description

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return *the binary tree*.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

```

**Example 2:**

```

Input: preorder = [-1], inorder = [-1]
Output: [-1]

```

 

**Constraints:**

	- `1 <= preorder.length <= 3000`

	- `inorder.length == preorder.length`

	- `-3000 <= preorder[i], inorder[i] <= 3000`

	- `preorder` and `inorder` consist of **unique** values.

	- Each value of `inorder` also appears in `preorder`.

	- `preorder` is **guaranteed** to be the preorder traversal of the tree.

	- `inorder` is **guaranteed** to be the inorder traversal of the tree.

---

**Links:** [Submissions](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [Solutions](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
