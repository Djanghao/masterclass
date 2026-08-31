# bitvector

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/5731055/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/5731055/)

---

# Code
```rust []
impl Solution {
    pub fn check_valid(matrix: Vec<Vec<i32>>) -> bool {

        let mut n = matrix.len();
        for i in 0..n {
            let mut s = vec![false; n];
            for &x in &matrix[i] {
                let b = x as usize - 1; 
                if s[b]{ return false}
                else {s[b] = true}
            }
        }
        for j in 0..n {
            let mut s = vec![false; n];
            for i in 0..n {
                let x = matrix[i][j];
                let b = x as usize - 1; 
                if s[b]{ return false}
                else {s[b] = true}
            }
        }
        true

    }
}
```