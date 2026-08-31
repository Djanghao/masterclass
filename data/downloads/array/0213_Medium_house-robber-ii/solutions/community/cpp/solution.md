# 9-lines 0ms O(1)-Space C++ solution

**Author:** jianchao-li
**Votes:** 612
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/59921/](https://leetcode.com/problems/house-robber-ii/solutions/59921/)

---

This problem is a little tricky at first glance. However, if you have finished the **House Robber** problem, this problem can simply  be **decomposed into two House Robber problems**. 
    Suppose there are `n` houses, since house `0` and `n - 1` are now neighbors, we cannot rob them together and thus the solution is now the maximum of

 1. Rob houses `0` to `n - 2`;
 2. Rob houses `1` to `n - 1`.

The code is as follows. Some edge cases (`n < 2`) are handled explicitly.

    class Solution {
    public:
        int rob(vector<int>& nums) {
            int n = nums.size(); 
            if (n < 2) return n ? nums[0] : 0;
            return max(robber(nums, 0, n - 2), robber(nums, 1, n - 1));
        }
    private:
        int robber(vector<int>& nums, int l, int r) {
            int pre = 0, cur = 0;
            for (int i = l; i <= r; i++) {
                int temp = max(pre + nums[i], cur);
                pre = cur;
                cur = temp;
            }
            return cur;
        }
    };