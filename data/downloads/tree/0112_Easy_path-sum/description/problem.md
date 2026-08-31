# [112. Path Sum](https://leetcode.com/problems/path-sum/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 10515 | 1203 |

**Tags:** [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `google`, `amazon`, `microsoft`, `facebook`, `bloomberg`, `goldman-sachs`, `tiktok`

## Description

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

```

**Example 2:**

![image](./images/1.jpg)
```

Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There are two root-to-leaf paths in the tree:
(1 --&gt; 2): The sum is 3.
(1 --&gt; 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

```

**Example 3:**

```

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.

```

 

**Constraints:**

	- The number of nodes in the tree is in the range `[0, 5000]`.

	- `-1000 <= Node.val <= 1000`

	- `-1000 <= targetSum <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/path-sum/) | [Solutions](https://leetcode.com/problems/path-sum/)
