# C# Solution for Palindrome Partitioning Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/5191312/](https://leetcode.com/problems/palindrome-partitioning/solutions/5191312/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the C# solution involves two main steps: preprocessing and backtracking.

1.	Preprocessing with Dynamic Programming:
	\u2022	The goal is to quickly determine if any substring is a palindrome. This can be efficiently achieved using a 2D dynamic programming table.
	\u2022	We first build a DP table where dp[i][j] is true if the substring s[i..j] is a palindrome.
	\u2022	This preprocessing step allows us to check in constant time whether any substring is a palindrome, which significantly speeds up the backtracking step.
2.	Backtracking:
	\u2022	Using the precomputed DP table, we explore all possible partitions of the string.
	\u2022	If a substring is identified as a palindrome, it is added to the current partition, and the function recursively partitions the remaining part of the string.
	\u2022	This process continues until all possible palindromic partitions are found.


# Approach
<!-- Describe your approach to solving the problem. -->
1.	Dynamic Programming Table:
	\u2022	Initialize a 2D boolean array dp of size n x n (where n is the length of the string).
	\u2022	Fill the table by iterating over all possible substring lengths.
	\u2022	For substrings of length 1, mark dp[i][i] as true (a single character is always a palindrome).
	\u2022	For substrings of length 2, mark dp[i][i+1] as true if both characters are the same.
	\u2022	For substrings longer than 2, mark dp[i][j] as true if the characters s[i] and s[j] are the same and dp[i+1][j-1] is true.
2.	Backtracking:
	\u2022	Define a recursive function that explores all possible partitions starting from the current index.
	\u2022	Use the DP table to check if the current substring is a palindrome.
	\u2022	If it is, add it to the current partition list and recursively partition the rest of the string.
	\u2022	When the end of the string is reached, add the current partition to the result list.
	\u2022	Backtrack by removing the last added substring and continue exploring other possible partitions.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The overall time complexity is O(N^2 + N . 2^N):

1.	Dynamic Programming Preprocessing:
	\u2022	Constructing the DP table takes O(N^2) because we need to fill in each cell of the table based on the substring checks.
	\u2022	This involves iterating over all possible substring lengths and starting indices.
2.	Backtracking:
	\u2022	Generating all possible partitions and checking each partition against the DP table takes O(N . 2^N).
	\u2022	The number of possible partitions is 2^{N-1}, and for each partition, we need to store and possibly backtrack the current partition list which takes O(N) time in the worst case.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(N^2 + N . 2^N):

1.	Dynamic Programming Table:
	\u2022	The DP table itself uses O(N^2) space to store the boolean values for palindromic checks.
2.	Backtracking:
	\u2022	The space required for the recursion stack and storing the result partitions is O(N . 2^N) in the worst case.
	\u2022	Each possible partition can be of length up to N, and there are 2^{N-1} possible partitions.

# Code
```
public class Solution {
    public IList<IList<string>> Partition(string s) {
        IList<IList<string>> result = new List<IList<string>>();
        int n = s.Length;
        bool[,] dp = new bool[n, n];

        // Fill the dp array
        for (int len = 1; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                if (len == 1) {
                    dp[i, j] = true;
                } else if (len == 2) {
                    dp[i, j] = (s[i] == s[j]);
                } else {
                    dp[i, j] = (s[i] == s[j] && dp[i + 1, j - 1]);
                }
            }
        }

        // Use backtracking to find all partitions
        Backtrack(s, 0, new List<string>(), result, dp);
        return result;
    }
    private void Backtrack(string s, int start, List<string> currentList, IList<IList<string>> result, bool[,] dp) {
        if (start == s.Length) {
            result.Add(new List<string>(currentList));
            return;
        }
        for (int end = start; end < s.Length; end++) {
            if (dp[start, end]) {
                currentList.Add(s.Substring(start, end - start + 1));
                Backtrack(s, end + 1, currentList, result, dp);
                currentList.RemoveAt(currentList.Count - 1);
            }
        }
    }
}
```