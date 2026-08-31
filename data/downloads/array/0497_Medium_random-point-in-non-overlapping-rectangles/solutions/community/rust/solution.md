# [Rust] Solution using BTreeMap

**Author:** talalshafei
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/6089915/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/6089915/)

---

Check @[remember8964](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/316890/trying-to-explain-why-the-intuitive-solution-wont-work) for explanation

# Code
```rust []
use rand::Rng;
use std::collections::BTreeMap;

struct Solution {
    total_sum: i32,
    mp: BTreeMap<i32, Vec<i32>>,
}

impl Solution {

    fn new(rects: Vec<Vec<i32>>) -> Self {
        let (mut total_sum, mut mp) = (0, BTreeMap::new());
        
        for rec in rects {
            let (x1, y1, x2, y2) = (rec[0], rec[1], rec[2], rec[3]);
            total_sum += (x2-x1+1)*(y2-y1+1);
            mp.insert(total_sum, rec);
        }

        Self {total_sum, mp}
    }
    
    fn pick(&self) -> Vec<i32> {
        let mut rng = rand::thread_rng();
        let area = rng.gen_range(0..=self.total_sum);
        let rec = self.mp.range(area..).next().unwrap().1;

        let (x1, y1, x2, y2) = (rec[0], rec[1], rec[2], rec[3]);

        let x = rng.gen_range(x1..=x2);
        let y = rng.gen_range(y1..=y2);

        vec![x,y]
    }
}
```