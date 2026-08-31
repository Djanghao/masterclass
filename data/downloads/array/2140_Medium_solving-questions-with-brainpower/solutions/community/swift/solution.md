# Swift | Clean solution

**Author:** VladimirTheLeet
**Votes:** 1
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3515513/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3515513/)

---


# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution {
    func mostPoints(_ questions: [[Int]]) -> Int
    {
        let n = questions.count
        var scoresDP: [Int] = Array(repeating: 0, count: n)
        var maxScore = 0, points: Int, brainpower: Int
        for i in scoresDP.indices.reversed()
        {
            points = questions[i][0]
            brainpower = questions[i][1] + 1
            if i + brainpower >= n {                
                scoresDP[i] = max(maxScore, points)
            } // skip to the max route somewhere next, or solve question, choose what brings more
            else {
                scoresDP[i] = max(maxScore, points + scoresDP[i + brainpower])
            }
            maxScore = max(maxScore, scoresDP[i])
        }
        return maxScore
    }
}
```