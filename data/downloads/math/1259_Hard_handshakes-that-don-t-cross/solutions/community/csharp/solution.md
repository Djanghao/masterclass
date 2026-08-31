# 💥Runtime and memory beats 100% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/5796540/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/5796540/)

---

# Intuition
To count non-crossing handshakes, use Catalan numbers, which count such arrangements.

# Approach
Check Even: Only work with even numbers of people.

Dynamic Programming: Use a DP array where each entry represents valid handshake arrangements for a given number of pairs, building up from smaller cases.

# Complexity
- Time complexity:
O(n2), due to nested loops for DP computation.

- Space complexity:
O(n), for storing results in the DP array.

# Code
```csharp []
public class Solution
{
    private const int MOD = 1000000007;
    
    public int NumberOfWays(int numPeople)
    {
        if (numPeople % 2 != 0) return 0; // Ensure numPeople is even

        int n = numPeople / 2;
        var dp = new int[n + 1];
        dp[0] = 1; // Base case

        // Compute Catalan numbers using a more compact form
        for (int i = 1; i <= n; i++)
        {
            dp[i] = 0;
            for (int j = 0; j < i; j++)
            {
                dp[i] = (dp[i] + (int)((long)dp[j] * dp[i - j - 1] % MOD)) % MOD;
            }
        }

        return dp[n];
    }
}

```