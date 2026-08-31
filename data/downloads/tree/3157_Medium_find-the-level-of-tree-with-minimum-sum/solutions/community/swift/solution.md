# ✅ BFS | Laconic

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5952889/](https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5952889/)

---

# Solution
```swift []
struct Solution {
    func minimumLevel(_ root: TreeNode?) -> Int {
        var (minSum, level, clevel) = (Int.max, 1, 1)
        var queue = [root].compactMap(\\.me)

        while !queue.isEmpty {
             let t = queue.reduce(into: (slice: [TreeNode](), sum: 0)) { t, node in
                t.sum += node.val
                t.slice.append(contentsOf: [node.left, node.right].compactMap(\\.me))
            }
            queue = t.slice
            if t.sum < minSum {
                minSum = t.sum
                level = clevel
            }
            clevel += 1
        }
        return level
    }
}

private extension Optional {
    var me: Self { self }
}
```