# Rust solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/1113709/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/1113709/)

---

```rust
use rand::{rngs::ThreadRng, Rng};

#[derive(Default)]
struct Solution {
    radius: f64,
    x_center: f64,
    y_center: f64,
    rng: ThreadRng,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution {

    fn new(radius: f64, x_center: f64, y_center: f64) -> Self {
        Self {
            radius,
            x_center,
            y_center,
            ..Self::default()
        }
    }
    
    fn rand_point(&mut self) -> Vec<f64> {
        let r = self.rng.gen::<f64>().sqrt() * self.radius;
        let theta = self.rng.gen::<f64>() * 2.0 * std::f64::consts::PI;
        [
            self.x_center + r * theta.cos(),
            self.y_center + r * theta.sin(),
        ]
        .to_vec()
    }
}
 ```