# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/1932074/](https://leetcode.com/problems/path-sum-ii/solutions/1932074/)

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
    func pathSum(_ root: TreeNode?, _ targetSum: Int) -> [[Int]] {
        var res: [[Int]] = []
        
        
        func backtrack(_ path: [Int], _ root: TreeNode?, _ target: Int) {
            guard let root = root else { return }
            
            if root.val == target && root.left == nil && root.right == nil {
                res.append(path + [root.val])
                return
            }
            
            var path = path
            for i in 0..<2 {
                if let node = (i == 0 ? root.left : root.right) {
                    path.append(root.val)
                    backtrack(path, node, target - root.val)
                    path.removeLast()
                }
            }    
        }
        
        backtrack([], root, targetSum)
        return res
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.