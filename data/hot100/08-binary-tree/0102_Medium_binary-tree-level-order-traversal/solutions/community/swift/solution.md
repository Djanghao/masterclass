# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/1926236/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/1926236/)

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
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        var res: [[Int]] = []
        var queue: [TreeNode?] = root != nil ? [root] : []
        var parent\u0421ount = root != nil ? 1 : 0
        var child\u0421ount = 0
        var array: [Int] = []
        var index = 0
        
        while parent\u0421ount > 0 {
            if let node = queue[index] {
                if node.left != nil {
                    queue.append(node.left)
                    child\u0421ount += 1
                }
                
                if node.right != nil {
                    queue.append(node.right)
                    child\u0421ount += 1
                }
                
                array.append(node.val)
                if array.count == parent\u0421ount {
                    res.append(array)
                    array = []
                    parent\u0421ount = child\u0421ount
                    child\u0421ount = 0
                }
                
                index += 1
            }
        }
        
        return res
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.