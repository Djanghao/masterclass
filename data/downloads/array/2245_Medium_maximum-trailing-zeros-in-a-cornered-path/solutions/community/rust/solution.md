# Simple rust solution

**Author:** matthew-ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/2932118/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/2932118/)

---

Enumerate corner cells, extend horizontally and vertically. There are four cornered paths to consider for each corner cell. Use prefix sum to quickly calculate zeros for each path.

# Complexity
- Time complexity:
$$O(m*n)$$

- Space complexity:
$$O(m*n)$$

# Code
```
impl Solution {
    pub fn max_trailing_zeros(grid: Vec<Vec<i32>>) -> i32 {
        use std::ops::{Add, Sub};

        let m = grid.len();
        let n = grid[0].len();

        #[derive(Clone, Copy, Debug, Default)]
        struct Counts {
            count_2: i32,
            count_5: i32,
        }

        impl Counts {
            fn zeros(&self) -> i32 {
                self.count_2.min(self.count_5)
            }
        }

        impl Add for Counts {
            type Output = Self;
            fn add(self, rhs: Self) -> Self::Output {
                Self {
                    count_2: self.count_2 + rhs.count_2,
                    count_5: self.count_5 + rhs.count_5,
                }
            }
        }

        impl Sub for Counts {
            type Output = Self;
            fn sub(self, rhs: Self) -> Self::Output {
                Self {
                    count_2: self.count_2 - rhs.count_2,
                    count_5: self.count_5 - rhs.count_5,
                }
            }
        }

        let mut prime_count = vec![Counts::default(); 1001];
        for i in 2..=1000 {
            let mut count_2 = 0;
            let mut count_5 = 0;
            let mut k = i;
            while k % 2 == 0 {
                k /= 2;
                count_2 += 1;
            }
            while k % 5 == 0 {
                k /= 5;
                count_5 += 1;
            }
            prime_count[i] = Counts { count_2, count_5 };
        }
        let mut h_acc = vec![vec![Counts::default(); n + 1]; m + 1];
        let mut v_acc = vec![vec![Counts::default(); m + 1]; n + 1];

        for row in 0..m {
            for col in 0..n {
                let count = prime_count[grid[row][col] as usize];
                h_acc[row][col + 1] = h_acc[row][col] + count;
                v_acc[col][row + 1] = v_acc[col][row] + count;
            }
        }

        let mut res = 0;

        for row in 0..m {
            for col in 0..n {
                let top = v_acc[col][row];
                let bottom = v_acc[col][m] - v_acc[col][row + 1];
                let left = h_acc[row][col];
                let right = h_acc[row][n] - h_acc[row][col + 1];
                let current = prime_count[grid[row][col] as usize];

                res = res.max(
                    (top + left + current).zeros()
                ).max(
                    (top + right + current).zeros()
                ).max(
                    (bottom + left + current).zeros()
                ).max(
                    (bottom + right + current).zeros()
                );
            }
        }

        res
    }
}
```