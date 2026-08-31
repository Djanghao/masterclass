# Java DFS, Beats 100% in time

**Author:** MugdhaGovilkar1197
**Votes:** 2
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/1608756/](https://leetcode.com/problems/equal-tree-partition/solutions/1608756/)

---

```
class Solution {
    int totalSum = 0;
    boolean ans = false;
    public boolean checkEqualTree(TreeNode root) {
        helper(root);
        if(Math.abs(totalSum) %2 == 1)
            return false;

        helper2(root, null);
        return ans;
    }
    
    public void helper(TreeNode root)
    {
        if(root == null)
            return;
        totalSum += root.val;
        helper(root.left);
        helper(root.right);      
    }
    
    public int helper2(TreeNode root, TreeNode parent)
    {
        if(root == null || ans)
            return 0;
        

        int left = helper2(root.left, root);
        int right = helper2(root.right, root);

        if(left + right + root.val == totalSum/2 && parent!=null)
        {
            ans = true;
        }
        
        return root.val + left + right;
    }
        
}
```