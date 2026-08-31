# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5164429/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5164429/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
 
class Solution {
    func evaluateTree(_ root: TreeNode?) -> Bool {
        switch root?.val {
        case 0:
            return false
        case 1:
            return true
        case 2:
            return evaluateTree(root?.left) || evaluateTree(root?.right)
        case 3:
            return evaluateTree(root?.left) && evaluateTree(root?.right)
        default:
            fatalError()
        }
    }
}
```