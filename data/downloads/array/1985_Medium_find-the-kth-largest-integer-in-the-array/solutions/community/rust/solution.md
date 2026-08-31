# Rust | using `core::slice::select_nth_unstable_by`

**Author:** mfrw
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2094514/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2094514/)

---


```rust
impl Solution {
    pub fn kth_largest_number(mut nums: Vec<String>, k: i32) -> String {
        let k = (k -1) as usize;
        nums.select_nth_unstable_by(k, |a, b| {
            (b.len()).cmp(&a.len()).then_with(|| b.cmp(&a))
        });
        nums[k].clone()
    }
}
```