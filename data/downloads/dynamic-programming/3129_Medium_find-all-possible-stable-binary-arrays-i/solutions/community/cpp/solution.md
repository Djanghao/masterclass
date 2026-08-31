# 3dp solution c++

**Author:** Shreyansh2311
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5080401/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5080401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
 int mod = 1e9 + 7; 
    int dp[202][202][2];    
    int solve(int one, int zero, bool ms, int limit){
        if(one==0 && zero==0) return 1;
        
        int ans = 0;
      
        if(dp[one][zero][ms]!=-1)
            return dp[one][zero][ms]; 
        
        if(ms==1) 
        {
            for(int i=1; i<=min(one,limit); i++){
                ans = (ans+solve(one-i,zero,false,limit)%mod)%mod ;
            }
        }
        else if(ms==0){ 
            for(int i=1; i<=min(zero,limit); i++){
                ans = (ans+solve(one,zero-i,true,limit)%mod)%mod ;
            }
        }
        return dp[one][zero][ms] = ans%mod; 
    }
    int numberOfStableArrays(int zero, int one, int limit) {
         memset(dp,-1,sizeof(dp)) ;
         int a=solve(one,zero,1,limit)%mod;
         int b= solve(one,zero,0,limit)%mod;
         return (a+b)%mod;    
    }
};
```