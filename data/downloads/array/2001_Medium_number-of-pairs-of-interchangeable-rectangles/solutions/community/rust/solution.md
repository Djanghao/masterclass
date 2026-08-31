# HashMap - Rust solution

**Author:** alihaideralsawad
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/3208982/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/3208982/)

---

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn interchangeable_rectangles(rectangles: Vec<Vec<i32>>) -> i64 {
        let mut ratios = HashMap::new();

        rectangles.iter().for_each(|rect| {
            let pos = rect[0] as f64 / rect[1] as f64;
            
            *ratios.entry(pos.to_ne_bytes()).or_insert(0) += 1
        });

        ratios.values().map(|c| c*(c-1)/2).sum::<i64>() 
    }
}
```