# rust 0ms

**Author:** mindulay
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6135981/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6135981/)

---

# Code
```rust []
impl Solution {
    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut l = [0;101];
        for num in nums{
            if num > k{
                l[num as usize] = 1;
            } else if num < k{
                return -1;
            }
        }
        l.iter().sum()
    }
}
```