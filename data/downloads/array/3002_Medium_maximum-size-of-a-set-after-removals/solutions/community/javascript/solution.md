# JavaScript set and logic operations

**Author:** Tayomide
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4520968/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4520968/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This solution was inspired by [@blackbrain2009](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4520698/hash-table-math-t-o-n)


# Approach
<!-- Describe your approach to solving the problem. -->
Step 1: You get the unique numbers of each array
Step 2: You get the number of unique elements that appear in both arrays
Step 3: You get the unique elements that do not appear in the other array and cap how many you can get to half the length, then you add the unique elements that appear in both arrays. If the answer is more than the needed length you return the full length of the array

# Complexity
- Time complexity: $$O(m + n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m + n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function(nums1, nums2) {
  const d1 = new Set(nums1), d2 = new Set(nums2);

  let len1 = d1.size, len2 = d2.size, eq = 0;

  for (const key of d1) {
    if (d2.has(key)) eq++;
  }

  const halfLength = nums1.length / 2;
  
  return Math.min(Math.min(len2 - eq, halfLength) + Math.min(len1 - eq, halfLength) + eq, halfLength*2)
};
```