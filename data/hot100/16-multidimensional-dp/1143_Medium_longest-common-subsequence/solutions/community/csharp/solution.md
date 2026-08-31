# C# Solution for Longest Common Subsequence Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-common-subsequence/solutions/4622277/](https://leetcode.com/problems/longest-common-subsequence/solutions/4622277/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The optimized C# solution uses a 1D array to represent the length of the longest common subsequence for different substrings of text1 and text2. It aims to find the length efficiently by updating the array in-place.

# Approach
<!-- Describe your approach to solving the problem. -->
The algorithm iterates through the strings, updating the 1D array dp. The value at dp[j] represents the length of the longest common subsequence of the substrings text1[0...i-1] and text2[0...j-1].

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(m * n), where m and n are the lengths of text1 and text2 respectively. The algorithm fills in a 1D array of size n + 1 for each iteration over the characters of text1.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(min(m, n)). The algorithm uses a 1D array of size n + 1 to store intermediate results. This is a space optimization compared to the original approach, which used a 2D array of size (m + 1) x (n + 1). The space is reduced by only keeping track of the current row and the previous diagonal element.

# Code
```
public class Solution {
    public int LongestCommonSubsequence(string text1, string text2) {
        int m = text1.Length;
        int n = text2.Length;

        int[] dp = new int[n + 1];

        for (int i = 1; i <= m; i++) {
            int prev = 0;  // Initialize the value for the previous diagonal element

            for (int j = 1; j <= n; j++) {
                int temp = dp[j];  // Save the current value in dp[j] for the next iteration
                if (text1[i - 1] == text2[j - 1]) {
                    dp[j] = prev + 1;
                } else {
                    dp[j] = Math.Max(dp[j], dp[j - 1]);
                }
                prev = temp;  // Update prev for the next iteration
            }
        }

        return dp[n];
    }
}
```