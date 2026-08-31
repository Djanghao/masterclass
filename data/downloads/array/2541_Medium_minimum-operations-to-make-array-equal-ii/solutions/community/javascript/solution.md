# Easy JS. You will get it.

**Author:** hanbi58
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3085181/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3085181/)

---

# Approach
Count the difference of each pair.
Many edge cases to take care of.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums1, nums2, k) {
  let posSum = 0, negSum = 0;
  for (let i = 0; i < nums1.length; i++) {
    let diff = nums1[i] - nums2[i];
    diff > 0 ? posSum += diff : negSum += diff;
    }
  if (posSum === 0 && negSum === 0) return 0;
  if (posSum + negSum !== 0 || posSum < k || k === 0 || posSum % k) return -1;
  return posSum / k;
};

```