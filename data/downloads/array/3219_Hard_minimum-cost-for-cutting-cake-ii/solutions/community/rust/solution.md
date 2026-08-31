# Yes, you have to change the return type in Rust.

**Author:** BerryArray
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5519364/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5519364/)

---

Seems like nobody in the world tested that this problem was even possible in Rust. Somehow, you're supposed to figure out you need to change the return type!

# Code
```
impl Solution {
fn minimum_cost(m: i32, n: i32, mut horizontal_cut: Vec<i32>, mut vertical_cut: Vec<i32>) -> i64 {
    
    horizontal_cut.sort_unstable();
    vertical_cut.sort_unstable();

    let mut horizontal_multiplier = 1;
    let mut vertical_multiplier = 1;

    let mut total_cost : i64 = 0;

    loop {
        match (horizontal_cut.last(), vertical_cut.last()) {
            (Some(h), Some(v)) if h >= v => {
                total_cost += (h * horizontal_multiplier) as i64;
                vertical_multiplier += 1;
                horizontal_cut.pop();
            },
            (Some(h), Some(v)) => {
                total_cost += (v * vertical_multiplier) as i64;
                horizontal_multiplier += 1;
                vertical_cut.pop();
            },
            (Some(c), None) => {
                total_cost += (c * horizontal_multiplier) as i64;
                vertical_multiplier += 1;
                horizontal_cut.pop();
            },
            (None, Some(c)) => {
                total_cost += (c * vertical_multiplier) as i64;
                horizontal_multiplier += 1;
                vertical_cut.pop();
            },
            (None, None) => break,
        }
    }

    total_cost
}
}
```