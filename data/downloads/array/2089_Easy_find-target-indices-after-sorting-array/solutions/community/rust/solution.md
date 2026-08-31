# [Rust] Simple Solution without sort

**Author:** kohbis
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1607754/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1607754/)

---

```rust
impl Solution {
    pub fn target_indices(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut target_count = 0;
        let mut smaller_count = 0;

        for n in nums {
            if target == n {
                target_count += 1;
            } else if target > n {
                smaller_count += 1;
            }
        }

        (smaller_count..smaller_count + target_count).collect()
    }
}
```