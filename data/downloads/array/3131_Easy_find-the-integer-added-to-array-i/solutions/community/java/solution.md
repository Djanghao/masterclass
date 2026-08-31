# Simple java solution

**Author:** Siddhant_1602
**Votes:** 13
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5081975/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5081975/)

---

# Complexity
- Time complexity: $$O(nlog n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int addedInteger(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        return nums2[0]-nums1[0];
    }
}
```