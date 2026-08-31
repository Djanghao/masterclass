# 3-4 lines Ruby and C++

**Author:** StefanPochmann
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/20505/](https://leetcode.com/problems/maximum-subarray/solutions/20505/)

---

Walk straight over the input array. Let `best` hold the best sum found overall and `curr` hold the best sum ending with the current element. For the latter, we can either use the current element alone (that's `n`) or also use the best sum ending with the previous element (that's `curr+n`, with the previous value of `curr`).

**Ruby:**

    def max_sub_array(nums)
        best, curr = nums[0], 0
        nums.each { |n| best = [best, curr = [n, curr+n].max].max }
        best
    end

**C++:**

    int maxSubArray(vector<int>& nums) {
        int best = nums[0], curr = 0;
        for (int n : nums)
            best = max(best, curr = max(n, curr+n));
        return best;
    }