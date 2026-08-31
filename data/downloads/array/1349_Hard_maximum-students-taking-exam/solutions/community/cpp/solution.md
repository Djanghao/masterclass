# Easy-to-understand solution | Backtrack with dp-memorization on bitmask

**Author:** diyora13
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/2090322/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/2090322/)

---

```
class Solution {
public:
    int n,m,ans;
    int dp[8][8][255][255];
    vector<vector<char>> a;
    
    bool is(int i,int j)
    {
        if(a[i][j]!='.') return 0;
        if(i-1>=0 && j-1>=0 && a[i-1][j-1]=='$') return 0;
        if(i-1>=0 && j+1<m && a[i-1][j+1]=='$') return 0;
        if(j-1>=0 && a[i][j-1]=='$') return 0;
        if(j+1<m && a[i][j+1]=='$') return 0;
        
        return 1;
    }
    
    int sol(int i,int j,int premask,int curmask)
    {
        if(i==n) return 0;
        if(j==m) return sol(i+1,0,curmask,0);
        
        int ans=dp[i][j][premask][curmask];
        if(ans!=-1) return ans;
        ans=0;
        
        if(is(i,j))
        {
            a[i][j]='$';
            ans=max(ans,1+sol(i,j+1,premask,curmask|(1<<j)));
            a[i][j]='.';
        }
        ans=max(ans,sol(i,j+1,premask,curmask));
                    
        return dp[i][j][premask][curmask]=ans;
    }
    
    int maxStudents(vector<vector<char>>& seats) 
    {
        a=seats;
        n=a.size(),m=a[0].size();
        memset(dp,-1,sizeof(dp));
        return sol(0,0,0,0);
    }
};
```