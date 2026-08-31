# My Swift Solution

**Author:** espadandy
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/2042598/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/2042598/)

---

Refer to the solution.
```
class Solution {
    func bestRotation(_ nums: [Int]) -> Int {
        var scoreTrend = Array(repeating: 0, count: nums.count)
        var bestScore = 0
        var currentScore = 0
        let n = nums.count
        var shift = 0
        
        for (i, num) in nums.enumerated() {
            if num > i {
                scoreTrend[i+1] += 1
                let a = (n-num+i+1)%n
                if a != 0 {
                    scoreTrend[(n-num+i+1)%n] -= 1
                }
            }
            else {
                if i != n-1 {
                    scoreTrend[i+1] += 1
                }
                scoreTrend[0] += 1
                scoreTrend[(i-num+1)%n] -= 1
            }
        }

        for (i, step) in scoreTrend.enumerated() {
            currentScore += step
            if currentScore > bestScore {
                bestScore = currentScore
                shift = i
            }
            
        }
        return shift
    }
}
```