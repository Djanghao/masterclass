# Two Pointer / Sliding Window

**Author:** itsTowhid
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4950662/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4950662/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Simple two pointer / sliding window approach, reset the left/starting boundary when the window is invalid.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
### Python
```
class Solution:
    def countAlternatingSubarrays(self, nums: List[int]) -> int:
        ans, l = 0, 0
        for r in range(len(nums)):
            if(r > 0 and nums[r] == nums[r - 1]): 
                l = r
            ans += r - l + 1
        return ans
```
### Dart
```
class Solution {
  int countAlternatingSubarrays(List<int> nums) {
    int ans = 0;
    for(int l = 0, r = 0; r < nums.length; r++) {
      if(r > 0 && nums[r] == nums[r - 1]) l = r;
      ans += r - l + 1;
    }
    return ans;
  }
}
```