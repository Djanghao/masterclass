# 💥 Runtime beats 100.00%, Memory beats 89.66% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/5783170/](https://leetcode.com/problems/valid-palindrome-iii/solutions/5783170/)

---

# Intuition
I need to check if a string can be turned into a palindrome by removing at most k characters. If fewer than or equal to k deletions are needed, it\u2019s a k-palindrome.

# Approach
DP Table: Use a 2D table dp[i][j] to store the minimum deletions needed to make the substring from i to j a palindrome.

Base Cases: Single characters need 0 deletions. For two characters, it\u2019s either 0 or 1 deletion.

Fill Table: Compare characters at the ends:
If they match, use the result for the inner substring.
If not, calculate deletions for both possible removals and take the minimum.

# Complexity
- Time complexity:
O(n^2) \u2013 filling the DP table.

- Space complexity:
O(n^2) \u2013 for the DP table.

# Code
```csharp []
public class Solution
{
    public bool IsValidPalindrome(string s, int k)
    {
        int n = s.Length;
        var dp = new int[n, n];
        
        // Initialize base cases
        for (int length = 1; length <= n; length++)
        {
            for (int i = 0; i + length - 1 < n; i++)
            {
                int j = i + length - 1;
                
                if (length == 1)
                {
                    dp[i, j] = 0;
                }
                else if (length == 2)
                {
                    dp[i, j] = (s[i] == s[j]) ? 0 : 1;
                }
                else
                {
                    if (s[i] == s[j])
                    {
                        dp[i, j] = dp[i + 1, j - 1];
                    }
                    else
                    {
                        dp[i, j] = Math.Min(dp[i + 1, j], dp[i, j - 1]) + 1;
                    }
                }
            }
        }
        
        // Check if we can remove at most k characters
        return dp[0, n - 1] <= k;
    }
}

```