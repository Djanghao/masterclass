# O(N) DP Bottom up solution

**Author:** infraredshift
**Votes:** 4
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/2994161/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/2994161/)

---

# Code
```
public class Solution {
    public long MostPoints(int[][] questions) {
        var dp = new long[questions.Length + 1];
        dp[questions.Length] = 0;
        for(var i = questions.Length - 1; i >=0; i--){
            var miss = questions[i][1];
            long nextifanswered = (i + 1 + miss < questions.Length) ? dp[i + 1 + miss] : 0;
            dp[i] = Math.Max(dp[i + 1], questions[i][0] + nextifanswered);
        }
        return dp[0];
    }
}
```