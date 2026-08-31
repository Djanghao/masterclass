# Ruby - super duper simple

**Author:** zacharylupstein
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5309736/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5309736/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def added_integer(nums1, nums2)
    nums1.sort! 
    nums2.sort!
    return nums2[0] - nums1[0]
end
```