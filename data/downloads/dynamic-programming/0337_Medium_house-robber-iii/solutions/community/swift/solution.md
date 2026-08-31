# My Swift solution (DFS)

**Author:** yamironov
**Votes:** 3
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/826616/](https://leetcode.com/problems/house-robber-iii/solutions/826616/)

---

My Swift solution (DFS)
```
class Solution {
    func rob(_ root: TreeNode?) -> Int {
        func helper(_ node: TreeNode) -> (now: Int, last: Int) {
            let (lnow, llast) = node.left != nil ? helper(node.left!) : (0, 0)
            let (rnow, rlast) = node.right != nil ? helper(node.right!) : (0, 0)
            return (max(lnow + rnow, llast + rlast + node.val), lnow + rnow)
        }
        return root != nil ? helper(root!).now : 0
    }
}
```