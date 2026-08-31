# beats 100% at speed, 90% at memory, O(n**2) time, O(1) space, mathematics, tricky, two-ary equation

**Author:** SingSongZepf
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/5813659/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/5813659/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn find_missing_and_repeated_values(grid: Vec<Vec<i32>>) -> Vec<i32> {
        let n = grid.len() as i64;
        let tn = n * n;

        let s = tn * (tn + 1) / 2;
        let sqr_s = tn * (tn + 1) * (2 * tn + 1) / 6;

        let (act_s, act_sqr_s) = grid.into_iter().flatten().collect::<Vec<i32>>().into_iter().fold((0i64, 0i64), |(act_s, act_sqr_s), x: i32| {
            (act_s + x as i64, act_sqr_s + (x * x) as i64)
        });

        let diff = act_s - s;
        let diff_sqr = act_sqr_s - sqr_s;

        vec![((diff + diff_sqr / diff) / 2) as i32, ((diff_sqr / diff - diff) / 2) as i32]
    }
}
```