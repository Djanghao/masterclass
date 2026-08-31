# Simple lower_bound/binary_search

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4834297/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4834297/)

---

# Intuition
Try each value as the middle value (nums[j]).


# Approach
For each nums[i], as the middle value, the right value should be as large as possible, so we can just use the "suffix maximum value".
The left value should be the largest one smaller than it, so we can put all the previous values into a set and use lower_bound to find it.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
class Solution {
public:
    int maximumTripletValue(vector<int>& nums) {
        const int n = nums.size();
        vector<int> right(n);
        for (int i = n - 1; i >= 0; --i) {
            right[i] = max(i + 1 < n ? right[i + 1] : 0, nums[i]);
        }
        set<int> s;
        int r = 0;
        for (int i = 0; i < n; ++i) {
            if (right[i] > nums[i]) {
                auto t = s.lower_bound(nums[i]);
                if (t != s.begin()) {
                    r = max(r, *(--t) - nums[i] + right[i]);
                }
            }
            s.insert(nums[i]);
        }
        return r;
    }
};
```