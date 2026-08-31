# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 15
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/1928021/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/1928021/)

---

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
    func buildTree(_ preorder: [Int], _ inorder: [Int]) -> TreeNode? {
        guard preorder.count > 0 else { return nil }
        
        let total\u0421ount = preorder.count
        let root = TreeNode(preorder[0])
        var rootIndex = -1
        
        for (i, val) in inorder.enumerated() {
            if val == root.val {
                rootIndex = i
                break
            } 
        }
        
        let leftCount = rootIndex
        let rightCount = total\u0421ount - leftCount - 1
        
        root.left = buildTree(Array(preorder[1..<1 + leftCount]), Array(inorder[0..<leftCount + 1]))
        root.right = buildTree(Array(preorder[1 + leftCount..<total\u0421ount]), Array(inorder[1 + leftCount..<total\u0421ount]))
        return root
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.