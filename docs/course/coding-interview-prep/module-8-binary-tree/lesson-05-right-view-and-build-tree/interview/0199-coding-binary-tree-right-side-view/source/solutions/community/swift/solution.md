# Recursion |  Accepted ✅ | Without queue solution | 100 % faster

**Author:** ShivamJJ
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/3793473/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/3793473/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Just read the comments

# Complexity
- Time complexity: O( n )
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O( n ) due to stack space used in recusrion
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
    func rightSideView(_ root: TreeNode?) -> [Int] {
        var results = [Int]()
        rightView(root, &results, 0)
        return results
    }

    func rightView(_ root: TreeNode?, _ results: inout [Int],_ level: Int) {
        //base
        guard let root = root else { return }

        //if my current level == the current array size , than it must be a valid path to cover
        if results.count == level { results.append(root.val) }

        rightView(root.right, &results, level + 1)
        rightView(root.left, &results, level + 1)
        
    }
}
```