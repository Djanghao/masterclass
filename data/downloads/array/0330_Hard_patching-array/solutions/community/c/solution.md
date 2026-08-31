# C++ Simple and Easy Explained Solution, 7-Short-Lines

**Author:** YehudisK
**Votes:** 35
**Link:** [https://leetcode.com/problems/patching-array/solutions/1432828/](https://leetcode.com/problems/patching-array/solutions/1432828/)

---

**Idea:**
Every time `count` reaches a number that the next element in `nums` is greater than it, we need a patch.
If we add the number itself, `count` can be doubled because we can add the new number to any of the previous numbers.
So if `count` = 7, and the next number in `nums` is 10, if we add 7 to `nums` now we have all numbers until 14.
```
class Solution {
public:
    int minPatches(vector<int>& nums, int n) {
        long patches = 0, count = 1, i = 0, sz = nums.size();
        while (count <= n) {
            
            if (i < sz && nums[i] <= count) count += nums[i++];
            
            else {
                count *= 2;
                patches++;
            }
        }
        
        return patches;
    }
};
```
**Like it? please upvote!**