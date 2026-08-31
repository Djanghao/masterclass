# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/1932981/](https://leetcode.com/problems/construct-the-rectangle/solutions/1932981/)

---

```
impl Solution {
    pub fn construct_rectangle(area: i32) -> Vec<i32> {
        let mut x = (area as f32).sqrt() as i32;
        loop {
            match area % x {
                0 => break vec![area / x, x],
                _ => x -= 1,
            }
        }
    }
}
```