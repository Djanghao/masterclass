# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 18
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/1941817/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/1941817/)

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
    func postorderTraversal(_ root: TreeNode?) -> [Int] {
        var res: [Int] = []
        
        func postOrder(_ root: TreeNode?) {
            guard let root = root else { return }
            
            postOrder(root.left)
            postOrder(root.right)
            res.append(root.val)
        }
        
        postOrder(root)
        return res
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.