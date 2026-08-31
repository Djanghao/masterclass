# Palindrome Partitioning II || JAVASCRIPT || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/4496295/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/4496295/)

---

# Approach
DP with Memoization

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```
var minCut = function(s) {
      let n = s.length;
    // Create a 2D array to store whether substrings are palindromes.
    let isPalindrome = Array(n).fill(0).map(() => Array(n).fill(false));   
    // Initialize the isPalindrome array for single-character substrings.
    for (let i = 0; i < n; i++) {
        isPalindrome[i][i] = true;
    }   
    // Populate the isPalindrome array for substrings of length greater than 1.
    for (let len = 2; len <= n; len++) {
        for (let start = 0; start <= n - len; start++) {
            const end = start + len - 1;
            if (len === 2) {
                // Check if the substring of length 2 is a palindrome.
                isPalindrome[start][end] = (s[start] === s[end]);
            } else {
                // Check if the current substring is a palindrome based on inner substring palindromes.
                isPalindrome[start][end] = (s[start] === s[end] && isPalindrome[start + 1][end - 1]);
            }
        }
    }    
    // Create an array to store the minimum cuts needed for each substring.
    let dp = Array(n).fill(Number.MAX_VALUE);
    
    // Iterate through each substring to calculate the minimum cuts.
    for (let end = 0; end < n; end++) {
        if (isPalindrome[0][end]) {
            // If the entire substring is a palindrome, no cuts are needed.
            dp[end] = 0;
        } else {
            // Iterate through possible starting points to find the minimum cuts.
            for (let start = 1; start <= end; start++) {
                if (isPalindrome[start][end]) {
                    // If the current substring is a palindrome, update the minimum cuts.
                    dp[end] = Math.min(dp[end], dp[start - 1] + 1);
                }
            }
        }
    }   
    // Return the minimum cuts needed for the entire string.
    return dp[n - 1];
```