# Rust: O(n) - Base-10 Radix Sort

**Author:** seandewar
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/1240781/](https://leetcode.com/problems/maximum-gap/solutions/1240781/)

---

Unlike comparison-based sorts, a radix sort achieves `O(n)` time complexity.
This solution uses a base-10 radix sort starting from the least-significant digits of each element in `nums` _(similiar to a bucket sort)_:

```rust
impl Solution {
    pub fn maximum_gap(mut nums: Vec<i32>) -> i32 {
        Self::radix_sort_base10(&mut nums);
        nums.windows(2).map(|w| w[1] - w[0]).max().unwrap_or(0)
    }

    fn radix_sort_base10(nums: &mut [i32]) {
        let mut buckets = vec![vec![]; 10];
        for i in 0..10 {
            nums.iter()
                .for_each(|&x| buckets[((x / 10_i32.pow(i)) % 10) as usize].push(x));
            buckets
                .iter()
                .flat_map(|b| b.iter())
                .zip(nums.iter_mut())
                .for_each(|(&x, y)| *y = x);
            buckets.iter_mut().for_each(|b| b.clear());
        }
    }
}
```