# SIMPLE C++ DP using MEMOIZATION -> 64 ms

**Author:** rvrishav7
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/762413/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/762413/)

---

```
int find_max(int l,int h, vector <int>&ar){
        int maxi=0;
        for(int i=l;i<=h;i++){
            maxi=max(ar[i],maxi);
        }
        return maxi;
    }
    int fun(int l,int h, vector <int>&ar,vector <vector <int>> &dp){
        if(l==h)
            return dp[l][h]=0;
        if(h-l==1)
            return dp[l][h]=ar[l]*ar[h];
        int ans=INT_MAX,a,b,temp;
        if(dp[l][h]!=-1)
            return dp[l][h];
        for(int i=l;i<h;i++){
            a=find_max(l,i,ar);
            b=find_max(i+1,h,ar);
            temp=fun(l,i,ar,dp)+fun(i+1,h,ar,dp);
            ans=min(ans,(a*b)+temp);
        }
        return dp[l][h]=ans;
    }
    int mctFromLeafValues(vector<int>& ar) {
        int n=ar.size();
        vector <vector <int>> dp(n+1, vector <int>(n+1,-1));
        return fun(0,n-1,ar,dp);
    }
```