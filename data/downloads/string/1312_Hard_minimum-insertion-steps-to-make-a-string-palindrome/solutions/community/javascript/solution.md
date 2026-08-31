# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3443028/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3443028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
>To make a given string `s` a palindrome, we need to insert characters at some positions in the string. If we can find the longest common subsequence (LCS) between the given string `s` and its reverse, we can find the characters that are already part of the palindrome. Then, we can insert the remaining characters (which are not part of the LCS) at their appropriate positions in the string to make it a palindrome.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Reverse the input string to get a new string `reversed_s`.
2. Initialize a 2D array `dp` of size `(n+1)x(n+1)` with 0s, where `n` is the length of the input string `s`.
3. Iterate through all pairs of indices `(i,j)` of the array `dp`, where `1<=i,j<=n`.
4. If the characters at indices `i-1` in string `s` and `j-1` in `reversed_s` are equal, set `dp[i][j] = dp[i-1][j-1] + 1`.
5. Otherwise, set `dp[i][j]` to the maximum of `dp[i-1][j]` and `dp[i][j-1]`.
6. The length of the LCS between `s` and `reversed_s` is `dp[n][n]`.
7. The minimum number of insertions required to make `s` a palindrome is `n - dp[n][n]`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
>O(n^2), where `n` is the length of the input string `s`. This is because we are filling up a 2D array of size `(n+1)x(n+1)` using dynamic programming approach.


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
>O(n^2), where `n` is the length of the input string `s`. This is because we are using a 2D array of size `(n+1)x(n+1)` to store the LCS of substrings.


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
    public int minInsertions(String s) {
        // reverse the input string
        String reversed = new StringBuilder(s).reverse().toString();
        // get the length of the input string
        int n = s.length();
        // create a 2D array to store the LCS of substrings
        int[][] dp = new int[n+1][n+1];
        
        // fill up the dp array using dynamic programming approach
        for(int i=1; i<=n; i++) {
            for(int j=1; j<=n; j++) {
                if(s.charAt(i-1) == reversed.charAt(j-1)) {
                    // if characters match, add 1 to LCS
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    // otherwise, take maximum LCS of two substrings
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        // return the minimum number of insertions required to make s a palindrome
        // this is the difference between the length of s and the length of its LCS
        return n - dp[n][n];
    }
}

```
```python []
class Solution(object):
    def minInsertions(self, s):
        # reverse the input string
        reversed_s = s[::-1]
        # get the length of the input string
        n = len(s)
        # create a 2D array to store the LCS of substrings
        dp = [[0 for j in range(n+1)] for i in range(n+1)]
        
        # fill up the dp array using dynamic programming approach
        for i in range(1, n+1):
            for j in range(1, n+1):
                if s[i-1] == reversed_s[j-1]:
                    # if characters match, add 1 to LCS
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    # otherwise, take maximum LCS of two substrings
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        
        # return the minimum number of insertions required to make s a palindrome
        # this is the difference between the length of s and the length of its LCS
        return n - dp[n][n]
```
```C++ []
class Solution {
public:
    int minInsertions(string s) {
        // reverse the input string
        string reversed_s = string(s.rbegin(), s.rend());
        // get the length of the input string
        int n = s.length();
        // create a 2D vector to store the LCS of substrings
        vector<vector<int>> dp(n+1, vector<int>(n+1, 0));
        
        // fill up the dp vector using dynamic programming approach
        for(int i=1; i<=n; i++) {
            for(int j=1; j<=n; j++) {
                if(s[i-1] == reversed_s[j-1]) {
                    // if characters match, add 1 to LCS
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    // otherwise, take maximum LCS of two substrings
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        // return the minimum number of insertions required to make s a palindrome
        // this is the difference between the length of s and the length of its LCS
        return n - dp[n][n];
    }
};
```

``` javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    // reverse the input string
    const reversedS = s.split('').reverse().join('');
    // get the length of the input string
    const n = s.length;
    // create a 2D array to store the LCS of substrings
    const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
    
    // fill up the dp array using dynamic programming approach
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if(s[i-1] === reversedS[j-1]) {
                // if characters match, add 1 to LCS
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                // otherwise, take maximum LCS of two substrings
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    // return the minimum number of insertions required to make s a palindrome
    // this is the difference between the length of s and the length of its LCS
    return n - dp[n][n];
};

```
```
LCS stands for Longest Common Subsequence
```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```