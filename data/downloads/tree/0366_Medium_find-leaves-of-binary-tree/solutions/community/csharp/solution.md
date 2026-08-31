# C# - [Made Simple] One Pass Solution

**Author:** TheSnappl
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/3991115/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/3991115/)

---

# Intuition and Approach
- The solution is one pass.
- The key idea here is that the leaf nodes should be level 0, and then through DFS we return increasing levels and pass them up through the recursion. The level indicates where the node value should be included in the return list.

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    
    List<IList<int>> returnList;
    
    public int Traverse(TreeNode node){
        if (node is null){
            return 0;
        }

        if (node.left is null && node.right is null){
            // Leaf node
            this.returnList[0].Add(node.val);
            return 1;
        }

        var level = Math.Max(Traverse(node.left), Traverse(node.right));

        if (level >= this.returnList.Count){
            this.returnList.Add(new List<int>());
        }

        this.returnList[level].Add(node.val);

        return level + 1;
    }

    public IList<IList<int>> FindLeaves(TreeNode root) {
        this.returnList = new List<IList<int>>();
        this.returnList.Add(new List<int>());
        _ = Traverse(root);
        return this.returnList;
    }
}
```