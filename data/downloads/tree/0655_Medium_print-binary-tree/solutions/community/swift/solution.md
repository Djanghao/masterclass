# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/3179666/](https://leetcode.com/problems/print-binary-tree/solutions/3179666/)

---

```
class Solution {
    func printTree(_ root: TreeNode?) -> [[String]] {
        
        let h: Int = { root in
            var res = 1
            func go(_ node: TreeNode? = root, _ d: Int = 1) {
                guard let node = node else { return }
                res = max(d, res)
                go(node.left, d + 1)
                go(node.right, d + 1)
            }
            go()
            return res
        }(root)

        var res: [[String]] = {
            let c = Int(pow(2, Double(h))) - 1
            return Array(repeating: Array(repeating: "", count: c), count: h)
        }()

        func fill(_ node: TreeNode? = root, _ r: Int = 0, _ c: Int = res.first!.count / 2, _ d: Int = (res.first!.count + 1) / 4) {
            guard let node = node else { return }
            res[r][c] = String(node.val)
            fill(node.left, r + 1, c - d, d / 2)
            fill(node.right, r + 1, c + d, d / 2)
        }

        fill()

        return res
    }
}
```