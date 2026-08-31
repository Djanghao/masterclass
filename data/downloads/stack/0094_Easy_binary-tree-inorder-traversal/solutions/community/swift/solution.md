# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1926144/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1926144/)

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
    
    func inorderTraversal(_ root: TreeNode?) -> [Int] {
        var ans = [Int]()
        var stack = [TreeNode?]()
        var curr = root

        while curr != nil || !stack.isEmpty {
            while curr != nil {
                stack.append(curr)
                curr = curr?.left
            }
            curr = stack.removeLast()
            if let val = curr?.val {
                ans.append(val)
            }
            curr = curr?.right
        }

        return ans
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.