# do it column by column

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/5419244/](https://leetcode.com/problems/modify-the-matrix/solutions/5419244/)

---

```
impl Solution {
    pub fn modified_matrix(matrix: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut a = matrix.clone();
        let (n, m) = (a.len(), a[0].len());
        for j in 0..m {
            let x = (0..n).map(|i|a[i][j]).max().unwrap();
            for i in 0..n {
                if a[i][j] == -1 {
                    a[i][j] = x
                }
            }
        }
        a
    }
}
```