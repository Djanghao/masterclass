# Simple DP solution | C# | 100% efficient

**Author:** Baymax_
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518509/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518509/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Utilizing the DP approach, for the current length, check how we can add zero 0's and one 1's


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) - as we need to loop over 1 to high

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) - aas we use DP array

## Please upvote if you like the approach

# Code
```
public class Solution {
    public int CountGoodStrings(int low, int high, int zero, int one) {
        int[] dp = new int[high + 1];
        dp[0] = 1;
        int mod = 1000000007;

        for (int i = 1; i <= high; i++)
        {
            if (i - zero >= 0)
            {
                dp[i] += dp[i - zero];
            }

            if (i - one >= 0)
            {
                dp[i] += dp[i - one];
            }

            dp[i] %= mod;
        }

        int result = 0;
        for (int i = low; i <= high; i++)
        {
            result = (result + dp[i]) % mod;
        }

        return result;
    }
}
```
## Please upvote if you like the approach