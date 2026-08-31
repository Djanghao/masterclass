# Swift | Set

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238187/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238187/)

---

**Set (accepted answer)**
```
class Solution {
    func findDuplicateSubtrees(_ root: TreeNode?) -> [TreeNode?] {
        var set = Set<Int>()
        var result = [TreeNode?]()
        
        func dfs(_ node: TreeNode?) -> Int {
            guard let node else { return 0 }
            let hashValue = [node.val, dfs(node.left), dfs(node.right)].hashValue
            if !set.insert(hashValue).inserted, set.insert(-hashValue).inserted {
                result.append(node)
            }
            return hashValue
        }
        
        dfs(root)
        return result
    }
}
```