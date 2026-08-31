# Rust short linear solution, O(1) space

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/4890113/](https://leetcode.com/problems/count-servers-that-communicate/solutions/4890113/)

---

# Complexity
- Time complexity:
$$O(n * m)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn count_servers(mut grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let m = grid[0].len();
        for row in grid.iter_mut() {
            let sum = row.iter().sum::<i32>();
            if sum > 1 {for el in row.iter_mut() {*el *= 2;}}
        }
        (0..m)
            .fold(0, |acc, j| {
                let (sum, count) = (0..n)
                    .map(|i| grid[i][j])
                    .fold((0, 0), |(s, c), x| (
                        s + x,
                        c + x.min(1)
                    ));
                acc + match sum > 1 {
                    true => count,
                    false => 0
            }})
    }
}
```