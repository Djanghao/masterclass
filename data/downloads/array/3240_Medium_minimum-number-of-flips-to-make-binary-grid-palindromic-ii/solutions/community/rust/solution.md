# Rust | 100% |  O(n*m) TC | two/four pointers with comments

**Author:** dmitry-shulaykin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5582603/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5582603/)

---

# Complexity
- Time complexity: each cell is visited once hence $O(n *m)$

- Space complexity: $O(1)$


# Code
```
impl Solution {
    pub fn min_flips(grid: Vec<Vec<i32>>) -> i32 {
        // Handle symmetrical cells, they don't contribute to the count of ones we should care about since they come in pack of 4s
        let mut ri = 0;
        let mut rj = grid.len() - 1;
        let mut change_count = 0;

        while ri < rj {
            let mut ci = 0;
            let mut cj = grid[0].len() - 1;

            while ci < cj {
                let tl = grid[ri][ci];
                let tr = grid[ri][cj];

                let bl = grid[rj][ci];
                let br = grid[rj][cj];

                let count1 = (tl + tr + bl + br) % 4;

                if count1 > 0 {
                    change_count += match count1 {
                        2 => 2,
                        _ => 1,
                    };
                }

                ci += 1;
                cj -= 1;
            }

            ri += 1;
            rj -= 1;
        }

        // Count number of flips in central row / column - required changes to make valid palindrom 
        let mut flip_special = 0;
        // Count of pairs of existing ones - need to balance them (make count of pairs even) to make sure they divisible by 4
        let mut one_pairs = 0;

        if grid.len() % 2 == 1 {
            let row = &grid[grid.len() / 2];
            let mut i = 0;
            let mut j = grid[0].len() - 1;

            while i < j {
                let a = row[i];
                let b = row[j];
                if a != b {
                    flip_special += 1;
                } else if a == 1 {
                    one_pairs += 1;
                }

                i += 1;
                j -= 1;
            }
        }

        if grid[0].len() % 2 == 1 {
            let mut i = 0;
            let mut j = grid.len() - 1;
            let col = grid[0].len() / 2;

            while i < j {
                if grid[i][col] != grid[j][col] {
                    flip_special += 1;
                } else if grid[i][col] == 1 {
                    one_pairs += 1;
                }
                i += 1;
                j -= 1;
            }
        }

        // zero the middle
        if grid.len() % 2 == 1 && grid[0].len() % 2 == 1 && grid[grid.len() / 2][grid[0].len() / 2] == 1{
            change_count += 1;
        }

        // if there was flip we can flip it to 1s instead of 0s increasing number of one_pairs by one without additional cost
        if one_pairs % 2 == 1 && flip_special == 0 {
            // otherwise we have to flip that pair of ones to zeros
            change_count += 2;
        }

        change_count + flip_special
    }
}
```