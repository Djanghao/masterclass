# Rust solution

**Author:** sugyan
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/1248666/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/1248666/)

---

```rust
const DIV: i64 = 1_000_000_007;

impl Solution {
    pub fn max_area(h: i32, w: i32, horizontal_cuts: Vec<i32>, vertical_cuts: Vec<i32>) -> i32 {
        let mut hc = horizontal_cuts;
        let mut vc = vertical_cuts;
        hc.extend(&[0, h]);
        vc.extend(&[0, w]);
        hc.sort_unstable();
        vc.sort_unstable();
        let hmax = hc.windows(2).map(|w| w[1] - w[0]).max().unwrap() as i64;
        let vmax = vc.windows(2).map(|w| w[1] - w[0]).max().unwrap() as i64;
        (hmax * vmax % DIV) as i32
    }
}
```