# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/1928068/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/1928068/)

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
    //   - space: O(n), where n is the number of nodes in the binary tree.

    func minDepth(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0 }
        
        var queue: [TreeNode] = [root]
        var index = 1
        
        loop:
        while queue.count > 0 {
            var level: [TreeNode] = []
            for node in queue {
                if node.left == nil && node.right == nil { break loop }
                if let left = node.left { level.append(left) }
                if let right = node.right { level.append(right) }
            }
            queue = level
            index += 1
        }
        
        return index
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.