# Simple solution

**Author:** Phantom2097
**Votes:** 1
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5962219/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5962219/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$ for an unbalanced tree or $$O(log(n))$$ for a balanced tree


# Kotlin Code
![image.png](./images/0.png)
```kotlin []
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun flipEquiv(root1: TreeNode?, root2: TreeNode?): Boolean {
        if (root1 == null && root2 == null) return true
        else if (root1?.`val` != root2?.`val`) return false
        return (flipEquiv(root1?.left, root2?.right) && flipEquiv(root1?.right, root2?.left)) 
            || (flipEquiv(root1?.right, root2?.right) && flipEquiv(root1?.left, root2?.left))
    }
}
```



# Java Code
![image.png](./images/1.png)
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return true;
        else if ((root1 == null || root2 == null) || (root1.val != root2.val)) return false;
        return (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)) 
            || (flipEquiv(root1.right, root2.right) && flipEquiv(root1.left, root2.left));
    }
}
```