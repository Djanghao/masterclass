# C++ simple memoization

**Author:** deleted_user
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/784002/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/784002/)

---

```
class Solution {
public:
    int minimum_area(vector<int> &A,int si,int ei,vector<vector<int>>&dp){
        if(si+1==ei) return 0;
        
        if(dp[si][ei]!=0) return dp[si][ei];
        
        int ans=INT_MAX;
        for(int cut=si+1;cut<ei;cut++){
            
            int leftAns=minimum_area(A,si,cut,dp);
            int rightAns=minimum_area(A,cut,ei,dp);
            
            int myAns=leftAns+(A[si]*A[cut]*A[ei])+rightAns;
            
            ans=min(ans,myAns);
        }
        
        return dp[si][ei]=ans;
    }
    int minScoreTriangulation(vector<int>& A) {
        int n=A.size();
        vector<vector<int>>dp(n,vector<int>(n,0));
        return minimum_area(A,0,n-1,dp);
    }
    
};
```