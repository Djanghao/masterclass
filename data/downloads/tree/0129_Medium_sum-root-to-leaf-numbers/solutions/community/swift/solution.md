# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/1935362/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/1935362/)

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
    //   - time: O(n), where n is the number of nodes in binary tree.
    //   - space: O(n), where n is the number of nodes in binary tree.
    
    func sumNumbers(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0 }
        return sumNumbers(root, sum: 0)
    }
    

    private func sumNumbers(_ root: TreeNode?, sum: Int) -> Int {
        guard let root = root else { return 0 }

        if root.left == nil, root.right == nil {
            return 10 * sum + root.val
        }

        return sumNumbers(root.left, sum: 10 * sum + root.val) + sumNumbers(root.right, sum: 10 * sum + root.val)
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.