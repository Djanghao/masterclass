# pay attention to not double count

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/5805394/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/5805394/)

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
    public TreeNode SufficientSubset(TreeNode root, int limit) {
        var dict = new Dictionary<TreeNode, int>();
        wk(root, 0);
        return trim(root);

        TreeNode trim(TreeNode root){
            if (root == null){
                return null;
            }
            // Console.WriteLine($"trimming {root.val}, val = {dict[root]}");

            if (dict[root] < limit){
                return null;
            }
            if (null == trim(root.left)){
                root.left = null;
            }
            if (null == trim(root.right)){
                root.right = null;
            }

            return root;
        }


        int wk(TreeNode root, int acc){
            var val = root.val;
            if (root.left == null && root.right == null){
                
            }else if (root.left == null){
                val += wk(root.right, acc + val);
            } else if (root.right == null){
                val += wk(root.left, acc + val);
            }else {
                var left = wk(root.left, acc + val);
                var right = wk(root.right, acc + val);
                val += Math.Max(left, right);
            }
            dict[root] = acc + val;
            // Console.WriteLine($"wk {root.val}, val = {dict[root]}");
            return val;
        }    
    }
}
```