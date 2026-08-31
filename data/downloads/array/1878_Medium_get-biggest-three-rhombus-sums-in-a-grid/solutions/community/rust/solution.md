# Rust brute force beats 100%

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/3818298/](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/3818298/)

---

# Approach
Iterate through all possible rhombus, calculate the sums, and return the 3 largest distinct sums.

Since the size of return Vec is just <= 3, I didn't choose BTreeMap over Vec.

# Complexity
- Time complexity: $$O(m*n*(m + n))$$

- Space complexity: $$O(1)$$

# Code
```
const ANS_LEN: usize = 3;

impl Solution {
    pub fn get_biggest_three(grid: Vec<Vec<i32>>) -> Vec<i32> {
        let m = grid.len();
        let n = grid[0].len();
        let mut ans = Vec::with_capacity(ANS_LEN + 1);
        for i in 0..m {
            for j in 0..n {
                Self::update(&mut ans, grid[i][j]);
                let max_w = j.min(n - j - 1).min((m - i - 1) / 2);
                for w in 1..=max_w {
                    // [i, j] is the top point of the rhombus.
                    let rh = (0..w).map(|k|
                        grid[i + k][j + k] +
                        grid[i + w + k][j + w - k] +
                        grid[i + 2*w - k][j - k] +
                        grid[i + w - k][j - w + k]
                    )
                    .sum::<i32>();
                    Self::update(&mut ans, rh);
                }
            }
        }
        ans
    }

    fn update(ans: &mut Vec<i32>, x: i32) {
        if let Err(i) = ans.binary_search_by(|y| x.cmp(y)) {
            ans.insert(i, x);
            ans.truncate(ANS_LEN);
        }
    }
}
```