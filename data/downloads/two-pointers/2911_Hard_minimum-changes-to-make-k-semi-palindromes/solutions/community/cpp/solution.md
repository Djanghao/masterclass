# Video Explanation (Brute force to optimised solution)

**Author:** codingmohan
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4196873/](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4196873/)

---

# Explanation

[Click here for the video](https://youtu.be/1KPNq_7umpo)

# Code
```
const int N = 201;
int dp[N][N];
int changes[N][N];

class Solution {
    
    vector<vector<int>> fact;
    int n;
    string s;

    int ChangesForSemiPalindrome (int l, int r) {
        int n = r - l + 1;
        int ans = 1e9;
        for (auto f : fact[n]) {
            int len = n/f;
            int change = 0;
            
            for (int part = 0; part < f; part ++) { 
                for (int i = 0; i < len/2; i ++) 
                    if (s[l+i*f+part] != s[l+(len-i-1)*f+part]) change ++;
            }
            ans = min (ans, change);
        }
        return ans;
    }
    
    int MinChange (int ind, int k) {
        if (ind == n) return (k == 0? 0 : 1e9);
        if (k == 0) return 1e9;
        
        int &ans = dp[k][ind];
        if (ans != -1) return ans;
        
        ans = 1e9;
        for (int nxt = ind; nxt < n; nxt ++) {
            ans = min (ans, changes[ind][nxt] + MinChange(nxt+1, k-1));
        }
        return ans;
    }
    
public:
    int minimumChanges(string _s, int k) {
        s = _s;
        n = s.length();
        fact.clear(), fact.resize(n+1);
        for (int j = 1; j <= n; j ++) {
            for (int i = j+j; i <= n; i += j) fact[i].push_back(j);
        }
        
        for (int j = 0; j < n; j ++) {
            for (int k = j; k < n; k ++)
                changes[j][k] = ChangesForSemiPalindrome(j, k);
        }
        
        memset(dp, -1, sizeof(dp));
        return MinChange(0, k);
    }
};
```