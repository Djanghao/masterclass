# Rust 0ms

**Author:** Avimitin
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/1881042/](https://leetcode.com/problems/two-city-scheduling/solutions/1881042/)

---

The key idea is that we need to choose the lowest a-cost sum in the whole array, then sum all other b-cost.

To achieve this we can sort the array by the difference between the [a, b] pair. This can help us filter those huge b cost.

```rust
impl Solution {
	// as we takes owenership here, the mut keyword won't change the function signature
    pub fn two_city_sched_cost(mut costs: Vec<Vec<i32>>) -> i32 {
        costs.sort_by(|a, b| (b[1] - b[0]).cmp(&(a[1] - a[0])));
        let mut sums = 0;
        for (i, pair) in costs.iter().enumerate() {
            if i < costs.len() / 2 {
                sums += pair[0];
            } else {
                sums += pair[1];
            }
        }
        sums
    }
}
```