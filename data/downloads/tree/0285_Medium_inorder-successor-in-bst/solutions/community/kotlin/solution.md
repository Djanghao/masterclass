# Kotlin easy implementation

**Author:** lhenriquegomescamilo
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/5057689/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/5057689/)

---



# Complexity
- Time complexity: O(h)

- Space complexity: O(1)

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int = 0) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */

class Solution {
    fun inorderSuccessor(root: TreeNode?, p: TreeNode?): TreeNode? {
        var successor: TreeNode? = null;
        var temp = root
        while(temp != null) {
             if(p!!.`val` >= temp.`val`!!) {
                temp = temp.right
            } else {
                successor = temp
                temp = temp.left
            }
        }
        return successor;
    }
}
```