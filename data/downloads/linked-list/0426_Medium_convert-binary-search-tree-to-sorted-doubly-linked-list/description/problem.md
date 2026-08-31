# [426. Convert Binary Search Tree to Sorted Doubly Linked List](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2727 | 243 |

**Tags:** [`linked-list`](https://leetcode.com/tag/linked-list), [`stack`](https://leetcode.com/tag/stack), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`binary-search-tree`](https://leetcode.com/tag/binary-search-tree), [`binary-tree`](https://leetcode.com/tag/binary-tree), [`doubly-linked-list`](https://leetcode.com/tag/doubly-linked-list)

**Companies:** `facebook`, `tiktok`, `amazon`, `microsoft`, `oracle`, `nvidia`

## Description

Convert a **Binary Search Tree** to a sorted **Circular Doubly-Linked List** in place.

You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

We want to do the transformation **in place**. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.

 

**Example 1:**

![image](./images/0.png)

```

Input: root = [4,2,5,1,3]


Output: [1,2,3,4,5]

Explanation: The figure below shows the transformed BST. The solid line indicates the successor relationship, while the dashed line means the predecessor relationship.


```

**Example 2:**

```

Input: root = [2,1,3]
Output: [1,2,3]

```

 

**Constraints:**

	- The number of nodes in the tree is in the range `[0, 2000]`.

	- `-1000 <= Node.val <= 1000`

	- All the values of the tree are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) | [Solutions](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/)
