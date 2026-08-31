# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3423064/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3423064/)

---

# Code
```
impl Solution {
    pub fn row_and_maximum_ones(mat: Vec<Vec<i32>>) -> Vec<i32> {
        let mut res = vec![-1, -1];
        for (i, row) in mat.into_iter().enumerate() {
            let ones = row.iter().filter(|&&x| x == 1).count() as i32;
            if ones > res[1] {
                res[0] = i as i32;
                res[1] = ones;
            }
        }
        res
    }
}
```