# BEATS 100% DART solution

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/5070939/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/5070939/)

---

# Code
```
class Solution {
  int longestIdealString(String s, int k) {
    int ans=0;
    List<int> dp = List.filled(26,0);
    for(int i=s.length-1;i>=0;i--){
        final code = s.codeUnitAt(i)-97;
        for(int c = code;c>=max(code-k,0); c--){
            dp[code]=max(dp[code],dp[c]+1);
        }
        for(int c = code+1;c<=min(code+k,25); c++){
            dp[code]=max(dp[code],dp[c]+1);
        }
        ans=max(ans,dp[code]);
    }
    return ans;
  }
}


```