# Java DP with Detailed Explanation

**Author:** yeoubi
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/2006142/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/2006142/)

---

`dp[i][j]` denotes how many palindromic subsequences are in `s[i...j]`

Base Case: 
- `dp[i][i] = 1`, a single character itself is a palindrome
- `dp[i][i+1] = 2`
    - if `s[i] != s[i+1]`, then each char is a unique palindromic subsequence
    - if `s[i] == s[i+1]`, then either of the char or combined pair is a unique palindromic subsequence
 
Recurrence Relation: 
- if `s[i] != s[j]`, then need to subtract the duplicate counts,` dp[i][j] = dp[i+1][j] + dp[i][j-1] - dp[i+1][j-1]`
- if `s[i] == s[j]`,  `dp[i][j] = 2 * dp[i + 1][j - 1]` counting all palindrome already there between `s[i+1...j-1]` and for each palindrome in `s[i+1...j-1]`, adding two same chars at beginning and end creates another palindrome
	- if `s[i]` hasn't appear in `s[i+1...j-1]`, count itself and `s[i]s[j]`
	- otherwise there is one `s[k]` inside `s[i+1...j-1]` where `s[k] == s[i]`, add the case  `s[i]s[k]`
	- if appeared more than once, remove duplicated counts `dp[i][j] -= dp[left+1][right-1]` where left and right are the leftmost and righmost occurrence of d in `s[i+1][j-1]`

Please **UPVOTE** if you find this post helpful!

```
public int countPalindromicSubsequences(String s) {
    int n = s.length();
    if(n == 0) return 0;
    char[] chars = s.toCharArray();
    long[][] dp = new long[n][n];
    long mod = 1_000_000_007;
    for(int i = n - 1; i >= 0; i--){
        dp[i][i] = 1;
        for(int j = i + 1; j < n; j++){
            if(chars[i] != chars[j]){
                dp[i][j] = dp[i+1][j] + dp[i][j-1] - dp[i+1][j-1];
            } else {
                dp[i][j] = 2 * dp[i + 1][j - 1];
                int left = i + 1;
                int right = j - 1;
                while(left <= right && chars[left] != chars[i]){
                    left++;
                }
                while(left <= right && chars[right] != chars[i]){
                    right--;
                }
                if(left > right){
                    dp[i][j] += 2;
                } else if(left == right){
                    dp[i][j] += 1;
                } else {
                    dp[i][j] -= dp[left + 1][right - 1];
                }
            }
            dp[i][j] = (dp[i][j] + mod) % mod; // avoid negative mod

        }
    }
    return (int) dp[0][n-1];
}
```