# Swift

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364453/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364453/)

---

**DFS + Linear (accepted answer)**
```
import Algorithms

class Solution {
    func bstToGst(_ root: TreeNode?) -> TreeNode? {
        var array = [TreeNode]()
        func dfs(_ node:TreeNode?) {
            guard let node else { return }
            dfs(node.right)
            array.append(node)
            dfs(node.left)
        }
        dfs(root)
        for (p,q) in array.adjacentPairs() {
            q.val += p.val
        }
        return root
    }
}
```
Reversed in-order traversal to get descending sorted array of nodes, then update the array from largest-to-smallest value.

---

**Pure DFS (accepted answer)**
```
class Solution {
    func bstToGst(_ root: TreeNode?) -> TreeNode? {
        func dfs(_ root: TreeNode?, _ sum:Int = 0) -> Int {
            guard let root else { return 0 }
            root.val += dfs(root.right, sum) + sum
            return root.val - sum + dfs(root.left, root.val) 
        }
        dfs(root)
        return root
    }
}
```

**Compressed to 4sloc (accepted answer)**
```
class Solution {
    func bstToGst(_ root: TreeNode?, _ sum:Int = 0, _ depth:Int = 0) -> TreeNode? {
        guard let root else { return TreeNode(0) }
        root.val += bstToGst(root.right, sum, depth+1)!.val + sum
        let node = TreeNode(root.val - sum + bstToGst(root.left, root.val, depth+1)!.val)
        return depth == 0 ? root : node
    }
}
```