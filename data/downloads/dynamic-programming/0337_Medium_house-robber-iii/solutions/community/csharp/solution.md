# Simple memoization using Dictionary ds in C#

**Author:** samy-timalsina
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/6106171/](https://leetcode.com/problems/house-robber-iii/solutions/6106171/)

---



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
    private Dictionary<( TreeNode root, bool v), int> map = new Dictionary<(TreeNode root, bool v), int>();
    public int Rob(TreeNode root) {
     int ans = f(root, false);
     
     return ans;
    }
    private int f(TreeNode root, bool rootRobbed){
        
        if(root == null) return 0;
        if(map.ContainsKey((root,rootRobbed))) return map[(root, rootRobbed)];
        int m1 = 0;
        int m2 = 0;
        if(!rootRobbed)
             m1 = root.val + f(root.left, true) + f(root.right, true);
        m2 = f(root.left, false) + f(root.right,false);

        int ans = Math.Max(m1,m2);
        map[(root, rootRobbed)] = ans;
        return ans;
    }
}
```