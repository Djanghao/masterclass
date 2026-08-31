# Swift Easy

**Author:** artemvor1997
**Votes:** 2
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/3233566/](https://leetcode.com/problems/relative-ranks/solutions/3233566/)

---


# Code
```
class Solution {
    func findRelativeRanks(_ score: [Int]) -> [String] {
        var ans = Array(repeating: "", count: score.count)
        let sorted = score.enumerated().sorted{$0.1 > $1.1}
        for i in 0..<sorted.count {
            if i == 0 {ans[sorted[i].0] = "Gold Medal" }
            if i == 1 {ans[sorted[i].0] = "Silver Medal" }
            if i == 2 {ans[sorted[i].0] = "Bronze Medal" }
            if i >= 3 { ans[sorted[i].0] = String(i+1) }
        }
        return ans
    }
}
```