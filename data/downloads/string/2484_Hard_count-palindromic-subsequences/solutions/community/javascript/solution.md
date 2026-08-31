# ✅ JavaScript, easy DP solution with comments and explanation 🔥

**Author:** m12s44
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-palindromic-subsequences/solutions/3442311/](https://leetcode.com/problems/count-palindromic-subsequences/solutions/3442311/)

---


# Code
```
var countPalindromes = function(s) {
    const modulo = 1e9 + 7
    let answ = 0

    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
            // check all possible patterns - 00x00, 01x10, 02x20 ... 98x89, 99x99
            const pattern = [x, y, -1, y, x]

            // init dynamic programming array
            // where dp[0] = 1, empty substring
            // dp[1] - number of substring equals 'x'
            // dp[2] - number of substring equals 'xy'
            // dp[3] - number of substring equals 'xyN' where N - any character in the middle of a palindrom
            // dp[4] - number of substring equals 'xyNy'
            // dp[5] - number of substring equals 'xyNyx'
            const dp = [1, 0, 0, 0, 0, 0]
            for (let i = 0; i < s.length; i++) {
                for (let j = 5; j >= 1; j--) {
                    // if char at s[i] equals to pattern char or this is the middle of a palindrom
                    if (s[i] == pattern[j - 1] || j == 3) {
                        dp[j] = (dp[j] + dp[j - 1]) % modulo
                    }
                }
            }
            answ = (answ + dp[5]) % modulo
        }
    }
    return answ
};
```