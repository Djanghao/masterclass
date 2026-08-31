# Digit Dp + KMP algorithm

**Author:** TechTinkerer
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/4688152/](https://leetcode.com/problems/find-all-good-strings/solutions/4688152/)

---



# Complexity
- Time complexity:O(n*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n*m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
int mod=1e9+7;
vector<int> Lps;
int n,e;
string s1,s2,evil;
int dp[501][51][2][2];
 vector<int> getLps(string s) {
     int m=s.size();

     int i=1;
     vector<int> lps(m,0);
     int len=0;

     lps[0]=0;
     while(i<m){
         if(s[i]==s[len]){
             len++;
             lps[i]=len;
             i++;
         }
         else{
             if(len>0){
                 len=lps[len-1];
             }
             else{
                 lps[i]=0;
                 i++;
             }
         }
     }

     return lps;
    }
    int solve(int index,int eindex,bool tight1,bool tight2){
        if(eindex>=e)
        return 0;
        if(index>=n)
        return 1;
        if(dp[index][eindex][tight1][tight2]!=-1)
        return dp[index][eindex][tight1][tight2];

        char lo=tight1?s1[index]:'a';
        char hi=tight2?s2[index]:'z';
         int ans=0;
        for(char ch=lo;ch<=hi;ch++){
            int nxtIndex=eindex;

            while(evil[nxtIndex]!=ch && nxtIndex>0)
            nxtIndex=Lps[nxtIndex-1];

            if(nxtIndex!=0){
                ans=(ans%mod+solve(index+1,nxtIndex+1,tight1&&ch==lo,tight2&&ch==hi)%mod)%mod;
            }
            else{
                if(evil[nxtIndex]==ch)
                 ans=(ans%mod+solve(index+1,1,tight1&&ch==lo,tight2&&ch==hi)%mod)%mod;
                 else
                  ans=(ans%mod+solve(index+1,0,tight1&&ch==lo,tight2&&ch==hi)%mod)%mod;
            }
        }
        return dp[index][eindex][tight1][tight2]=ans;
    }
    int findGoodStrings(int n, string s1, string s2, string evil) {
        this->Lps=getLps(evil);
        this->n=n;
        this->e=evil.size();
        this->s1=s1;
        this->s2=s2;
        this->evil=evil;
        memset(dp,-1,sizeof(dp));
        return solve(0,0,1,1)%mod;
 }
};
```