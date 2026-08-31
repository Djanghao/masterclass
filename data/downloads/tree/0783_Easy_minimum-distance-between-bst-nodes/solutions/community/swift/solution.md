# ✅ Swift BFS solution. Beats 100% and easy to understand

**Author:** protodimbo
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3196121/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3196121/)

---

# Intuition
It's BST so we can search left part and then search right part without any problems

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minDiffInBST(_ root: TreeNode?) -> Int {
        var prev: TreeNode?
        var res = Int.max

        func dfs(_ node: TreeNode?) {
            if node == nil { return }

            dfs(node?.left)
            if prev != nil {
                res = min(res, node!.val - prev!.val)
            }
            prev = node
            dfs(node?.right)
        }
        dfs(root)
        return res
    }
}
```