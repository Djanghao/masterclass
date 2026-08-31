# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/3167180/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/3167180/)

---

# Code
```
impl Solution {
    pub fn min_swaps(grid: Vec<Vec<i32>>) -> i32 {
        let mut zeros = vec![0; grid.len()];
        for (i, row) in grid.iter().enumerate() {
            zeros[i] = row.iter().rev().take_while(|&&x| x == 0).count() as i32;
        }
        let mut swaps = 0;
        for i in 0..zeros.len() {
            if zeros[i] < (zeros.len() - i - 1) as i32 {
                let mut j = i + 1;
                while j < zeros.len() && zeros[j] < (zeros.len() - i - 1) as i32 {
                    j += 1;
                }
                if j == zeros.len() {
                    return -1;
                }
                while j > i {
                    zeros.swap(j, j - 1);
                    swaps += 1;
                    j -= 1;
                }
            }
        }
        swaps
    }
}
```