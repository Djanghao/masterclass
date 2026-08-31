# Swift, 1 line

**Author:** BytePixelMelody
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5578121/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5578121/)

---

# Complexity
- Time complexity:
$$O(n)$$

# Code
```
class Solution {
    func addedInteger(_ nums1: [Int], _ nums2: [Int]) -> Int {
        nums2.min()! - nums1.min()!
    }
}
```