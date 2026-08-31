# Swift | DFS | 6 SLOC

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4179930/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4179930/)

---

**DFS (accepted answer)**
```
class Solution {
    func validateBinaryTreeNodes(_ n: Int, _ l: [Int], _ r: [Int]) -> Bool {
        let roots = Set(-1..<n).subtracting(l+r)
        var seen = Set([-1])
        
        func dfs(_ n:Int) -> Bool {
            seen.insert(n).inserted ? (dfs(l[n]) && dfs(r[n])) : n<0
        }
        
        return roots.count == 1 && dfs(roots.first!) && seen.count == n+1
    }
}
```