# C# Solution for String Compression II Problem

**Author:** Aman_Raj_Sinha
**Votes:** 8
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/4468958/](https://leetcode.com/problems/string-compression-ii/solutions/4468958/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dynamic Programming (DP): The solution utilizes dynamic programming to find the minimum length of the compressed string, considering at most \u2018k\u2019 deletions.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialization:
	\u2022	Creates a 2D array dp to store minimum lengths for substrings with different deletion counts.
	\u2022	Initializes the dp array with a default value of 9999 and sets dp[0, 0] = 0 as the base case representing an empty string with no deletions.
2.	Dynamic Programming Iteration:
	\u2022	Iterates through the string \u2018s\u2019 and the maximum allowed deletions \u2018k\u2019.
	\u2022	Calculates the count of the same characters in various substrings and the number of deletions.
	\u2022	Updates the dp array based on certain conditions involving characters and deletions.
3.	Return:
	\u2022	Returns dp[n, k], representing the minimum length for \u2018s\u2019 with at most \u2018k\u2019 deletions.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	The time complexity of the solution is O(n^2 * k), where \u2018n\u2019 is the length of the string \u2018s\u2019 and \u2018k\u2019 is the maximum number of deletions allowed.
\u2022	The nested loops iterating through the string and the deletion count contribute to this time complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity is O(n * k) for the 2D dp array, where \u2018n\u2019 is the length of the string \u2018s\u2019 and \u2018k\u2019 is the maximum number of deletions allowed.
\u2022	Additionally, constant space is used for other variables, resulting in overall space complexity proportional to the size of the dp array.

# Code
```
public class Solution {
    public int GetLengthOfOptimalCompression(string s, int k) {
        int n = s.Length;
        int[,] dp = new int[110, 110];
        
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= n; j++) {
                dp[i, j] = 9999;
            }
        }
        dp[0, 0] = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 0; j <= k; j++) {
                int cnt = 0, del = 0;
                
                for (int l = i; l >= 1; l--) {
                    if (s[l - 1] == s[i - 1]) {
                        cnt++;
                    } else {
                        del++;
                    }

                    if (j - del >= 0) {
                        int len = cnt >= 100 ? 3 : cnt >= 10 ? 2 : cnt >= 2 ? 1 : 0;
                        dp[i, j] = Math.Min(dp[i, j], dp[l - 1, j - del] + 1 + len);
                    }
                }

                if (j > 0) {
                    dp[i, j] = Math.Min(dp[i, j], dp[i - 1, j - 1]);
                }
            }
        }
        return dp[n, k];
    }
}
```