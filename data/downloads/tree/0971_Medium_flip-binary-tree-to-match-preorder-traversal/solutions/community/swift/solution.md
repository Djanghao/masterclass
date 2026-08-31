# Swift solution with comments

**Author:** chetan15aga
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/4861446/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/4861446/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
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
    func flipMatchVoyage(_ root: TreeNode?, _ voyage: [Int]) -> [Int] {
        if root == nil { return [] }
        var result:[Int] = []

        func dfsForPreOrderFlip(_ root: TreeNode?, _ index: Int ) -> Int? {
            //If root is nil the we will just return index
            if root == nil { return index }

            //root value atleast match the voyage index element
            //if not then return nil
            if root!.val != voyage[index] { return nil }

            //Since we are checking for preorder which goes from left -> right
            //Hence we are first checking for left
            //If we find the new INdex 
            //then we will check right node with new Index
            if let nextIndex = dfsForPreOrderFlip(root?.left, index+1) {
                return dfsForPreOrderFlip(root?.right, nextIndex)
            }

            //After checking left, now we will check right node
            //if we get a new index then we will append it in result
            if let nextIndex = dfsForPreOrderFlip(root?.right, index+1) {
                result.append(root!.val)
                return dfsForPreOrderFlip(root?.left, nextIndex)

            }

            //return nil when last element is reached in any branch
            return nil
        }

        //return result array if root dfs contains values
        return dfsForPreOrderFlip(root,0) == nil ? [-1] : result

    }
}
```