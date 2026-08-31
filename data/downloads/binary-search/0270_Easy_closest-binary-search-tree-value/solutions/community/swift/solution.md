# Swift: 22ms beats 100%/100%

**Author:** biscottigelato
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/3038307/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/3038307/)

---


# Code
```
class Solution {
    func closestValueDelta(_ node:TreeNode, _ target: Double) -> (Int, Double) {

        let delta = abs(Double(node.val) - target)
        var leftValueDelta = (0, Double.greatestFiniteMagnitude)
        var rightValueDelta = (0, Double.greatestFiniteMagnitude)
        
        if let left = node.left, target < Double(node.val) {
            leftValueDelta = closestValueDelta(left, target)
        } else if let right = node.right, target > Double(node.val) {
            rightValueDelta = closestValueDelta(right, target)
        } else {
            return (node.val, delta)
        }
        
        if delta < leftValueDelta.1, delta < rightValueDelta.1 {
            return (node.val, delta)
        } else if leftValueDelta.1 < rightValueDelta.1 {
            return leftValueDelta
        } else {
            return rightValueDelta
        }
    }
    
    func closestValue(_ root: TreeNode?, _ target: Double) -> Int {
        guard let root = root else {
            return 0
        }
        return closestValueDelta(root, target).0
    }
}
```