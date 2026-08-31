# [Swift] DFS 16ms Runtime

**Author:** sairamkotha
**Votes:** 4
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/779432/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/779432/)

---

```
struct Point: Hashable, Comparable {
    var y: Int
    var val: Int
    
    static func < (lhs: Point, rhs: Point) -> Bool {
        if lhs.y == rhs.y {
            return lhs.val < rhs.val
        }
        return lhs.y < rhs.y
    }
}


final class Solution {
    var locationValues = [Int: [Point]]()
    
    func verticalTraversal(_ root: TreeNode?) -> [[Int]] {
        dfs(0, 0, root)
        let keys = locationValues.keys.sorted()
        var values = [[Int]]()
        for key in keys {
            values.append(locationValues[key]!.sorted().map { $0.val })
        }
        return values
    }
    
    func dfs(_ x: Int, _ y: Int,_ node: TreeNode?) {
        if node == nil {
            return
        }
        locationValues[x, default: []].append(Point(y: y, val: node!.val))
        if node!.left != nil {
            dfs(x - 1, y + 1, node!.left)
        }
        if node!.right != nil {
            dfs(x + 1, y + 1, node!.right)
        }
    }
}
```