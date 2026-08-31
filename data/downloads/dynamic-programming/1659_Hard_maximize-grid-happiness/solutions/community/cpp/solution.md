# C++ | Clean and Short Code | Easy to Understand

**Author:** mj_08
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/4159744/](https://leetcode.com/problems/maximize-grid-happiness/solutions/4159744/)

---



# Code
```
class Solution {
public:
    int cost(int i,int j,int mask_in,int mask_ex,int d,int m){
        int ans=0;
        if(i>0 && (mask_in&(1<<(m-1)))) ans+=d-30;
        if(j>0 && (mask_in&1)) ans+=d-30;
        if(i>0 && (mask_ex&(1<<(m-1)))) ans+=d+20;
        if(j>0 && (mask_ex&1)) ans+=d+20;
        return ans;
    }
    int dp[5][5][7][7][64][64];
    int f(int i,int j,int mask_ex,int mask_in,int ic,int ec,int n,int m){
        if(i==n) return 0;
        if(dp[i][j][ic][ec][mask_ex][mask_in]!=-1) return dp[i][j][ic][ec][mask_ex][mask_in];
        int n_mask_ex=(mask_ex<<1)&63,n_mask_in=(mask_in<<1)&63;
        int ans;
        if(j+1<m) ans=f(i,j+1,n_mask_ex,n_mask_in,ic,ec,n,m);
        else ans=f(i+1,0,n_mask_ex,n_mask_in,ic,ec,n,m);
        if(ic){
            int ct=cost(i,j,mask_in,mask_ex,-30,m);
            if(j+1<m) ans=max(ans,120+ct+f(i,j+1,n_mask_ex,n_mask_in+1,ic-1,ec,n,m));
            else ans=max(ans,120+ct+f(i+1,0,n_mask_ex,n_mask_in+1,ic-1,ec,n,m));
        }
        if(ec){
            int ct=cost(i,j,mask_in,mask_ex,20,m);
            if(j+1<m) ans=max(ans,40+ct+f(i,j+1,n_mask_ex+1,n_mask_in,ic,ec-1,n,m));
            else ans=max(ans,40+ct+f(i+1,0,n_mask_ex+1,n_mask_in,ic,ec-1,n,m));
        }
        return dp[i][j][ic][ec][mask_ex][mask_in]=ans;
    }
    int getMaxGridHappiness(int n, int m, int ic, int ec) {
        memset(dp,-1,sizeof(dp));
        return f(0,0,0,0,ic,ec,n,m);
    }
};
```