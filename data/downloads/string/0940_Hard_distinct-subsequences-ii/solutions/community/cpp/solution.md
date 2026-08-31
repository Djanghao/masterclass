# [C++] Simple DP Approach

**Author:** ritik307
**Votes:** 8
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/1018415/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/1018415/)

---

```
class Solution {
public:
    int distinctSubseqII(string str) {
        int size=str.size();
        vector<int> dp(size+1);
        dp[0]=1;
        
        unordered_map<char,int> map;
            
        for(int i=0;i<size;i++){  
            dp[i+1]=(dp[i]*2)%1000000007;
            
            //if the char already exist earlier
            if(map.find(str[i])!=map.end()){
                int repeatIndex=map[str[i]]-1;
                dp[i+1]=(dp[i+1]-dp[repeatIndex]);
                dp[i+1]%=1000000007;
            }
            map[str[i]]=i+1;
        }
        dp[size]--;
        if(dp[size]<0){
            dp[size]+=1000000007;
        }
        return dp[size];
    }
};
```