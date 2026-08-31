# 9 lines C++ code with O(NlogN) complexity

**Author:** dtccwl
**Votes:** 502
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/74848/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/74848/)

---

Inspired by http://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/

    int lengthOfLIS(vector<int>& nums) {
        vector<int> res;
        for(int i=0; i<nums.size(); i++) {
            auto it = std::lower_bound(res.begin(), res.end(), nums[i]);
            if(it==res.end()) res.push_back(nums[i]);
            else *it = nums[i];
        }
        return res.size();
    }