# Easy C++ O(N) solution

**Author:** dhananjai10
**Votes:** 4
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/504554/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/504554/)

---

Find the interval where the missing number lies.

```
class Solution {
public:
    int missingElement(vector<int>& nums, int k) {
        int missing_so_far = 0;
        int i = 1;
        for (; i < nums.size(); i++) {
            int missing = nums[i] - nums[i-1] - 1;
            if (missing_so_far + missing >= k)  // kth number lies in this interval
                break;
            missing_so_far += missing;
        }
        
        int ans = nums[i-1] + k - missing_so_far;
        return ans;
    }
};
```
**Time complexity**: `O(N)`
**Space complexity**: `O(1)`