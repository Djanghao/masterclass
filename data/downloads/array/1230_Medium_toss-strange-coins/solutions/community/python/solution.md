# Java & Python Solution | Bottom Up Tabulation Solution with Detailed Comment Explanation.

**Author:** kesterzhou
**Votes:** 2
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/1727725/](https://leetcode.com/problems/toss-strange-coins/solutions/1727725/)

---

```
class Solution {
    public double probabilityOfHeads(double[] prob, int target) {
        int probLen = prob.length;
        // dp is a 2d array 
        // dp[i][j] represents the probabilty that j coins face up 
        // after i coins are tossed each by once. 
        double[][] dp = new double[probLen + 1][target + 1];
        // For no coins tossed, the no coins will face head. initialize as 1
        dp[0][0] = 1;
        
        // For the dp
        
        for (int i = 1; i <= probLen; ++i) {
            double headProb = prob[i - 1], tailProb = 1 - headProb;
            // First all 0 coins face up scenarios
            // It only depends on the probabilty
            // that there are 0 coins facing up with i - 1 coins being tossed 
            // times the probabilty that we still get a tail this time.
            dp[i][0] = dp[i - 1][0] * tailProb;
            for (int j = 1; j <= target; j++) {
                // Remember: i, j represents that we have j coins face up with i number
                // of tosses. Therefore, the recurrence relation is:
                // for j heads up in i # of tosses, we can have two scenarios:
                // 1. j - 1 heads up in i - 1 # of toss times the probabilty we get a head this time. 
                // 2. j coins head up in i - 1 # of tosses times we have a tail probabilty this time. 
                // The combination of both probabilty above consistute the probability we have 
                // j coins head up within i number of tosses. 
                dp[i][j] = dp[i - 1][j - 1] * headProb + dp[i - 1][j] * tailProb;
            }
        }
        
        // Since we are only interested target # of coins face up within probLen number of total toss
        // we return the last index in this 2d state array as the result.
        return dp[probLen][target];
        
    }
}
```
**Python Solution Below**
```
class Solution:
    def probabilityOfHeads(self, prob: List[float], target: int) -> float:
        len_prob = len(prob)
        # Base Case check:
        if (len_prob == 0): 
            return 1 if len_prob == 0 else 0
        # Initialize a dp state 2d array where 
        # dp[i][j] represents the probability that j coins face up after
        # i coins are tossed once. 
        dp = [[0.0] * (target + 1) for _ in range(len_prob + 1)]
        # Initial state, for 0 coins tossed and 0 heads face up, the probabilty is 100% (1)
        dp[0][0] = 1
        
        # DP recurrence update starts
        for i in range(1, len_prob + 1):
            head_prob, tail_prob = prob[i - 1], 1 - prob[i - 1]
            # For i coins tossed and 0 coins face up
            # we only have one possible situation:
            # every single previous toss is a tail and we still have 
            # a tail this time.
            dp[i][0] = dp[i - 1][0] * tail_prob
            for j in range(1, target + 1):
                # Since dp[i][j] represents we have j coins head face up
                # within i number of tosses. 
                # There are two scenarios in this case:
                # 1. We already have j coins with head face up in i - 1 tosses.
                # we only need to have a tail on i-th toss.
                # 2. We have j - 1 coins with head face up in i - 1 tosses, hence
                # we need to have another head on i-th toss. 
                dp[i][j] = dp[i - 1][j - 1] * head_prob + dp[i - 1][j] * tail_prob
                
        # Return the state/probabilty where we have j coins face up with i number of tosses.
        return dp[len_prob][target]
```