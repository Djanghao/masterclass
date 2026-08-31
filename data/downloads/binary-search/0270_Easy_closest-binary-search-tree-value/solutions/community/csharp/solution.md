# c# simple solution

**Author:** ChewManDo
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/5782929/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/5782929/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
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
    int smallest = 0;
    double diff = 0;

    public int ClosestValue(TreeNode root, double target) {
        //approach: compare target to root val, 
        // if target > root.val : search right
        // if target < root.val : search left
        // track difference between target and root.val: return the node w/ smallest difference found
        diff = int.MaxValue;
        smallest = int.MaxValue;
        dfs(root, target);

        return smallest;
    }

    public void dfs(TreeNode root, double target){
        if( root == null){
            return;
        }

        var newDiff = Math.Abs(target - root.val);

        if(newDiff < diff){
            diff = newDiff;
            smallest = root.val;
        }else if(newDiff <= diff && root.val < smallest){
            diff = newDiff;
            smallest = root.val;
        }

        if(target > root.val){
            dfs( root.right, target);
        }

        if(target < root.val){
            dfs(root.left, target);
        }
    }
}
```