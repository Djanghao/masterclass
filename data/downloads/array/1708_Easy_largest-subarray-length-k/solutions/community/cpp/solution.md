# C++ [modern] Most efficient & clean two-line solution

**Author:** ianpan870102
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/2840331/](https://leetcode.com/problems/largest-subarray-length-k/solutions/2840331/)

---


# Approach
Only the first "`nums.size() - k + 1`" elements can be a valid start. Therefore, we determine the index of the max element in this subarray and construct our size-k answer accordingly.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
 public:
  auto largestSubarray(vector<int> &nums, int k) -> vector<int> {
    auto it = max_element(nums.begin(), nums.end() - k + 1);
    return {it, it + k};
  }
};

```