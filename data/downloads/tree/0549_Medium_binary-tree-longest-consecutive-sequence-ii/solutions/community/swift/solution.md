# [Swift] Readable Solution (DFS)

**Author:** Legonaftik
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/1377300/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/1377300/)

---

```
class Solution {

    private struct NodeInfo {
        var increasing: Int
        var decreasing: Int
    }

    func longestConsecutive(_ root: TreeNode?) -> Int {
        var answer = 0

        func dfs(_ parent: TreeNode?) -> NodeInfo {
            guard let parent = parent else {
                return NodeInfo(increasing: 0, decreasing: 0)
            }
            var parentInfo = NodeInfo(increasing: 1, decreasing: 1)

            func updateParentInfo(with child: TreeNode?) {
                guard let child = child else { return }
                let childInfo = dfs(child)
                if parent.val == child.val + 1 {
                    maximize(&parentInfo.decreasing, with: childInfo.decreasing + 1)
                } else if parent.val == child.val - 1 {
                    maximize(&parentInfo.increasing, with: childInfo.increasing + 1)
                }
            }

            updateParentInfo(with: parent.left)
            updateParentInfo(with: parent.right)
            maximize(&answer, with: parentInfo.increasing + parentInfo.decreasing - 1)
            return parentInfo
        }

        _ = dfs(root)
        return answer
    }
    
    private func maximize(_ oldValue: inout Int, with newValue: Int) {
        if newValue > oldValue {
            oldValue = newValue
        }
    }
}
```