# [894. All Possible Full Binary Trees](https://leetcode.com/problems/all-possible-full-binary-trees/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5217 | 367 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`tree`](https://leetcode.com/tag/tree), [`recursion`](https://leetcode.com/tag/recursion), [`memoization`](https://leetcode.com/tag/memoization), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `salesforce`, `amazon`, `google`, `bloomberg`, `facebook`

## Description

Given an integer `n`, return *a list of all possible **full binary trees** with* `n` *nodes*. Each node of each tree in the answer must have `Node.val == 0`.

Each element of the answer is the root node of one possible tree. You may return the final list of trees in **any order**.

A **full binary tree** is a binary tree where each node has exactly `0` or `2` children.

 

**Example 1:**

![image](./images/0.png)
```

Input: n = 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]

```

**Example 2:**

```

Input: n = 3
Output: [[0,0,0]]

```

 

**Constraints:**

	- `1 <= n <= 20`

---

**Links:** [Submissions](https://leetcode.com/problems/all-possible-full-binary-trees/) | [Solutions](https://leetcode.com/problems/all-possible-full-binary-trees/)
