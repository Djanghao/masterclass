# BITMASK | MEMOIZATION

**Author:** _superman__
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/5222775/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/5222775/)

---



# Code
```
class Solution {
    int size1,size2;
    int dp[13][13][(1<<13)];
    private:
    int solve(int ind,int ind2,int mask,vector<vector<int>>& cost){
        if(ind == size1){
            return mask == (1<<size2)-1 ? 0 : 1e9;
        }
        if(ind2 >= size2) return 1e9;

        if(dp[ind][ind2][mask] != -1) return dp[ind][ind2][mask];
        int op1 = cost[ind][ind2] + solve(ind+1,0,mask|(1<<ind2),cost);
        int op2 = cost[ind][ind2] + solve(ind,ind2+1,mask|(1<<ind2),cost);
        int op3 = solve(ind,ind2+1,mask,cost);
        
        return dp[ind][ind2][mask] = min({op1,op2,op3});

    }
public:
    int connectTwoGroups(vector<vector<int>>& cost) {
        size1 = cost.size();
        size2 = cost[0].size();
        int mask = 0;
        memset(dp,-1,sizeof(dp));
        return solve(0,0,mask,cost);
    }
};
```