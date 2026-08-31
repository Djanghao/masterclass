# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/1926224/](https://leetcode.com/problems/validate-binary-search-tree/solutions/1926224/)

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
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the tree.
    //   - space: O(n), where n is the number of nodes in the tree.

    private var prev: Int?
    
    func isValidBST(_ root: TreeNode?) -> Bool {
        inorder(root)
    }
    
    private func inorder(_ root: TreeNode?) -> Bool {
        guard let root = root else { return true }
        
        guard inorder(root.left) else { return false }
        
        if let prev = prev, root.val <= prev { return false }
        
        prev = root.val
        return inorder(root.right)
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.