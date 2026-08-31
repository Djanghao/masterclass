# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/2989324/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/2989324/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
  pub fn reconstruct_matrix(mut upper: i32, mut lower: i32, mut colsum: Vec<i32>) -> Vec<Vec<i32>> {
    let n = colsum.len();
    let mut ups = vec![0;n];
    let mut downs = vec![0;n];
    for i in 0..n {
      if colsum[i] == 2 {
        upper -= 1;
        lower -= 1;
        colsum[i] = 0;
        ups[i] = 1;
        downs[i] = 1;
      }
      if upper < 0 || lower < 0 {
        return vec![]
      }
    }

    for i in 0..n {
      if colsum[i] == 1 {
        if 0 < upper {
          upper -= 1;
          ups[i] = 1;
        } else if 0 < lower {
          lower -= 1;
          downs[i] = 1;
        } else {
          return vec![]
        }
      }
    }

    if 0 < lower || upper < 0 {
      vec![]
    } else {
      vec![ups,downs]
    }
  }
}
```