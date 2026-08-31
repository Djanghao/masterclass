# C++ solution, using bucket to record!

**Author:** lchen77
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/50698/](https://leetcode.com/problems/maximum-gap/solutions/50698/)

---

    int maximumGap(vector<int>& nums) {
        const int size_num = nums.size();
        if (size_num < 2) return 0;
        int maxV = *max_element(nums.begin(), nums.end());
        int minV = *min_element(nums.begin(), nums.end());
        if (maxV == minV) return 0;
        double range = (maxV - minV) / double(size_num - 1);
        vector<int> max_b(size_num, INT_MIN), min_b(size_num, INT_MAX);
        for (int i = 0; i < size_num; i++) {
            int index = (nums[i] - minV) / range;
            max_b[index] = max(max_b[index], nums[i]);
            min_b[index] = min(min_b[index], nums[i]);
        }
        int max_g = (int)range,  start = max_b[0];
        for (int i = 1; i < size_num; i++) {
            if (min_b[i] == INT_MAX) continue;
            max_g = max(max_g, min_b[i] - start);
            start = max_b[i];
        }
        return max_g;
    }