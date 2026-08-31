# Swift - concise update tree solution

**Author:** xxnooryesxx
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1607307/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1607307/)

---

Suprisingly have not seen this kind of solution.
The idea is edit the tree with each iteration. 
If node is a leaf node we just remove the node in the tree so that we updates leaf nodes each round.

```
class Solution {
    var res = [[Int]]()
    var temp = [Int]()

    func findLeaves(_ root: TreeNode?) -> [[Int]] {
        var r = root
        
        while r != nil {
            r = helper(r)
            res.append(temp)
            temp.removeAll()
        }
        
        return res
    }
    
    func helper(_ root: TreeNode?) -> TreeNode? {
        guard let r = root else { return nil }
        
        if r.left == nil && r.right == nil {
            temp.append(r.val)
            return nil
        }
        
        r.left = helper(r.left)
        r.right = helper(r.right)
        
        return r
    }
}
```