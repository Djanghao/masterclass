# Rust | Iteration

**Author:** Cheshulko
**Votes:** 3
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/3499671/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/3499671/)

---

# Code
```
impl Solution {
    pub fn diagonal_sum(mat: Vec<Vec<i32>>) -> i32 {
        mat.iter().enumerate().fold(0, |sum, (i, v)| {
            sum + v
                .iter()
                .enumerate()
                .filter(|(j, _)| &i == j || i + j == mat.len() - 1)
                .map(|(_, x)| *x)
                .sum::<i32>()
        })
    }
}
```