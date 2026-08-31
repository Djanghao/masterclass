# rust

**Author:** kennylong
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/1831760/](https://leetcode.com/problems/range-sum-query-immutable/solutions/1831760/)

---

```rust
struct NumArray {
    prev_sum: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumArray {
    fn new(nums: Vec<i32>) -> Self {
        let mut prev_sum = vec![0; nums.len() + 1];
        for i in 0..nums.len() {
            prev_sum[i + 1] = prev_sum[i] + nums[i];
        }
        Self { prev_sum }
    }

    fn sum_range(&self, left: i32, right: i32) -> i32 {
        self.prev_sum[right as usize + 1] - self.prev_sum[left as usize]
    }
}
```