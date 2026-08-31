# C# Solution for Longest Ideal Subsequence Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/5069831/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/5069831/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
\u2022	The intuition behind this solution is to use dynamic programming to efficiently find the length of the longest ideal string.
\u2022	It iterates through the input string, maintaining an array to track the length of the longest ideal string ending with each letter.

# Approach
<!-- Describe your approach to solving the problem. -->
\u2022	Initialize an array dp of length 26 to keep track of the length of the longest ideal string ending with each letter.
\u2022	Iterate through each character in the input string s.
\u2022	For each character, compute the maximum length of an ideal string ending with that character by considering the characters within range k.
\u2022	Update the dp array accordingly and keep track of the maximum length found.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	The time complexity of the solution is O(N * K), where N is the length of the input string s and K is the maximum difference allowed between adjacent letters in the ideal string.
\u2022	Within each iteration, we iterate through a constant number of characters (26) to compute the maximum length of an ideal string ending with the current character.
\u2022	Thus, the overall time complexity is O(N * K).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity is O(1) because the space used is constant and does not depend on the size of the input.
\u2022	We only use an array of size 26 (dp) to store the lengths of the longest ideal strings ending with each letter.

# Code
```
public class Solution {
    public int LongestIdealString(string s, int k) {
        int n = s.Length;
        int[] dp = new int[26];
        int maxLen = 0;
        
        for (int i = 0; i < n; i++) {
            char curr = s[i];
            int idx = curr - 'a';
            int best = 0;
            
            for (int prev = 0; prev < 26; prev++) {
                if (Math.Abs(curr - 'a' - prev) <= k) {
                    best = Math.Max(best, dp[prev]);
                }
            }
            
            dp[idx] = best + 1;
            maxLen = Math.Max(maxLen, dp[idx]);
        }
        
        return maxLen;
    }
}
```