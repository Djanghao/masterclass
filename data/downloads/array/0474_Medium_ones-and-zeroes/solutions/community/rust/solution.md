# Rust DP

**Author:** silradius
**Votes:** 2
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/2065576/](https://leetcode.com/problems/ones-and-zeroes/solutions/2065576/)

---

Convert each string in `strs` into a tuple counting zeroes and ones in it. Then it turns out to be a knapsack problem which can be easily solved with dynamic programming.
```
impl Solution {
    pub fn find_max_form(strs: Vec<String>, m: i32, n: i32) -> i32 {
        let (m, n) = (m as usize, n as usize);
        let mut max_size = vec![vec![0; n + 1]; m + 1];
        
        strs.iter()
            .map(|s| s.chars()
                .fold((0, 0), |(mut x, mut y), ch| {
                    if ch == '0' {
                        x += 1;
                    } else {
                        y += 1;
                    }
                    (x, y)
                    })
                )
            .for_each(|(x, y)|
                // iterate reversely to avoid changing max_size for the same (x, y)
                for i in (x..=m).rev() {
                    for j in (y..=n).rev() {
                        max_size[i][j] = max_size[i][j].max(max_size[i - x][j - y] + 1);
                    }
                });
        
        max_size[m][n]
    }
}
```