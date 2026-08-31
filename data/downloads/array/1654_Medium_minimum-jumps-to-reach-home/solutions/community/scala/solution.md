# Simple Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/3167117/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/3167117/)

---


```
class Solution {
public:
    unordered_map<int,int> mp;
    int dp[6001][2];
    
    
    int helper(int i, bool back , int a ,int b, int x) {
        if(i == x)
            return 0;
        if(i<0 || i>6000 || back>=2 || mp.find(i)!=mp.end())
            return 1e9;
        if(dp[i][back] != -1) 
            return dp[i][back];
        
        dp[i][back] = 1+helper(i+a,0,a,b,x); //go forward
        
        if(!back) //cannot go consecutively backwards more than 1
        {
        dp[i][back] = min(dp[i][back] , helper(i-b,1,a,b,x)+1);  
        
        }
        return dp[i][back];
    }
    

    int minimumJumps(vector<int>& forbidden, int a, int b, int x) {
        for(int i=0;i<forbidden.size();i++){
            mp[forbidden[i]] = 1;
        }
        memset(dp,-1,sizeof(dp));
        int ans = helper(0,0,a,b,x);
        if(ans>1e9) 
               return -1;
        return ans;               
    }
};
```