# Swift💯

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5494088/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5494088/)

---

**DFS (accepted answer)**
```
import Algorithms

class Solution {
    func countPairs(_ root: TreeNode?, _ distance: Int) -> Int {
        var result = 0

        func dfs(_ node: TreeNode?) -> [Int] {
            guard let node else {return []}
            let lPath = dfs(node.left)
            let rPath = dfs(node.right)
            guard lPath.count + rPath.count > 0 else { return [1] }
            result += product(lPath, rPath).filter{$0+$1<=distance}.count
            return chain(lPath,rPath).map{$0+1}
        }

        dfs(root!)
        return result
    }
}
```

The `chain(lPath,rPath)` function will iterate through each array sequentially, no memory allocations. This is far more efficient than `(lPath+rPath)` which will allocate a new temporary array and then copy all values over.

`product(lPath,rPath)` is the cartesian product of the two arrays. It is shorthand for two nested `for`-loops and composes easily.

Check out Swift Algorithms: https://github.com/apple/swift-algorithms/blob/main/Guides/README.md
