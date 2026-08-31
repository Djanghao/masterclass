# EASY UNDERSTAND 70% FASTER C++ SOLUTION

**Author:** abhay_12345
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/2865726/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/2865726/)

---

```
class Solution {
public:
    int check(vector<string> &v,int i,int j){
        for(int k = 0; k < v.size(); k++){
            if(v[k][j]>v[k][i])
                return 0;
        }
        return 1;
    }
    int minDeletionSize(vector<string>& strs) {
        vector<int> dp(strs[0].length(),1);
        int ans = 0;
        for(int i = 0; i < strs[0].length(); i++){
            for(int j = 0; j < i; j++){
                if(check(strs,i,j)){
                    dp[i] = max(dp[j]+1,dp[i]);
                }
            }
            ans = max(ans,dp[i]);
        }
        return strs[0].length()-ans;
    }
};
```