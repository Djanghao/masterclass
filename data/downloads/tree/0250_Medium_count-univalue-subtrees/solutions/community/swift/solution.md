# Swift DFS

**Author:** prybysh
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/1057297/](https://leetcode.com/problems/count-univalue-subtrees/solutions/1057297/)

---

```
class Solution {
    func countUnivalSubtrees(_ root: TreeNode?) -> Int {
        var count = 0
        isValid(root, count: &count)
      
        return count
    }
    
    private func isValid(_ node: TreeNode?, count: inout Int) -> Bool {
        guard let node = node else { return true }
                
        let leftRes = isValid(node.left, count: &count)
        let rightRes = isValid(node.right, count: &count)
        
        if let left = node.left, left.val != node.val {
            return false         
        }
        
        if let right = node.right, right.val != node.val {
            return false
        } 
        
        if leftRes, rightRes {
            count += 1
        }
        
        return leftRes && rightRes
    }
}