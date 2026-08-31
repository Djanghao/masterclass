# c++ Easy understanding solution

**Author:** Rishabh_47
**Votes:** 8
**Link:** [https://leetcode.com/problems/array-partition/solutions/2583876/](https://leetcode.com/problems/array-partition/solutions/2583876/)

---

```

class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int maxsum = 0;
        for(int i = 0 ; i<nums.size(); i= i +2){
            maxsum = maxsum+nums[i];
        }
        return maxsum;
    }
};