# [2096. Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3226 | 168 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `databricks`, `amazon`, `tiktok`, `snowflake`, `google`

## Description

You are given the `root` of a **binary tree** with `n` nodes. Each node is uniquely assigned a value from `1` to `n`. You are also given an integer `startValue` representing the value of the start node `s`, and a different integer `destValue` representing the value of the destination node `t`.

Find the **shortest path** starting from node `s` and ending at node `t`. Generate step-by-step directions of such path as a string consisting of only the **uppercase** letters `'L'`, `'R'`, and `'U'`. Each letter indicates a specific direction:

	- `'L'` means to go from a node to its **left child** node.

	- `'R'` means to go from a node to its **right child** node.

	- `'U'` means to go from a node to its **parent** node.

Return *the step-by-step directions of the **shortest path** from node *`s`* to node* `t`.

 

**Example 1:**

![image](./images/0.png)
```

Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: &quot;UURL&quot;
Explanation: The shortest path is: 3 &rarr; 1 &rarr; 5 &rarr; 2 &rarr; 6.

```

**Example 2:**

![image](./images/1.png)
```

Input: root = [2,1], startValue = 2, destValue = 1
Output: &quot;L&quot;
Explanation: The shortest path is: 2 &rarr; 1.

```

 

**Constraints:**

	- The number of nodes in the tree is `n`.

	- `2 <= n <= 10^5`

	- `1 <= Node.val <= n`

	- All the values in the tree are **unique**.

	- `1 <= startValue, destValue <= n`

	- `startValue != destValue`

---

**Links:** [Submissions](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) | [Solutions](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)
