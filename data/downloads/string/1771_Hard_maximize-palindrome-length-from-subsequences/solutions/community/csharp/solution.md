# Runtine beats 100% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/5918830/](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/5918830/)

---

# Intuition
The problem is about finding the longest palindrome that can be formed by selecting non-empty subsequences from two given strings. A palindrome reads the same forwards and backwards, so the challenge involves carefully matching characters from both strings to maximize the length.

# Approach
We combine the two strings into one, then use dynamic programming to build a table that tracks the lengths of palindromic subsequences, checking each pair of characters to determine if they can contribute to a palindrome while ensuring one character comes from the first string and the other from the second.

# Complexity
- Time complexity:
O(n2) due to the nested loops iterating over the combined string

- Space complexity:
O(n2) for the dynamic programming table, where n is the total length of the combined strings.

# Code
```csharp []
public class Solution
{
    public int LongestPalindrome(string word1, string word2)
    {
        // Combine the two words into one string
        string s = word1 + word2;
        int m = word1.Length, n = word2.Length;
        int res = 0;

        // Create a 2D array for dynamic programming
        int[][] dp = new int[n + m][];
        for (int i = 0; i < dp.Length; i++)
        {
            dp[i] = new int[n + m];
        }

        // Fill the DP table
        for (int j = 0; j < n + m; j++)
        {
            for (int i = j; i >= 0; i--)
            {
                // Check if characters at position i and j are the same
                if (s[i] == s[j])
                {
                    // If they are the same, calculate the length of the palindrome
                    dp[i][j] = (j - i < 2) ? j - i + 1 : dp[i + 1][j - 1] + 2;

                    // Check if i is in word1 and j is in word2
                    if (i < m && j >= m)
                    {
                        res = Math.Max(res, dp[i][j]); // Update the result
                    }
                }
                else
                {
                    // If they are not the same, take the maximum from the two possible cases
                    dp[i][j] = Math.Max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }

        return res; // Return the maximum palindrome length found
    }
}



```