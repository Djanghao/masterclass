# [272. Closest Binary Search Tree Value II](https://leetcode.com/problems/closest-binary-search-tree-value-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1339 | 51 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`stack`](https://leetcode.com/tag/stack), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`binary-search-tree`](https://leetcode.com/tag/binary-search-tree), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `linkedin`, `amazon`, `facebook`, `google`

## Description

Given the `root` of a binary search tree, a `target` value, and an integer `k`, return *the *`k`* values in the BST that are closest to the* `target`. You may return the answer in **any order**.

You are **guaranteed** to have only one unique set of `k` values in the BST that are closest to the `target`.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: root = [4,2,5,1,3], target = 3.714286, k = 2
Output: [4,3]

```

**Example 2:**

```

Input: root = [1], target = 0.000000, k = 1
Output: [1]

```

 

**Constraints:**

	- The number of nodes in the tree is `n`.

	- `1 <= k <= n <= 10^4`.

	- `0 <= Node.val <= 10^9`

	- `-10^9 <= target <= 10^9`

 

**Follow up:** Assume that the BST is balanced. Could you solve it in less than `O(n)` runtime (where `n = total nodes`)?

---

**Links:** [Submissions](https://leetcode.com/problems/closest-binary-search-tree-value-ii/) | [Solutions](https://leetcode.com/problems/closest-binary-search-tree-value-ii/)
