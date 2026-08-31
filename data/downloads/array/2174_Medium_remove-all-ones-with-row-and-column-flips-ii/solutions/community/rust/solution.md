# Rust Solution using bit-manipulation

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/2689871/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/2689871/)

---

```
impl Solution {
    pub fn remove_ones(grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let m = grid[0].len();

        let nm = n*m;
        let limit = 1 << nm;
        let mut result = 100;
        let mut memo = vec![(0,0);n*m];
        for i in 0..n {
            for j in 0..m {
                memo[i*m+j] = (i,j);
            }
        }
        for i in 0..limit {
            let mut cloned = grid.clone();
            let mut temp = 0;
            for j in 0..nm {
                if i >> j & 1 == 1 {
                    let (r,c) = memo[j];
                    if cloned[r][c] == 1 {
                        for k in 0..m {
                            cloned[r][k] = 0;
                        }
                        for k in 0..n {
                            cloned[k][c] = 0;
                        }
                        temp += 1;
                    }
                }
            }

            let mut success = true;
            for i in 0..n {
                for j in 0..m {
                    if cloned[i][j] == 1 {
                        success = false;
                    }
                }
            }

            if success {
                result = result.min(temp);
            }    
        }
        result
    }
}
```