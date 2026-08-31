# C# Dynamic Programming Approach

**Author:** GetRid
**Votes:** 2
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/5197909/](https://leetcode.com/problems/student-attendance-record-ii/solutions/5197909/)

---

# Approach
<!-- Describe your approach to solving the problem. -->//  dp[i, a, l] represents the number of valid sequences of length i with a absences and l consecutive lates.
//  We initialize the base case where an empty sequence is valid.
//  We iterate through each possible length, number of absences, and consecutive lates, updating the dp table accordingly:
//  *Adding 'P' resets the count of consecutive lates to 0.
//  *Adding 'A' increases the absence count but resets the count of consecutive lates to 0.
//  *Adding 'L' increases the count of consecutive lates without changing the absence count.
//  *Finally, we sum up all valid sequences of length n to get the result.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n) 
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n)
___

# Code
```
public class Solution {
    private const int MOD = 1000000007;

    public int CheckRecord(int n) {
        if (n == 1) return 3;  // "P", "L", "A"
        
        long[,,] dp = new long[n + 1, 2, 3]; // dp[length, number of 'A's, number of consecutive 'L's]
        
        dp[0, 0, 0] = 1; // Base case: an empty string is valid
        
        for (int i = 1; i <= n; i++) {
            for (int a = 0; a <= 1; a++) { // At most 1 'A'
                for (int l = 0; l < 3; l++) { // At most 2 consecutive 'L's
                    // Add 'P'
                    dp[i, a, 0] = (dp[i, a, 0] + dp[i - 1, a, l]) % MOD;
                    
                    // Add 'A'
                    if (a > 0) {
                        dp[i, a, 0] = (dp[i, a, 0] + dp[i - 1, a - 1, l]) % MOD;
                    }
                    
                    // Add 'L'
                    if (l < 2) {
                        dp[i, a, l + 1] = (dp[i, a, l + 1] + dp[i - 1, a, l]) % MOD;
                    }
                }
            }
        }
        
        long result = 0;
        
        for (int a = 0; a <= 1; a++) {
            for (int l = 0; l < 3; l++) {
                result = (result + dp[n, a, l]) % MOD;
            }
        }
        
        return (int)result;
    }
}

```