# Swift simple solution. using queue.

**Author:** punk9595
**Votes:** 2
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/753541/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/753541/)

---

```
class Solution {
    func averageOfLevels(_ root: TreeNode?) -> [Double] {
        guard let root = root else { return [] }
        var queue = [TreeNode]()
        var output = [Double]()
        queue.append(root)
        
        while !queue.isEmpty {
            let levelCount = queue.count
            var sum = 0.0
            for _ in 0..<levelCount {
                let node = queue.removeFirst()
                sum += Double(node.val)
                
                if let left = node.left {
                    queue.append(left)
                }
                if let right = node.right {
                    queue.append(right)
                }
            }
            output.append(sum/Double(levelCount))
        }
        return output
    }
}
```