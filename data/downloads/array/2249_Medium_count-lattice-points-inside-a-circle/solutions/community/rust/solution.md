# Rust, Easy to understand, Check all point within circle

**Author:** tomijaga
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1987546/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1987546/)

---


```rust
use std::collections::HashSet;

impl Solution {
    pub fn count_lattice_points(circles: Vec<Vec<i32>>) -> i32 {
        let mut set = HashSet::new();
        
        for circle in circles{
            let x = circle[0];
            let y = circle[1];
            let r = circle[2];
            
            for px in (x - r)..=(x + r){
                for py in (y - r)..=(y+ r){
                    
					// difference from the center of the circle
                    let delta_x = x - px;
                    let delta_y = y - py;
                    
					// using pythagoras theorem ( x^2 + y^2 = z^2 )
					// to get the point's (px, py) magnitude from the center of the circle
					
                    let magnitude = ((delta_x.pow(2) + delta_y.pow(2)) as f64).sqrt();
                    
                    if(magnitude <= r as f64){
                        set.insert((i, j));
                    }
                }
            }
        }
        
        set.len() as i32
    }
}
```