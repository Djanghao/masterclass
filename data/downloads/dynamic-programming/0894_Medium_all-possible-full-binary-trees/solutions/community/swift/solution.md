# Swift 100 % faster than all swift online submissions

**Author:** punk9595
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/813705/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/813705/)

---

```
class Solution {
    var map: [Int: [TreeNode]] = [:]
    
    func allPossibleFBT(_ N: Int) -> [TreeNode?] {
        if N <= 0 || N % 2 == 0 { return [] }
        
        if let found = map[N] {
            return found
        }
        var res = [TreeNode]()
        if N == 1 {
            res.append(TreeNode(0))
            return res
        }
        for i in stride(from: 1, to: N, by: 2) {
            let leftSubtrees = allPossibleFBT(i)
            let rightSubtrees = allPossibleFBT(N-i-1)
            for l in leftSubtrees {
                for r in rightSubtrees {
                    let root = TreeNode(0)
                    root.left = l
                    root.right = r
                    res.append(root)
                }
            }
        }
        map[N] = res
        return res
    }
    
}
```