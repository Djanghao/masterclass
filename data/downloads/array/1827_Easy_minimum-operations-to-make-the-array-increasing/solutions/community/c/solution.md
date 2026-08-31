# Easy C++ Solution

**Author:** Anshika_28
**Votes:** 44
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/1187305/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/1187305/)

---

**Do upvote if useful!**
```
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int output=0;
        for(int i=0;i<nums.size()-1;i++){
            if(nums[i]<nums[i+1])
                continue;
            else{
                output=output+(nums[i]+1-nums[i+1]);
                nums[i+1]=nums[i]+1;
            }
        }
        return output;
    }
};
```