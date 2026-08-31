# dp

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/5382736/](https://leetcode.com/problems/toss-strange-coins/solutions/5382736/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public double ProbabilityOfHeads(double[] prob, int target) {
        var dp = new double[prob.Length + 1];
        dp[0] = 1;

        for ( var i = 0 ; i < prob.Length; i ++){
            for (var j = i + 1 ; j > 0; j --){
                dp[j] += dp[j -1] * prob[i];
                dp[j -1] *= 1 - prob[i];
            }
        }
        return dp[target];
    }
}
```