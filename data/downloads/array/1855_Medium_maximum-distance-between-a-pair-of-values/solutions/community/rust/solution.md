# Simple two-pointer solution without max() — beats 100%

**Author:** jorendorff
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/4731494/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/4731494/)

---

# Intuition
Once you find a valid pair `(i, j)`, you don't have to consider any pairs narrower than that.

# Approach
Similar to other solutions, but never advance `i` without also advancing `j`.

This way `j - i` is always the maximum distance we've seen, so there is no need for a separate `max_distance` variable, or calling `max` at all.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn max_distance(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let mut i = 0;
        let mut j = 0;
        // loop invariants: i <= j; j - i == max_distance(nums1[..i], nums2[..j]).
        while i < nums1.len() && j < nums2.len() {
            while j + 1 < nums2.len() && nums1[i] <= nums2[j + 1] {
                j += 1;
            }
            i += 1;
            j += 1;
        }
        (j - i) as i32
    }
}
```