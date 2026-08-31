# This is my swift solution

**Author:** dogukansakin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/5506513/](https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/5506513/)

---



# Code
```
class Solution {
    func findMode(_ root: TreeNode?) -> [Int] {
        var valueCounts = [Int:Int]() 
        self.inOrderTraversal(node:root,valueCounts:&valueCounts)
        let maxCount = valueCounts.values.max() ?? 0
        let modes = valueCounts.filter { $0.value == maxCount }.map { $0.key }
        
        return modes
     
    }

    private func inOrderTraversal(node:TreeNode?, valueCounts: inout [Int:Int]){
        guard let node = node else {return}
        inOrderTraversal(node:node.left,valueCounts:&valueCounts)
        valueCounts[node.val,default:0] += 1
        inOrderTraversal(node:node.right,valueCounts:&valueCounts)
    }
}
```