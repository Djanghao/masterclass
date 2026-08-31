# Swift | Runtime: 60 ms | Memory Usage: 15.5 MB

**Author:** JMatharu
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/978392/](https://leetcode.com/problems/maximum-average-subtree/solutions/978392/)

---

```
class Solution {
    func maximumAverageSubtree(_ root: TreeNode?) -> Double {
        
        var average: Double = 0.0
        dfs(root, &average)
        
        return average
    }
    
    func dfs(_ root: TreeNode?, _ average: inout Double) -> (Int, Int) {
        guard let root = root else { return (0, 0) }
        
        let (leftSum, leftNodes) = dfs(root.left, &average)
        let (rightSum, rightNodes) = dfs(root.right, &average)
        
        let currentSum = leftSum + rightSum + root.val
        let currentNodes = leftNodes + rightNodes + 1
        
        average = max(average, Double(currentSum) / Double(currentNodes))
        return (currentSum, currentNodes)
        
    }
}
```