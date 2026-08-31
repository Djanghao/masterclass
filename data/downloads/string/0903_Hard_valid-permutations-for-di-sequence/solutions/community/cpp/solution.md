# Backtracking+memoization is working . Why??

**Author:** anupamraZ
**Votes:** 3
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/3392399/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/3392399/)

---

# Doubt
   Since to decide a unique state , we need:

            1.index at which we are currently in string s
            2.previous element chosen
            3.set of numbers that are used or left.Here vis vector.

   But i have done memoization over first two, but the soln is working.Can't understand why??
# Code
```
#define ll long long
class Solution {
public:
    ll dp[202][202];
    ll mod=1e9+7;
int fun(int ind,int prev,int n,string&s, vector<bool>&vis)
{
    if(ind==s.size())
    {
        return 1;
    }

     if(dp[ind][prev]!=-1) return dp[ind][prev];
    int ans=0;
    if(s[ind]=='D')
    {
       for(int i=prev-1;i>=0;i--)
       {
         if(vis[i]==0)
         {
            vis[i]=1;
            ans+=fun(ind+1,i,n,s,vis);
            ans%=mod;
            vis[i]=0;
         }
       }
    }
    else if(s[ind]=='I')
    {
        for(int i=prev+1;i<=n;i++)
       {
         if(vis[i]==0)
         {
            vis[i]=1;
            ans+=fun(ind+1,i,n,s,vis);
            ans%=mod;
            vis[i]=0;
         }
       }
    }
   return dp[ind][prev]=ans;
}

int numPermsDISequence(string s) 
{
    memset(dp,-1,sizeof(dp));
    ll n=s.size();
    vector<bool>vis(n+1,0);
    int ans=0;
    for(int i=0;i<=n;i++)
    {
        vis[i]=1;
        ans+=fun(0,i,n,s,vis);
        ans%=mod;
        vis[i]=0;
    }
    //cout<<"ans="<<ans<<endl;
    return ans;
}
};
```