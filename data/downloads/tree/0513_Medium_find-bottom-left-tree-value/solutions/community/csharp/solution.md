# C# - BFS | Backwards | Beats 90%

**Author:** ansche
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792075/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792075/)

---

# Intuition
Processing a tree in BFS is usually done left to right; however, if we reverse that, then the last node we process will hold the answer. 

# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$

# Code
```
public class Solution {
    public int FindBottomLeftValue(TreeNode root) {
        
		var bfs = new Queue<TreeNode>();
		bfs.Enqueue(root);

		while (bfs.Count > 0)
		{
            root = bfs.Dequeue();

            if (root.right != null) bfs.Enqueue(root.right);
            if (root.left != null) bfs.Enqueue(root.left);
		}
        
		return root.val;
    }
}
```