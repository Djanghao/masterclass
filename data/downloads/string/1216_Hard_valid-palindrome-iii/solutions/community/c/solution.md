# C++ Simplest short solution - DP

**Author:** kuryasalia
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/397705/](https://leetcode.com/problems/valid-palindrome-iii/solutions/397705/)

---

```
class Solution {
public:
    int check(int start, int end, string &s,vector<vector<int> > &dp){
        if(start>end) return 0;
        if(dp[start][end] != -1) return dp[start][end];
        if(s[start] == s[end]) return dp[start][end] = check(start+1,end-1,s,dp);
        else return dp[start][end] = 1+min(check(start+1,end,s,dp) , check(start,end-1,s,dp));
    }
    
    bool isValidPalindrome(string s, int k) {
        int start= 0;
        int end = s.length()-1;
        vector<vector<int> > dp(end+1,vector<int>(end+1,-1));
        return check(start,end,s,dp) <= k;
    }
};
```