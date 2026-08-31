# Beginner Friendly || DP with Bitmasking

**Author:** coutdiv
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/3940438/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/3940438/)

---

# Intuition
We have N people and 40 different types of hat, as the constraints are small this gives us an idea of bitmasking

# Approach
We will create mask of n people, and check if the current person is available(i.e, he hasn't been assigned any hat yet). If he is available we will then check if if the current person has preffered the current hat, if the satisfies we will assign this hat to current person.


# Code
```
class Solution {
public:
vector<vector<int>>dp;
int mod=1e9+7;
    int f(int hat, int mask, int n,vector<vector<int>>& hats){
        if(mask==0) return 1;
        if(hat>40) return 0;
        if(dp[hat][mask]!=-1) return dp[hat][mask];
        int ans=f(hat+1,mask,n,hats);
        for(int i=0; i<n; i++){
            if(mask&(1<<i))
            for(int j=0; j<hats[i].size(); j++){
                if(hats[i][j]==hat ){
                    ans=(ans+f(hat+1,mask^(1<<i),n,hats))%mod;
                }
            }
        }
        return dp[hat][mask]=ans%mod;
    }
    int numberWays(vector<vector<int>>& hats) {
        int n=hats.size();
        int mask=(1<<n)-1;
        dp.resize(42,vector<int>(mask+1,-1));
        return f(1,mask,n,hats);
    }
};
```