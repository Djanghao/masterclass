# [JAVA] DP O(26 * N^2) Iterative

**Author:** ycj28c
**Votes:** 14
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/967437/](https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/967437/)

---

Same idea as [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
But the question required consecutive char not same, so we need add 1 dimension to tracking the previous character.
int[i][j][k] dp means longest palindrome start at index i, end at index j, wrap by the character k 

if char at i is same as char at j, then dp[j][i][m] = max(dp[j+1][i-1][k] + 2, dp[j][i][m]) when m !=k
otherwise, dp[j][i][k] = max(dp[j][i][k], dp[j+1][i][k], dp[j][i-1][k]), means inherit previous max len wrap by char k
```
class Solution {
    public int longestPalindromeSubseq(String s) {
        int[][][] dp = new int[s.length()][s.length()][26];
        int max = 0;
        for(int i=0;i<s.length();i++){
            for(int j=i-1;j>=0;j--){
                if(j == i-1){
                    if(s.charAt(i) == s.charAt(j)){
                        dp[j][i][s.charAt(i)-'a'] = 2;
                        max = Math.max(max, 2);
                    }
                } else {
                    for(int k=0;k<26;k++){
                        if(s.charAt(i) == s.charAt(j) && s.charAt(i) - 'a' != k){
                            dp[j][i][s.charAt(i)-'a'] = Math.max(dp[j+1][i-1][k] + 2, dp[j][i][s.charAt(i)-'a']);
                            max = Math.max(max, dp[j][i][s.charAt(i)-'a']);
                        }
                        dp[j][i][k] = Math.max(dp[j][i][k], dp[j][i-1][k]);
                        dp[j][i][k] = Math.max(dp[j][i][k], dp[j+1][i][k]);
                        dp[j][i][k] = Math.max(dp[j][i][k], dp[j+1][i-1][k]);
                    }
                }
            }
        }
        return max;
    }
}
```