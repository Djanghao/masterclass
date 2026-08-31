# Swift💯3SLOC

**Author:** OrchidHunter
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3298198/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3298198/)

---

**BFS (accepted answer)**
```
class Solution {
    func isCompleteTree(_ root: TreeNode?) -> Bool {
        var q = [root]    
        while let n = q.removeFirst() { q += [n.left, n.right] }
        return q.allSatisfy { $0 == nil }
    }
}
```