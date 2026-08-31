# C++ beats 100%

**Author:** krt
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/5143012/](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/5143012/)

---

# Intuition
No need to split words. DP array size=sentence size.


# Code
```
class Solution {
public:
    int minimumCost(string sentence, int k) {
        int n=sentence.size();
        if(n<=k) return 0;
        vector<int> dp(n+2, INT_MAX);
        dp[0]=0;
        for(int i=0;i<n;i++){
            if(dp[i]!=INT_MAX){
                for(int j=1;j<=k && i+j<n ;j++){
                    if(sentence[i+j]==' '){
                        int cost=(k-j);
                        dp[i+j+1]=min(dp[i+j+1], dp[i]+cost*cost);
                    }
                }
            }
        }
        int res=INT_MAX;
        for(int i=n;i>=n-k;i--) res=min(res, dp[i]);
        return res;
    }
};
```