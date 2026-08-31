# Swift Solution

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/4506481/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/4506481/)

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
    class element {
        // all the sum in the hierarchy...
        var array: [Int]?
        var node: TreeNode?

        init() {
            array = nil
            node = nil
        }
    }

    func allLeafPathSum(_ root: TreeNode?, _ limit: Int, _ previousSum: Int) -> element {
        if root == nil {
            var ans = element()
            return ans
        }

        var ans = element()
        ans.array = [Int]()
        ans.node = TreeNode()

        var leftElement = element()
        var rightElement = element()

        if root!.left != nil {
            leftElement = allLeafPathSum(root!.left, limit, previousSum + root!.val)
        }

        if root!.right != nil {
            rightElement = allLeafPathSum(root!.right, limit, previousSum + root!.val)
        }

        var allNegative = true

        if leftElement.array != nil {
            for val in leftElement.array! {
                if val + root!.val + previousSum >= limit {
                    allNegative = false
                }
                ans.array!.append(val + root!.val)
            }

            ans.node!.left = leftElement.node
        }

        if rightElement.array != nil {
            for val in rightElement.array! {
                if val + root!.val + previousSum >= limit {
                    allNegative = false
                }
                ans.array!.append(val + root!.val)
            }

            ans.node!.right = rightElement.node
        }


        if leftElement.array == nil && rightElement.array == nil {
            ans.array!.append(root!.val)
            if previousSum + root!.val >= limit {
                ans.node = TreeNode(root!.val)
                return ans
            } else {
                ans.node = nil
                return ans
            }

        }

        if allNegative == true {
            ans.node = nil
            return ans
        }

        
        ans.node!.val = root!.val
        return ans
    }

    func sufficientSubset(_ root: TreeNode?, _ limit: Int) -> TreeNode? {
        if root == nil {
            return root
        }

        var element = allLeafPathSum(root, limit, 0)
        return element.node
    }
}


























































```