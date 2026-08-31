# C#️⃣ SOLUTION LCP & DP👉🎈

**Author:** Obose
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/5359695/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/5359695/)

---

# Intuition
The problem involves deleting substrings from a given string such that the number of deletions is maximized. To achieve this, we need to find the longest common prefixes between different parts of the string. Using dynamic programming (DP) along with the Longest Common Prefix (LCP) array can help us efficiently solve the problem.

# Approach
1. **Longest Common Prefix (LCP) Array**: 
   - Construct an LCP array to store the length of the longest common prefix between any two suffixes of the string.
   - Traverse the string in reverse to fill the LCP array.
2. **Dynamic Programming (DP)**:
   - Use a DP array where `dp[i]` represents the maximum number of deletions possible for the substring starting from index `i`.
   - Initialize `dp[i]` to 1, as we can always delete the entire remaining substring.
   - For each position `i`, check substrings of length `j` and update `dp[i]` if the substring can be deleted using the LCP array.

# Complexity
- Time complexity: 
  - Constructing the LCP array takes $$O(n^2)$$ time.
  - Filling the DP array takes $$O(n^2)$$ time.
  - Overall time complexity is $$O(n^2)$$.
- Space complexity:
  - The LCP array takes $$O(n^2)$$ space.
  - The DP array takes $$O(n)$$ space.
  - Overall space complexity is $$O(n^2)$$.

# Code
```
public class Solution {
    public int DeleteString(string s) {
        int n = s.Length;
        
        // Create and fill the LCP (Longest Common Prefix) array
        int[,] lcp = new int[n + 1, n + 1];
        for (int i = n - 1; i >= 0; i--) {
            for (int j = n - 1; j > i; j--) {
                if (s[i] == s[j]) {
                    lcp[i, j] = lcp[i + 1, j + 1] + 1;
                }
            }
        }
        
        // DP array to store the maximum number of operations for each prefix
        int[] dp = new int[n + 1];
        
        // Fill the DP array
        for (int i = n - 1; i >= 0; i--) {
            dp[i] = 1; // We can always delete the entire remaining string
            for (int j = 1; i + j * 2 <= n; j++) {
                if (lcp[i, i + j] >= j) {
                    dp[i] = Math.Max(dp[i], dp[i + j] + 1);
                }
            }
        }
        
        return dp[0];
    }
}
```