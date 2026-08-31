# C++ DP Solution with explanation through comments

**Author:** ayerhs_7
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-music-playlists/solutions/2637280/](https://leetcode.com/problems/number-of-music-playlists/solutions/2637280/)

---

```
class Solution {
public:
    int mod = 1000000007;
    
    // len = length of the currently formed playlist
    // diff = number of unique songs in the currently formed playlist
    
    int func(vector<vector<int>>&dp, int goal, int n, int k, int len, int diff){
        if(len==goal){
            return (diff==n);
        }
        if(dp[len][diff]!=-1){
            return dp[len][diff];
        }
        // OPTION 1:
        // choose a number from the used ones only
        // length will increase by 1 but the number of distinct songs used will be same
        long long int ans1 = ((long long int)func(dp, goal, n,k, len+1, diff)%mod* (long long int)(max(0,diff-k)))%mod;
        // OPTION 2:
        // choose a number that has not been used earlier. 
        // how many such numbers are there? (n - diff)
        // len will increase by 1. diff will increase by 1
        long long int ans2 = ((long long int)func(dp, goal, n,k, len+1, diff+1)%mod* (long long int)(n-diff))%mod;
        
        return dp[len][diff] = (ans1+ans2)%mod;
    }
    
    int numMusicPlaylists(int n, int goal, int k) {
        vector<vector<int>>dp(goal+1, vector<int>(goal+1,-1));
        return func(dp, goal, n, k, 0,0);
    }
};
```