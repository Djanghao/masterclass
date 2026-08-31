# Rust solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/901537/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/901537/)

---

```rust
impl Solution {
    pub fn min_domino_rotations(a: Vec<i32>, b: Vec<i32>) -> i32 {
        'nums: for num in 1..=6 {
            let mut rotations = (0, 0);
            for domino in a.iter().zip(b.iter()) {
                match (*domino.0 == num, *domino.1 == num) {
                    (true, true) => {}
                    (true, false) => rotations.0 += 1,
                    (false, true) => rotations.1 += 1,
                    (false, false) => continue 'nums,
                }
            }
            return std::cmp::min(rotations.0, rotations.1);
        }
        -1
    }
}
```