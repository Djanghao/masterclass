# [Swift] DFS Solution

**Author:** alptekin35
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/501685/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/501685/)

---

```
class Solution {
    func maxProduct(_ root: TreeNode?) -> Int {
        var set:Set<Int> = Set()
        let total = helper(root, &set)
        var maxVal = Int.min
        for item in set{
            maxVal = max(maxVal, item*(total-item))
        }
        return maxVal % 1000000007
    }
    
    func helper(_ root: TreeNode?,_ set: inout Set<Int>)->Int{
        guard let node = root else { return 0 }
        node.val += helper(node.left, &set)
        node.val += helper(node.right, &set)
        set.insert(node.val)
        return node.val
    }
}
```