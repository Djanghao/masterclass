# rust solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5088196/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5088196/)

---

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code

```
impl Solution {
    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
        (nums.into_iter().reduce(|x, y| x ^ y).unwrap() ^ k).count_ones() as _
    }
}
```