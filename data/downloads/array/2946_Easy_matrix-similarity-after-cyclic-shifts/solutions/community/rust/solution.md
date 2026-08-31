# Rust Declarative Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/5849603/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/5849603/)

---

# Code
```rust []
impl Solution {
    pub fn shift(row: &mut Vec<i32>, right: bool) {
        if right {
            let first = row.remove(0);
            row.push(first)
        } else {
            let last = row.pop().unwrap();
            row.insert(0, last)
        }
    } 

    pub fn are_similar(mat: Vec<Vec<i32>>, k: i32) -> bool {
        let mut cur = mat.clone();
        for _ in 0..k {
            for row in 0..mat.len() {
                Solution::shift(&mut cur[row], row % 2 == 0)
            }
        }
        mat == cur
    }
}
```