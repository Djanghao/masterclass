# C++ solution| O(N) Time complexity

**Author:** kritika_12
**Votes:** 229
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/1328708/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/1328708/)

---

**Two pointer Approach** 
**Time Complexity - O(N)**
**Space Complexity - O(1)**

The problem has asked to do inplace so we need to modify the given nums vector only 
```
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size() == 0) return 0;
        int left = 0;
        for(int right =1; right< nums.size(); right++){
           if(nums[left] != nums[right])
               left++;
               nums[left] = nums[right];
           }
    return left+1;
    }
};
```
**Please upvote if you like the solution**
**comment if have doubts**