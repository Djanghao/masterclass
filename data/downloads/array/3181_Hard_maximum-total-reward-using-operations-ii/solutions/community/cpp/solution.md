# doctors hate this trick!!

**Author:** amsraman
**Votes:** 49
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5282030/](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5282030/)

---



# Code
```
class Solution {
public:
    int maxTotalReward(vector<int>& rewardValues) {
        bitset<100001> dp; dp[0] = true;
        sort(rewardValues.begin(), rewardValues.end());
        for(auto val: rewardValues) {
            int shift = 1e5 - (val - 1);
            dp |= (dp << shift >> shift << val);
        }
        int res = 1e5;
        while(!dp[res]) --res;
        return res;
    }
};
```