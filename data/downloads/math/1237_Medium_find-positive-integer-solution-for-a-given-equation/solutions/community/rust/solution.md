# Rust - Binary search [0ms 2MB]

**Author:** dimtion
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/965383/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/965383/)

---

```rust
impl Solution {
    pub fn find_solution(customfunction: &CustomFunction, z: i32) -> Vec<Vec<i32>> {
        let mut max_y = 1000;
        (1..=1000_i32).filter_map(|x| {
            let mut top = max_y;
            let mut bot = 1;
            while top >= bot {
                let y = (top + bot) / 2;
                let w = customfunction.f(x, y);
                if w < z {
                    bot = y + 1;
                } else if w > z {
                    top = y - 1;
                } else {
                    max_y = y;
                    return Some(vec![x, y]);
                }
            }
            None
        }).collect()
    }
}
```