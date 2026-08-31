# C++ Simple and Easy, Clean Solution

**Author:** YehudisK
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1338038/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1338038/)

---

```
class Solution {
public:
    int maxAscendingSum(vector<int>& nums) {
        int max_sum = nums[0], curr = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i-1] < nums[i]) {
                curr += nums[i];
            }
            else {
                max_sum = max(max_sum, curr);
                curr = nums[i];
            }
        }
        return max(max_sum, curr);
    }
};
```
**Like it? plese upvote!**