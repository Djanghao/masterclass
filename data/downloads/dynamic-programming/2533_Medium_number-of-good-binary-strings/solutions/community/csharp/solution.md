# c#, Dynamic Programming

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3037926/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3037926/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dynamic programming: if we know solution for `i` length then we can update solutions for `i + oneGroup` and `i + zeroGroup` lengths  

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic programming

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public int GoodBinaryStrings(int minLength, int maxLength, int oneGroup, int zeroGroup) {
        int[] dp = new int[maxLength + 1];

        dp[0] = 1; 

        const int mod = 1_000_000_007;

        for (int i = 0; i < dp.Length; ++i) {
            if (i + oneGroup < dp.Length)
                dp[i + oneGroup] = (dp[i + oneGroup] + dp[i]) % mod;

            if (i + zeroGroup < dp.Length)
                dp[i + zeroGroup] = (dp[i + zeroGroup] + dp[i]) % mod;
        }

        return dp
            .Where((value, index) => index >= minLength)
            .Aggregate((s, a) => (s + a) % mod); 
    }
}
```