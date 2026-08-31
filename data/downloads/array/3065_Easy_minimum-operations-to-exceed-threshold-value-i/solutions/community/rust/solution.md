# Rust || Single line || 0ms

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/5266335/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/5266335/)

---


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
        nums.iter().filter(|&n| *n < k).count() as _
    }
}
```