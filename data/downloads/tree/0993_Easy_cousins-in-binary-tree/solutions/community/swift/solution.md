# [Swift] 2 solutions with BFS and DFS

**Author:** GV1506
**Votes:** 1
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/537720/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/537720/)

---

DFS solution is straight forward. 
```
class Solution {
    func isCousins(_ root: TreeNode?, _ x: Int, _ y: Int) -> Bool {
        /* BFS solution
        guard let root = root else { return false }
        var q = [TreeNode]()
        q.append(root)
        while q.count > 0 {
            let size = q.count
            var count = 0
            for i in 0..<size {
                let cur = q.removeFirst()
                if cur.val == x || cur.val == y {
                    count += 1
                }
                
                // check 2 nodes x, y have same root
                if let left = cur.left, let right = cur.right {
                    if (left.val, right.val) == (x,y) || (left.val, right.val) == (y,x) {
                        return false
                    }
                }
                
                if let left = cur.left { q.append(left) }
                if let right = cur.right { q.append(right) }                
            }
            if count == 2 {
                return true
            }
        }
        return false
        */
        
        var xLevel = -1
        var xParent = -1
        var yLevel = -1
        var yParent = -1
        
        func dfs(_ node: TreeNode?, _ level: Int, _ parentVal: Int, _ target: Int) {
            guard let node = node else { return }
            if node.val == target { 
                if target == x {
                    xLevel = level
                    xParent = parentVal
                } else {
                    yLevel = level
                    yParent = parentVal
                }
                return
            }
            dfs(node.left, level+1, node.val, target)
            dfs(node.right, level+1, node.val, target)
        }
        
        dfs(root, 0, -1, x)
        dfs(root, 0, -1, y)
                
        return xLevel != -1 && xLevel == yLevel && xParent != yParent
    }
}
```