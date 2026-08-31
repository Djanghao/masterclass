# C++ DP O(N^2)

**Author:** Sanzenin_Aria
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/solutions/3230661/](https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/solutions/3230661/)

---

```
class Solution {
public:
    int convertArray(vector<int>& nums) {
        auto v = nums;
        reverse(v.begin(), v.end());
        return min(help(nums), help(v));
    }

    int help(vector<int>& v){
        auto xmin = *min_element(v.begin(), v.end());
        for(auto& x:v) x-=xmin;
        auto xmax = *max_element(v.begin(), v.end());
        vector<int> dp(xmax+1, 1e9);
        dp[0] = 0;
        for(auto x:v){
            // dp[j] = min(dp[i] for i<=j) + abs(x-j)  
            int minDpI = 1e9;
            for(int j=0;j<=xmax;j++){
                minDpI = min(minDpI, dp[j]);
                dp[j] = minDpI + abs(x-j);
            }
        }
        return *min_element(begin(dp), end(dp));
    }
};
```