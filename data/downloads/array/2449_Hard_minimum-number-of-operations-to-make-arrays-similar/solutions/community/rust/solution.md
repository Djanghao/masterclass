# Rust

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/4224326/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/4224326/)

---

```
impl Solution {
    pub fn make_similar(mut nums: Vec<i32>, mut target: Vec<i32>) -> i64 {
        nums.sort_unstable_by_key(|&x| (x % 2, x));
        target.sort_unstable_by_key(|&x| (x % 2, x));
        nums.iter()
            .zip(target.iter())
            .map(|(&a, &b)| (0.max(a - b) / 2) as i64)
            .sum::<i64>()
    }
}
```