# Using Swift, and DFS

**Author:** shafiq-bd-04
**Votes:** 1
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5960234/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5960234/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To determine whether two binary trees are "flip equivalent," we need to account for two possibilities: either the trees are already structured identically, or the left and right children have been swapped at some level. The intuition is to recursively check if either structure (with or without flips) matches.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Base Cases:
	\u2022	If both nodes are nil, they are trivially flip equivalent.
	\u2022	If one of the nodes is nil but the other is not, or if their values differ, they are not flip equivalent.
2. Recursive Check:
	\u2022	For each node, check both possibilities:
	\u25E6	No flip: Compare the left child of the first tree with the left child of the second tree, and the right child of the first tree with the right child of the second tree.
	\u25E6	Flip: Compare the left child of the first tree with the right child of the second tree, and the right child of the first tree with the left child of the second tree.
3. Return: If either of the recursive checks returns true, then the trees are flip equivalent.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(h), h is height of the tree

# Code
```swift []
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
    func flipEquiv(_ root1: TreeNode?, _ root2: TreeNode?) -> Bool {
        
        // both nil
        if root1 == nil  && root2 == nil{
            return true
        }
        
        // one of them nil, or val doesn't match
        if root1 == nil || root2 == nil || root1?.val != root2?.val{
            return false
        }
        
        //without flip
        //send both direction
        var noFlip = flipEquiv(root1?.left, root2?.left) && flipEquiv(root1?.right, root2?.right)

        //with flip
        //send both direction
        var flip = flipEquiv(root1?.left, root2?.right) && flipEquiv(root1?.right, root2?.left)
        
        // return if any of the value is true else false
        return flip || noFlip
    
    }
}
```