# Swift, recursion

**Author:** TatianaVol
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3572095/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3572095/)

---

# Code
```
class Solution {
    
    var memo: [Int: Int] = [:]
    var cuts: [Int] = []
    func minCost(_ n: Int, _ cuts: [Int]) -> Int {
        
        self.cuts = [0] + cuts.sorted() + [n]
        return reverse(0, self.cuts.count - 1)
    }

    func reverse(_ from: Int, _ to: Int) -> Int {
        
        let memoKey = from * 100 + to
        if let value = memo[memoKey] { return value }

        if to - from <= 1 { return 0 }
        if to - from == 2 { return cuts[to] - cuts[from] }

        memo[memoKey] = (from + 1...to - 1).map { middle in
            cuts[to] - cuts[from] + reverse(from, middle) + reverse(middle, to)
        }.min() ?? 0

        return memo[memoKey]!
    }
}
```