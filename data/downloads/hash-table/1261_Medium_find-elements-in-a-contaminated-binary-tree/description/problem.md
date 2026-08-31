# [1261. Find Elements in a Contaminated Binary Tree](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1424 | 127 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`design`](https://leetcode.com/tag/design), [`binary-tree`](https://leetcode.com/tag/binary-tree)

**Companies:** `amazon`, `google`

## Description

Given a binary tree with the following rules:

	- `root.val == 0`

	- For any `treeNode`:
	
		If `treeNode.val` has a value `x` and `treeNode.left != null`, then `treeNode.left.val == 2 * x + 1`

		- If `treeNode.val` has a value `x` and `treeNode.right != null`, then `treeNode.right.val == 2 * x + 2`

	
	

Now the binary tree is contaminated, which means all `treeNode.val` have been changed to `-1`.

Implement the `FindElements` class:

	- `FindElements(TreeNode* root)` Initializes the object with a contaminated binary tree and recovers it.

	- `bool find(int target)` Returns `true` if the `target` value exists in the recovered binary tree.

 

**Example 1:**

![image](./images/0.jpg)
```

Input
[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;]
[[[-1,null,-1]],[1],[2]]
Output
[null,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1]); 
findElements.find(1); // return False 
findElements.find(2); // return True 
```

**Example 2:**

![image](./images/1.jpg)
```

Input
[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;]
[[[-1,-1,-1,-1,-1]],[1],[3],[5]]
Output
[null,true,true,false]
Explanation
FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
findElements.find(1); // return True
findElements.find(3); // return True
findElements.find(5); // return False
```

**Example 3:**

![image](./images/2.jpg)
```

Input
[&quot;FindElements&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;,&quot;find&quot;]
[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
Output
[null,true,false,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
findElements.find(2); // return True
findElements.find(3); // return False
findElements.find(4); // return False
findElements.find(5); // return True

```

 

**Constraints:**

	- `TreeNode.val == -1`

	- The height of the binary tree is less than or equal to `20`

	- The total number of nodes is between `[1, 10^4]`

	- Total calls of `find()` is between `[1, 10^4]`

	- `0 <= target <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/) | [Solutions](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/)
