# Rust: 0ms - Single Expression Solutions

**Author:** seandewar
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/1122562/](https://leetcode.com/problems/find-the-highest-altitude/solutions/1122562/)

---

**Using `fold()`**:
```
impl Solution {
    pub fn largest_altitude(gain: Vec<i32>) -> i32 {
        gain.into_iter()
            .fold((0, 0), |(res, h), g| (res.max(h + g), h + g))
            .0
    }
}
```
---

**Using `scan()`**:
```
impl Solution {
    pub fn largest_altitude(gain: Vec<i32>) -> i32 {
        std::iter::once(0)
            .chain(gain.into_iter())
            .scan(0, |h, g| {
                *h += g;
                Some(*h)
            })
            .max()
            .unwrap()
    }
}
```
---

Time complexity: `O(n)`.
Extra-space complexity: `O(1)`.
