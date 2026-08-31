# C++ || Single Pass Solution || 0 ms Solution || 100.00% || Easy to understand

**Author:** Anonymous_Kumar
**Votes:** 8
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/754183/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/754183/)

---

***Runtime: 0 ms, faster than 100.00% of C++ online submissions for Largest Number At Least Twice of Others.
Memory Usage: 11.5 MB, less than 24.40% of C++ online submissions for Largest Number At Least Twice of Others.***

```
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        if(nums.size() < 2){
            return nums.size()-1;
        }
        int max1 = INT_MIN;
        int max2 = INT_MIN;
        int result = -1;
        for(int i=0;i<nums.size();i++){
            if(nums[i] > max1){
                result = i;
                max2 = max1;
                max1 = nums[i];
            }else if(nums[i] > max2){
                max2 = nums[i];
            }
        }
        return max1 >= 2*max2 ? result : -1;
    }
};
```