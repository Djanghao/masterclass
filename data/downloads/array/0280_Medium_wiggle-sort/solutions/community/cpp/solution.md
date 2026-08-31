# 4-lines O(n) C++

**Author:** jianchao-li
**Votes:** 67
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/71688/](https://leetcode.com/problems/wiggle-sort/solutions/71688/)

---

The final sorted `nums` needs to satisfy two conditions:

 1. If `i` is odd, then `nums[i] >= nums[i - 1]`;
 2. If `i` is even, then `nums[i] <= nums[i - 1]`.

The code is just to fix the orderings of `nums` that do not satisfy 1 and 2.

    class Solution {
    public: 
        void wiggleSort(vector<int>& nums) {
            int n = nums.size();
            for (int i = 1; i < n; i++)
                if (((i & 1) && nums[i] < nums[i - 1]) || (!(i & 1) && nums[i] > nums[i - 1]))
                    swap(nums[i], nums[i - 1]);
        } 
    };