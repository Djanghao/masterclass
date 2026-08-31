# [Swift] 100%/100%

**Author:** sashkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3525826/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3525826/)

---

# Complexity
- Time complexity:
O(n*m + nlogn), where n - number of athletes, m - real maximum of athlete's age within the team (can be far less than 1000)

- Space complexity:
O(n + m), where n - number of athletes, m - maximum of athlete's age within the team

# Code
```
class Solution {
    func bestTeamScore(_ scores: [Int], _ ages: [Int]) -> Int {
        let pair = zip(scores, ages).sorted {
            if $0.0 == $1.0 {
                return $0.1 < $1.1
            }
            
            return $0.0 < $1.0
        }
        
        let topAge = ages.max()!
        
        var dp: [Int] = Array(repeating: 0, count: topAge + 2)
        
        for (score, age) in pair {
            dp[age] += score
            for j in age+1...topAge+1 {
                dp[j] = max(dp[j], dp[j-1])
            }
        }
        
        return dp[topAge+1]
    }
}
```