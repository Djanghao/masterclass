# Rust cleanest single chain solution 0ms

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/4933892/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/4933892/)

---

# Code
```
use std::collections::BinaryHeap;
impl Solution {
    pub fn max_height(cuboids: Vec<Vec<i32>>) -> i32 {
        cuboids
            .into_iter()
            .map(|mut cuboid| {
                cuboid.sort_unstable();
                (cuboid[2], cuboid[1], cuboid[0])
            })
            .collect::<BinaryHeap<(i32, i32, i32)>>()
            .into_sorted_vec()
            .into_iter()
            .rev()
            .fold(Vec::new(), |mut dp, (x, y, z)| {
                dp.push((
                    x + dp
                        .iter()
                        .map(|&(px, py, pz)| px * (py >= y && pz >= z) as i32)
                        .max()
                        .unwrap_or(0),
                    y,
                    z
                ));
                dp
            })
            .into_iter()
            .max()
            .unwrap()
            .0
    }
}
```