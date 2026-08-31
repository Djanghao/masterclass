# beats 100%🚀🚀||java||c||c++||simple approachc

**Author:** venkatesh_k_259
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4727010/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4727010/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
simple interation method

# Complexity
- Time complexity:
3ms

- Space complexity:
O(n)

# Code
```
class Solution {
    public int[] rearrangeArray(int[] nums) {
           int[] arr = new int[nums.length];
        int i = 0, j = 1;
        
        for (int k = 0; k < nums.length; k++) {
            if (nums[k] > 0) {
                arr[i] = nums[k];
                i += 2;
            } else {
                arr[j] = nums[k];
                j += 2;
            }
        }
        
        return arr;
    }
}
```