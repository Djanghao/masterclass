# 💥 Runtime beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/5767851/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/5767851/)

---

# Intuition
When I add a new character to a string, I can either include it in existing subsequences or not. Every time I see a new character, it doubles the number of subsequences I can form. However, if a character appears more than once, I have to be careful not to double-count subsequences that were already created with this character before.


# Approach
I use a dynamic programming (dp) array to track how many distinct subsequences I can form as I go through the string. For each character, I double the number of subsequences because I can include or exclude it. I also keep track of where each character last appeared to avoid counting duplicates. At the end, I return the number of subsequences minus the empty one.


# Complexity
- Time complexity:
O(n), since I go through the string once.


- Space complexity:
O(n), for the dp array I use to store results.


# Code
```csharp []
public class Solution {
    public int DistinctSubseqII(string s) {
        int MOD = 1_000_000_007;
        int n = s.Length;
        
        // dp[i] represents the number of distinct subsequences up to index i.
        int[] dp = new int[n + 1];
        dp[0] = 1; // Base case: empty subsequence

        int[] last = new int[26]; // Last occurrence of each character
        Array.Fill(last, -1);

        for (int i = 0; i < n; i++) {
            dp[i + 1] = (2 * dp[i]) % MOD; // Double the subsequences by adding s[i]
            
            int charIndex = s[i] - 'a';
            if (last[charIndex] != -1) {
                dp[i + 1] = (dp[i + 1] - dp[last[charIndex]] + MOD) % MOD; // Remove duplicates
            }

            last[charIndex] = i; // Update last occurrence of the current character
        }

        // Subtract 1 to exclude the empty subsequence
        return (dp[n] - 1 + MOD) % MOD;
    }
}

```