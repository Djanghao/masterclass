# just compute the diversors

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/5925494/](https://leetcode.com/problems/closest-divisors/solutions/5925494/)

---

```rust []
fn f(x: i32) -> (i32, Vec<i32>) {
    let mut best = x;
    let mut bestv = vec![1, x];
    let mut z = 1; 
    while z != x {
        z = x/(x/(z+1));
        if x % z == 0 {
            let y = x / z;
            let a = (z-y).abs();
            if a < best {
                best = a;
                bestv = vec![z, y];
            }
        }
    } 
    (best, bestv)
}

impl Solution {
    pub fn closest_divisors(num: i32) -> Vec<i32> {
       f(num+1).min(f(num+2)).1   
    }
}
```