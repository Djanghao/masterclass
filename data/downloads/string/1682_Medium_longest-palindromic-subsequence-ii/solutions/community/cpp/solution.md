# C++ || DP || Easily

**Author:** yomeho111
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/3964665/](https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/3964665/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n^2)
# Code
```
class Solution {
public:
    static bool cmp(const vector<int>& a,const vector<int>& b){
        
        return a[0]<b[0];
    }
    int longestPalindromeSubseq(string s) {
        vector<vector<vector<int>>> dp(s.size(), vector<vector<int>>(s.size(), vector<int>(2,0)));

        for (int i = s.size()-1; i>=0; i--){
            for (int j = i+1; j<s.size(); j++){
                if (j-i==1) {
                    if (s[i]==s[j]) {
                        dp[i][j][0] = 2;
                        dp[i][j][1] = s[i];
                    }
                } else {
                    if (s[i]==s[j] && dp[i+1][j-1][1]!=s[i]){
                        dp[i][j][0] = 2+dp[i+1][j-1][0];
                        dp[i][j][1] = s[i];
                    } else {
                        dp[i][j] = max(dp[i+1][j], dp[i][j-1], cmp);
                    }
                }
            }
        }
        return dp[0][s.size()-1][0];
    }
};
```