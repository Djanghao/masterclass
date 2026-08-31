# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 76
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3414715/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3414715/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. A palindromic subsequence is a subsequence that reads the same backward as forward. To find the length of the longest palindromic subsequence in a given string, we can use dynamic programming.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Define a 2D array `dp` of size `n` by `n`, where `n` is the length of the input string `s`.
2. Initialize the diagonal elements of `dp` to 1, since a single character is a palindrome of length 1.
3. Iterate over all possible substrings of `s` of length 2 or more, in reverse order. The reason for iterating in reverse order is that we need to use the values in `dp` computed in previous iterations, which are stored in the lower half of the array.
4. For each substring `s[i:j]`, if `s[i] == s[j]`, the length of the longest palindromic subsequence is `2 + dp[i+1][j-1]`, because we can include the first and last characters of the substring in the subsequence and the remaining substring is still a palindrome. Otherwise, the length of the longest palindromic subsequence is the
maximum of `dp[i+1][j]` and `dp[i][j-1]`, because we can either include the first character or the last character, but not both.
5. After iterating over all substrings, the length of the longest palindromic subsequence in `s` is stored in `dp[0][n-1]`.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the dynamic programming solution is $O(n^2)$, where `n` is the length of the input string. This is because we iterate over all possible substrings of s of length 2 or more, and each iteration takes constant time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 The space complexity is also $O(n^2)$, because we need to store the length of the longest palindromic subsequence for each substring in `dp`.

  
![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```java []
class Solution {
    public int longestPalindromeSubseq(String s) {
        // Get the length of the input string
        int n = s.length();
        // Initialize a 2D array to store the length of the longest palindromic subsequence
        int[][] dp = new int[n][n];
        
        // Iterate over the substrings in reverse order to fill in the dp table bottom-up
        for (int i = n-1; i >= 0; i--) {
            // Base case: the longest palindromic subsequence of a single character is 1
            dp[i][i] = 1;
            for (int j = i+1; j < n; j++) {
                // If the two characters match, the longest palindromic subsequence can be extended by two
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = 2 + dp[i+1][j-1];
                } else {
                    // Otherwise, we take the maximum of the two possible substrings
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
                }
            }
        }
        
        // The length of the longest palindromic subsequence is in the top-right corner of the dp table
        return dp[0][n-1];
    }
}

```
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    // Get the length of the input string
    const n = s.length;
    // Initialize a 2D array to store the length of the longest palindromic subsequence
    const dp = Array(n).fill().map(() => Array(n).fill(0));
    
    // Iterate over the substrings in reverse order to fill in the dp table bottom-up
    for (let i = n-1; i >= 0; i--) {
        // Base case: the longest palindromic subsequence of a single character is 1
        dp[i][i] = 1;
        for (let j = i+1; j < n; j++) {
            // If the two characters match, the longest palindromic subsequence can be extended by two
            if (s[i] === s[j]) {
                dp[i][j] = 2 + dp[i+1][j-1];
            } else {
                // Otherwise, we take the maximum of the two possible substrings
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }
    
    // The length of the longest palindromic subsequence is in the top-right corner of the dp table
    return dp[0][n-1];
};
```
```python []
class Solution(object):
    def longestPalindromeSubseq(self, s):
        n = len(s)
        dp = [[0]*n for _ in range(n)]
        
        for i in range(n-1, -1, -1):
            dp[i][i] = 1
            for j in range(i+1, n):
                if s[i] == s[j]:
                    dp[i][j] = 2 + dp[i+1][j-1]
                else:
                    dp[i][j] = max(dp[i+1][j], dp[i][j-1])
                    
        return dp[0][n-1]
```
```ruby []
class Solution {
public:
    int longestPalindromeSubseq(string s) {
        int n = s.size();
        vector<vector<int>> dp(n, vector<int>(n, 0));
        
        for (int i = n-1; i >= 0; i--) {
            dp[i][i] = 1;
            for (int j = i+1; j < n; j++) {
                if (s[i] == s[j]) {
                    dp[i][j] = 2 + dp[i+1][j-1];
                } else {
                    dp[i][j] = max(dp[i+1][j], dp[i][j-1]);
                }
            }
        }
        
        return dp[0][n-1];
    }
};
```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```
