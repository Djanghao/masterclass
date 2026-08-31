# Rust Solution using bfs

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/2733822/](https://leetcode.com/problems/map-of-highest-peak/solutions/2733822/)

---

```
impl Solution {
    pub fn highest_peak(is_water: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let n = is_water.len();
        let m = is_water[0].len();

        let mut result = vec![vec![1_000_000_000;m];n];
        let mut stack = vec![];
        for i in 0..n {
            for j in 0..m {
                if is_water[i][j] == 1 {
                    stack.push((i,j,0));
                    result[i][j] = 0;
                }
            }
        }

        while !stack.is_empty() {
            let mut new_stack = vec![];
            while let Some((i,j,cv)) = stack.pop() {
                let nv = cv + 1;
                if 0 < i && result[i-1][j] > nv {
                    result[i-1][j] = nv;
                    new_stack.push((i-1,j,nv));
                }

                if i < n-1 && result[i+1][j] > nv {
                    result[i+1][j] = nv;
                    new_stack.push((i+1,j,nv));
                }

                if 0 < j && result[i][j-1] > nv {
                    result[i][j-1] = nv;
                    new_stack.push((i,j-1,nv));
                }

                if j < m-1 && result[i][j+1] > nv {
                    result[i][j+1] = nv;
                    new_stack.push((i,j+1,nv));
                }
            }
            stack = new_stack;
        }

        result
    }
}
```