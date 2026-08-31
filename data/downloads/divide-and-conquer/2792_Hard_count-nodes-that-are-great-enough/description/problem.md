# [2792. Count Nodes That Are Great Enough](https://leetcode.com/problems/count-nodes-that-are-great-enough/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 24 | 0 |

**Tags:** [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`binary-tree`](https://leetcode.com/tag/binary-tree)


## Description

You are given a `root` to a binary tree and an integer `k`. A node of this tree is called **great enough** if the followings hold:

	- Its subtree has **at least** `k` nodes.

	- Its value is greater than the value of **at least** `k` nodes in its subtree.

Return* the number of nodes in this tree that are great enough.*

The node `u` is in the **subtree** of the node `v`, if `u == v` or `v` is an ancestor of `u`.

 

**Example 1:**

```

Input: root = [7,6,5,4,3,2,1], k = 2
Output: 3
Explanation: Number the nodes from 1 to 7.
The values in the subtree of node 1: {1,2,3,4,5,6,7}. Since node.val == 7, there are 6 nodes having a smaller value than its value. So it&#39;s great enough.
The values in the subtree of node 2: {3,4,6}. Since node.val == 6, there are 2 nodes having a smaller value than its value. So it&#39;s great enough.
The values in the subtree of node 3: {1,2,5}. Since node.val == 5, there are 2 nodes having a smaller value than its value. So it&#39;s great enough.
It can be shown that other nodes are not great enough.
See the picture below for a better understanding.
```

![image](./images/0.png)

**Example 2:**

```

Input: root = [1,2,3], k = 1
Output: 0
Explanation: Number the nodes from 1 to 3.
The values in the subtree of node 1: {1,2,3}. Since node.val == 1, there are no nodes having a smaller value than its value. So it&#39;s not great enough.
The values in the subtree of node 2: {2}. Since node.val == 2, there are no nodes having a smaller value than its value. So it&#39;s not great enough.
The values in the subtree of node 3: {3}. Since node.val == 3, there are no nodes having a smaller value than its value. So it&#39;s not great enough.
See the picture below for a better understanding.
```

![image](./images/1.png)

**Example 3:**

```

Input: root = [3,2,2], k = 2
Output: 1
Explanation: Number the nodes from 1 to 3.
The values in the subtree of node 1: {2,2,3}. Since node.val == 3, there are 2 nodes having a smaller value than its value. So it&#39;s great enough.
The values in the subtree of node 2: {2}. Since node.val == 2, there are no nodes having a smaller value than its value. So it&#39;s not great enough.
The values in the subtree of node 3: {2}. Since node.val == 2, there are no nodes having a smaller value than its value. So it&#39;s not great enough.
See the picture below for a better understanding.
```

![image](./images/2.png)

 

**Constraints:**

	- The number of nodes in the tree is in the range `[1, 10^4]`. 

	- `1 <= Node.val <= 10^4`

	- `1 <= k <= 10`

---

**Links:** [Submissions](https://leetcode.com/problems/count-nodes-that-are-great-enough/) | [Solutions](https://leetcode.com/problems/count-nodes-that-are-great-enough/)
