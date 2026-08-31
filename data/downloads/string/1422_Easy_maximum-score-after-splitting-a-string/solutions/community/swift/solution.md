# Simple Solution ✅

**Author:** ProbablyLost
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4448855/](https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4448855/)

---

# Code
```
class Solution {
    func maxScore(_ s: String) -> Int {
        let score = calculateMaxScore(s)
        return score
    }
    
    private func calculateMaxScore(_ s: String) -> Int {
        var onesCount = s.filter { $0 == "1" }.count
        var zerosCount = 0
        var maxScore = 0

        for ch in s.dropLast() {
            if ch == "0" {
                zerosCount += 1
            } else {
                onesCount -= 1
            }
            
            maxScore = max(maxScore, onesCount + zerosCount)
        }

        return maxScore
    }
}

```