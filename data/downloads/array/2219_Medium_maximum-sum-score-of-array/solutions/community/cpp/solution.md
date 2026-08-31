# One pass | C++

**Author:** Vhalen_G
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/4939545/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/4939545/)

---



# C++
```
class Solution {
public:
    long long maximumSumScore(vector<int>& nums) {
        int n = nums.size();
        long long sumL = nums[0], sumR = nums[n - 1], res = max(sumL, sumR);
        for(int i = 1; i <= n - 1; i++) {
            sumL += nums[i];
            sumR += nums[n - 1 - i];
            res = max(res, max(sumL, sumR));
        }
        return res;
    }
};
```