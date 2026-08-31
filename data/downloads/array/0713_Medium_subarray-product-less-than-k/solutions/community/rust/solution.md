# Rust sliding-window solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/869008/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/869008/)

---

```rust
impl Solution {
    pub fn num_subarray_product_less_than_k(nums: Vec<i32>, k: i32) -> i32 {
        if k <= 1 {
            return 0;
        }
        let mut answer = 0;
        let mut p = 1;
        let mut j = 0;
        for (i, num) in nums.iter().enumerate() {
            p *= num;
            while p >= k {
                p /= nums[j];
                j += 1;
            }
            answer += i + 1 - j;
        }
        answer as i32
    }
}
```