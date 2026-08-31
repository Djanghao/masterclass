# [Swift] 2 simple solutions with BFS and DFS

**Author:** GV1506
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/656085/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/656085/)

---

DFS solution
```
func maxLevelSum(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0 }
        var map = [Int: Int]()

        func dfs(_ node: TreeNode?, _ level: Int) {
            guard let node = node else { return }
            map[level, default: 0] += node.val
            dfs(node.left, level + 1)
            dfs(node.right, level + 1)
        }
        
        dfs(root, 1)
        var max = Int.min
        var ans = 0
        for (key, val) in map {
            if max < val {
                max = val
                ans = key
            }
        }
        return ans
    }
```

BFS solution
```
func maxLevelSum(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0 }
        var ans = 0
        var max = Int.min
        var level = 1
        var q = [TreeNode]()
        q.append(root)
        while q.count > 0 {
            let size = q.count
            var sum = 0
            for i in 0..<size {
                let node = q.removeFirst()
                sum += node.val
                if let left = node.left { q.append(left) }
                if let right = node.right { q.append(right) }
            }
            if max < sum {
                max = sum
                ans = level
            }
            level += 1
        }
        return ans
    }
```