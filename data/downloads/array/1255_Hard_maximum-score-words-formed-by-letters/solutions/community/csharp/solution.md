# C# Solution for Maximum Score of Words Formed By Letters Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5199781/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5199781/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem can be approached using bitmasking and dynamic programming (DP) to efficiently explore all subsets of words. By representing each subset with a bitmask, we can keep track of which words are included in the subset and compute the corresponding scores. The DP array will help us store and retrieve the maximum score for each subset, thereby avoiding redundant calculations.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Preprocess Data:
	\u2022	Letter Frequency Count: Use an array letterCount of size 26 to count the frequency of each letter in the letters array.
	\u2022	Word Scores and Letter Counts: For each word, compute its score and store the frequency of each letter in the word.
2.	Bitmask DP:
	\u2022	Initialize DP Array: Create a DP array dp where dp[mask] represents the maximum score obtainable using the subset of words represented by the bitmask mask.
	\u2022	Iterate Over Subsets: For each bitmask mask, check the subset of words it represents. Compute the total letter count and score for this subset.
	\u2022	Validate Subset: Check if the subset can be formed with the available letters. If valid, update the DP array.
	\u2022	Update DP for Transitions: For each word, check if it can be added to the current subset (by setting the corresponding bit) and update the DP array accordingly.
3.	Compute Maximum Score: The maximum value in the DP array will be the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Preprocessing: Calculating the score and letter frequency for each word takes O(n . m), where n is the number of words and m is the average length of the words.
\u2022	Bitmask DP:
    \u2022	Subsets Iteration: There are 2^n possible subsets of words.
    \u2022	Subset Validation: For each subset, checking if it can be formed and updating the DP array takes O(n . 26) = O(n), where 26 is the number of letters in the alphabet.
	\u2022	Therefore, the overall time complexity is O(n . 2^n . m).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	DP Array: The DP array has 2^n entries, resulting in O(2^n) space.
\u2022	Auxiliary Space: Additional space is used for storing letter counts and word scores, which is O(n . + n) = O(n).
\u2022	Hence, the total space complexity is O(2^n + n).

# Code
```
public class Solution {
    public int MaxScoreWords(string[] words, char[] letters, int[] score) {
        int[] letterCount = new int[26];
        foreach (char letter in letters) {
            letterCount[letter - 'a']++;
        }

        int n = words.Length;
        int[] wordScores = new int[n];
        int[][] wordLetterCounts = new int[n][];
        
        // Calculate score and letter count for each word
        for (int i = 0; i < n; i++) {
            wordLetterCounts[i] = new int[26];
            foreach (char c in words[i]) {
                wordLetterCounts[i][c - 'a']++;
                wordScores[i] += score[c - 'a'];
            }
        }
        
        int maxScore = 0;
        int totalSubsets = 1 << n;
        
        // DP array to store max score for each subset
        int[] dp = new int[totalSubsets];
        
        // Iterate over all possible subsets of words
        for (int mask = 0; mask < totalSubsets; mask++) {
            int[] currentLetterCount = new int[26];
            int currentScore = 0;
            
            // Check the current subset represented by the bitmask
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) {
                    for (int j = 0; j < 26; j++) {
                        currentLetterCount[j] += wordLetterCounts[i][j];
                    }
                    currentScore += wordScores[i];
                }
            }
            
            // Validate the current subset can be formed with the available letters
            bool isValid = true;
            for (int j = 0; j < 26; j++) {
                if (currentLetterCount[j] > letterCount[j]) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) {
                dp[mask] = currentScore;
                maxScore = Math.Max(maxScore, currentScore);
            }
            
            // Update dp for the subsets
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) == 0) {
                    int newMask = mask | (1 << i);
                    dp[newMask] = Math.Max(dp[newMask], dp[mask] + wordScores[i]);
                }
            }
        }
        
        return maxScore;
    }
}
```