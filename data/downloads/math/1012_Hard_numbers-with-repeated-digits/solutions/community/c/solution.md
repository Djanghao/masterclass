# ✅ [c++]  || Digit DP with Bismasking ||  recursive+memoization

**Author:** xor09
**Votes:** 7
**Link:** [https://leetcode.com/problems/numbers-with-repeated-digits/solutions/1521900/](https://leetcode.com/problems/numbers-with-repeated-digits/solutions/1521900/)

---

```
class Solution {
public:
    
    int dp[11][2][1024][2]; //dp[pos][strictly][s][repeated]
    //s value can go upto 1024.
    //logic:- if we set all bit from (9...0) it gives approx. 1023 
    int solve(string& str, int pos, bool strictly, int s, bool repeated){
        if(pos==str.size()){
            if(repeated) return 1;
            else return 0;
        }
        if(dp[pos][strictly][s][repeated]!=-1) return dp[pos][strictly][s][repeated];
        int cur=0, n=str[pos]-'0';
        if(strictly){
            for(int i=0;i<=n;++i){
                if(i==0 and s==0) cur+=solve(str,pos+1,false,s,repeated); //leading zero
                else if(i==n){
                    if(s&(1<<i)) cur+=solve(str,pos+1,true,s,true);
                    else cur+=solve(str,pos+1,true,s^(1<<i),repeated);
                }else{
                    if(s&(1<<i)) cur+=solve(str,pos+1,false,s,true);
                    else cur+=solve(str,pos+1,false,s^(1<<i),repeated);
                }
            }
        }else{
            for(int i=0;i<=9;++i){
                if(i==0 and s==0) cur+=solve(str,pos+1,false,s,repeated); //leading zero
                else{
                    if(s&(1<<i)) cur+=solve(str,pos+1,false,s,true);
                    else cur+=solve(str,pos+1,false,s^(1<<i),repeated);
                }
            }
        }
        return dp[pos][strictly][s][repeated] = cur;
    }
    
    
    int numDupDigitsAtMostN(int n) {
        string str = to_string(n);
        memset(dp,-1,sizeof(dp));
        return solve(str,0,true,0,false);
    }
};
```
Please **UPVOTE**