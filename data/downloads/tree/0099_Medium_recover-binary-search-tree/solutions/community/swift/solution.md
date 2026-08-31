# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(h).

**Author:** sergeyleschev
**Votes:** 13
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/1926227/](https://leetcode.com/problems/recover-binary-search-tree/solutions/1926227/)

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
    //   - time: O(n), where n is the number of nodes in the binary tree.
    //   - space: O(h), where h is the height of the binary tree.

    private var first: TreeNode?
    private var second: TreeNode?
    private var prev = TreeNode(Int.min)

    
    func recoverTree(_ root: TreeNode?) {
        traverse(root)

        guard let first = first, let second = second else { return }

        let tmp = first.val
        first.val = second.val
        second.val = tmp
    }


    private func traverse(_ root: TreeNode?) {
        guard let root = root else { return }
        traverse(root.left)

        if first == nil, prev.val >= root.val { first = prev }
        if first != nil, prev.val >= root.val { second = root }
        prev = root

        traverse(root.right)
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.