# dp

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/5327158/](https://leetcode.com/problems/4-keys-keyboard/solutions/5327158/)

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
    public int MaxA(int n) {
       var dp = new int[n + 1];

        for(var i = 1; i <=n; i++){
            dp[i] = Math.Max(dp[i -1] + 1, dp[i]);
            for (var j = i + 2; j <=n ; j++ ){
                dp[j] = Math.Max(dp[j], dp[i - 1] * (j - i));
            }
        }
        return dp[n]     ;
    }
}

```