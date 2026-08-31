# C++ easy to understand

**Author:** ar_u
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/1194418/](https://leetcode.com/problems/largest-subarray-length-k/solutions/1194418/)

---

```
class Solution {
public:
    vector<int> largestSubarray(vector<int>& nums, int k) {
        int index=0,temp=-1;
        if(k==nums.size())
            return nums;
        for(int i=0;i<=nums.size()-k;i++){
            if(temp<nums[i]){
                index=i;
                temp=nums[i];
            }
        }
        vector<int>v;
        for(int i=0;i<k;i++){
            v.push_back(nums[index+i]);
        }
        return v;
    }
};
```