# Simple O(n) Approach 🔥🔥

**Author:** cs_iitian
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-score-of-a-good-subarray/solutions/4195464/](https://leetcode.com/problems/maximum-score-of-a-good-subarray/solutions/4195464/)

---

# Intuition
It is related to Most water containing problem
But here k is fixed means instead of starting pointers from 0 and n-1
they will start from k-1 and k+1 and will expand in opposite direction.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
https://www.youtube.com/watch?v=zg3PvCPEUAc&list=PL7S2qJepPyK1G1s7vhLdIwqeJgAgurwIw&ab_channel=CSIITIAN
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maximumScore(vector<int>& nums, int k) {
        int start = k - 1;
        int end = k + 1;
        int n = nums.size();
        int ans = nums[k] * 1;
        int min_val = nums[k];

        while (start >= 0 || end < n) {
            if (end == n || (start >= 0 && nums[start] >= nums[end])) {
                min_val = min(min_val, nums[start]);
                ans = max(ans, min_val * (end - start));
                start--;
            } else if (end < n) {
                min_val = min(min_val, nums[end]);
                ans = max(ans, min_val * (end - start));
                end++;
            }
        }

        return ans;
    }
};
```