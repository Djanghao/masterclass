# Rust | Two One-liners + Bonus Solution | With Comments

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/2766148/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/2766148/)

---

One-liner challenge accepted! :D Just to be clear, what I mean by a one-liner in this context is a solution with no statements. This is a simulation-based solution, so we update the ball postions by iterating over the rows to update the position for each row. First exclude all the cases where the ball is stuck:

1. It is already stuck.
2. The ball is in the first column and the cell leads left.
3. The ball is in the last column and the cell leads right.
4. The cell leads in a direction that is opposite to the adjacent cell in that direction.

With these cases out of the way, we can update the position of the ball according to the direction of the cell.

For the first one-liner, we make use of `Option`s to encode when the ball is stuck with `None`. And we use `wrapping_add` together with `!0` as the `usize` equivalent of `-1` to simplify the detection of when the ball falls outside the grid:

```
impl Solution {
    pub fn find_ball(grid: Vec<Vec<i32>>) -> Vec<i32> {
        (0..grid[0].len()).map(|col| (0..grid.len()).fold(Some(col), |col_opt, row|
            col_opt.and_then(|col| match col.wrapping_add(if grid[row][col] == 1 { 1 } else { !0 }) {
                next_col if next_col >= grid[0].len() => None,
                next_col if grid[row][col] != grid[row][next_col] => None,
                next_col => Some(next_col)
            }
        )).map_or(-1, |col| col as i32)).collect()
    }
}
```

For the second one-liner, we evaluate the conditions above in a more straight-forward manner, and process all balls before moving on to the next row:

```
impl Solution {
    pub fn find_ball(grid: Vec<Vec<i32>>) -> Vec<i32> {
        grid.iter().fold((0..grid[0].len() as i32).collect::<Vec<_>>(), |positions, row| {
            positions.into_iter().map(|col| {
                if col == -1 || (col == 0 && row[0] == -1) || (col as usize == grid[0].len() - 1 && row[col as usize] == 1)
                    || (row[col as usize] != row[((col + row[col as usize]) as usize)]) {
                    -1
                } else {
                    col + row[((col + row[col as usize]) as usize)]    
                }
            }).collect()
        })
    }
}
```

I made another experiment as well, which was a nice exercise, albeit not that concise. :) Instead of encoding the state as the current column of each ball, we encode it as the ball that currently occupies a specific column. We use a windowed iterator (created with `scan`) with 1 and -1 prepended and appended, respectively, to facilitate the treatment of the boundary conditions. With this approach, we can use a straight-forward `match` to update the position of the ball currently present in the corresponding column, if any. At the end, we have to recode to state to the requested output format.

```
use std::iter::once;

impl Solution {
    pub fn find_ball(grid: Vec<Vec<i32>>) -> Vec<i32> {
        let n = grid[0].len();
       grid.iter().fold((0..n as i32).collect::<Vec<_>>(), |prev_balls, row| {
            row.iter().copied().chain(once(-1)).skip(1).enumerate().scan((1, row[0]), |(prev, curr), (col, next)| {
                let rez = Some((col, *prev, *curr, next));
                *prev = *curr;
                *curr = next;
                rez
            }).fold(vec![-1; n], |mut next_balls, (col, prev, curr, next)| {
                match (prev_balls[col], prev, curr, next) {
                    (-1, _, _, _) => (),
                    (ball, _, 1, 1) => next_balls[col + 1] = ball,
                    (ball, -1, -1, _) => next_balls[col - 1] = ball,
                    _ => (),
                }
                next_balls
            })
        }).into_iter().enumerate().fold(vec![-1; n], |mut positions, (position, ball)| {
            if ball >= 0 {
                positions[ball as usize] = position as i32;
            }
            positions
        })
    }
}
```