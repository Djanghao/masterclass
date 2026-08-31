# EASY Java - DFS - 98.6% runtime, 100% mem

**Author:** bailey_pollard
**Votes:** 15
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/649664/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/649664/)

---

```
class Solution {
    
    int sum = 0;
    
    public int sumEvenGrandparent(TreeNode root) {
        
        dfs(root, null, null);
        return sum;
    }
    
    public void dfs(TreeNode root, TreeNode parent, TreeNode gparent) {
        if (root == null) return;
        
        if (gparent != null && gparent.val % 2 == 0) {
            sum += root.val;
        }
        
        if (root.left != null) {
            dfs(root.left, root, parent);
        }
        
        if (root.right != null) {
            dfs(root.right, root, parent);
        }
    }
}
```