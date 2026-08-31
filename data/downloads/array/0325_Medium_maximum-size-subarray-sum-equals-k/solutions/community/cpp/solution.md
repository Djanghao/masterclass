# C++ easy understand solution with comment

**Author:** mcwlvcd
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/77776/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/77776/)

---

    // O(n) complexity.
    // Core idea: for the same cumulative sum value, we
    // only keep it's first appearance, so at last the
    // subarray is guaranteed to be the longest.
    // Also, note the brilliant idea of using the sum value
    // as the key of the map.
    int maxSubArrayLen(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        m[0] = -1;
        int sum = 0;
        int maxLen = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            if (!m.count(sum)) m[sum] = i;
            if (m.count(sum - k)) maxLen = max(maxLen, i - m[sum - k]);
        }
        return maxLen;
    }