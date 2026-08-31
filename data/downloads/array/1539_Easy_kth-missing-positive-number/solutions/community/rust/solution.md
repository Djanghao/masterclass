# Rust binary-search solution

**Author:** sugyan
**Votes:** 8
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/1004503/](https://leetcode.com/problems/kth-missing-positive-number/solutions/1004503/)

---

```rust
impl Solution {
    pub fn find_kth_positive(arr: Vec<i32>, k: i32) -> i32 {
        let (mut l, mut r) = (0, arr.len());
        while l < r {
            let m = l + (r - l) / 2;
            if arr[m] - m as i32 - 1 >= k {
                r = m;
            } else {
                l = m + 1;
            }
        }
        l as i32 + k
    }
}
```