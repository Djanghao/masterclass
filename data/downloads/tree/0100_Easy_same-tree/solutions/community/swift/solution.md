# ✔️ 100% Fastest Swift Solution, time: O(min(n, m)), space: O(min(n, m)).

**Author:** sergeyleschev
**Votes:** 15
**Link:** [https://leetcode.com/problems/same-tree/solutions/1926231/](https://leetcode.com/problems/same-tree/solutions/1926231/)

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
    //   - time: O(min(n, m)), where n is the number of nodes in p and m is the number of nodes in q.
    //   - space: O(min(n, m)), where n is the number of nodes in p and m is the number of nodes in q.
    
    func isSameTree(_ p: TreeNode?, _ q: TreeNode?) -> Bool {
        guard p != nil || q != nil else { return true }
        
        guard let p = p, let q = q else { return false }
        
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.