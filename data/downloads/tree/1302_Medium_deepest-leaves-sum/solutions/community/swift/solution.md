# ⚡️ Swift DFS

**Author:** ash_asoyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/2041734/](https://leetcode.com/problems/deepest-leaves-sum/solutions/2041734/)

---

```
class Solution {
    var sums: [Int] = []
    
    func deepestLeavesSum(_ root: TreeNode?) -> Int {
        sum(0, root)
        return sums.last ?? 0
    }
    
    
    func sum(_ depth: Int, _ root: TreeNode?) {
        guard let root = root else { return }
        
        if depth < sums.count {
            sums[depth] = sums[depth] + root.val
        } else {
            sums.append(root.val)
        }
        
        sum(depth + 1, root.left)
        sum(depth + 1, root.right)
    }
}