# Rust makes this one too easy

**Author:** michielbaird
**Votes:** 4
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/930423/](https://leetcode.com/problems/flipping-an-image/solutions/930423/)

---

```
impl Solution {
    pub fn flip_and_invert_image(mut a: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        for v in a.iter_mut() {
            v.reverse();
            for l in v.iter_mut() {
                *l ^= 1;
            }
        }
        a
    }
}
```