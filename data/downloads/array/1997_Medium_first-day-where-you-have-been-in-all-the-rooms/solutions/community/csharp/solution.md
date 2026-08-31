# C# Dynamic Programming

**Author:** anand9589
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/2744269/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/2744269/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
        public int FirstDayBeenInAllRooms(int[] nextVisit)
        {
            long[] dp = new long[nextVisit.Length];
            int mod = (int)1e9 + 7;

            for (int i = 1; i < nextVisit.Length; i++)
            {
                if (nextVisit[i - 1] == i - 1)
                {
                    dp[i] = dp[i - 1] + 2;
                }
                else
                {
                    dp[i] = (dp[i - 1] + dp[i-1] - dp[nextVisit[i-1]] + 2 + mod) % mod;
                }
            }

            return (int)dp[nextVisit.Length - 1];
        }
       
}
```