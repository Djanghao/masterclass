# Optimized Time and Space Complexity for Longest Palindromic Subsequence Problem (100% / 100%)

**Author:** polyym
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3423619/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3423619/)

---

# Intuition
When given a string, our first thought to find the longest palindromic subsequence might be to check all possible subsequences and identify the longest one that is also a palindrome. However, this approach is not efficient. We can instead use dynamic programming to break the problem down into smaller overlapping subproblems, making it more manageable and efficient.

# Approach
Our approach is to create a 2D DP table to store the lengths of the longest palindromic subsequences for substrings. However, to optimize the space complexity, we only use two rows in the DP table. We iterate through the string in reverse order and for each character, we iterate through the remaining characters in the substring. If the current characters are the same, we increment the length of the palindromic subsequence by 2 and add the previously found longest palindromic subsequence for the inner substring. Otherwise, we take the maximum length of the subsequences without the current characters. Finally, we return the length of the longest palindromic subsequence for the entire string.

# Complexity
- Time complexity: $$O(n^2)$$
The time complexity is driven by the nested loops iterating through the characters of the string. In the worst case, we must check all pairs of characters in the string, which leads to a quadratic time complexity.

- Space complexity: $$O(n)$$
By using only two rows in the DP table, we have reduced the space complexity from $$O(n^2)$$ to $$O(n)$$, making the solution more space-efficient.

# Code
```
/**
 * Calculate the length of the longest palindromic subsequence in a string.
 * @param s - The input string.
 * @returns The length of the longest palindromic subsequence.
 */
function longestPalindromeSubseq(s: string): number {
  const n = s.length;

  // Create two rows for the DP table, which will be used to store the
  // lengths of the longest palindromic subsequences for substrings.
  // We only need two rows to optimize space complexity.
  const dp: number[][] = Array.from({ length: 2 }, () => Array(n).fill(0));

  // Iterate through the string in reverse order.
  for (let i = n - 1; i >= 0; i--) {
    // Set the length of palindromic subsequences of single characters to 1.
    dp[i % 2][i] = 1;

    // Iterate through the remaining characters in the substring.
    for (let j = i + 1; j < n; j++) {
      // If the current characters are the same, increment the length of
      // the palindromic subsequence by 2 and add the previously found
      // longest palindromic subsequence for the inner substring.
      if (s[i] === s[j]) {
        dp[i % 2][j] = 2 + dp[(i + 1) % 2][j - 1];
      }
      // Otherwise, take the maximum length of the subsequences without
      // the current characters.
      else {
        dp[i % 2][j] = Math.max(dp[(i + 1) % 2][j], dp[i % 2][j - 1]);
      }
    }
  }

  // Return the length of the longest palindromic subsequence for the entire string.
  return dp[0][n - 1];
}
```
![516. Longest Palindromic Subsequence.PNG](./images/0.png)
