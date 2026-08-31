# Inorder traversal.

**Author:** deniskamasterov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/5532331/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/5532331/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
inorder traversal. move to most left node. and start traverse.
use variable min_diff - as result of comparing previous node value and current. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def getMinimumDifference(root: TreeNode): Int = {
        var last_val: Option[Int] = None
        var min_diff: Int = Int.MaxValue
        def inorder_traversal(root: TreeNode): Unit = {
            if (root != null) {
                inorder_traversal(root.left)
                last_val match {
                    case None => last_val = Some(root.value)
                    case _ => {
                        min_diff = Math.min(
                            min_diff, Math.abs(root.value - last_val.get)
                        )
                        last_val = Some(root.value)
                    }
                }
                inorder_traversal(root.right)
            }    
        }

        inorder_traversal(root)

        return min_diff
    }
        
}

```