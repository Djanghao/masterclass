# C# Solution for Word Break II Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/5206805/](https://leetcode.com/problems/word-break-ii/solutions/5206805/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to segment a string into all possible sentences where each word in the sentence belongs to a given dictionary. Using dynamic programming (DP) helps us efficiently determine the possible break points in the string. Once we have these break points, we use backtracking to construct the sentences by exploring these valid segments.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Dynamic Programming (DP):
	\u2022	Use a DP array to mark the end indices of valid substrings that can be segmented using the words in the dictionary.
	\u2022	Each position in the DP array will store all possible sentences that can be formed up to that position.
2.	Backtracking:
	\u2022	Use the information from the DP array to construct all possible sentences by combining the valid segments.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	The time complexity is O(n^3) in the worst case:
    \u2022	The outer loop runs n times.
    \u2022	The inner loop also runs up to n times for each position in the outer loop.
    \u2022	Substring extraction takes O(n) in the worst case.
    \u2022	Hence, the combined complexity is O(n^3).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity is O(n * 2^n) in the worst case:
	\u2022	The DP array dp can have up to n entries, and each entry can store a list of sentences.
	\u2022	In the worst case, there can be up to 2^n possible sentences due to different combinations of valid segments.

# Code
```
public class Solution {
    public IList<string> WordBreak(string s, IList<string> wordDict) {
        HashSet<string> wordSet = new HashSet<string>(wordDict);
        List<string>[] dp = new List<string>[s.Length + 1];
        dp[0] = new List<string> { "" };

        for (int i = 1; i <= s.Length; i++) {
            List<string> list = new List<string>();
            for (int j = 0; j < i; j++) {
                string word = s.Substring(j, i - j);
                if (dp[j] != null && wordSet.Contains(word)) {
                    foreach (string sentence in dp[j]) {
                        list.Add((sentence + " " + word).Trim());
                    }
                }
            }
            dp[i] = list.Count > 0 ? list : null;
        }

        return dp[s.Length] ?? new List<string>();
    }
}
```