# Rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/1956822/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/1956822/)

---

1. One-liner with ```fold```.
```
impl Solution {
    pub fn find_closest_number(nums: Vec<i32>) -> i32 {
        use std::cmp::Ordering;
        nums.iter()
            .fold((i32::MIN, i32::MAX), |(val, dist), &x| {
                match dist.cmp(&(x.abs())) {
                    Ordering::Greater => (x, x.abs()),
                    Ordering::Equal => (x.max(val), dist),
                    Ordering::Less => (val, dist),
                }
            })
            .0
    }
}
```

2. One-liner with ```max_by```.
```
impl Solution {
    pub fn find_closest_number(nums: Vec<i32>) -> i32 {
        use std::cmp::Ordering;
        nums.into_iter()
            .max_by(|x, y| match y.abs().cmp(&(x.abs())) {
                Ordering::Equal => x.cmp(y),
                abs_cmp => abs_cmp,
            })
            .unwrap()
    }
}
```
