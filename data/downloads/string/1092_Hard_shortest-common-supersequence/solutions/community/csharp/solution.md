# 💥C# | Runtime beats 100.00%, Memory beats 72.22% [EXPLAINED]

**Author:** r9n
**Votes:** 12
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/5783169/](https://leetcode.com/problems/shortest-common-supersequence/solutions/5783169/)

---

# Intuition
To find the shortest string containing two given strings as subsequences, first find their longest common subsequence (LCS). Use this LCS to merge the two strings efficiently.

# Approach
Compute LCS: Use a dynamic programming table to find the longest common subsequence.

Build Supersequence: Merge the strings around the LCS to get the shortest common supersequence.

# Complexity
- Time complexity:
O(m * n) \u2013 Filling the table and reconstructing the sequence.

- Space complexity:
O(m * n) \u2013 Storing the table.

# Code
```csharp []
public class Solution 
{
    public string ShortestCommonSupersequence(string str1, string str2) 
    {
        int m = str1.Length, n = str2.Length;
        var dp = new int[m, n];
        
        // Initialize dp table for the first row and column
        for (int i = 0; i < m; i++)
            dp[i, 0] = (str1[i] == str2[0]) ? 1 : (i > 0 ? dp[i - 1, 0] : 0);
        
        for (int j = 0; j < n; j++)
            dp[0, j] = (str2[j] == str1[0]) ? 1 : (j > 0 ? dp[0, j - 1] : 0);
        
        // Fill the dp table
        for (int i = 1; i < m; i++)
        {
            for (int j = 1; j < n; j++)
            {
                if (str1[i] == str2[j])
                    dp[i, j] = dp[i - 1, j - 1] + 1;
                else
                    dp[i, j] = Math.Max(dp[i, j - 1], dp[i - 1, j]);
            }
        }
        
        // Trace back to find the common subsequence
        var common = new StringBuilder();
        int x = m - 1, y = n - 1;
        
        while (x >= 0 && y >= 0)
        {
            if (str1[x] == str2[y])
            {
                common.Insert(0, str1[x]);
                x--;
                y--;
            }
            else if (x > 0 && dp[x, y] == dp[x - 1, y])
                x--;
            else
                y--;
        }
        
        // Build the result from the common subsequence
        var result = new StringBuilder();
        int prevX = 0, prevY = 0;
        x = y = 0;
        
        foreach (char c in common.ToString())
        {
            while (x < m && str1[x] != c)
                result.Append(str1[x++]);
            while (y < n && str2[y] != c)
                result.Append(str2[y++]);
            result.Append(c);
            x++;
            y++;
        }
        
        // Append the remaining characters
        result.Append(str1.Substring(x));
        result.Append(str2.Substring(y));
        
        return result.ToString();
    }
}

```