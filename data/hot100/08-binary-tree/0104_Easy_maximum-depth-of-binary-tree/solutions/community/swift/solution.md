# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 20
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/1928014/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/1928014/)

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
    //   - time: O(n), where n is the number of nodes.
    //   - space: O(n), where n is the number of nodes.

    func maxDepth(_ root: TreeNode?) -> Int {
        root == nil ? 0 : max(maxDepth(root?.left), maxDepth(root?.right)) + 1
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.