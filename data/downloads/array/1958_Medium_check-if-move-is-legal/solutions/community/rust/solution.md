# A Rust 0ms Solution

**Author:** fdtfbn
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-move-is-legal/solutions/5502336/](https://leetcode.com/problems/check-if-move-is-legal/solutions/5502336/)

---

# Code
```
impl Solution {
    const N: i32 = 8;

    pub fn check_move(board: Vec<Vec<char>>, r_move: i32, c_move: i32, color: char) -> bool {
        [
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 0],
            [0, -1],
            [-1, -1],
            [-1, 1],
            [1, -1],
        ]
        .into_iter()
        .any(|direction| Self::check_one_direction(&board, [r_move, c_move], color, direction))
    }

    fn check_one_direction(
        board: &Vec<Vec<char>>,
        corr: [i32; 2],
        color: char,
        direction: [i32; 2],
    ) -> bool {
        let opponent_color = match color {
            'W' => 'B',
            'B' => 'W',
            _ => panic!(),
        };
        let [r, c] = corr;
        let [r_dir, c_dir] = direction;
        if board[r as usize][c as usize] != '.' {
            return false;
        }
        let range = 0..Self::N;
        let mut i = 1;
        while range.contains(&(r + i * r_dir))
            && range.contains(&(c + i * c_dir))
            && board[(r + i * r_dir) as usize][(c + i * c_dir) as usize] == opponent_color
        {
            i += 1;
        }
        i >= 2
            && range.contains(&(r + i * r_dir))
            && range.contains(&(c + i * c_dir))
            && board[(r + i * r_dir) as usize][(c + i * c_dir) as usize] == color
    }
}

```