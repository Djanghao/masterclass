# 🚀 Swift | Time: O(n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 2
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/4535629/](https://leetcode.com/problems/leaf-similar-trees/solutions/4535629/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func leafSimilar(_ root1: TreeNode?, _ root2: TreeNode?) -> Bool {
        if root1 == nil, root2 == nil { return true }
        if root1 != nil, root2 == nil { return false }
        if root1 == nil, root2 != nil { return false }
        guard let root1 = root1, let root2 = root2 else { return false }
        
        var root1Res: [Int] = []
        dfs(root1, &root1Res)
        
        var root2Res: [Int] = []
        dfs(root2, &root2Res)
        
        if root1Res.count != root2Res.count { return false }
        
        for i in 0 ..< root1Res.count {
            if root1Res[i] != root2Res[i] {
                return false
            }
        }
        
        return true
    }
    
    private func dfs(_ node: TreeNode?, _ res: inout [Int]) {
        guard let node = node else { return }
        
        if node.left == nil, node.right == nil {
            res.append(node.val)
        }
        
        dfs(node.left, &res)
        dfs(node.right, &res)
    }
}
```